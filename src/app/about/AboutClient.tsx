"use client";

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutClient() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // Desktop Animations
      gsap.fromTo(`.${styles.headerTitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
      gsap.fromTo(`.${styles.headerSubtitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 });

      gsap.fromTo(`.${styles.statItem}`, { scale: 0.8, opacity: 0 }, { 
        scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.7)', scrollTrigger: { trigger: `.${styles.statsContainer}`, start: 'top 85%' }
      });

      gsap.utils.toArray(`.${styles.mvBox}`).forEach((box: any, i) => {
        gsap.fromTo(box, { x: i % 2 === 0 ? -50 : 50, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: box, start: 'top 85%' }
        });
      });

      gsap.fromTo(`.${styles.profileCard}`, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: `.${styles.leadershipSection}`, start: 'top 85%' }
      });
    });

    mm.add("(max-width: 768px)", () => {
      // Mobile Animations (Dynamic fades)
      gsap.fromTo(`.${styles.headerTitle}`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
      gsap.fromTo(`.${styles.headerSubtitle}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 });
      
      gsap.fromTo(`.${styles.statItem}`, { opacity: 0, scale: 0.9, y: 20 }, { 
        opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.statsContainer}`, start: 'top 85%' }
      });

      gsap.utils.toArray(`.${styles.mvBox}`).forEach((box: any) => {
        gsap.fromTo(box, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: box, start: 'top 85%' }
        });
      });

      gsap.fromTo(`.${styles.profileCard}`, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.leadershipSection}`, start: 'top 85%' }
      });
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <div ref={container}>
      {/* Header & Stats */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.headerTitle}>About Salt Ranges</h1>
          <p className={styles.headerSubtitle}>
            We are a multinational advisory firm helping businesses access capital, bank financing, structure financial strategies, and unlock growth opportunities.
          </p>
          
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>100+</div>
              <div className={styles.statLabel}>Companies Supported</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>7+</div>
              <div className={styles.statLabel}>Financing Solutions</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>Global</div>
              <div className={styles.statLabel}>Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mvSection}>
        <div className={`container ${styles.mvGrid}`}>
          <div className={styles.mvBox}>
            <h2 className={styles.mvTitle}>Our Mission</h2>
            <p className={styles.mvText}>
              To empower businesses with structured financial solutions and seamless access to strategic capital. We believe in providing actionable financial advice that leads to measurable growth, long-term stability, and success across all our international markets.
            </p>
          </div>
          
          <div className={styles.mvBox} style={{ borderLeftColor: 'var(--secondary)' }}>
            <h2 className={styles.mvTitle}>Our Vision</h2>
            <p className={styles.mvText}>
              To become a leading global financial advisory firm, seamlessly connecting ambitious businesses with vast international financing and funding opportunities, while setting the benchmark for transparency, reliability, and corporate excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leadershipSection}>
        <div className="container">
          <h2 className="sectionTitle" style={{ color: 'white' }}>Leadership</h2>
          <p className="sectionSubtitle" style={{ color: '#cbd5e1' }}>
            Guided by industry expertise and financial acumen.
          </p>

          <div className={styles.profileCard}>
            <div className={styles.profileAvatar}>
              <span>HA</span>
            </div>
            <h3 className={styles.profileName}>Haroon Altaf</h3>
            <div className={styles.profileRole}>Capital & Debt Financing Expert</div>
            
            <div className={styles.profileTags}>
              <span className={styles.profileTag}>Corporate Banker</span>
              <span className={styles.profileTag}>Investment Advisor</span>
            </div>
            
            <p style={{ marginTop: '25px', color: '#cbd5e1', lineHeight: '1.6' }}>
              With an extensive background in structured finance and global banking, Haroon Altaf leads Salt Ranges in its mission to match businesses with critical capital and strategic resources.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-gray" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Scale Your Business?</h2>
          <p style={{ margin: '20px 0 40px', color: 'var(--text-light)' }}>
            Let our experts craft the optimal financial structure for your next big leap.
          </p>
          <Link href="/contact" className="btn-primary">Connect With Us</Link>
        </div>
      </section>
    </div>
  );
}
