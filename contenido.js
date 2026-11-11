/* =====================================================================
   CONTENIDO DE LA WEB DE ENTREVIES
   Este es el único archivo que hay que tocar para publicar cosas nuevas.
   - Copia un bloque { ... }, pégalo debajo y cambia el texto.
   - Las fechas van así: 'AAAA-MM-DD' (por ejemplo '2026-11-11').
   - Los documentos (PDF, imágenes) se guardan en la carpeta  docs/
     y se enlazan como 'docs/nombre_del_archivo.pdf'.
   - El orden da igual: la web los ordena por fecha sola.

   IDIOMAS: cada texto se escribe en castellano (titulo, resumen…) y,
   al lado, en valenciano (titulo_va, resumen_va…) y en inglés (titulo_en…).
   Si falta la traducción, la web muestra el castellano. Ejemplo:
     titulo: 'Asamblea de socios', titulo_va: 'Assemblea de socis', titulo_en: 'General meeting'
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
    categoria: 'Paso a nivel', categoria_va: 'Pas a nivell', categoria_en: 'Level crossing',
    titulo: 'El Ayuntamiento pide estudiar el soterramiento de las vías o revertir el cierre',
    titulo_va: "L'Ajuntament demana estudiar el soterrament de les vies o revertir el tancament",
    titulo_en: 'The Town Council asks for the railway to be put underground or for the closure to be reversed',
    resumen: 'Tras la reunión del 27 de octubre con la Generalitat, que presentó un paso inferior como única opción, el Ayuntamiento pide valorar el soterramiento y defiende recuperar el paso a nivel peatonal con barreras automáticas y señales luminosas y acústicas.',
    resumen_va: "Després de la reunió del 27 d'octubre amb la Generalitat, que va presentar un pas inferior com a única opció, l'Ajuntament demana valorar el soterrament i defensa recuperar el pas a nivell de vianants amb barreres automàtiques i senyals lluminosos i acústics.",
    resumen_en: 'After the meeting with the regional government on 27 October, which presented an underpass as the only option, the Town Council asks for putting the line underground to be considered and supports restoring the pedestrian level crossing with automatic barriers and light and sound signals.',
    fuente: { nombre: "Ayuntamiento de l'Eliana", nombre_va: "Ajuntament de l'Eliana", nombre_en: "l'Eliana Town Council", url: 'https://www.leliana.es/va/noticia/lajuntament-reclama-generalitat-que-estudie-soterrament-vies-reversio-lactuacio-davant-lunica-opcio-pas-inferior-presentada' },
    enlaces: []
  },
  {
    fecha: '2026-10-27',
    categoria: 'Paso a nivel', categoria_va: 'Pas a nivell', categoria_en: 'Level crossing',
    titulo: 'La Generalitat presenta alternativas para cruzar las vías del metro en l\'Eliana',
    titulo_va: "La Generalitat presenta alternatives per a creuar les vies del metro a l'Eliana",
    titulo_en: "The regional government presents options for crossing the metro line in l'Eliana",
    resumen: 'La Dirección General de Infraestructuras de Transporte Terrestre presenta varias alternativas para mejorar la seguridad y la conexión entre los dos lados de la vía.',
    resumen_va: 'La Direcció General d\'Infraestructures de Transport Terrestre presenta diverses alternatives per a millorar la seguretat i la connexió entre els dos costats de la via.',
    resumen_en: "The regional Directorate-General for Land Transport Infrastructure presents several options to improve safety and the connection between the two sides of the railway.",
    fuente: { nombre: 'InfoTúria', url: 'https://www.infoturia.com/l-eliana/86951-la-generalitat-presenta-cinc-alternatives-per-a-facilitar-el-transit-entre-les-vies-de-metro-a-leliana.html' },
    enlaces: []
  },
  {
    fecha: '2026-04-04',
    categoria: 'Asociación', categoria_va: 'Associació', categoria_en: 'Association',
    titulo: 'Concentración por el paso a nivel', titulo_va: 'Concentració pel pas a nivell', titulo_en: 'Rally for the level crossing',
    resumen: 'Vecinas y vecinos nos concentramos en el parking de la estación para pedir un pueblo conectado y sin barreras.',
    resumen_va: "Veïnes i veïns ens vam concentrar a l'aparcament de l'estació per a demanar un poble connectat i sense barreres.",
    resumen_en: 'Residents gathered in the station car park to call for a connected town without barriers.',
    fuente: { nombre: 'Convocatoria de la asociación', nombre_va: "Convocatòria de l'associació", nombre_en: "The association's notice", url: 'docs/2026-03_no_al_cierre_es.pdf' },
    enlaces: [{ texto: 'Ver el cartel', texto_va: 'Veure el cartell', texto_en: 'See the poster', url: 'docs/2026-03_cartel_concentracion.png' }]
  },
  {
    fecha: '2026-02-23',
    categoria: 'Asociación', categoria_va: 'Associació', categoria_en: 'Association',
    titulo: 'Alegaciones a la ordenanza de accesibilidad', titulo_va: "Al·legacions a l'ordenança d'accessibilitat", titulo_en: 'Objections to the accessibility by-law',
    resumen: 'La asociación ha presentado alegaciones a la ordenanza municipal de accesibilidad para que incluya las necesidades de nuestros barrios.',
    resumen_va: "L'associació ha presentat al·legacions a l'ordenança municipal d'accessibilitat perquè incloga les necessitats dels nostres barris.",
    resumen_en: "The association has submitted formal objections to the local accessibility by-law so that it includes our neighbourhoods' needs.",
    fuente: { nombre: 'Escrito de alegaciones registrado en el Ayuntamiento', nombre_va: "Escrit d'al·legacions registrat a l'Ajuntament", nombre_en: 'Objections filed with the Town Council' },
    enlaces: [{ texto: 'Borrador de la ordenanza (web del Ayuntamiento)', texto_va: "Esborrany de l'ordenança (web de l'Ajuntament)", texto_en: 'Draft by-law (Town Council website)',
      url: 'https://www.leliana.es/sites/www.leliana.es/files/2025_ord_accessibilitat_bi.pdf' }]
  },
  {
    fecha: '2025-09-09',
    categoria: 'Asociación', categoria_va: 'Associació', categoria_en: 'Association',
    titulo: 'Entrevies, inscrita oficialmente', titulo_va: 'Entrevies, inscrita oficialment', titulo_en: 'Entrevies is officially registered',
    resumen: 'La asociación queda inscrita en el registro de asociaciones.',
    resumen_va: "L'associació queda inscrita en el registre d'associacions.",
    resumen_en: 'The association is entered in the official register of associations.',
    fuente: { nombre: 'Resolución de inscripción en el registro', nombre_va: "Resolució d'inscripció en el registre", nombre_en: 'Registration decision' },
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
   { fecha: '2026-04-04', titulo: 'Concentración por el paso a nivel', titulo_va: 'Concentració pel pas a nivell',
     url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', fuente: 'Entrevies' } */
