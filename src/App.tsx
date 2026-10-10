/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { SEO_PAGE_METADATA } from './data/businessData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SitemapModal } from './components/SitemapModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { OfficeCleaningPage } from './pages/OfficeCleaningPage';
import { JanitorialServicesPage } from './pages/JanitorialServicesPage';
import { MedicalDentalPage } from './pages/MedicalDentalPage';
import { RetailEducationPage } from './pages/RetailEducationPage';
import { GreenCleaningPage } from './pages/GreenCleaningPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<PageRoute>(() => {
    const path = window.location.pathname as PageRoute;
    if (path in SEO_PAGE_METADATA) {
      return path;
    }
    return '/';
  });

  const [sitemapOpen, setSitemapOpen] = useState(false);

  // Sync route and update page title/meta description
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      if (path in SEO_PAGE_METADATA) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Dynamic SEO update per page
    const metaInfo = SEO_PAGE_METADATA[currentPath] || SEO_PAGE_METADATA['/'];
    if (metaInfo) {
      document.title = metaInfo.title;
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) {
        descMeta.setAttribute('content', metaInfo.desc);
      }
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute('content', metaInfo.title);
      }
      const ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (ogDescMeta) {
        ogDescMeta.setAttribute('content', metaInfo.desc);
      }
    }

    // Scroll to top upon route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);

  const navigateTo = (path: PageRoute) => {
    setCurrentPath(path);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/services':
        return <ServicesOverviewPage onNavigate={navigateTo} />;
      case '/services/office-cleaning':
        return <OfficeCleaningPage onNavigate={navigateTo} />;
      case '/services/janitorial':
        return <JanitorialServicesPage onNavigate={navigateTo} />;
      case '/services/medical-dental':
        return <MedicalDentalPage onNavigate={navigateTo} />;
      case '/services/retail-education':
        return <RetailEducationPage onNavigate={navigateTo} />;
      case '/services/green-cleaning':
        return <GreenCleaningPage onNavigate={navigateTo} />;
      case '/service-areas':
        return <ServiceAreasPage onNavigate={navigateTo} />;
      case '/quote':
        return <QuotePage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/privacy-policy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F8] text-[#1F2937] selection:bg-[#10243A] selection:text-white">
      {/* 1. Header with Top Bar Contract */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 3. Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenSitemap={() => setSitemapOpen(true)}
      />

      {/* Sitemap Dialog */}
      <SitemapModal
        isOpen={sitemapOpen}
        onClose={() => setSitemapOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}
