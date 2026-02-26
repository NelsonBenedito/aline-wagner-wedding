import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={styles.heroSection}>
      <div className="hero-overlay" style={styles.overlay}></div>
      <div className="hero-content" style={styles.content}>
        <div style={styles.subtitle} className="animate-slide-up delay-100 font-sans">
          COM A BÊNÇÃO DE DEUS E DE NOSSAS FAMÍLIAS
        </div>
        <h1 style={styles.title} className="animate-fade-in delay-200">
          Aline <span style={styles.ampersand}>&</span> Wagner
        </h1>
        <div style={styles.dateBadge} className="animate-slide-up delay-300">
          <Calendar size={20} style={{marginRight: '8px', color: 'var(--color-primary)'}} />
          <span>28 de Março de 2026</span>
        </div>
        <div style={styles.locationContainer} className="animate-slide-up delay-400">
           <MapPin size={18} style={{marginRight: '6px', color: 'white'}} />
           <span>Angra Restaurante, 11:30h</span>
        </div>
        <div style={styles.scrollDown} className="animate-fade-in delay-500">
           <span style={styles.scrollText}>Role para descobrir</span>
           <div style={styles.scrollLine}></div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.55)', /* Dark overlay for text readability */
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px',
  },
  subtitle: {
    color: '#D4AF37', /* Gold */
    letterSpacing: '3px',
    fontSize: '0.9rem',
    marginBottom: '20px',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 'clamp(4rem, 8vw, 7rem)',
    fontFamily: 'var(--font-script)', /* Great Vibes */
    lineHeight: '1',
    margin: '0',
    textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
  },
  ampersand: {
    color: 'var(--color-primary)',
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    margin: '0 10px',
    verticalAlign: 'middle',
  },
  dateBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: '12px 30px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '30px',
    color: 'white',
    fontWeight: '500',
    marginTop: '40px',
    fontSize: '1.2rem',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    color: '#E8E2D9',
    marginTop: '15px',
    fontSize: '1.2rem',
    fontWeight: '300',
  },
  scrollDown: {
    position: 'absolute',
    bottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollText: {
    color: 'white',
    fontSize: '0.8rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '15px',
  },
  scrollLine: {
    width: '1px',
    height: '60px',
    backgroundColor: 'var(--color-primary)',
    position: 'relative',
  }
};

export default Hero;