window.VIDEOS = [
];

/* Canales de vídeo del pueblo (botones bajo los vídeos) */
window.CANALES_VIDEO = [
  { nombre: 'YouTube del Ayuntamiento', nombre_va: "YouTube de l'Ajuntament", nombre_en: 'Town Council on YouTube', url: 'https://www.youtube.com/@AjuntamentdelEliana', clase: 'yt' },
  { nombre: 'YouTube de InfoTúria', nombre_va: "YouTube d'InfoTúria", nombre_en: 'InfoTúria on YouTube', url: 'https://www.youtube.com/infoturia', clase: 'yt' },
  { nombre: 'Vivaleliana TV', url: 'https://www.youtube.com/channel/UCQTeKmRsCZyrh3utf-DwyHg/videos', clase: 'yt' },
  { nombre: 'Instagram del Ayuntamiento', nombre_va: "Instagram de l'Ajuntament", nombre_en: 'Town Council on Instagram', url: 'https://www.instagram.com/lelianagram/', clase: 'ig' }
];

/* ---------- RECURSOS DE L'ELIANA (enlaces comprobados el 11-11-2026) ---------- */
window.RECURSOS = [
  /* Estado comprobado el 11-11-2026 en https://www.leliana.es/va/normativa-legal :
     la ordenanza figura como «Ordenança d'accesibilitat (esborrany)». Cuando se apruebe, cambiar el texto y el enlace. */
  { grupo: 'Accesibilidad', grupo_va: 'Accessibilitat', grupo_en: 'Accessibility', enlaces: [
    { texto: 'Ordenanza municipal de accesibilidad (borrador, valenciano y castellano)', texto_va: "Ordenança municipal d'accessibilitat (esborrany, valencià i castellà)", texto_en: 'Local accessibility by-law (draft, in Valencian and Spanish)',
      url: 'https://www.leliana.es/sites/www.leliana.es/files/2025_ord_accessibilitat_bi.pdf' },
    { texto: 'Normativa municipal vigente', texto_va: 'Normativa municipal vigent', texto_en: 'Current local regulations', url: 'https://www.leliana.es/va/normativa-legal' },
    { texto: 'Accesibilidad de la web del Ayuntamiento', texto_va: "Accessibilitat de la web de l'Ajuntament", texto_en: 'Town Council website accessibility', url: 'https://www.leliana.es/ayuntamiento/accesibilidad' }
  ]},
  { grupo: 'Ayuntamiento', grupo_va: 'Ajuntament', grupo_en: 'Town Council', enlaces: [
    { texto: 'Web del Ayuntamiento', texto_va: "Web de l'Ajuntament", texto_en: 'Town Council website', url: 'https://www.leliana.es/es' },
    { texto: 'Sede electrónica (trámites en línea)', texto_va: 'Seu electrònica (tràmits en línia)', texto_en: 'Online procedures (e-office)', url: 'https://leliana.sedipualba.es/' },
    { texto: 'Cita previa', texto_va: 'Cita prèvia', texto_en: 'Book an appointment', url: 'https://www.leliana.es/va/citaprevia' },
    { texto: 'Atención ciudadana', texto_va: 'Atenció ciutadana', texto_en: 'Citizen services', url: 'https://www.leliana.es/va/seccion/atencion-ciudadana' },
    { texto: 'Edictos', texto_va: 'Edictes', texto_en: 'Official notices', url: 'https://www.leliana.es/va/pagina/edictes' },
    { texto: 'Portal de transparencia', texto_va: 'Portal de transparència', texto_en: 'Transparency portal', url: 'https://transparencia.leliana.es/' }
  ]},
  { grupo: 'Participa en el pueblo', grupo_va: 'Participa en el poble', grupo_en: 'Get involved', enlaces: [
    { texto: 'Participación ciudadana', texto_va: 'Participació ciutadana', texto_en: 'Citizen participation', url: 'https://www.leliana.es/va/seccion/participacion-ciudadana' },
    { texto: 'Subvenciones', texto_va: 'Subvencions', texto_en: 'Grants', url: 'https://www.leliana.es/va/pagina/subvencions' },
    { texto: 'Plan de Actuación Municipal', texto_va: "Pla d'Actuació Municipal", texto_en: 'Municipal Action Plan', url: 'https://www.lelianapam.es/' },
    { texto: 'Cooperación y voluntariado', texto_va: 'Cooperació i voluntariat', texto_en: 'Cooperation and volunteering', url: 'https://www.leliana.es/va/seccion/solidaridad' },
    { texto: 'Canal de WhatsApp municipal', texto_va: 'Canal de WhatsApp municipal', texto_en: 'Town Council WhatsApp channel', url: 'https://whatsapp.com/channel/0029VaXObmI002T0b4D3Ix01' }
  ]},
  { grupo: 'Servicios para las personas', grupo_va: 'Serveis per a les persones', grupo_en: 'Social services', enlaces: [
    { texto: 'Bienestar social', texto_va: 'Benestar social', texto_en: 'Social welfare', url: 'https://www.leliana.es/es/pagina/area-bienestar-social' },
    { texto: 'Personas mayores', texto_va: 'Persones majors', texto_en: 'Older people', url: 'https://www.leliana.es/va/seccion/tercera-edad' },
    { texto: 'Juventud', texto_va: 'Joventut', texto_en: 'Young people', url: 'https://www.leliana.es/va/seccion/juventud' },
    { texto: 'Igualdad', texto_va: 'Igualtat', texto_en: 'Equality', url: 'https://www.leliana.es/va/seccion/igualdad' },
    { texto: 'Empleo', texto_va: 'Ocupació', texto_en: 'Employment', url: 'https://www.leliana.es/va/seccion/empleo' },
    { texto: 'Información sanitaria', texto_va: 'Informació sanitària', texto_en: 'Health information', url: 'https://www.leliana.es/va/seccion/sanidad' }
  ]},
  { grupo: 'Cultura, deporte y ocio', grupo_va: 'Cultura, esport i oci', grupo_en: 'Culture, sport and leisure', enlaces: [
    { texto: 'Agenda cultural', texto_va: 'Agenda cultural', texto_en: 'Cultural agenda', url: 'https://www.leliana.es/va/noticia/agenda-cultural' },
    { texto: 'Biblioteca', texto_va: 'Biblioteca', texto_en: 'Library', url: 'https://www.leliana.es/va/seccion/biblioteca' },
    { texto: 'Cultura', texto_va: 'Cultura', texto_en: 'Culture', url: 'https://www.leliana.es/va/seccion/cultura' },
    { texto: 'Deportes', texto_va: 'Esports', texto_en: 'Sport', url: 'https://www.leliana.es/va/seccion/deportes' },
    { texto: 'Formación', texto_va: 'Formació', texto_en: 'Training courses', url: 'https://www.leliana.es/va/seccion/formacion' },
    { texto: 'Fiestas', texto_va: 'Festes', texto_en: 'Local festivities', url: 'https://www.leliana.es/va/seccion/fiestas' }
  ]},
  { grupo: 'Día a día', grupo_va: 'Dia a dia', grupo_en: 'Everyday life', enlaces: [
    { texto: 'Farmacias de guardia', texto_va: 'Farmàcies de guàrdia', texto_en: 'Duty pharmacies', url: 'https://www.leliana.es/va/pagina/farmacies' },
    { texto: 'Teléfonos de interés', texto_va: "Telèfons d'interés", texto_en: 'Useful phone numbers', url: 'https://www.leliana.es/va/pagina/telefons-dinteres' },
    { texto: 'Residuos y reciclaje', texto_va: 'Residus i reciclatge', texto_en: 'Waste and recycling', url: 'https://www.leliana.es/va/node/4182' },
    { texto: 'Bienestar animal', texto_va: 'Benestar animal', texto_en: 'Animal welfare', url: 'https://www.leliana.es/va/seccion/bienestar-animal' },
    { texto: 'El tiempo en l\'Eliana', texto_va: "L'oratge a l'Eliana", texto_en: "Weather in l'Eliana", url: 'https://inforatge.com/meteo-leliana' },
    { texto: 'Metrovalencia (horarios)', texto_va: 'Metrovalencia (horaris)', texto_en: 'Metrovalencia (timetables)', url: 'https://www.metrovalencia.es/' }
  ]},
  { grupo: 'Prensa y medios locales', grupo_va: 'Premsa i mitjans locals', grupo_en: 'Local press and media', enlaces: [
    { texto: "InfoTúria · noticias de l'Eliana", texto_va: "InfoTúria · notícies de l'Eliana", texto_en: "InfoTúria · l'Eliana news", url: 'https://www.infoturia.com/category/l-eliana' },
    { texto: 'El Periòdic · provincia de Valencia', texto_va: 'El Periòdic · província de València', texto_en: 'El Periòdic · Valencia province', url: 'https://www.elperiodic.com/pvalencia/' },
    { texto: 'Vivaleliana', url: 'https://vivaleliana.com/' },
    { texto: 'Ayuntamiento en Facebook', texto_va: "L'Ajuntament a Facebook", texto_en: 'Town Council on Facebook', url: 'https://www.facebook.com/ajuntamentdeleliana/' },
    { texto: 'Ayuntamiento en Instagram', texto_va: "L'Ajuntament a Instagram", texto_en: 'Town Council on Instagram', url: 'https://www.instagram.com/lelianagram/' }
  ]}
];

