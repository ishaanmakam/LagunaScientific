/* Laguna Scientific motion helpers. Idempotent; safe to load from several sections. */
(function () {
  if (window.__lsMotion) return;
  window.__lsMotion = true;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Reveal on scroll */
  var els = document.querySelectorAll('.ls-reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* Count-up numbers */
  var nums = document.querySelectorAll('[data-count]');
  function run(el) {
    var target = parseInt(el.getAttribute('data-count'), 10), dur = 1200, start = null;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (reduce || !('IntersectionObserver' in window)) {
    nums.forEach(function (n) { n.textContent = parseInt(n.getAttribute('data-count'), 10).toLocaleString(); });
  } else {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io2.unobserve(en.target); } });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io2.observe(n); });
  }

  /* Hero parallax */
  var hero = document.querySelector('.ls-hero__media img');
  if (hero && !reduce) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 600);
        hero.style.transform = 'scale(1.08) translateY(' + (y * 0.12) + 'px)';
        ticking = false;
      });
    }, { passive: true });
  }
})();
