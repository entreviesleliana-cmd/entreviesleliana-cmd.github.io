# Web de la Asociación Vecinal Entrevies (l'Eliana)

Web pública de la asociación. Está hecha con archivos sencillos (sin base de datos), así que se puede mover a cualquier alojamiento sin perder nada.

## Cómo publicar algo nuevo

Todo el contenido está en **`contenido.js`**: noticias, publicaciones, reuniones, vídeos, recursos y documentos de transparencia.

1. Abre `contenido.js` y pulsa el lápiz (✏️ «Edit this file»).
2. Copia un bloque `{ ... },` de la sección que quieras, pégalo debajo y cambia el texto.
3. Abajo, en «Commit changes», escribe qué has cambiado y pulsa el botón verde.
4. En uno o dos minutos la web se actualiza sola.

**Si te equivocas** (una coma o una comilla de menos), no pasa nada: antes de publicar, GitHub comprueba el archivo. Si tiene un error, no lo publica y la web sigue como estaba. Lo verás en la pestaña «Actions» con una cruz roja ❌: vuelve a abrir `contenido.js` y revisa el último cambio.

Para subir un PDF o una imagen: entra en la carpeta `docs`, «Add file» → «Upload files», y enlázalo en `contenido.js` como `docs/nombre_del_archivo.pdf`.

## Reglas

- **Noticias siempre con fuente** (Ayuntamiento, boletín oficial, FGV, prensa o documento propio). Sin fuente, la web no la muestra.
- **Antes de subir un documento**, comprobar que no tiene DNI, firmas, teléfonos ni direcciones personales.
- **Si algo sale mal**, GitHub guarda todas las versiones: en «History» se puede volver a cualquier versión anterior.
