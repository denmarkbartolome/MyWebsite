(function () {
  'use strict';
  var doc = document.documentElement, $ = function (s) { return document.querySelector(s); };
  doc.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- EDIT: 17 placeholder certifications ---------- */
  var certifications = [];
  for (var i = 1; i <= 17; i++) {
    certifications.push({
      name: 'Certification Name ' + i,
      issuer: 'Issuing Organization',
      date: 'YYYY-MM',
      credentialId: 'PLACEHOLDER-' + String(i).padStart(2, '0'),
      url: '#',   // replace with verification URL; '#' hides the verify button
      image: ''   // optional, e.g. 'assets/certificates/cert-1.png'
    });

    var certifications = [
  {
    name: 'Introduction to ISO',
    issuer: 'Adal Pilipinas',
    date: 'July 25, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: 'https://link-to-verify-your-credential',
    image: 'assets/icons/certifications1.png'
  },
  {
    name: 'Integrating IoT In Capstone Project',
    issuer: 'Northeastern College',
    date: 'August 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert2.png'
  },
  {
    name: 'Programming Fundamentals',
    issuer: 'Northeastern College',
    date: 'August 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert3.png'
  },
  {
    name: 'Agentic Ai',
    issuer: 'Northeastern College',
    date: 'August 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert4.png'
  },
  {
    name: 'Video Editing Tips And Tricks',
    issuer: 'Northeastern College',
    date: 'August 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert5.png'
  },
  {
    name: 'Introduction to Computer Systems Servicing',
    issuer: 'TESDA',
    date: 'October 1, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert6.png'
  },
  {
    name: 'Installing and Configuring Computer Systems',
    issuer: 'TESDA',
    date: 'October 1, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert7.png'
  },
  {
    name: 'Setting Up Computer Networks',
    issuer: 'TESDA',
    date: 'October 1, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert8.png'
  },
  {
    name: 'Setting Up Computer Servers',
    issuer: 'TESDA',
    date: 'October 1, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert9.png'
  },
  {
    name: 'Maintaning Computer Systems and Networks',
    issuer: 'TESDA',
    date: 'October 1, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert10.png'
  },
  {
    name: 'Exploring IoT with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: 'September 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert11.png'
  },
  {
    name: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: 'September 25, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert12.png'
  },
  {
    name: 'Perform basic operations on numbers in C#',
    issuer: 'Microsoft Learn',
    date: 'September 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert13.png'
  },
  {
    name: 'Write your first C# code',
    issuer: 'Microsoft Learn',
    date: 'September 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert14.png'
  },
  {
    name: 'Calculate final GPA',
    issuer: 'Microsoft Learn',
    date: 'September 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert15.png'
  },
  {
    name: 'Calculate and print student grades',
    issuer: 'Microsoft Learn',
    date: 'September 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert16.png'
  },
  {
    name: 'Perform basic string formatting in C#',
    issuer: 'Microsoft Learn',
    date: 'September 27, 2026',
    credentialId: 'YOUR-CREDENTIAL-ID',
    url: '',
    image: 'assets/icons/cert17.png'
  },

  // add more blocks here, with a comma after each } except the last one
];

  }

  /* ---------- Theme ---------- */
  var toggle = $('#theme-toggle');
  function label() { toggle.setAttribute('aria-label', doc.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'); }
  label();
  toggle.addEventListener('click', function () {
    var next = doc.dataset.theme === 'dark' ? 'light' : 'dark';
    if (!reduce) { doc.classList.add('theme-anim'); setTimeout(function () { doc.classList.remove('theme-anim'); }, 400); }
    doc.dataset.theme = next; label();
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---------- Mobile menu ---------- */
  var nav = $('#nav'), menuBtn = $('#menu-toggle');
  function setMenu(open) { nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Reveal + active nav ---------- */
  document.querySelectorAll('.project, .skills > div, .contact-list li').forEach(function (el, n) {
    el.classList.add('stagger'); el.style.transitionDelay = (n % 4) * 70 + 'ms';
  });
  var revealEls = document.querySelectorAll('.reveal, .stagger');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
    var links = document.querySelectorAll('.nav a');
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { so.observe(s); });
  } else revealEls.forEach(function (el) { el.classList.add('in'); });

  /* ---------- Carousel ---------- */
  var track = $('#track'), dots = $('#dots'), prev = $('#prev'), next = $('#next'), count = $('#count'), car = $('#carousel');
  var per = 3, page = 0, pages = 1, GAP = 16;
  certifications.forEach(function (c, n) {
    var li = document.createElement('li'), b = document.createElement('button');
    b.type = 'button'; b.className = 'card';
    b.setAttribute('aria-label', c.name + ', ' + c.issuer + '. View details');
    b.innerHTML = '<span class="thumb"></span><span class="cap"><strong></strong><span></span></span>';
    var th = b.children[0];
    if (c.image) {
      var im = document.createElement('img'); im.src = c.image; im.alt = ''; im.loading = 'lazy'; im.draggable = false;
      im.onerror = function () { im.remove(); th.innerHTML = '<em>Image not found</em>'; };
      th.appendChild(im);
    } else th.innerHTML = '<em>Certificate image ' + (n + 1) + '</em>';
    b.children[1].children[0].textContent = c.name;
    b.children[1].children[1].textContent = c.issuer + ' · ' + c.date;
    b.addEventListener('click', function () { openCert(c); });
    li.style.display = 'contents'; li.appendChild(b); track.appendChild(li);
  });
  var cards = track.querySelectorAll('.card');
  function perView() { var w = window.innerWidth; return w < 640 ? 1 : w < 1000 ? 2 : 3; }
  function render() {
    var vw = $('.viewport').clientWidth, cw = (vw - (per - 1) * GAP) / per;
    track.style.setProperty('--per', per);
    track.style.transform = 'translateX(' + (-page * per * (cw + GAP)) + 'px)';
    var first = page * per + 1, last = Math.min(first + per - 1, certifications.length);
    count.textContent = first + '–' + last + ' of ' + certifications.length;
    prev.disabled = page === 0; next.disabled = page === pages - 1;
    dots.querySelectorAll('.dot').forEach(function (d, n) { d.setAttribute('aria-current', n === page); });
    cards.forEach(function (c, n) {
      var vis = n >= page * per && n < (page + 1) * per;
      c.tabIndex = vis ? 0 : -1; c.setAttribute('aria-hidden', !vis);
    });
  }
  function build() {
    per = perView(); pages = Math.ceil(certifications.length / per); page = Math.min(page, pages - 1);
    dots.innerHTML = '';
    for (var n = 0; n < pages; n++) (function (n) {
      var d = document.createElement('button'); d.type = 'button'; d.className = 'dot';
      d.setAttribute('aria-label', 'Go to slide ' + (n + 1) + ' of ' + pages);
      d.addEventListener('click', function () { go(n); }); dots.appendChild(d);
    })(n);
    render();
  }
  function go(n) { page = Math.max(0, Math.min(pages - 1, n)); render(); }
  prev.addEventListener('click', function () { go(page - 1); });
  next.addEventListener('click', function () { go(page + 1); });
  car.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') go(page - 1); else if (e.key === 'ArrowRight') go(page + 1);
  });
  var sx = null;
  track.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') sx = e.clientX; });
  track.addEventListener('pointerup', function (e) {
    if (sx === null) return; var dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 50) go(page + (dx < 0 ? 1 : -1));
  });
  track.addEventListener('pointercancel', function () { sx = null; });
  var rt; window.addEventListener('resize', function () {
    clearTimeout(rt); rt = setTimeout(function () { if (perView() !== per) build(); else render(); }, 120);
  });
  build();

  /* ---------- Autoplay (pauses on hover / focus / dialog) ---------- */
  var AUTOPLAY_MS = 3500, paused = false;
  car.addEventListener('mouseenter', function () { paused = true; });
  car.addEventListener('mouseleave', function () { paused = false; });
  car.addEventListener('focusin', function () { paused = true; });
  car.addEventListener('focusout', function () { paused = false; });
  if (!reduce) setInterval(function () {
    if (paused || document.hidden || dlg.open) return;
    go(page === pages - 1 ? 0 : page + 1);
  }, AUTOPLAY_MS);

  /* ---------- Certification dialog ---------- */
  var dlg = $('#cert-dialog'), body = $('#cert-body'), clink = $('#cert-link');
  function openCert(c) {
    $('#cert-title').textContent = c.name; body.innerHTML = '';
    [['Issuer', c.issuer], ['Issued', c.date], ['Credential ID', c.credentialId]].forEach(function (r) {
      var dt = document.createElement('dt'), dd = document.createElement('dd');
      dt.textContent = r[0]; dd.textContent = r[1]; body.append(dt, dd);
    });
    var img = $('#cert-img');
    if (c.image) { img.src = c.image; img.alt = 'Certificate: ' + c.name; img.hidden = false; } else { img.removeAttribute('src'); img.hidden = true; }
    if (c.url && c.url !== '#') { clink.href = c.url; clink.hidden = false; } else clink.hidden = true;
    dlg.showModal();
  }
  $('#cert-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  $('#year').textContent = new Date().getFullYear();

    /* ---------- Hero: typed label + scroll cue ---------- */
  var typed = $('#typed');
  if (typed && !reduce) {
    var full = typed.textContent, k = 0;
    typed.setAttribute('aria-label', full); typed.textContent = ''; typed.classList.add('typing');
    setTimeout(function step() {
      typed.textContent = full.slice(0, ++k);
      if (k < full.length) setTimeout(step, 70);
      else setTimeout(function () { typed.classList.remove('typing'); }, 1400);
    }, 400);
  }
  var cue = $('#scroll-cue');
  window.addEventListener('scroll', function () { cue.classList.toggle('hide', window.scrollY > 80); }, { passive: true });
})();