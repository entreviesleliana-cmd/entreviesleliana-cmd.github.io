/* =====================================================================
   CONTENIDO DE LA WEB DE ENTREVIES
   Este es el único archivo que hay que tocar para publicar cosas nuevas.
   - Copia un bloque { ... }, pégalo debajo y cambia el texto.
   - Las fechas van así: 'AAAA-MM-DD' (por ejemplo '2026-11-11').
   - Los documentos (PDF, imágenes) se guardan en la carpeta  docs/
     y se enlazan como 'docs/nombre_del_archivo.pdf'.
   - El orden da igual: la web los ordena por fecha sola.
   ===================================================================== */

/* ---------- REDES SOCIALES (comprobar que las direcciones son las buenas) ---------- */
window.REDES = {
  // facebook: PENDIENTE — facebook.com/entreviesleliana no es pública. Pegar aquí la dirección real de la página:
  // facebook:  'https://www.facebook.com/…',
  instagram: 'https://www.instagram.com/entreviesleliana'
  // TikTok: en noviembre de 2026 la cuenta @entreviesleliana no existía. Cuando la creéis, añadid:
  // , tiktok: 'https://www.tiktok.com/@entreviesleliana'
  // Si alguna red no existe, borra su línea y el botón desaparece.
};

/* ---------- FORMULARIO DE ALTA DE SOCIOS ----------
   Enlace del formulario de Google que crea la automatización del correo (crearFormularioAlta).
   Mientras esté vacío, la web ofrece el alta por correo. Ejemplo: 'https://forms.gle/AbCdEf123' */
window.ENLACE_FORMULARIO_ALTA = 'https://forms.gle/yjjYoyd16aUYLde99';

/* ---------- FORMULARIO «CUÉNTANOS» ----------
   Enlace del formulario de Google que crea la automatización (crearFormularioContacto).
   Mientras esté vacío, la web usa el formulario que abre el programa de correo. */
window.ENLACE_FORMULARIO_CONTACTO = 'https://forms.gle/8DyBwQnaYSF2xMUE6';

/* ---------- NOTICIAS DEL PUEBLO ----------
   categoria: 'Asociación' (naranja) o cualquier otra palabra, p. ej. 'Pueblo', 'Obras', 'Pleno' (verde)
   fuente: OBLIGATORIA. Una noticia sin fuente NO se publica (la web la oculta sola).
     Fuentes válidas: web o bando del Ayuntamiento, DOGV/BOP, FGV, un medio de comunicación,
     o un documento de la propia asociación. Nunca «me han dicho» ni capturas de WhatsApp.
     Formato: fuente: { nombre: 'Ayuntamiento de l'Eliana', url: 'https://…' }
   Si hay que corregir una noticia, cámbiala y añade al resumen: «(Corregido el DD-MM-AAAA: …)». */