/* ---------- PUBLICACIONES (boletines, comunicados, hojas informativas…) ----------
   tipo: la palabra que quieras; cada tipo nuevo crea su propio botón de filtro. */
window.PUBLICACIONES = [
  {
    fecha: '2026-04-13', tipo: 'Boletín', tipo_va: 'Butlletí', tipo_en: 'Newsletter',
    titulo: 'Boletín de abril 2026: Conócenos', titulo_va: "Butlletí d'abril 2026: Coneix-nos", titulo_en: 'April 2026 newsletter: Get to know us',
    resumen: 'Quiénes somos, qué pedimos, en qué participamos y cómo asociarte.',
    resumen_va: 'Qui som, què demanem, en què participem i com associar-te.',
    resumen_en: 'Who we are, what we ask for, what we take part in and how to join (in Spanish).',
    enlaces: [{ texto: 'PDF', url: 'docs/2026-04_conocenos.pdf' }]
  },
  {
    fecha: '2026-03-30', tipo: 'Comunicado', tipo_va: 'Comunicat', tipo_en: 'Statement',
    titulo: '¡No al cierre del paso a nivel!', titulo_va: 'No al tancament del pas a nivell!', titulo_en: 'No to the closure of the level crossing!',
    resumen: 'Comunicado y convocatoria de la concentración del 4 de abril de 2026.',
    resumen_va: "Comunicat i convocatòria de la concentració del 4 d'abril de 2026.",
    resumen_en: 'Statement and notice of the rally on 4 April 2026.',
    enlaces: [
      { texto: 'Castellano', url: 'docs/2026-03_no_al_cierre_es.pdf' },
      { texto: 'Valencià', url: 'docs/2026-03_no_al_tancament_va.pdf' },
      { texto: 'Cartel', texto_va: 'Cartell', texto_en: 'Poster', url: 'docs/2026-03_cartel_concentracion.png' }
    ]
  },
  {
    fecha: '2026-02-22', tipo: 'Boletín', tipo_va: 'Butlletí', tipo_en: 'Newsletter',
    titulo: 'Boletín de febrero 2026', titulo_va: 'Butlletí de febrer 2026', titulo_en: 'February 2026 newsletter',
    resumen: 'Primer boletín informativo de la asociación.', resumen_va: "Primer butlletí informatiu de l'associació.", resumen_en: "The association's first newsletter (in Spanish).",
    enlaces: [{ texto: 'PDF', url: 'docs/2026-02_boletin.pdf' }]
  },
  {
    fecha: '2026-02-22', tipo: 'Hoja informativa', tipo_va: 'Full informatiu', tipo_en: 'Information sheet',
    titulo: 'Hoja de presentación de la asociación', titulo_va: "Full de presentació de l'associació", titulo_en: 'Introduction to the association',
    resumen: 'Barrios conectados, seguros y accesibles para todas las personas.',
    resumen_va: 'Barris connectats, segurs i accessibles per a totes les persones.',
    resumen_en: 'Connected, safe and accessible neighbourhoods for everyone.',
    enlaces: [
      { texto: 'Castellano', url: 'docs/2026-02_presentacion_es.pdf' },
      { texto: 'Valencià', url: 'docs/2026-02_presentacio_va.pdf' }
    ]
  },
  {
    fecha: '2026-02-22', tipo: 'Lectura fácil', tipo_va: 'Lectura fàcil', tipo_en: 'Easy read',
    titulo: 'Quiénes somos, en lectura fácil', titulo_va: 'Qui som, en lectura fàcil', titulo_en: 'Who we are, in easy read',
    resumen: 'Hoja con pictogramas de ARASAAC.', resumen_va: "Full amb pictogrames d'ARASAAC.", resumen_en: 'Sheet with ARASAAC pictograms (in Spanish and Valencian).',
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
    fecha: '2026-12-15', tipo: 'Asamblea', tipo_va: 'Assemblea', tipo_en: 'General meeting',
    titulo: 'Asamblea de socias y socios', titulo_va: 'Assemblea de sòcies i socis', titulo_en: 'General meeting of members',
    hora: '19:00', lugar: 'Nombre del local',
    resumen: 'Orden del día: novedades del paso a nivel, propuestas para los barrios y ruegos y preguntas.',
    resumen_va: 'Ordre del dia: novetats del pas a nivell, propostes per als barris i precs i preguntes.',
    enlaces: [{ texto: 'Convocatoria', texto_va: 'Convocatòria', texto_en: 'Notice', url: 'docs/2026-12_convocatoria.pdf' }]
  },
  */
  // Para una reunión ya celebrada, añade en resumen lo que se acordó y enlaza el acta o resumen en PDF.
];

