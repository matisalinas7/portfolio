# Portfolio | Matías Salinas

Portfolio personal de Matías Salinas, desarrollador Backend y estudiante avanzado de Ingeniería en Sistemas de Información. Es un sitio de una sola página, en español, con modo claro/oscuro.

## Secciones

- **Inicio**: presentación, disponibilidad y enlaces sociales.
- **Proyectos**: APIs REST con Java y Spring Boot, y una aplicación enterprise con Jakarta EE/JSF.
- **Formación Académica**: estudios y aprendizaje continuo.
- **Sobre mí**: perfil profesional y enfoque técnico.
- **Contacto**: correo directo y botón para copiar el email.

## Tecnologías

- [Astro](https://astro.build/) 5
- [Tailwind CSS](https://tailwindcss.com/) 3 (modo oscuro por clase)
- [Onest Variable](https://fontsource.org/fonts/onest) como tipografía

## Estructura

```
public/                 # Capturas de proyectos, favicon y certificado
src/
├── layouts/            # Layout base (head, fondo, Header y Footer)
├── pages/index.astro   # Página única
└── components/         # Secciones, piezas reutilizables e íconos SVG
```

## Desarrollo

Requiere Node.js y npm.

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # build de producción en ./dist
npm run preview  # previsualizar el build
```

## Agregar un proyecto

Edita el arreglo `PROJECTS` en `src/components/Projects.astro` y agrega un objeto con `number`, `title`, `description`, `link`, `github`, `image` (archivo en `public/`) y `tags`. Los tags se toman del objeto `TAGS` del mismo archivo.

## Contacto

- LinkedIn: [salinasmatias1](https://linkedin.com/in/salinasmatias1/)
- GitHub: [matisalinas7](https://github.com/matisalinas7)
