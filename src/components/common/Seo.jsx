import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteData } from '../../data';

const upsertMeta = (attr, key, content) => {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  if (!href) return;
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const Seo = () => {
  const { pathname } = useLocation();
  const seo = siteData.seo || {};
  const page = seo.pages?.[pathname] || {};

  useEffect(() => {
    const title = page.title
      ? (pathname === '/' ? page.title : (seo.titleTemplate || '%s | National Legal Counsel').replace('%s', page.title))
      : seo.defaultTitle || siteData.firmName;

    const description = page.description || seo.defaultDescription || '';
    const siteUrl = (seo.siteUrl || '').replace(/\/$/, '');
    const canonical = `${siteUrl}${pathname === '/' ? '/' : pathname}`;
    const image = seo.ogImage?.startsWith('http')
      ? seo.ogImage
      : `${siteUrl}${seo.ogImage || '/images/logo.png'}`;
    const keywords = Array.isArray(seo.keywords) ? seo.keywords.join(', ') : seo.keywords;

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'author', seo.author || siteData.firmName);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', siteData.firmName);
    upsertMeta('property', 'og:locale', seo.locale || 'en_NP');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:site', seo.twitterHandle || '');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    upsertLink('canonical', canonical);
  }, [pathname, page.title, page.description, seo]);

  return null;
};

export default Seo;
