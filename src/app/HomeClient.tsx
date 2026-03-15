"use client";

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeClient() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // Desktop Hero
      const tl = gsap.timeline();
      tl.fromTo(`.${styles.heroTitle}`, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' })
        .fromTo(`.${styles.heroSubtitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }, "-=0.8")
        .fromTo(`.${styles.heroButtons}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }, "-=0.8");
      
      // Desktop Scroll Animations
      gsap.utils.toArray('.section').forEach((section: any) => {
        const titles = section.querySelectorAll('.sectionTitle, .sectionSubtitle, h2, p');
        if (titles.length > 0) {
          gsap.fromTo(titles, { y: 40, opacity: 0 }, { 
            y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 85%' }
          });
        }
      });

      // Desktop Cards
      gsap.utils.toArray(`.${styles.grid}`).forEach((grid: any) => {
        if (grid.children.length > 0) {
          gsap.fromTo(grid.children, { y: 50, opacity: 0 }, { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: grid, start: 'top 85%' }
          });
        }
      });

      gsap.fromTo(`.${styles.processStep}`, { x: -50, opacity: 0 }, { 
        x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: `.${styles.processSteps}`, start: 'top 80%' }
      });

      gsap.fromTo(`.${styles.ctaSection}`, { scale: 0.95, opacity: 0 }, { 
        scale: 1, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: `.${styles.ctaSection}`, start: 'top 85%' }
      });
    });

    mm.add("(max-width: 768px)", () => {
      // Mobile Hero (Subtle movement + Stagger)
      const tl = gsap.timeline();
      tl.fromTo(`.${styles.heroTitle}`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        .fromTo(`.${styles.heroSubtitle}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.5")
        .fromTo(`.${styles.heroButtons}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.5");
      
      // Mobile Scroll (Precise viewport feel)
      gsap.utils.toArray('.section').forEach((section: any) => {
        const check = section.querySelectorAll('h2, p, .card, .processStep, .splitGrid > div');
        if(check.length > 0) {
          gsap.fromTo(check, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%' }
          });
        }
      });
    });

    return () => mm.revert();
  }, { scope: container });

  const services = [
    { title: "Debt Financing", icon: "🏛️", desc: "Structured debt capital fueling growth while preserving ownership and financial flexibility." },
    { title: "Capital Raising", icon: "📈", desc: "Connecting businesses with the right funding sources to accelerate growth and expansion." },
    { title: "Private Equity", icon: "🤝", desc: "Aligning companies with institutional and private equity partners for strategic growth." },
    { title: "Strategic Trading", icon: "🌐", desc: "Structured trade facilities (SBLCs, LCs, BGs) to secure transactions and unlock working capital." },
    { title: "Mergers & Acquisitions", icon: "🏢", desc: "Assisting owners and investors in navigating complex business acquisitions or exits." },
    { title: "Investor Relations", icon: "💎", desc: "Building long-term, mutually beneficial relationships between businesses and investors." },
  ];

  const solutions = [
    "Working Capital Loans",
    "Term Loans",
    "Trade Finance",
    "CAPEX Financing",
    "Bank Guarantees"
  ];

  const process = [
    { title: "Strategic Business Assessment", desc: "We evaluate your financial health and capital needs." },
    { title: "Financial Structuring", desc: "Designing a capital structure tailored for resilience and scale." },
    { title: "Capital Strategy", desc: "Mapping out the optimal mix of debt and equity." },
    { title: "Bank & Investor Access", desc: "Leveraging our global network of direct banking relationships." },
    { title: "Execution & Growth Support", desc: "Finalizing transactions and offering ongoing strategic management." },
  ];

  const caseStudies = [
    { title: "$2M Working Capital", desc: "Financing for a major multinational Trading Company." },
    { title: "Commercial Property", desc: "Acquisition Financing for a leading real UAE estate developer." },
    { title: "Debt Restructuring", desc: "Strategic debt restructuring for a large manufacturing business." },
  ];

  return (
    <div className={styles.main} ref={container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Strategic Debt <br /> Solutions</h1>
          <p className={styles.heroSubtitle}>
            Unlocking growth through structured capital. We bridge the gap between ambitious enterprises and global financing markets.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn-secondary" style={{ background: 'var(--secondary)', color: 'white', border: 'none' }}>
              Book Consultation
            </Link>
            <Link href="/contact" className="btn-secondary">
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Global Advisory Services</h2>
          <p className={styles.sectionSubtitle}>
            End-to-end financial and investment solutions tailored for the modern enterprise.
          </p>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Salt Ranges / Bank Solutions */}
      <section className="section" style={{ background: 'var(--background-dark)', borderRadius: '48px', margin: '0 20px' }}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div style={{ padding: '40px 0' }}>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '32px' }}>Why Salt Ranges</h2>
              <p className={styles.cardText} style={{ fontSize: '1.2rem', marginBottom: '32px' }}>
                Delivering bespoke financial strategies with unparalleled institutional expertise and global reach.
              </p>
              <ul className={styles.checkList}>
                <li>
                  <span className={styles.checkIcon}>★</span> Direct Tier-1 banking relationships
                </li>
                <li>
                  <span className={styles.checkIcon}>★</span> Bespoke corporate finance expertise
                </li>
                <li>
                  <span className={styles.checkIcon}>★</span> Global network of institutional investors
                </li>
              </ul>
            </div>
            
            <div className={styles.card} style={{ background: 'var(--primary)', color: 'white', border: 'none' }}>
              <h3 className={styles.cardTitle} style={{ color: 'white', fontSize: '1.8rem' }}>Banking Solutions</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }}>
                {solutions.map((sol, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.1rem' }}>
                    <span style={{ color: 'var(--accent)' }}>✦</span> {sol}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Process */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>The Execution Roadmap</h2>
          <p className={styles.sectionSubtitle}>A structured, strategic approach to securing mission-critical capital.</p>
          
          <div className={styles.processSteps}>
            {process.map((step, index) => (
              <div key={index} className={styles.processStep} style={{ borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div className={styles.stepNumber} style={{ opacity: 0.2 }}>0{index + 1}</div>
                <div className={styles.stepContent}>
                  <h3 style={{ fontSize: '1.4rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '1.05rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white', borderRadius: '48px', margin: '0 20px' }}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Institutional Impact</h2>
          <p className={styles.sectionSubtitle} style={{ color: 'rgba(255,255,255,0.7)' }}>Proven financing transactions delivered across global markets.</p>
          
          <div className={styles.grid}>
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className={styles.card} style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 className={styles.cardTitle} style={{ color: 'white' }}>{caseStudy.title}</h3>
                <p className={styles.cardText} style={{ color: 'rgba(255,255,255,0.8)' }}>{caseStudy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
        <div className={styles.ctaSection} style={{ background: 'var(--gradient-vibrant)', borderRadius: '32px', padding: '120px 40px' }}>
          <h2 className={styles.ctaTitle} style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>Ready to Scale?</h2>
          <Link href="/contact" className="btn-primary" style={{ background: 'var(--primary)', padding: '16px 48px', fontSize: '1.1rem', borderRadius: '100px' }}>
            Book Strategic Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
