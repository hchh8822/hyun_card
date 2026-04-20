'use strict';

/* ═══════════════════════════════════════════════
   HYUN 자산 경영 전략실 — Digital Business Card
   main.js
═══════════════════════════════════════════════ */

(function init() {
  const card = document.getElementById('card');
  if (!card) return;

  /* Skip animation for users who prefer reduced motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    card.classList.add('is-ready');
    return;
  }

  /* Entrance: slight delay ensures paint is complete before animating in */
  requestAnimationFrame(function () {
    setTimeout(function () {
      card.classList.add('is-ready');
    }, 60);
  });
})();
