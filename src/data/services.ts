/**
 * Servicios: única fuente para la sección, el selector del formulario y (más
 * adelante) el JSON-LD.
 *
 * Reglas de este archivo:
 * - Ningún precio, pasarela ni condición se inventa. El plazo no se publica:
 *   se fija en la propuesta de cada proyecto. Lo que Marcos no
 *   definió es `null` o un texto con [CORCHETES].
 * - `pendingServiceInputs()` los lista. Mientras haya pendientes, el build de
 *   producción falla (ver ServicesSection.astro): la oferta no se publica con
 *   huecos.
 * - Las pruebas citan solo cosas que ya son reales en el sitio, en términos de
 *   resultado: el detalle técnico vive en Proyectos.
 */

export type ServiceId = "landing" | "tienda" | "medida";

export interface ServicePackage {
	id: ServiceId;
	icon: string;
	name: string;
	forWhom: string;
	/** Hasta 4 viñetas. Un [CORCHETE] marca un dato que falta. */
	includes: string[];
	/** Precio de arranque en USD. `null` = Marcos todavía no lo definió. */
	priceFromUSD: number | null;
	proof: { text: string; href?: string; external?: boolean };
}

export interface Maintenance {
	icon: string;
	name: string;
	body: string;
	/** Precio por hora en USD. `null` = sin definir. */
	hourlyUSD: number | null;
	/** Abono mensual en USD y horas que incluye. `null` = sin abono. */
	monthly: { usd: number; hours: number } | null;
}

export interface ProcessStep {
	title: string;
	body: string;
}

export const packages: ServicePackage[] = [
	{
		id: "landing",
		icon: "window",
		name: "Landing de producto",
		forWhom: "Presentar tu producto y que te contacten o te compren.",
		includes: [
			"Una página de hasta 5 secciones, pensada primero para el celular.",
			"Formulario de contacto o botón de WhatsApp.",
			"Textos listos para Google y para compartir en redes.",
			"Publicada en tu dominio."
		],
		priceFromUSD: 450,
		proof: { text: "Este sitio lo hice yo, de punta a punta: lo estás viendo." }
	},
	{
		id: "tienda",
		icon: "lock",
		name: "Tienda y cobros online",
		forWhom: "Vender y cobrar en línea sin pasos manuales.",
		includes: [
			"Catálogo de hasta 50 productos con carrito y checkout.",
			"Integración de pagos online.",
			"Confirmación de pagos verificada del lado del servidor.",
			"Panel para cargar productos y ver pedidos."
		],
		priceFromUSD: 1200,
		proof: {
			text: "Ya construí un sistema de cobros que verifica cada pago antes de confirmarlo.",
			href: "#proyectos"
		}
	},
	{
		id: "medida",
		icon: "database",
		name: "Sistema a medida",
		forWhom: "Cuando lo que necesitás no entra en una plantilla.",
		includes: [
			"Relevamiento y propuesta escrita antes de escribir código.",
			"Usuarios con login y roles.",
			"Base de datos y panel de administración.",
			"Publicación, accesos y documentación de entrega."
		],
		priceFromUSD: 2000,
		proof: {
			text: "Arcade Vault: un sistema con usuarios, login y ranking, en línea.",
			href: "https://arcade-valut.vercel.app",
			external: true
		}
	}
];

export const maintenance: Maintenance = {
	icon: "refresh",
	name: "Mantenimiento y mejoras",
	body: "Arreglos, mejoras de velocidad, actualizaciones y funciones nuevas sobre el sitio que ya tenés.",
	hourlyUSD: 35,
	monthly: { usd: 90, hours: 3 }
};

export const processSteps: ProcessStep[] = [
	{ title: "Consulta", body: "Me contás qué vendés y qué necesitás." },
	{ title: "Propuesta", body: "Alcance, precio y fecha, por escrito antes de empezar." },
	{ title: "Desarrollo", body: "Avances en un link de prueba cada semana." },
	{ title: "Entrega", body: "Publico en tu dominio y te entrego los accesos." },
	{ title: "Soporte", body: "30 días de soporte incluidos. Después, mantenimiento." }
];

/** "Lo que conviene saber". Un [CORCHETE] marca una condición que falta. */
export const terms: string[] = [
	"No prometo ventas: te entrego la herramienta funcionando y lista para medir.",
	"Dominio, hosting y comisiones de la pasarela van a tu nombre y a tu cargo.",
	"Textos, fotos y logo los ponés vos. Si no los tenés, lo vemos en la propuesta.",
	"Precios en dólares, con IVA incluido. Forma de pago: 50% al empezar y 50% al entregar.",
	"El código y los accesos quedan a tu nombre con el pago final."
];

/** "USD 1.200", con el separador de miles rioplatense. `null` = "[PRECIO]". */
export const usd = (n: number | null) => (n === null ? "[PRECIO]" : `USD ${n.toLocaleString("es-UY")}`);

const PLACEHOLDER = /\[[^\]]+\]/;

/**
 * Todo lo que falta definir, como rutas legibles. Vacío = la oferta está
 * completa y se puede publicar.
 */
export function pendingServiceInputs(): string[] {
	const pending: string[] = [];

	const scan = (value: unknown, path: string) => {
		if (value === null) pending.push(`${path}: sin definir`);
		else if (typeof value === "string") {
			const found = value.match(PLACEHOLDER);
			if (found) pending.push(`${path}: ${found[0]}`);
		} else if (Array.isArray(value)) value.forEach((v, i) => scan(v, `${path}[${i}]`));
		else if (typeof value === "object") {
			for (const [key, v] of Object.entries(value as Record<string, unknown>)) scan(v, `${path}.${key}`);
		}
	};

	packages.forEach((p) => scan(p, `paquete ${p.id}`));
	scan(maintenance, "mantenimiento");
	scan(processSteps, "proceso");
	scan(terms, "condiciones");
	return pending;
}
