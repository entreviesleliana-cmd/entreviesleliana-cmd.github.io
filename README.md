# Web de la Associació Veïnal Entrevies (l'Eliana)

Web pública de la asociación, en **valenciano, castellano e inglés**, con versión en **lectura fácil** y pensada para ser **accesible para todas las personas**. Está hecha con archivos sencillos (sin base de datos), así que se puede mover a cualquier alojamiento sin perder nada.

## Qué hay en cada archivo

| Archivo | Qué es | ¿Se toca para publicar? |
|---|---|---|
| `contenido.js` | Noticias, publicaciones, reuniones, vídeos, recursos y transparencia | **Sí** |
| `idiomas.js` | Traducciones de los textos fijos (valenciano e inglés) | Solo para corregir una traducción |
| `index.html` | Diseño de la página principal | No |
| `web.js` | Programa de la página (idiomas, accesibilidad, listas) | No |
| `lectura-facil.html` | Versión en lectura fácil con pictogramas | Para actualizar la lectura fácil |
| `accesibilidad.html` | Declaración de accesibilidad | Al revisar la accesibilidad (mínimo una vez al año) |
| `img/pictos/` | Pictogramas de ARASAAC | Para añadir pictogramas |
| `docs/` | PDF e imágenes publicados | Para subir documentos |

## Cómo publicar algo nuevo

1. Abre `contenido.js` y pulsa el lápiz (✏️ «Edit this file»).
2. Copia un bloque `{ ... },` de la sección que quieras, pégalo debajo y cambia el texto.
3. **Idiomas:** escribe el texto en castellano (`titulo`) y, si puedes, también en valenciano (`titulo_va`) y en inglés (`titulo_en`). Si falta una traducción, la web muestra el castellano.
4. Abajo, en «Commit changes», escribe qué has cambiado y pulsa el botón verde.
5. En uno o dos minutos la web se actualiza sola.

**Si te equivocas** (una coma o una comilla de menos), no pasa nada: antes de publicar, GitHub comprueba los archivos. Si hay un error, no publica y la web sigue como estaba. Lo verás en la pestaña «Actions» con una cruz roja ❌.

Para subir un PDF o una imagen: entra en la carpeta `docs`, «Add file» → «Upload files», y enlázalo en `contenido.js` como `docs/nombre_del_archivo.pdf`.

## Reglas

- **Noticias siempre con fuente** (Ayuntamiento, boletín oficial, FGV, prensa o documento propio). Sin fuente, la web no la muestra.
- **Antes de subir un documento**, comprobar que no tiene DNI, firmas, teléfonos ni direcciones personales.
- **Accesibilidad:** todo documento nuevo, mejor con su versión en lectura fácil y en valenciano. Letra clara y grande, y buen contraste (texto oscuro sobre fondo claro).
- **El nombre:** siempre **Entrevies**, todo junto y con «e». La urbanización es **Pinaeta del Cel**.
- **Si algo sale mal**, GitHub guarda todas las versiones: en «History» se puede volver a cualquier versión anterior.

## Pictogramas

Los símbolos pictográficos utilizados son propiedad del Gobierno de Aragón y han sido creados por Sergio Palao para ARASAAC (https://arasaac.org), que los distribuye bajo Licencia Creative Commons BY-NC-SA. Los materiales de esta web que los usan se comparten con la misma licencia. La lista de pictogramas y su número en ARASAAC está en `img/pictos/_ids_arasaac.txt`.