window.NOTICIAS = [
  {
    fecha: '2026-11-02',
    categoria: 'Paso a nivel',
    titulo: 'El Ayuntamiento pide estudiar el soterramiento de las vías o revertir el cierre',
    resumen: 'Tras la reunión del 27 de octubre con la Generalitat, que presentó un paso inferior como única opción, el Ayuntamiento pide valorar el soterramiento y defiende recuperar el paso a nivel peatonal con barreras automáticas y señales luminosas y acústicas.',
    fuente: { nombre: "Ayuntamiento de l'Eliana", url: 'https://www.leliana.es/va/noticia/lajuntament-reclama-generalitat-que-estudie-soterrament-vies-reversio-lactuacio-davant-lunica-opcio-pas-inferior-presentada' },
    enlaces: []
  },
  {
    fecha: '2026-10-27',
    categoria: 'Paso a nivel',
    titulo: 'La Generalitat presenta alternativas para cruzar las vías del metro en l\'Eliana',
    resumen: 'La Dirección General de Infraestructuras de Transporte Terrestre presenta varias alternativas para mejorar la seguridad y la conexión entre los dos lados de la vía.',
    fuente: { nombre: 'InfoTúria', url: 'https://www.infoturia.com/l-eliana/86951-la-generalitat-presenta-cinc-alternatives-per-a-facilitar-el-transit-entre-les-vies-de-metro-a-leliana.html' },
    enlaces: []
  },
  {
    fecha: '2026-04-04',
    categoria: 'Asociación',
    titulo: 'Concentración por el paso a nivel',
    resumen: 'Vecinas y vecinos nos concentramos en el parking de la estación para pedir un pueblo conectado y sin barreras.',
    fuente: { nombre: 'Convocatoria de la asociación', url: 'docs/2026-03_no_al_cierre_es.pdf' },
    enlaces: [{ texto: 'Ver el cartel', url: 'docs/2026-03_cartel_concentracion.png' }]
  },
  {
    fecha: '2026-02-23',
    categoria: 'Asociación',
    titulo: 'Alegaciones a la ordenanza de accesibilidad',
    resumen: 'La asociación ha presentado alegaciones a la ordenanza municipal de accesibilidad para que incluya las necesidades de nuestros barrios.',
    fuente: { nombre: 'Escrito de alegaciones registrado en el Ayuntamiento' },
    enlaces: []
  },
  {
    fecha: '2025-09-09',
    categoria: 'Asociación',
    titulo: 'Entrevies, inscrita oficialmente',
    resumen: 'La asociación queda inscrita en el registro de asociaciones.',
    fuente: { nombre: 'Resolución de inscripción en el registro' },
    enlaces: []
  }
];

/* ---------- PRENSA LOCAL AUTOMÁTICA ----------
   Titulares que se cargan solos. Añade SOLO fuentes de confianza que publiquen con regularidad.
   (Vivaleliana NO está aquí: en noviembre de 2026 su canal RSS publicaba spam de casinos.) */
window.PRENSA_RSS = [
  { nombre: 'InfoTúria', rss: 'https://www.infoturia.com/category/l-eliana/feed', web: 'https://www.infoturia.com/category/l-eliana' }
];
/* Si un titular automático contiene alguna de estas palabras, no se muestra. */
window.PALABRAS_BLOQUEADAS = ['casino', 'apuesta', 'betting', 'bonus', 'bono de bienvenida', 'tragaperras', 'slot', 'crypto', 'cripto', 'viagra', 'préstamo rápido', 'loan'];

/* ---------- VÍDEOS ----------
   Pega la dirección del vídeo tal como la copias del navegador. Vale de:
   YouTube, Instagram (publicación o reel), TikTok y Facebook. Ejemplo:
   { fecha: '2026-04-04', titulo: 'Concentración por el paso a nivel', url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', fuente: 'Entrevies' } */
window.VIDEOS = [
];

/* Canales de vídeo del pueblo (botones bajo los vídeos) */
window.CANALES_VIDEO = [
  { nombre: 'YouTube del Ayuntamiento', url: 'https://www.youtube.com/@AjuntamentdelEliana', clase: 'yt' },
  { nombre: 'YouTube de InfoTúria', url: 'https://www.youtube.com/infoturia', clase: 'yt' },
  { nombre: 'Vivaleliana TV', url: 'https://www.youtube.com/channel/UCQTeKmRsCZyrh3utf-DwyHg/videos', clase: 'yt' },
  { nombre: 'Instagram del Ayuntamiento', url: 'https://www.instagram.com/lelianagram/', clase: 'ig' }
];

