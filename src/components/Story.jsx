import React from 'react';
import { HeartHandshake } from 'lucide-react';

const Story = () => {
    return (
        <section className="section" style={styles.section}>
            <div className="container" style={styles.container}>

                <div style={styles.leafIconContainer}>
                    <HeartHandshake size={48} strokeWidth={1} style={{ color: 'var(--color-primary)' }} />
                </div>

                <h2 className="section-title">Nosso Propósito</h2>

                <div style={styles.contentBlock}>
                    <p style={styles.paragraph}>
                        Nosso Deus é Deus dos novos começos. Mesmo quando tudo parece perdido,
                        Ele traz esperança, restauração e uma nova oportunidade de viver segundo
                        Sua vontade. A cada amanhecer, Deus nos convida a recomeçar, deixando para
                        trás o passado e confiando no futuro que Ele prepara.
                    </p>
                    <p style={styles.paragraph}>
                        A Bíblia declara que o amor de Deus renova nossas forças e nos dá a chance de
                        uma nova história. Ele transforma a dor em aprendizado, o sofrimento em crescimento
                        e os erros em testemunhos de Sua graça. Deus não nos define pelo que fomos,
                        mas pelo que podemos nos tornar em Suas mãos; Ele usa a nossa vida como testemunho
                        do Seu amor e para o louvor da Sua glória.
                    </p>

                    <div style={styles.bibleVerseBox}>
                        <span style={styles.quoteIcon}>"</span>
                        <p style={styles.bibleVerseText}>Vejam, estou fazendo uma coisa nova!</p>
                        <p style={styles.bibleVerseRef}>— Isaías 43:19a</p>
                    </div>

                    <p style={styles.paragraph}>
                        Isso nos ensina que Deus sempre está agindo, criando novos caminhos onde não
                        vemos saída. Deus é especialista em recomeços.
                    </p>

                    <div style={styles.dateMet}>
                        <span style={styles.dateIcon}>♡</span> Nos conhecemos no dia 05 de Setembro
                    </div>
                </div>

            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: 'var(--color-surface)',
        position: 'relative',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '800px',
    },
    leafIconContainer: {
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
    },
    contentBlock: {
        marginTop: '30px',
        textAlign: 'center',
        color: 'var(--color-text)',
        fontSize: '1.1rem',
        lineHeight: '1.8',
    },
    paragraph: {
        marginBottom: '20px',
        fontWeight: '300',
    },
    bibleVerseBox: {
        margin: '40px 0',
        padding: '30px',
        backgroundColor: 'var(--color-bg)',
        borderLeft: '4px solid var(--color-primary)',
        borderRight: '4px solid var(--color-primary)',
        position: 'relative',
        borderRadius: '4px',
    },
    quoteIcon: {
        fontFamily: 'var(--font-serif)',
        fontSize: '4rem',
        color: 'var(--color-primary-light)',
        position: 'absolute',
        top: '-15px',
        left: '20px',
        lineHeight: '1',
    },
    bibleVerseText: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem',
        color: 'var(--color-secondary)',
        fontStyle: 'italic',
        position: 'relative',
        zIndex: 2,
        marginBottom: '10px',
    },
    bibleVerseRef: {
        fontSize: '0.9rem',
        color: 'var(--color-text-light)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    dateMet: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px',
        padding: '10px 20px',
        border: '1px solid var(--color-border)',
        borderRadius: '50px',
        color: 'var(--color-secondary)',
        fontStyle: 'italic',
        fontSize: '1.05rem',
    },
    dateIcon: {
        color: 'var(--color-primary)',
        fontSize: '1.2rem',
    }
};

export default Story;
