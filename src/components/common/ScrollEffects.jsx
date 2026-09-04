import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const reveal = (targets, vars = {}) => {
  const elements = gsap.utils.toArray(targets);
  if (!elements.length) return;

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        y: vars.y ?? 48,
        x: vars.x ?? 0,
        scale: vars.scale ?? 1,
      },
      {
        autoAlpha: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: vars.duration ?? 0.9,
        delay: vars.delay ?? 0,
        ease: vars.ease ?? 'power3.out',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: el,
          start: vars.start ?? 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });
};

const revealGroup = (containerSelector, childSelector, vars = {}) => {
  const containers = gsap.utils.toArray(containerSelector);
  if (!containers.length) return;

  containers.forEach((container) => {
    const children = gsap.utils.toArray(childSelector, container);
    if (!children.length) return;

    gsap.fromTo(
      children,
      {
        autoAlpha: 0,
        y: vars.y ?? 40,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: vars.duration ?? 0.75,
        ease: vars.ease ?? 'power3.out',
        stagger: vars.stagger ?? 0.12,
        overwrite: 'auto',
        scrollTrigger: {
          trigger: container,
          start: vars.start ?? 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });
};

const ScrollEffects = () => {
  const location = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    window.scrollTo(0, 0);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const sideOffset = isMobile ? 0 : 48;
    const sideOffsetSm = isMobile ? 0 : 36;

    const ctx = gsap.context(() => {
      reveal('.section-header', { y: 36, duration: 0.8 });
      reveal('.discription-wrap', { y: 42, duration: 0.9 });
      reveal('.page-banner .banner-title', { y: 28, duration: 0.85, start: 'top 95%' });

      reveal('.associates-left', { x: -sideOffset, y: 24, duration: 1 });
      reveal('.associates-right', { x: sideOffset, y: 24, duration: 1, delay: 0.1 });

      reveal('.mission-left', { x: -sideOffsetSm, y: 20, duration: 0.95 });
      reveal('.mission-right', { x: sideOffsetSm, y: 20, duration: 0.95, delay: 0.08 });

      revealGroup('.practice-area .card-container', '.practiceArea-card', {
        stagger: 0.1,
        y: 52,
      });
      revealGroup('.practice-page .card-container', '.practice-card', {
        stagger: 0.1,
        y: 46,
      });
      revealGroup('.team-card', '.team-member', {
        stagger: 0.16,
        y: 56,
        duration: 0.85,
      });
      revealGroup('.publication-content', '.publication', {
        stagger: 0.12,
        y: 36,
      });
      revealGroup('.accordian-read-more', '.block-item-text', {
        stagger: 0.1,
        y: 32,
      });
      revealGroup('.client-section .card-container', '.client-card', {
        stagger: 0.08,
        y: 30,
      });

      reveal('.contact-left', { x: -sideOffsetSm, y: 24, duration: 0.9 });
      reveal('.contact-right', { x: sideOffsetSm, y: 24, duration: 0.9, delay: 0.08 });

      gsap.utils.toArray('.footer-content').forEach((footer) => {
        const children = Array.from(footer.children);
        if (!children.length) return;

        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
            overwrite: 'auto',
            scrollTrigger: {
              trigger: footer,
              start: 'top 92%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      if (!isMobile) {
        gsap.utils.toArray('.banner .slide-image img').forEach((img) => {
          gsap.to(img, {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: '.banner',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }
    });

    const refreshId = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.clearTimeout(refreshId);
      window.removeEventListener('load', onLoad);
      ctx.revert();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollEffects;