/* ---------- RECURSOS DE L'ELIANA (enlaces comprobados el 11-11-2026) ---------- */
window.RECURSOS = [
  { grupo: 'Ayuntamiento', enlaces: [
    { texto: 'Web del Ayuntamiento', url: 'https://www.leliana.es/es' },
    { texto: 'Sede electrónica (trámites en línea)', url: 'https://leliana.sedipualba.es/' },
    { texto: 'Cita previa', url: 'https://www.leliana.es/va/citaprevia' },
    { texto: 'Atención ciudadana', url: 'https://www.leliana.es/va/seccion/atencion-ciudadana' },
    { texto: 'Edictos', url: 'https://www.leliana.es/va/pagina/edictes' },
    { texto: 'Portal de transparencia', url: 'https://transparencia.leliana.es/' }
  ]},
  { grupo: 'Participa en el pueblo', enlaces: [
    { texto: 'Participación ciudadana', url: 'https://www.leliana.es/va/seccion/participacion-ciudadana' },
    { texto: 'Subvenciones', url: 'https://www.leliana.es/va/pagina/subvencions' },
    { texto: "Plan de Actuación Municipal", url: 'https://www.lelianapam.es/' },
    { texto: 'Cooperación y voluntariado', url: 'https://www.leliana.es/va/seccion/solidaridad' },
    { texto: 'Canal de WhatsApp municipal', url: 'https://whatsapp.com/channel/0029VaXObmI002T0b4D3Ix01' }
  ]},
  { grupo: 'Servicios para las personas', enlaces: [
    { texto: 'Bienestar social', url: 'https://www.leliana.es/es/pagina/area-bienestar-social' },
    { texto: 'Personas mayores', url: 'https://www.leliana.es/va/seccion/tercera-edad' },
    { texto: 'Juventud', url: 'https://www.leliana.es/va/seccion/juventud' },
    { texto: 'Igualdad', url: 'https://www.leliana.es/va/seccion/igualdad' },
    { texto: 'Empleo', url: 'https://www.leliana.es/va/seccion/empleo' },
    { texto: 'Información sanitaria', url: 'https://www.leliana.es/va/seccion/sanidad' }
  ]},
  { grupo: 'Cultura, deporte y ocio', enlaces: [
    { texto: 'Agenda cultural', url: 'https://www.leliana.es/va/noticia/agenda-cultural' },
    { texto: 'Biblioteca', url: 'https://www.leliana.es/va/seccion/biblioteca' },
    { texto: 'Cultura', url: 'https://www.leliana.es/va/seccion/cultura' },
    { texto: 'Deportes', url: 'https://www.leliana.es/va/seccion/deportes' },
    { texto: 'Formación', url: 'https://www.leliana.es/va/seccion/formacion' },
    { texto: 'Fiestas', url: 'https://www.leliana.es/va/seccion/fiestas' }
  ]},
  { grupo: 'Día a día', enlaces: [
    { texto: 'Farmacias de guardia', url: 'https://www.leliana.es/va/pagina/farmacies' },
    { texto: 'Teléfonos de interés', url: 'https://www.leliana.es/va/pagina/telefons-dinteres' },
    { texto: 'Residuos y reciclaje', url: 'https://www.leliana.es/va/node/4182' },
    { texto: 'Bienestar animal', url: 'https://www.leliana.es/va/seccion/bienestar-animal' },
    { texto: 'El tiempo en l\'Eliana', url: 'https://inforatge.com/meteo-leliana' },
    { texto: 'Metrovalencia (horarios)', url: 'https://www.metrovalencia.es/' }
  ]},
  { grupo: 'Prensa y medios locales', enlaces: [
    { texto: "InfoTúria · noticias de l'Eliana", url: 'https://www.infoturia.com/category/l-eliana' },
    { texto: 'El Periòdic · provincia de Valencia', url: 'https://www.elperiodic.com/pvalencia/' },
    { texto: 'Vivaleliana', url: 'https://vivaleliana.com/' },
    { texto: 'Ayuntamiento en Facebook', url: 'https://www.facebook.com/ajuntamentdeleliana/' },
    { texto: 'Ayuntamiento en Instagram', url: 'https://www.instagram.com/lelianagram/' }
  ]}
];

/* ---------- PUBLICACIONES (boletines, comunicados, hojas informativas…) ----------
   tipo: la palabra que quieras; cada tipo nuevo crea su propio botón de filtro. */
