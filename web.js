/* Programa de la web de Entrevies: idiomas, accesibilidad y contenido.
   No hace falta tocarlo para publicar: el contenido está en contenido.js
   y las traducciones de los textos fijos en idiomas.js. */
(function () {
  var CORREO = 'entreviesleliana@gmail.com';
  var IDIOMAS = ['va', 'es', 'en'];
  var LANG_HTML = { va: 'ca-ES-valencia', es: 'es', en: 'en' };

  /* ---------- Preferencias guardadas (idioma y accesibilidad) ---------- */
  function leer(k, def) { try { var v = localStorage.getItem('entrevies-' + k); return v === null ? def : v; } catch (e) { return def; } }
  function guardar(k, v) { try { localStorage.setItem('entrevies-' + k, v); } catch (e) { /* sin almacenamiento: no pasa nada */ } }

  var lang = (function () {
    var q = (location.search.match(/[?&]lang=(va|es|en)\b/) || [])[1];
    if (q) return q;
    var g = leer('idioma', '');
    if (IDIOMAS.indexOf(g) >= 0) return g;
    var n = (navigator.language || 'es').toLowerCase();
    return n.indexOf('ca') === 0 ? 'va' : n.indexOf('en') === 0 ? 'en' : 'es';
  })();

  var DIC = window.TEXTOS || {};
  function t(k) { return (DIC[lang] && DIC[lang][k] != null) ? DIC[lang][k] : (DIC.es && DIC.es[k] != null ? DIC.es[k] : k); }
  // Campo traducido de un elemento de contenido.js: titulo_va, titulo_en… y si no existe, el castellano.
  function tr(o, campo) { return (o && (o[campo + '_' + lang] || o[campo])) || ''; }

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fecha(iso) {
    if (!iso) return '';
    var p = iso.split('-'), d = p[2] ? +p[2] : null, m = +p[1] - 1, a = p[0];
    var MES = t('meses').split(',');
    if (lang === 'en') return (d ? d + ' ' : '') + MES[m] + ' ' + a;
    if (lang === 'va') { var de = /^[aeiouàèéíòóú]/i.test(MES[m]) ? "d'" : 'de '; return (d ? d + ' ' : '') + de + MES[m] + ' de ' + a; }
    return (d ? d + ' de ' : '') + MES[m] + ' de ' + a;
  }
  function porFecha(a, b) { return (b.fecha || '').localeCompare(a.fecha || ''); }

  /* ---------- Textos fijos de la página ---------- */
  function aplicarTextos() {
    document.documentElement.lang = LANG_HTML[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (el.dataset.es == null) el.dataset.es = el.innerHTML;
      var k = el.getAttribute('data-i18n');
      el.innerHTML = (lang !== 'es' && DIC[lang] && DIC[lang][k] != null) ? DIC[lang][k] : el.dataset.es;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (par) {
        var x = par.split(':'), at = x[0], k = x[1], guardado = 'es' + at.replace(/[^a-z]/gi, '');
        if (el.dataset[guardado] == null) el.dataset[guardado] = el.getAttribute(at) || '';
        el.setAttribute(at, (lang !== 'es' && DIC[lang] && DIC[lang][k] != null) ? DIC[lang][k] : el.dataset[guardado]);
      });
    });
    document.querySelectorAll('.idiomas button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === lang); });
    document.title = t('titulo_pagina');
    var lf = document.getElementById('enlace-lf'); if (lf) lf.href = 'lectura-facil.html?lang=' + (lang === 'en' ? 'es' : lang);
  }

  /* ---------- Piezas comunes ---------- */
  function nuevaVentana() { return '<span class="sr-only"> ' + esc(t('nueva_ventana')) + '</span>'; }
  function enlaces(lista, titulo) {
    return (lista || []).map(function (e) {
      return '<a class="mas" href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(tr(e, 'texto')) +
        (titulo ? '<span class="sr-only">: ' + esc(titulo) + '</span>' : '') + nuevaVentana() + ' <span aria-hidden="true">→</span></a>';
    }).join(' ');
  }
  function tarjeta(item, cat, claseCat) {
    var titulo = tr(item, 'titulo');
    return '<article class="noticia"><div class="meta">' +
      (cat ? '<span class="cat ' + (claseCat || '') + '">' + esc(cat) + '</span>' : '') +
      (item.fecha ? '<time datetime="' + esc(item.fecha) + '">' + fecha(item.fecha) + '</time>' : '') +
      '</div><h3>' + esc(titulo) + '</h3>' + (tr(item, 'resumen') ? '<p>' + esc(tr(item, 'resumen')) + '</p>' : '') +
      (item.fuente ? '<p class="fuente">' + esc(t('fuente')) + ': ' + (item.fuente.url ? '<a href="' + esc(item.fuente.url) + '" target="_blank" rel="noopener">' + esc(tr(item.fuente, 'nombre')) + nuevaVentana() + '</a>' : esc(tr(item.fuente, 'nombre'))) + '</p>' : '') +
      '<div>' + enlaces(item.enlaces, titulo) + '</div></article>';
  }

  /* ---------- Contenido (se vuelve a pintar al cambiar de idioma) ---------- */
  function pintarNoticias() {
    var cont = document.getElementById('lista-noticias');
    // Sin fuente no se publica: así evitamos difundir rumores.
    var lista = (window.NOTICIAS || []).filter(function (n) { return n.fuente && n.fuente.nombre; }).sort(porFecha);
    cont.innerHTML = lista.length ? lista.map(function (n) {
      return tarjeta(n, tr(n, 'categoria'), n.categoria === 'Asociación' ? '' : 'pueblo');
    }).join('') : '<p>' + esc(t('sin_noticias')) + '</p>';
  }

  var prensaCache = null;
  function pintarPrensa() {
    var cont = document.getElementById('lista-prensa');
    var feeds = window.PRENSA_RSS || [];
    if (!feeds.length) { cont.style.display = 'none'; return; }
    function mostrar(items) {
      if (!items.length) {
        cont.innerHTML = '<p>' + esc(t('prensa_error')) + ' ' +
          feeds.map(function (f) { return '<a href="' + esc(f.web) + '" target="_blank" rel="noopener">' + esc(f.nombre) + nuevaVentana() + '</a>'; }).join(', ') + '.</p>';
        return;
      }
      cont.innerHTML = items.map(function (i) {
        return tarjeta({ fecha: i.fecha, titulo: i.titulo, resumen: i.resumen, fuente: { nombre: i.medio, url: i.url },
          enlaces: [{ texto: t('leer_noticia'), url: i.url }] }, i.medio, 'pueblo');
      }).join('');
    }
    if (prensaCache) { mostrar(prensaCache); return; }
    cont.innerHTML = '<p>' + esc(t('cargando')) + '</p>';
    Promise.all(feeds.map(function (f) {
      return fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(f.rss))
        .then(function (r) { return r.json(); })
        .then(function (j) {
          return (j.items || []).map(function (i) {
            return { fecha: (i.pubDate || '').slice(0, 10), titulo: i.title, medio: f.nombre, url: i.link,
              resumen: (i.description || '').replace(/<[^>]+>/g, ' ').replace(/La entrada .*$/s, '').replace(/&#?\w+;/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160) };
          });
        }).catch(function () { return []; });
    })).then(function (listas) {
      // Filtro antispam: descarta titulares con palabras típicas de webs hackeadas
      var bloqueo = window.PALABRAS_BLOQUEADAS || [];
      prensaCache = [].concat.apply([], listas).filter(function (i) {
        var x = (i.titulo + ' ' + i.resumen).toLowerCase();
        return !bloqueo.some(function (p) { return x.indexOf(p) >= 0; });
      }).sort(porFecha).slice(0, 6);
      mostrar(prensaCache);
    });
  }

  function embed(url) {
    var m;
    if ((m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/)))
      return { red: 'YouTube', src: 'https://www.youtube-nocookie.com/embed/' + m[1] + '?autoplay=1', img: 'https://i.ytimg.com/vi/' + m[1] + '/hqdefault.jpg' };
    if ((m = url.match(/instagram\.com\/(?:p|reel|tv)\/([\w-]+)/)))
      return { red: 'Instagram', src: 'https://www.instagram.com/p/' + m[1] + '/embed', vertical: true };
    if ((m = url.match(/tiktok\.com\/.*\/video\/(\d+)/)))
      return { red: 'TikTok', src: 'https://www.tiktok.com/embed/v2/' + m[1], vertical: true };
    if (/facebook\.com|fb\.watch/.test(url))
      return { red: 'Facebook', src: 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(url) + '&show_text=false' };
    return null;
  }
  var listaVideos = [];
  function pintarVideos() {
    var cont = document.getElementById('lista-videos');
    listaVideos = (window.VIDEOS || []).slice().sort(porFecha);
    cont.innerHTML = listaVideos.length ? listaVideos.map(function (v, n) {
      var e = embed(v.url);
      if (!e) return '';
      return '<article class="noticia video"><div class="marco' + (e.vertical ? ' vertical' : '') + '">' +
        '<button class="cargar" data-n="' + n + '" style="' + (e.img ? 'background-image:url(' + e.img + ')' : '') + '" aria-label="' + esc(t('reproducir')) + ': ' + esc(tr(v, 'titulo')) + '">' +
        '<span><span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>' + esc(t('ver_en')) + ' ' + e.red + '</span></button></div>' +
        '<div class="texto"><div class="meta"><span class="cat">' + e.red + '</span>' + (v.fecha ? '<time datetime="' + esc(v.fecha) + '">' + fecha(v.fecha) + '</time>' : '') + '</div>' +
        '<h3>' + esc(tr(v, 'titulo')) + '</h3>' + (v.fuente ? '<p class="fuente">' + esc(t('autoria')) + ': ' + esc(v.fuente) + '</p>' : '') + '</div></article>';
    }).join('') : '<p>' + esc(t('sin_videos')) + '</p>';
    document.getElementById('canales-video').innerHTML = (window.CANALES_VIDEO || []).map(function (c) {
      return '<a class="red ' + esc(c.clase || 'yt') + '" href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(tr(c, 'nombre')) + nuevaVentana() + '</a>';
    }).join('');
  }
  document.getElementById('lista-videos').addEventListener('click', function (ev) {
    var b = ev.target.closest('.cargar'); if (!b) return;
    var v = listaVideos[+b.dataset.n], e = embed(v.url);
    b.outerHTML = '<iframe src="' + e.src + '" title="' + esc(tr(v, 'titulo')) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>';
  });

  function pintarRecursos() {
    document.getElementById('lista-recursos').innerHTML = (window.RECURSOS || []).map(function (g) {
      return '<article class="reiv recurso"><h3>' + esc(tr(g, 'grupo')) + '</h3><ul>' + g.enlaces.map(function (e) {
        return '<li><a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(tr(e, 'texto')) + nuevaVentana() + '</a></li>';
      }).join('') + '</ul></article>';
    }).join('');
  }

  var filtroPub = '*';
  function pintarPublicaciones() {
    var cont = document.getElementById('lista-publicaciones'), filtro = document.getElementById('filtro-publicaciones');
    var lista = (window.PUBLICACIONES || []).slice().sort(porFecha);
    var tipos = [];
    lista.forEach(function (p) { if (p.tipo && !tipos.some(function (x) { return x.tipo === p.tipo; })) tipos.push(p); });
    filtro.innerHTML = '<label><input type="radio" name="filtro-pub" value="*"' + (filtroPub === '*' ? ' checked' : '') + '> ' + esc(t('todas')) + '</label>' +
      tipos.map(function (p) { return '<label><input type="radio" name="filtro-pub" value="' + esc(p.tipo) + '"' + (filtroPub === p.tipo ? ' checked' : '') + '> ' + esc(tr(p, 'tipo')) + '</label>'; }).join('');
    cont.innerHTML = lista.filter(function (p) { return filtroPub === '*' || p.tipo === filtroPub; })
      .map(function (p) { return tarjeta(p, tr(p, 'tipo')); }).join('');
  }
  document.getElementById('filtro-publicaciones').addEventListener('change', function (e) { filtroPub = e.target.value; pintarPublicaciones(); });

  function pintarReuniones() {
    var hoy = new Date().toISOString().slice(0, 10);
    var todas = window.REUNIONES || [];
    function ficha(r) {
      var item = { titulo: tr(r, 'titulo'), fecha: r.fecha, enlaces: r.enlaces,
        resumen: [r.hora && (t('hora') + ': ' + r.hora), r.lugar && (t('lugar') + ': ' + r.lugar), tr(r, 'resumen')].filter(Boolean).join(' · ') };
      return tarjeta(item, tr(r, 'tipo'));
    }
    var prox = todas.filter(function (r) { return r.fecha >= hoy; }).sort(function (a, b) { return a.fecha.localeCompare(b.fecha); });
    var ant = todas.filter(function (r) { return r.fecha < hoy; }).sort(porFecha);
    document.getElementById('lista-proximas').innerHTML = prox.length ? prox.map(ficha).join('') : '<p>' + esc(t('sin_reuniones')) + '</p>';
    document.getElementById('lista-anteriores').innerHTML = ant.length ? ant.map(ficha).join('') : '<p>' + esc(t('sin_resumenes')) + '</p>';
  }

  function pintarDocumentos() {
    document.getElementById('lista-documentos').innerHTML = (window.DOCUMENTOS || []).map(function (d) {
      var item = { titulo: tr(d, 'titulo'), resumen: tr(d, 'resumen'), fecha: d.fecha, enlaces: d.enlaces };
      if (!d.enlaces || !d.enlaces.length) item.resumen = (item.resumen ? item.resumen + ' ' : '') + t('proximamente');
      return tarjeta(item, tr(d, 'grupo'), 'pueblo');
    }).join('');
  }

  function pintarContador() {
    var cierre = new Date(2024, 11, 24), hoy = new Date(); hoy.setHours(0, 0, 0, 0);
    document.getElementById('dias').textContent = Math.floor((hoy - cierre) / 86400000).toLocaleString(LANG_HTML[lang] === 'en' ? 'en-GB' : 'es-ES');
  }

  function pintarTodo() {
    aplicarTextos(); pintarNoticias(); pintarPrensa(); pintarVideos(); pintarRecursos();
    pintarPublicaciones(); pintarReuniones(); pintarDocumentos(); pintarContador();
    // Todos los enlaces que abren otra pestaña lo anuncian a los lectores de pantalla
    document.querySelectorAll('main a[target="_blank"], footer a[target="_blank"]').forEach(function (a) {
      if (!a.querySelector('.sr-only')) a.insertAdjacentHTML('beforeend', nuevaVentana());
    });
  }

  /* ---------- Formularios de Google (vía principal) o correo (alternativa) ---------- */
  [['ENLACE_FORMULARIO_ALTA', 'enlace-alta', 'alta-directa', 'alta-correo'],
   ['ENLACE_FORMULARIO_CONTACTO', 'enlace-contacto', 'contacto-directo', 'contacto-correo']].forEach(function (x) {
    var url = window[x[0]] || '';
    if (/^https:\/\/(forms\.gle|docs\.google\.com)\//.test(url)) {
      document.getElementById(x[1]).href = url;
    } else {
      document.getElementById(x[2]).style.display = 'none';
      var d = document.getElementById(x[3]); d.open = true; d.style.marginTop = '0'; d.querySelector('summary').style.display = 'none';
    }
  });

  document.querySelectorAll('[data-red]').forEach(function (a) {
    var url = (window.REDES || {})[a.dataset.red];
    if (url) a.href = url; else a.parentNode.removeChild(a);
  });

  function enviarPorCorreo(form, asunto, cuerpo) {
    var estado = form.querySelector('.estado');
    if (form.web && form.web.value) return;   // trampa antibots
    var invalido = Array.prototype.find.call(form.querySelectorAll('[required]'), function (c) {
      return c.type === 'checkbox' ? !c.checked : !c.value.trim();
    });
    if (invalido) {
      estado.textContent = invalido.type === 'checkbox' ? t('err_casilla') : t('err_campo');
      estado.classList.add('visible'); invalido.focus(); return;
    }
    window.location.href = 'mailto:' + CORREO + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
    estado.textContent = t('ok_correo') + ' ' + CORREO + '.';
    estado.classList.add('visible');
  }
  document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, tipo = f.tipo.value;
    // «[Web] Tipo:» es la marca que reconoce la automatización del correo (no cambiarla)
    enviarPorCorreo(f, '[Web] ' + tipo + ': ' + f.asunto.value.trim(),
      'Tipo: ' + tipo + '\nNombre: ' + f.nombre.value.trim() + '\nBarrio: ' + (f.barrio.value || '-') +
      '\n\n' + f.mensaje.value.trim() + '\n\n(Enviado desde la web de Entrevies)');
  });
  document.getElementById('form-socios').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    enviarPorCorreo(f, '[Web] Alta: Quiero hacerme socia/o - ' + f.nombre.value.trim(),
      'Hola:\n\nQuiero hacerme socia/o de la Asociación Vecinal Entrevies.\n\nNombre: ' + f.nombre.value.trim() +
      '\nTeléfono: ' + (f.telefono.value.trim() || '-') + '\nBarrio: ' + f.barrio.value +
      (f.comentario.value.trim() ? '\n\nComentario: ' + f.comentario.value.trim() : '') + '\n\n(Enviado desde la web de Entrevies)');
  });

  /* ---------- Cambio de idioma ---------- */
  document.querySelectorAll('.idiomas button').forEach(function (b) {
    b.addEventListener('click', function () { lang = b.dataset.lang; guardar('idioma', lang); pintarTodo(); });
  });

  /* ---------- Accesibilidad ---------- */
  var raiz = document.documentElement, MODOS = ['contraste', 'espaciado', 'subrayar', 'calma'];
  function aplicarAcc() {
    var letra = leer('letra', '0');
    raiz.classList.remove('letra-1', 'letra-2', 'letra-3');
    if (letra !== '0') raiz.classList.add('letra-' + letra);
    document.querySelectorAll('[data-letra]').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.letra === letra); });
    MODOS.forEach(function (m) {
      var on = leer(m, '0') === '1';
      raiz.classList.toggle(m, on);
      var b = document.querySelector('[data-modo="' + m + '"]'); if (b) b.setAttribute('aria-pressed', on);
    });
  }
  document.querySelectorAll('[data-letra]').forEach(function (b) {
    b.addEventListener('click', function () { guardar('letra', b.dataset.letra); aplicarAcc(); });
  });
  document.querySelectorAll('[data-modo]').forEach(function (b) {
    b.addEventListener('click', function () { guardar(b.dataset.modo, leer(b.dataset.modo, '0') === '1' ? '0' : '1'); aplicarAcc(); });
  });
  document.getElementById('acc-reset').addEventListener('click', function () {
    guardar('letra', '0'); MODOS.forEach(function (m) { guardar(m, '0'); }); aplicarAcc();
  });
  var botonAcc = document.getElementById('boton-acc'), panelAcc = document.getElementById('panel-acc');
  botonAcc.addEventListener('click', function () {
    var abrir = panelAcc.hidden; panelAcc.hidden = !abrir; botonAcc.setAttribute('aria-expanded', abrir);
    if (abrir) panelAcc.querySelector('h2').setAttribute('tabindex', '-1'), panelAcc.querySelector('h2').focus();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panelAcc.hidden) { panelAcc.hidden = true; botonAcc.setAttribute('aria-expanded', false); botonAcc.focus(); }
  });

  /* ---------- Menú en móvil ---------- */
  var bm = document.querySelector('.menu-toggle'), nm = document.getElementById('menu');
  bm.addEventListener('click', function () { var a = nm.classList.toggle('abierto'); bm.setAttribute('aria-expanded', a); });
  nm.addEventListener('click', function (e) { if (e.target.closest('a')) { nm.classList.remove('abierto'); bm.setAttribute('aria-expanded', false); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nm.classList.contains('abierto')) { nm.classList.remove('abierto'); bm.setAttribute('aria-expanded', false); bm.focus(); } });

  aplicarAcc();
  pintarTodo();
})();
