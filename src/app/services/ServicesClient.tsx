"use client";

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServicesClient() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(`.${styles.headerTitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
      gsap.fromTo(`.${styles.headerSubtitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 });

      gsap.fromTo(`.${styles.serviceCard}`, { y: 50, opacity: 0 }, { 
        y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: `.${styles.servicesGrid}`, start: 'top 85%' }
      });

      gsap.fromTo(`.${styles.industryTag}`, { scale: 0.8, opacity: 0 }, { 
        scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)', scrollTrigger: { trigger: `.${styles.industriesGrid}`, start: 'top 85%' }
      });
    });

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(`.${styles.headerTitle}`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
      gsap.fromTo(`.${styles.headerSubtitle}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 });

      gsap.fromTo(`.${styles.serviceCard}`, { opacity: 0, y: 30 }, { 
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.servicesGrid}`, start: 'top 85%' }
      });

      gsap.fromTo(`.${styles.industryTag}`, { opacity: 0, y: 20, scale: 0.9 }, { 
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.industriesGrid}`, start: 'top 85%' }
      });
    });

    return () => mm.revert();
  }, { scope: container });

  const services = [
    {
      title: "Debt Financing",
      icon: "🏛️",
      desc: "Securing strategic debt capital to help businesses scale operations and fund expansion initiatives without diluting ownership."
    },
    {
      title: "Capital Raising",
      icon: "🚀",
      desc: "Connecting businesses with the optimal funding sources. From initial seed capital to Series A and beyond, we accelerate your growth trajectory."
    },
    {
      title: "Private Equity",
      icon: "🤝",
      desc: "Aligning growing companies with institutional and private equity partners who offer strategic, long-term backing alongside funding."
    },
    {
      title: "Trade Facilities",
      icon: "🚢",
      desc: "We provide structured trade facilities such as SBLCs, LCs, and Bank Guarantees (BG) to help businesses secure transactions and unlock working capital."
    },
    {
      title: "Mergers & Acquisitions",
      icon: "🔄",
      desc: "Expertly advising owners, stakeholders, and investors in acquiring, merging, or executing successful business exits."
    },
    {
      title: "Investor Relations",
      icon: "💎",
      desc: "Building long-term, trusted, and mutually beneficial relationships between businesses and their investor networks."
    }
  ];

  const industries = [
    "Real Estate Developers",
    "Startups & SMEs",
    "Construction Companies",
    "Manufacturing",
    "Healthcare",
    "Hospitality",
    "Logistics",
    "Retail Businesses"
  ];

  return (
    <div ref={container}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.headerTitle}>Our <span>Services</span></h1>
          <p className={styles.headerSubtitle}>
            Comprehensive, strategic, and intelligent capital solutions tailored to complex business scenarios in Dubai and global markets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className={`section ${styles.industriesSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sectionTitle">Industries We Serve</h2>
            <p className="sectionSubtitle">
              We leverage our multi-sector expertise to structure capital for companies across a wide range of global industries.
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((ind, idx) => (
              <div key={idx} className={styles.industryTag}>
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ background: 'var(--primary)', padding: '60px 20px', borderRadius: '15px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Need Industry-Specific Capital in Dubai?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Our advisory team is ready to listen to your unique requirements and find the perfect structured debt or equity solution.
          </p>
          <Link href="/contact" className="btn-accent">
            Request an Advisory Session
          </Link>
        </div>
      </section>
    </div>
  );
}
