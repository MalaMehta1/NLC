import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationData, siteData } from '../../data';

const titleCase = (value = '') =>
  value
    .replace(/[-_/]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const PageBanner = ({ title: titleProp, subtitle: subtitleProp, image: imageProp }) => {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, '') || '/';
  const bannerConfig = siteData.pageBanner || {};
  const pageConfig = bannerConfig.pages?.[pathname] || {};

  const navLabel = useMemo(() => {
    const match = navigationData.links.find((link) => {
      const linkPath = link.path.replace(/\/$/, '') || '/';
      return linkPath === pathname;
    });
    return match?.label ? titleCase(match.label) : null;
  }, [pathname]);

  const seoTitle = siteData.seo?.pages?.[pathname]?.title;
  const title = titleProp || pageConfig.title || seoTitle || navLabel || 'National Legal Counsel';
  const subtitle =
    subtitleProp ||
    pageConfig.subtitle ||
    siteData.tagline ||
    'Trusted legal counsel across Nepal';
  const image =
    imageProp || pageConfig.image || bannerConfig.defaultImage || siteData.pageBannerImage || '/images/banner-1.jpeg';

  return (
    <section className="page-banner" aria-label={`${title} page banner`}>
      <div className="page-banner__media" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="page-banner__overlay" aria-hidden="true" />

      <div className="page-banner__content container">
        <p className="page-banner__eyebrow">{siteData.firmName}</p>
        <h1 className="page-banner__title">{title}</h1>
        <div className="page-banner__accent" aria-hidden="true" />
        {subtitle ? <p className="page-banner__subtitle">{subtitle}</p> : null}

        <nav className="page-banner__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;
