import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const canUseMouseEffects = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  window.matchMedia('(min-width: 993px)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const lerp = (start, end, factor) => start + (end - start) * factor;

const MouseEffects = () => {
  const location = useLocation();

  useEffect(() => {
    if (!canUseMouseEffects()) return undefined;

    document.documentElement.classList.add('has-mouse-effects');

    const cursor = document.createElement('div');
    cursor.className = 'mouse-cursor';
    cursor.innerHTML = '<span class="mouse-cursor__dot"></span><span class="mouse-cursor__ring"></span>';
    document.body.appendChild(cursor);

    const spotlight = document.createElement('div');
    spotlight.className = 'mouse-spotlight';
    document.body.appendChild(spotlight);

    const tiltSelector = [
      '.team-member',
      '.practiceArea-card',
      '.practice-card',
      '.publication',
      '.block-item-text',
      '.btn-primary',
    ].join(', ');

    const parallaxSelector = [
      '.associates-right img',
      '.mission-right img',
      '.banner .slide-image img',
    ].join(', ');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let spotlightX = mouseX;
    let spotlightY = mouseY;
    let rafId = 0;
    let hoveringInteractive = false;

    const markInteractive = () => {
      document.querySelectorAll('a, button, .btn, input, textarea, .hamburger, .menu-link').forEach((el) => {
        el.classList.add('mouse-interactive');
      });
    };

    const setupTilt = (el) => {
      if (el.dataset.mouseTiltBound === 'true') return;
      el.dataset.mouseTiltBound = 'true';
      el.classList.add('mouse-tilt');

      const onMove = (event) => {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 10;
        const rotateX = (0.5 - y) * 10;

        el.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
        el.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
        el.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
        el.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
        el.classList.add('is-tilting');
      };

      const onLeave = () => {
        el.style.setProperty('--tilt-x', '0deg');
        el.style.setProperty('--tilt-y', '0deg');
        el.classList.remove('is-tilting');
      };

      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      el._mouseTiltCleanup = () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
        delete el._mouseTiltCleanup;
        delete el.dataset.mouseTiltBound;
      };
    };

    const setupParallax = (el) => {
      if (el.dataset.mouseParallaxBound === 'true') return;
      el.dataset.mouseParallaxBound = 'true';
      el.classList.add('mouse-parallax');

      const parent = el.closest('.associates-right, .mission-right, .banner, .slide-image') || el.parentElement;

      const onMove = (event) => {
        const rect = parent.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(1.04)`;
      };

      const onLeave = () => {
        el.style.transform = 'translate3d(0, 0, 0) scale(1)';
      };

      parent.addEventListener('pointermove', onMove);
      parent.addEventListener('pointerleave', onLeave);
      el._mouseParallaxCleanup = () => {
        parent.removeEventListener('pointermove', onMove);
        parent.removeEventListener('pointerleave', onLeave);
        delete el._mouseParallaxCleanup;
        delete el.dataset.mouseParallaxBound;
      };
    };

    const bindTargets = () => {
      markInteractive();
      document.querySelectorAll(tiltSelector).forEach(setupTilt);
      document.querySelectorAll(parallaxSelector).forEach(setupParallax);
    };

    const onPointerMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.classList.add('is-visible');
      spotlight.classList.add('is-visible');

      const target = event.target;
      hoveringInteractive = Boolean(
        target.closest('a, button, .btn, .mouse-tilt, input, textarea, .hamburger, .menu-link')
      );
      cursor.classList.toggle('is-hover', hoveringInteractive);
    };

    const onPointerLeave = () => {
      cursor.classList.remove('is-visible', 'is-hover');
      spotlight.classList.remove('is-visible');
    };

    const animate = () => {
      cursorX = lerp(cursorX, mouseX, 0.18);
      cursorY = lerp(cursorY, mouseY, 0.18);
      spotlightX = lerp(spotlightX, mouseX, 0.08);
      spotlightY = lerp(spotlightY, mouseY, 0.08);

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      spotlight.style.transform = `translate3d(${spotlightX}px, ${spotlightY}px, 0)`;

      rafId = window.requestAnimationFrame(animate);
    };

    bindTargets();
    // Re-bind shortly after route paint for late content
    const bindTimeout = window.setTimeout(bindTargets, 180);

    document.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.clearTimeout(bindTimeout);
      window.cancelAnimationFrame(rafId);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      document.querySelectorAll('[data-mouse-tilt-bound="true"]').forEach((el) => el._mouseTiltCleanup?.());
      document.querySelectorAll('[data-mouse-parallax-bound="true"]').forEach((el) => el._mouseParallaxCleanup?.());
      cursor.remove();
      spotlight.remove();
      document.documentElement.classList.remove('has-mouse-effects');
    };
  }, [location.pathname]);

  return null;
};

export default MouseEffects;
