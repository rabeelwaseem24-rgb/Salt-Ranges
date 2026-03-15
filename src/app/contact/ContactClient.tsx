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
    window.location.href = `mailto:info@salt-ranges.com?subject=${subject}&body=${body}`;
  };

  const caseStudies = [
    { title: "$2M Working Capital Financing", desc: "Secured for a rapidly growing trading company in Dubai, allowing them to expand operations and handle larger transaction volumes seamlessly." },
    { title: "Commercial Property Acquisition", desc: "Complex financing structured for a leading real estate developer to acquire prime commercial property in the UAE." },
    { title: "Strategic Debt Restructuring", desc: "Complete financial reorganization and debt restructuring for a major manufacturing business, improving cash flow by 40%." },
  ];

  return (
    <div ref={container}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.headerTitle}>Contact & <span>Case Studies</span></h1>
          <p className={styles.headerSubtitle}>
            Review our proven track record of successful financing and connect with our advisors in Dubai or Canada to discuss your capital needs.
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
                <h4>Dubai Office</h4>
                <p>Meydan Free Zone, Dubai</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div className={styles.infoText}>
                <h4>Phone Numbers</h4>
                <p>Dubai: +971 50 210 6095</p>
                <p>Canada: +1 368 993 3609</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>✉️</div>
              <div className={styles.infoText}>
                <h4>Email Us</h4>
                <p><a href="mailto:info@salt-ranges.com">info@salt-ranges.com</a></p>
                <p><a href="mailto:Haroon@salt-ranges.com">Haroon@salt-ranges.com</a></p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '60px' }}>
            <h2 className={styles.contactInfoTitle}>Proven Results</h2>
            <div className={styles.caseStudiesList}>
              {caseStudies.map((cs, idx) => (
                <div key={idx} className={styles.caseStudyCard}>
                  <h3 className={styles.caseStudyTitle}>{cs.title}</h3>
                  <p className={styles.caseStudyDesc}>{cs.desc}</p>
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
