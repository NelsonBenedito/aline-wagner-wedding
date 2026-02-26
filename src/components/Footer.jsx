import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.content}>
                <div style={styles.leafIcon} className="font-serif">A <span style={{ color: 'var(--color-primary)' }}>&</span> W</div>
                <p style={styles.text}>
                    Aline & Wagner <br />
                    <span style={styles.date}>28 de Março de 2026</span>
                </p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'var(--color-secondary)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    leafIcon: {
        fontSize: '2.5rem',
        marginBottom: '15px',
        letterSpacing: '2px',
    },
    text: {
        fontSize: '1.2rem',
        fontFamily: 'var(--font-sans)',
        fontWeight: '300',
        letterSpacing: '1px',
        lineHeight: '1.6',
    },
    date: {
        color: 'var(--color-primary-light)',
        fontSize: '1rem',
        fontStyle: 'italic',
    }
};

export default Footer;
