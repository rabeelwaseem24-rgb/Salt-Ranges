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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    let animationFrameId: number;
    const resize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;
      }
    };

    // Particle Mesh Animation Logic
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let particles: any[] = [];
        const particleCount = 80;
        const connectionDistance = 150;

        window.addEventListener('resize', resize);
        resize();

        class Particle {
          x: number;
          y: number;
          vx: number;
          vy: number;
          size: number;

          constructor() {
            this.x = Math.random() * (canvas?.width || 0);
            this.y = Math.random() * (canvas?.height || 0);
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = 2;
          }

          update() {
            this.x += this.vx;
            this.y += this.vy;
            if (canvas) {
              if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
              if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
          }

          draw() {
            if (ctx) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(99, 91, 255, 0.5)';
              ctx.fill();
            }
          }
        }

        const init = () => {
          particles = [];
          for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
          }
        };

        const animate = () => {
          if (!ctx || !canvas) return;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(p => {
            p.update();
            p.draw();
          });
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(99, 91, 255, ${1 - dist / connectionDistance})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
          animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();
      }
    }

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
        if (check.length > 0) {
          gsap.fromTo(check, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%' }
          });
        }
      });
    });

    return () => {
      mm.revert();
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }
    };
  }, { scope: container });

  const services = [
    { title: "Debt Financing", icon: "🏛️", desc: "Secure Bank financing for your business needs to grow, expand, and execute—without giving up equity." },
    { title: "Capital Raising", icon: "📈", desc: "Connecting businesses with the right funding sources to accelerate growth and expansion." },
    { title: "Private Equity", icon: "🤝", desc: "Aligning companies with institutional and private equity partners for strategic growth." },
    { title: "Trade Finance", icon: "🌐", desc: "Trade & Working capital facilities like LC / TR / SBLC / Bill Discounting / BGs" },
    { title: "Mergers & Acquisitions", icon: "🏢", desc: "Assisting owners and investors in navigating complex business acquisitions or exits." },
    { title: "Investor Relations", icon: "💎", desc: "Building long-term, mutually beneficial relationships between businesses and investors." },
  ];

  const solutions = [
    "Banking Solutions – Conventional & Sharia Compliant",
    "CAPEX Loans & Project Finance",
    "Trade & Working Capital Finance",
    "Contracting Finance Bank Guarantees BB/APG/PB",
    "Real Estate Loans for Construction, Buyout & Refinance",
    "Debt Restructuring & Loan rescheduling",
    "Islamic Finance - Ijara, Murabaha & Mudarabah",
    "Bank Account Opening"
  ];

  const process = [
    { title: "Engagement & NDA", desc: "We begin with the signing of the advisory agreement and confidentiality documentation." },
    { title: "Information Review", desc: "Key business, financial, and supporting documents are shared for assessment." },
    { title: "Evaluation & Structuring", desc: "We analyze the opportunity and determine the most suitable funding strategy." },
    { title: "Bank & Investor Engagement", desc: "We approach and negotiate with relevant banks and institutional investors." },
    { title: "Approval & Offer Letter", desc: "Approvals are secured and formal funding terms are issued for review." },
    { title: "Closing & Fund Disbursement", desc: "We manage execution through closing until the transaction is completed and funds are released." },
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
        <canvas ref={canvasRef} className={styles.heroCanvas}></canvas>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Strategic Funding & <br /> Capital Solutions</h1>
          <p className={styles.heroSubtitle}>
            Unlocking growth through structured capital and strategic financing. Connecting ambitious enterprises with global investors and financing partners.
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
          <h2 className={styles.sectionTitle}>Global Financial Advisory</h2>
          <p className={styles.sectionSubtitle}>
            End-to-end financing solutions and capital advisory tailored for modern businesses.
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
                We deliver strategic capital solutions backed by global access and deep expertise
              </p>
              <ul className={styles.checkList}>
                <li>
                  <span className={styles.checkIcon}>★</span> Global Reach – Tie ups with banks, investors, and funding partners worldwide
                </li>
                <li>
                  <span className={styles.checkIcon}>★</span> Financial Expertise – Over 20 years of experience across financing, M&A, and investment solutions
                </li>
                <li>
                  <span className={styles.checkIcon}>★</span> Proven Delivery – Successful execution of complex financial transactions of more that USD 1B
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
                <div className={styles.stepNumber} style={{ opacity: 0.2 }}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                <div className={styles.stepContent}>
                  <h3 style={{ fontSize: '1.4rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '1.05rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="container" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Scale?</h2>
          <Link href="/contact" className={styles.ctaButton}>
            Book Strategic Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