/* ---------- TRANSPARENCIA ----------
   Si un documento no tiene enlace todavía, sale como «Disponible próximamente».
   ANTES DE SUBIR un PDF, revisa que no tenga DNI, firmas, teléfonos ni direcciones personales. */
window.DOCUMENTOS = [
  /* Revisados el 11-11-2026: sin firmas, DNI, teléfonos ni direcciones particulares.
     NO publicar la «resolución de inscripción» ni los «estatutos diligenciados»: llevan la dirección
     particular del domicilio social o son escaneos sin revisar. */
  { grupo: 'Estatutos', grupo_va: 'Estatuts', grupo_en: 'Statutes', fecha: '2025-03-01',
    titulo: 'Estatutos de la asociación', titulo_va: "Estatuts de l'associació", titulo_en: "The association's statutes",
    resumen: 'Texto aprobado en la asamblea fundacional del 1 de marzo de 2025. La versión sellada por el registro está a disposición de quien la pida.',
    resumen_va: "Text aprovat en l'assemblea fundacional de l'1 de març de 2025. La versió segellada pel registre està a disposició de qui la demane.",
    resumen_en: 'Text approved at the founding meeting on 1 March 2025 (in Spanish and Valencian). The version stamped by the register is available on request.',
    enlaces: [
      { texto: 'Castellano', url: 'docs/estatutos_entrevies_es.pdf' },
      { texto: 'Valencià', url: 'docs/estatutos_entrevies_va.pdf' }
    ] },
  { grupo: 'Registro', grupo_va: 'Registre', grupo_en: 'Registration', fecha: '2025-09-09',
    titulo: 'Certificado de inscripción en el registro de asociaciones', titulo_va: "Certificat d'inscripció en el registre d'associacions", titulo_en: 'Certificate of entry in the register of associations',
    resumen: 'Registro Autonómico de Asociaciones de la Comunitat Valenciana, número CV-01-067786-V.',
    resumen_va: "Registre Autonòmic d'Associacions de la Comunitat Valenciana, número CV-01-067786-V.",
    resumen_en: 'Valencian Regional Register of Associations, number CV-01-067786-V (document in Spanish).',
    enlaces: [{ texto: 'PDF', url: 'docs/2025-09_certificado_inscripcion_registro.pdf' }] },
  { grupo: 'Organización', grupo_va: 'Organització', grupo_en: 'Organisation',
    titulo: 'Junta directiva', titulo_va: 'Junta directiva', titulo_en: 'Board',
    resumen: 'Cargos de la junta directiva.', resumen_va: 'Càrrecs de la junta directiva.', resumen_en: 'Board positions.', enlaces: [] },
  { grupo: 'Cuentas', grupo_va: 'Comptes', grupo_en: 'Accounts',
    titulo: 'Cuentas anuales y presupuesto', titulo_va: 'Comptes anuals i pressupost', titulo_en: 'Annual accounts and budget', enlaces: [] },
  { grupo: 'Actividad', grupo_va: 'Activitat', grupo_en: 'Activity',
    titulo: 'Memoria de actividades', titulo_va: "Memòria d'activitats", titulo_en: 'Annual activity report', enlaces: [] },
  { grupo: 'Subvenciones', grupo_va: 'Subvencions', grupo_en: 'Grants',
    titulo: 'Subvenciones y ayudas públicas recibidas', titulo_va: 'Subvencions i ajudes públiques rebudes', titulo_en: 'Public grants received',
    resumen: 'Importe, entidad que la concede y finalidad.', resumen_va: "Import, entitat que la concedix i finalitat.", resumen_en: 'Amount, granting body and purpose.', enlaces: [] }
];