window.PUBLICACIONES = [
  {
    fecha: '2026-04-13', tipo: 'Boletín',
    titulo: 'Boletín de abril 2026: Conócenos',
    resumen: 'Quiénes somos, qué pedimos, en qué participamos y cómo asociarte.',
    enlaces: [{ texto: 'PDF', url: 'docs/2026-04_conocenos.pdf' }]
  },
  {
    fecha: '2026-03-30', tipo: 'Comunicado',
    titulo: '¡No al cierre del paso a nivel!',
    resumen: 'Comunicado y convocatoria de la concentración del 4 de abril de 2026.',
    enlaces: [
      { texto: 'Castellano', url: 'docs/2026-03_no_al_cierre_es.pdf' },
      { texto: 'Valencià', url: 'docs/2026-03_no_al_tancament_va.pdf' },
      { texto: 'Cartel', url: 'docs/2026-03_cartel_concentracion.png' }
    ]
  },
  {
    fecha: '2026-02-22', tipo: 'Boletín',
    titulo: 'Boletín de febrero 2026',
    resumen: 'Primer boletín informativo de la asociación.',
    enlaces: [{ texto: 'PDF', url: 'docs/2026-02_boletin.pdf' }]
  },
  {
    fecha: '2026-02-22', tipo: 'Hoja informativa',
    titulo: 'Hoja de presentación de la asociación',
    resumen: 'Barrios conectados, seguros y accesibles para todas las personas.',
    enlaces: [
      { texto: 'Castellano', url: 'docs/2026-02_presentacion_es.pdf' },
      { texto: 'Valencià', url: 'docs/2026-02_presentacio_va.pdf' }
    ]
  },
  {
    fecha: '2026-02-22', tipo: 'Lectura fácil',
    titulo: 'Quiénes somos, en lectura fácil',
    resumen: 'Hoja con pictogramas de ARASAAC.',
    enlaces: [
      { texto: 'Castellano', url: 'docs/2026-02_lectura_facil_es.pdf' },
      { texto: 'Valencià', url: 'docs/2026-02_lectura_facil_va.pdf' }
    ]
  }
];

/* ---------- REUNIONES ----------
   Si la fecha es hoy o futura, sale en «Próximas reuniones»; si ya pasó, en «Anteriores».
   tipo: 'Asamblea', 'Junta directiva', 'Reunión abierta', 'Con el Ayuntamiento'… */
window.REUNIONES = [
  /* Ejemplo: copia el bloque de abajo fuera de este comentario y rellénalo.
  {
    fecha: '2026-12-15', tipo: 'Asamblea',
    titulo: 'Asamblea de socias y socios',
    hora: '19:00', lugar: 'Nombre del local',
    resumen: 'Orden del día: novedades del paso a nivel, propuestas para los barrios y ruegos y preguntas.',
    enlaces: [{ texto: 'Convocatoria', url: 'docs/2026-12_convocatoria.pdf' }]
  },
  */
  // Para una reunión ya celebrada, añade en resumen lo que se acordó y enlaza el acta o resumen en PDF.
];

/* ---------- TRANSPARENCIA ----------
   Si un documento no tiene enlace todavía, sale como «Disponible próximamente».
   ANTES DE SUBIR un PDF, revisa que no tenga DNI, firmas, teléfonos ni direcciones personales. */
window.DOCUMENTOS = [
  { grupo: 'Estatutos', titulo: 'Estatutos de la asociación', resumen: 'Castellano y valenciano.', enlaces: [] },
  { grupo: 'Registro', titulo: 'Resolución de inscripción en el registro de asociaciones', fecha: '2025-09-09', enlaces: [] },
  { grupo: 'Organización', titulo: 'Junta directiva', resumen: 'Cargos de la junta directiva.', enlaces: [] },
  { grupo: 'Cuentas', titulo: 'Cuentas anuales y presupuesto', enlaces: [] },
  { grupo: 'Actividad', titulo: 'Memoria de actividades', enlaces: [] },
  { grupo: 'Subvenciones', titulo: 'Subvenciones y ayudas públicas recibidas', resumen: 'Importe, entidad que la concede y finalidad.', enlaces: [] }
];
