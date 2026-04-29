# 💼 Portafolio Profesional — Desarrollador Full Stack

Portafolio web profesional multi-página construido con **HTML5, CSS3 y JavaScript vanilla** — sin frameworks, sin dependencias. Diseñado para impresionar a reclutadores y demostrar habilidades reales de programación.

## ✨ Características

- 🎨 **Diseño premium** con tema oscuro/claro
- 📱 **Totalmente responsive** (mobile-first)
- ⚡ **Cero dependencias** — HTML/CSS/JS puro
- 🎭 **Animaciones fluidas** con CSS e IntersectionObserver
- 🔍 **SEO optimizado** con meta tags y estructura semántica
- 📄 **Multi-página** con navegación fluida

## 📁 Estructura del Proyecto

```
portafolio-github/
├── index.html              ← Página principal (Hero + preview)
├── pages/
│   ├── about.html          ← Sobre mí + timeline experiencia/educación
│   ├── skills.html         ← Habilidades técnicas + código en vivo
│   ├── projects.html       ← Galería de proyectos con filtros
│   └── contact.html        ← Formulario de contacto
├── css/
│   ├── global.css          ← Tokens, reset, nav, footer, utilities
│   └── pages.css           ← Estilos específicos por página
├── js/
│   ├── global.js           ← Tema, scroll, menú, reveal animations
│   └── pages.js            ← Typewriter, filtros, formulario, counters
└── README.md
```

## 🚀 Ver el Portafolio

### Opción 1: Abrir directamente
Simplemente abre `index.html` en tu navegador.

### Opción 2: Con XAMPP (servidor local)
1. Copia la carpeta `portafolio-github` en `C:\xampp\htdocs\`
2. Inicia Apache desde XAMPP Control Panel
3. Abre `http://localhost/portafolio-github/` en tu navegador

### Opción 3: Con Live Server (VS Code)
1. Instala la extensión **Live Server** en VS Code
2. Click derecho en `index.html` → **Open with Live Server**

### Opción 4: GitHub Pages (para que las empresas lo vean online)
1. Sube este repositorio a GitHub
2. Ve a **Settings** → **Pages**
3. En "Source" selecciona **Deploy from a branch**
4. Selecciona la rama `main` y carpeta `/ (root)`
5. Click en **Save**
6. En unos minutos tu portafolio estará en: `https://tu-usuario.github.io/portafolio-github/`

## 🛠️ Tecnologías Usadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica |
| CSS3 | Diseño, animaciones, responsive, variables CSS |
| JavaScript (ES6+) | Interactividad, IntersectionObserver, localStorage |
| Google Fonts | Tipografías Inter + JetBrains Mono |

## 🎯 Personalización

### Cambiar datos personales
- Edita `index.html` → Cambia "Tu Nombre" y las estadísticas
- Edita `pages/about.html` → Cambia la bio y timeline
- Edita `pages/contact.html` → Cambia email y ubicación

### Agregar proyectos reales
En `pages/projects.html`, duplica un bloque `<div class="project-card">` y cambia:
- El gradiente de fondo
- El emoji/ícono
- Los links de Demo y Código (apuntando a tu GitHub)
- La descripción y tecnologías

### Cambiar colores
Edita las variables CSS en `css/global.css` dentro de `:root { }`.

## 📄 Licencia

Este proyecto es de uso libre. Úsalo como base para tu propio portafolio.

---

Hecho con 💜 y mucho ☕
