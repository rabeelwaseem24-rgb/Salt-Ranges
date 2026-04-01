import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>

        {/* Company Info */}
        <div className={styles.column}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Salt Ranges Logo"
              width={180}
              height={50}
              className={styles.logoImage}
            />
          </Link>
          <p className={styles.description}>
            Empowering businesses with strategic financing, access to capital, and lasting investor relationships.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Quick Links</h3>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        {/* Contact Info */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact Us</h3>
          <div className={styles.contactItem}>
            📍 Meydan Free Zone Dubai
          </div>
          <div className={styles.contactItem}>
            📞 +971 50 210 6095
          </div>
          <div style={{ marginTop: '15px' }} className={styles.contactItem}>
            📍 Calgary, Canada
          </div>
          <div className={styles.contactItem}>
            📞 +1 368 993 3609
          </div>
          <div className={styles.contactItem}>
            ✉️ haroon@salt-ranges.com
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Follow Us</h3>
          <p className={styles.description}>Stay updated with our latest financial insights and news.</p>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/company/salt-ranges/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              in
            </a>
            <a href="https://www.instagram.com/saltranges?utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              ig
            </a>
          </div>
        </div>

      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '15px', textAlign: 'center', lineHeight: '1.5' }}>
          Salt Ranges LLC FZ provides financial advisory and consulting services only. The firm does not provide regulated investment, brokerage, or securities services in any jurisdiction.
        </p>
        <p>&copy; {currentYear} Salt Ranges. All rights reserved.</p>
      </div>
    </footer>
  );
}
