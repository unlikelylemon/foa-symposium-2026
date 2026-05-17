/* ─────────────────────────────────────────────────────────────────────
   FOA Symposium 2026 — Interaction Scripts
   ───────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Navigation scroll behaviour ────────────────────────────────── */
  const nav = document.getElementById('nav');
  const scrollIndicator = document.querySelector('.scroll-indicator');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('scrolled', scrolled);
    if (scrollIndicator) scrollIndicator.classList.toggle('hidden', window.scrollY > 80);
  }, { passive: true });

  /* ── Mobile hamburger ────────────────────────────────────────────── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ── Hero parallax (desktop only) ───────────────────────────────── */
  const heroPhoto = document.querySelector('.hero-photo');
  const isMobile = () => window.innerWidth <= 768;

  function heroParallax() {
    if (!heroPhoto || isMobile()) return;
    const scrollY = window.scrollY;
    const heroHeight = document.getElementById('hero')?.offsetHeight || window.innerHeight;
    if (scrollY > heroHeight) return;
    const drift = (scrollY / heroHeight) * 10; // max 10% drift
    heroPhoto.style.transform = `translateY(${drift}%)`;
  }

  window.addEventListener('scroll', heroParallax, { passive: true });
  window.addEventListener('resize', () => {
    if (isMobile() && heroPhoto) heroPhoto.style.transform = '';
  });

  /* ── Scroll-triggered fade-ins ──────────────────────────────────── */
  function initFadeIns() {
    const elements = document.querySelectorAll('[data-fade]');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ── Programme accordion ─────────────────────────────────────────── */
  function initProgramme() {
    document.querySelectorAll('.prog-row:not(.break-row)').forEach(row => {
      row.addEventListener('click', () => {
        const wasOpen = row.classList.contains('open');
        // close siblings in same day block
        row.closest('.prog-rows')?.querySelectorAll('.prog-row.open').forEach(r => {
          if (r !== row) r.classList.remove('open');
        });
        row.classList.toggle('open', !wasOpen);
      });
      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); row.click(); }
      });
    });
  }

  /* ── Speaker overlay close ───────────────────────────────────────── */
  function initSpeakerOverlay() {
    const overlay = document.getElementById('speaker-overlay');
    if (!overlay) return;

    document.querySelector('.overlay-close')?.addEventListener('click', closeSpeakerOverlay);
    overlay.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSpeakerOverlay();
    });
  }

  /* ── Smooth in-page nav ──────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Init on DOMContentLoaded ────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    renderSpeakerIndex();
    initFadeIns();
    initProgramme();
    initSpeakerOverlay();

    // Re-observe after speaker index renders
    setTimeout(() => {
      document.querySelectorAll('[data-fade]:not(.visible)').forEach(el => {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        obs.observe(el);
      });
    }, 100);
  });

})();
