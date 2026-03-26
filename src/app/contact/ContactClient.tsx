"use client";

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactClient() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(`.${styles.headerTitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
      gsap.fromTo(`.${styles.headerSubtitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 });

      gsap.fromTo(`.${styles.infoItem}`, { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: `.${styles.contactInfoBox}`, start: 'top 85%' }
      });

      gsap.fromTo(`.${styles.caseStudyCard}`, { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: `.${styles.caseStudiesList}`, start: 'top 85%' }
      });

      gsap.fromTo(`.${styles.formContainer}`, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: `.${styles.formContainer}`, start: 'top 85%' }
      });
    });

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(`.${styles.headerTitle}`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
      gsap.fromTo(`.${styles.headerSubtitle}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 });

      gsap.fromTo(`.${styles.infoItem}`, { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.contactInfoBox}`, start: 'top 85%' }
      });

      gsap.fromTo(`.${styles.caseStudyCard}`, { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.caseStudiesList}`, start: 'top 85%' }
      });

      gsap.fromTo(`.${styles.formContainer}`, { opacity: 0, y: 35 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.formContainer}`, start: 'top 85%' }
      });
    });

    return () => mm.revert();
  }, { scope: container });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    funding: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0AFunding Required: ${formData.funding}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    // Redirect to mail client
    window.location.href = `mailto:haroon@salt-ranges.com?subject=${subject}&body=${body}`;
  };

  const dealPortfolio = [
    { 
      title: "Oil & Gas | $300M+", 
      desc: "Structured cross-border working capital solutions for a major energy players. Implemented ring-fenced transaction structures to secure substantial credit facilities, across 5 international markets." 
    },
    { 
      title: "Greenfield Project Funding | $200M+", 
      desc: "Provided end-to-end financing for industrial and mixed-use real estate projects in the UAE and KSA including comprehensive advisory from feasibility to disbursement. Structured integrated financing packages combining term loans with working capital." 
    },
    { 
      title: "Healthcare & Education Expansion | $200M+", 
      desc: "Arranged growth financing and debt consolidation for regional healthcare and education providers. Structured innovative waterfall repayment mechanisms on receivable financing using discounting / factoring tools. Facilitated expansion of 10+ facilities across the region." 
    },
    { 
      title: "Real Estate Portfolio Solutions | $400M+", 
      desc: "Executed complex refinancing and buyout transactions for premium GCC real estate assets. Helped number of real estate developers grow in the UAE market by arranging Real Estate Regulatory Authority (RERA) guarantees. Created innovative financing structures to support development projects by discounting receivables of pre sold real estate inventory which enabled the developers to offer post handover payment plans." 
    },
  ];

  return (
    <div ref={container}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.headerTitle}>Contact & <span>Case Studies</span></h1>
          <p className={styles.headerSubtitle}>
            Review our proven track record of successful financing and connect with our advisors to discuss your capital needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className={`container ${styles.pageLayout}`}>

        {/* Left Column: Contact Info & Case Studies */}
        <div>
          <div className={styles.contactInfoBox}>
            <h2 className={styles.contactInfoTitle}>Get in Touch</h2>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div className={styles.infoText}>
                <h4>Global Head Office</h4>
                <p>Meydan Free Zone Dubai</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div className={styles.infoText}>
                <p>+971 50 210 6095</p>
              </div>
            </div>

            <div style={{ marginTop: '30px' }} className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div className={styles.infoText}>
                <h4>Canada Office</h4>
                <p>Calgary, Canada</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div className={styles.infoText}>
                <p>+1 368 993 3609</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>✉️</div>
              <div className={styles.infoText}>
                <h4>Email Us</h4>
                <p><a href="mailto:haroon@salt-ranges.com">haroon@salt-ranges.com</a></p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '60px' }}>
            <h2 className={styles.contactInfoTitle}>Deal Portfolio Highlight</h2>
            <div className={styles.caseStudiesList}>
              {dealPortfolio.map((deal, idx) => (
                <div key={idx} className={styles.caseStudyCard}>
                  <h3 className={styles.caseStudyTitle}>{deal.title}</h3>
                  <p className={styles.caseStudyDesc}>{deal.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <div className={styles.formContainer}>
            <h2 style={{ marginBottom: '30px', color: 'var(--primary)' }}>Book a Consultation</h2>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                <input type="text" id="name" name="name" className={styles.formInput} placeholder="John Doe" required onChange={handleChange} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                <input type="email" id="email" name="email" className={styles.formInput} placeholder="john@company.com" required onChange={handleChange} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>Company Name</label>
                <input type="text" id="company" name="company" className={styles.formInput} placeholder="Your Company" required onChange={handleChange} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="funding" className={styles.formLabel}>Funding Required</label>
                <select id="funding" name="funding" className={styles.formSelect} required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Select approximate amount</option>
                  <option value="Under $1M">Under $1M</option>
                  <option value="$1M - $5M">$1M - $5M</option>
                  <option value="$5M - $20M">$5M - $20M</option>
                  <option value="$20M+">$20M+</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea id="message" name="message" className={styles.formTextarea} placeholder="Briefly describe your capital needs..." required onChange={handleChange}></textarea>
              </div>

              <button type="submit" className={`btn-accent ${styles.submitBtn}`}>
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
