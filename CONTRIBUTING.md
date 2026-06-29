# Contribuyendo al Portfolio de Marcos Rezk

¡Gracias por tu interés en mejorar este proyecto! Este documento describe las directrices para contribuir de manera segura y efectiva.

## 🚀 Cómo Contribuir

### 1. Para Contributors Nuevos

1. **Fork el repositorio**
2. **Crea una rama para tu feature** (`git checkout -b feature/mejora-seguridad`)
3. **Commitea tus cambios** (`git commit -m 'feat: agregar mejora de seguridad'`)
4. **Push a tu rama** (`git push origin feature/mejora-seguridad`)
5. **Abre un Pull Request**

### 2. Áreas de Contribución

#### 🎨 Frontend/UI
- Mejoras de diseño y UX
- Optimizaciones de rendimiento
- Componentes nuevos o mejorados
- Responsive design enhancements

#### 🔒 Seguridad
- Validación de entrada mejorada
- Headers de seguridad adicionales
- Sanitización de datos
- Rate limiting y protecciones anti-abuso

#### ⚡ Rendimiento
- Optimización de assets
- Mejoras de carga
- Reducción de bundle size
- Optimización de imágenes

#### 📖 Contenido
- Corrección de errores gramaticales
- Mejoras en la documentación
- Actualización de información

## 🔐 Directrices de Seguridad

### ⚠️ **IMPORTANTE**: Seguridad en Contribuciones

#### **Nunca hagas commit de:**
- ❌ Tokens de API o claves privadas
- ❌ Contraseñas o credenciales
- ❌ Archivos .env con datos reales
- ❌ Certificados SSL o archivos de claves
- ❌ Información personal sensible

#### **Siempre practica:**
- ✅ Sanitización de entrada del usuario
- ✅ Validación de datos en frontend y backend
- ✅ Uso de HTTPS obligatorio
- ✅ Headers de seguridad apropiados
- ✅ Rate limiting en endpoints públicos
- ✅ Principio de privilegio mínimo

### 🛡️ Code Review de Seguridad

Todos los Pull Requests son revisados por:
1. **Vulnerabilidades de seguridad** comunes
2. **Validación de entrada** apropiada
3. **Sanitización de datos** correcta
4. **Headers de seguridad** implementados
5. **Best practices** de OWASP

## 📋 Estándar de Commits

Usamos el formato de commits convencional:

```
tipo: descripción

feat: nueva funcionalidad
fix: corrección de bug
style: formato/código (no afecta lógica)
refactor: reestructuración de código
perf: mejora de rendimiento
security: parche de vulnerabilidad
docs: sólo documentación
test: adición de tests
chore: tareas de mantenimiento
```

### Ejemplos:
```bash
git commit -m "feat: agregar formulario de contacto"
git commit -m "fix: corregir validación de email"
git commit -m "security: implementar sanitización XSS"
```

## 🧪 Testing y Validación

### Tests de Seguridad
```bash
# Ejecutar auditoría de seguridad
npm run test:security

# Verificar dependencias vulnerables
npm run security:audit

# Actualizar dependencias con parches de seguridad
npm run security:fix
```

### Tests de Funcionalidad
```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview
```

## 📝 Revisión de Pull Requests

### **Checklist para PRs:**

- [ ] El código sigue los estándares de estilo del proyecto
- [ ] No contiene credenciales o datos sensibles
- [ ] Incluye validación de entrada apropiada
- [ ] No introduce vulnerabilidades de seguridad
- [ ] Tiene tests si aplica
- [ ] La documentación está actualizada
- [ ] El commit message sigue el estándar
- [ ] No rompe funcionalidad existente

### **Proceso de Revisión:**

1. **Automático**: Tests de seguridad y linting
2. **Manual**: Revisión de código y funcionalidad
3. **Seguridad**: Análisis específico de vulnerabilidades
4. **Aprobación**: Merge después de pasar todos los checks

## 🚨 Reporte de Issues de Seguridad

### **Para vulnerabilidades de seguridad:**

1. **NO abras un issue público**
2. **Envía un email** a: mrezk84@gmail.com
3. **Asunto**: "[Security] Vulnerabilidad en [componente]"
4. **Describe**:
   - La vulnerabilidad encontrada
   - Cómo reproducirla
   - Impacto potencial
   - Posible solución (si la conoces)

### **Para bugs normales:**

1. **Abre un issue** en GitHub
2. **Describe** el bug detalladamente
3. **Incluye** pasos para reproducir
4. **Adjunta** capturas de pantalla si aplica

## 🎯 Prioridades de Contribución

### **Alta Prioridad:**
- 🔒 Vulnerabilidades de seguridad
- 🐛 Bugs críticos que afectan funcionalidad
- ⚡ Problemas de rendimiento significativos

### **Media Prioridad:**
- 🎨 Mejoras de UI/UX
- 📖 Actualizaciones de documentación
- 🔧 Refactorización de código

### **Baja Prioridad:**
- ✨ Features nuevos no críticos
- 🎶 Mejoras cosméticas
- 📝 Actualizaciones menores de contenido

## 🤝 Comunidad y Conducta

### **Principios:**
- **Respeto**: Trata a todos con respeto
- **Colaboración**: Trabaja en equipo constructivamente
- **Calidad**: Mantén altos estándares de código
- **Seguridad**: Prioriza la seguridad en todo cambio

### **Comunicación:**
- Usa un lenguaje claro y profesional
- Sé constructivo en feedback
- Acepta feedback de buena gana
- Ayuda a nuevos contributors

## 📚 Recursos de Aprendizaje

### **Seguridad Web:**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [CSP Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

### **Desarrollo Frontend:**
- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

### **Git y GitHub:**
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

## 🏆 Reconocimiento

Todos los contributors serán reconocidos en:
- **README.md**: Lista de contributors
- **CHANGELOG.md**: Historial de cambios
- **Releases**: Notes de versión

---

**¿Preguntas?** Abre un issue o contacta a: mrezk84@gmail.com

**Gracias por contribuir a hacer este proyecto más seguro y mejor!** 🎉