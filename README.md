# 🏛️ Criterio Arquitectónico — Sitio Web Corporativo

**Sitio web profesional para despacho de arquitectura. Construido desde cero con HTML, CSS y JavaScript vanilla, desplegado en producción con dominio propio.**

Este proyecto nació de una necesidad real: un arquitecto independiente necesitaba una presencia digital sólida para mostrar sus servicios, generar confianza en clientes potenciales y facilitar el contacto para cotizaciones. El sitio fue desarrollado como proyecto freelance end-to-end, desde la reunión inicial de requerimientos hasta la puesta en producción con dominio personalizado.

---
## 📸 Capturas (pendiente)

Cuando tengas las capturas, guárdalas en la carpeta `docs/` del repo y descomenta este bloque.

| Página principal (Hero) | Sección de servicios |
|:---:|:---:|
| ![Hero](docs/hero.png) | ![Servicios](docs/servicios.png) |

| Proceso de trabajo | Contacto |
|:---:|:---:|
| ![Proceso](docs/proceso.png) | ![Contacto](docs/contacto.png) |

---

## 🌐 Demo en producción

El sitio está completamente funcional y desplegado:

🔗 **[https://www.criterioarquitectonico.com](https://www.criterioarquitectonico.com)**

También disponible en Vercel: [https://arqui-portafolio-web.vercel.app](https://arqui-portafolio-web.vercel.app)

---

## 🌐 Cómo acceder

| Qué | URL | Notas |
|:---|:---|:---|
| Sitio en producción | https://www.criterioarquitectonico.com | Dominio propio del cliente, con HTTPS |
| Versión de respaldo (Vercel) | https://arqui-portafolio-web.vercel.app | Mismo sitio, sin dominio personalizado |

---

## ✨ Características

- **Diseño responsivo:** Adaptado a móvil, tablet y escritorio sin frameworks externos.
- **Galería de servicios:** Secciones detalladas para cada tipo de servicio arquitectónico (vivienda, remodelaciones, declaratorias, planos técnicos, trámites municipales).
- **Proceso de trabajo visual:** Sección que explica paso a paso cómo trabaja el despacho, generando confianza en el cliente.
- **Formulario de contacto:** Abre el cliente de correo del usuario para enviar consultas directamente al despacho. Incluye botones de acceso rápido a las redes sociales del cliente.
- **Carga rápida:** Sin dependencias de frameworks pesados, optimizado para contenido visual de alta calidad.
- **Despliegue profesional:** Dominio propio comprado por el cliente, configurado y gestionado en producción.

---

## 🛠️ Stack

**Frontend**
- HTML5 semántico
- CSS3 (Flexbox, Grid, animaciones)
- JavaScript vanilla (sin frameworks ni librerías externas)
- Tipografía: Space Grotesk

**Infraestructura**
- Vercel (despliegue)
- Dominio personalizado: `criterioarquitectonico.com`

**Herramientas de desarrollo**
- Prettier (formateo de código)
- Git / GitHub

---

## 🚀 Cómo ejecutar el proyecto localmente

### Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge, Safari)
- Opcional: Live Server (extensión de VS Code) para recarga automática

### Pasos

1. Clona el repositorio:

```
git clone https://github.com/JoshuaTerrones/arquiPortafolioWeb.git
cd arquiPortafolioWeb
```

2. Abre el archivo `index.html` directamente en tu navegador.

> **Nota:** Para sitios estáticos como este, abrir el `index.html` es suficiente. Aprendí que para proyectos que consumen APIs o usan módulos ES, sí necesitas un servidor local (por ejemplo, `python -m http.server` o `npx serve`) porque el navegador bloquea ciertas peticiones desde el protocolo `file://`.

---

## 🗂️ Estructura del proyecto

```
arquiPortafolioWeb/
├── css/
│   └── styles.css          # Estilos principales del sitio
├── font/
│   └── spacegrotesk/       # Tipografía Space Grotesk (archivos .woff2)
├── html/
│   └── (páginas adicionales si las hay)
├── images/
│   └── ...                 # Imágenes de proyectos y recursos visuales
├── js/
│   └── main.js             # Lógica de interactividad del sitio
├── .gitattributes
├── .prettierrc
├── index.html              # Página principal
└── README.md
```

---

## 🧠 Decisiones técnicas

### ¿Por qué HTML, CSS y JavaScript vanilla y no un framework?

El sitio es principalmente visual y estático. El arquitecto necesitaba mostrar fotografías de alta resolución de sus proyectos, y la prioridad absoluta era la **velocidad de carga** y la **simplicidad de mantenimiento**.

Usar un framework como React o Vue habría añadido:
- Peso innecesario (el bundle de JavaScript)
- Tiempo de carga adicional (el navegador debe descargar, parsear y ejecutar el framework)
- Complejidad para el cliente si alguna vez quiere hacer cambios menores

Con vanilla, el sitio carga en milisegundos, y el cliente no depende de un ecosistema complejo para mantenerlo.

### ¿Por qué Vercel y no otro hosting?

Vercel ofrece:
- Despliegue gratuito para sitios estáticos
- CDN global (el sitio carga rápido desde cualquier parte del mundo)
- Configuración de dominio personalizado en minutos
- Certificado SSL automático (HTTPS)

Para un sitio estático como este, es la solución ideal: cero configuración de servidor, cero mantenimiento de infraestructura.

### ¿Por qué la tipografía Space Grotesk?

La elección de tipografía no fue al azar. Space Grotesk es una fuente moderna, geométrica y limpia, que transmite profesionalismo y precisión técnica — exactamente los valores que un despacho de arquitectura quiere proyectar. Además, es una fuente de código abierto, lo que evita problemas de licencias.

---

## 📚 Lo que aprendí con este proyecto

- **Trabajar directamente con un cliente real:** Entender sus necesidades, traducirlas a una interfaz, proponer soluciones y entregar un producto final que cumpla con sus expectativas.
- **Gestión completa del despliegue:** Desde la compra del dominio hasta la configuración de DNS y la puesta en producción con HTTPS.
- **Optimización sin frameworks:** Aprender a lograr un sitio rápido, responsivo y funcional sin depender de herramientas que añaden peso.
- **Toma de decisiones técnicas con criterio:** Elegir vanilla sobre un framework no fue una limitación, fue una decisión consciente basada en las necesidades del proyecto.
- **Comunicación con el cliente:** Explicar decisiones técnicas de forma sencilla, gestionar expectativas y entregar en los plazos acordados.

---
