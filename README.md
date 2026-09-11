# Portfolio de Jose Miguel Upia

Portfolio personal desarrollado con Astro y Tailwind CSS. La experiencia presenta el perfil, proyectos verificables, capacidades técnicas, stack y formas de contacto en una interfaz responsive y accesible.

## Desarrollo local

Requiere Node.js 22.12 o posterior y pnpm 11.

```sh
pnpm install
pnpm dev
```

La aplicación estará disponible en `http://localhost:4321`.

## Comandos

| Comando | Acción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera la versión estática de producción |
| `pnpm preview` | Previsualiza el build localmente |
| `pnpm deploy` | Publica el contenido de `dist` con Wrangler |

## Contenido

Los datos editables están centralizados en `src/data/portfolio.ts`. Los datos de experiencia académica y profesional que no están verificados se muestran explícitamente como pendientes y no se sustituyen por contenido ficticio.

## Despliegue

`wrangler.jsonc` configura `dist` como directorio de assets estáticos para Cloudflare.
