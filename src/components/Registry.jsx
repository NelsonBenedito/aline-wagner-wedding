import React, { useState } from 'react';
import { Gift, CreditCard, Plane, QrCode } from 'lucide-react';

const Registry = () => {
    const [activeTab, setActiveTab] = useState('gifts'); // 'gifts' or 'pix'

    const giftsList = [
        'Televisão', 'Sofá', 'Máquina de lavar (frontal)',
        'Roupas de cama, lençol king, cobre-leito king',
        'Toalhas de banho', 'Air Fryer', 'Batedeira',
        'Espremedor de suco', 'Liquidificador', 'Misteira',
        'Jogo de panelas', 'Jogo de pratos', 'Talheres',
        'Taças', 'Panela de arroz'
    ];

    const quotasList = [
        { name: 'Cota Bronze', price: 'R$ 100,00', icon: '🥉' },
        { name: 'Cota Prata', price: 'R$ 250,00', icon: '🥈' },
        { name: 'Cota Ouro', price: 'R$ 500,00', icon: '🥇' },
        { name: 'Cota Especial', price: 'Valor livre', icon: '✨' },
    ];

    return (
        <section className="section" style={styles.section} id="registry">
            <div className="container" style={styles.container}>

                <h2 className="section-title">Lista de Presentes</h2>
                <p className="section-subtitle">
                    Com gratidão e alegria, preparamos uma lista de sugestões para nos ajudar a iniciar
                    esta nova etapa de nossas vidas e construir, com amor, o nosso lar.
                </p>

                <div style={styles.tabsContainer}>
                    <button
                        style={{ ...styles.tabButton, ...(activeTab === 'gifts' ? styles.activeTab : {}) }}
                        onClick={() => setActiveTab('gifts')}
                    >
                        <Gift size={20} />
                        Sugestões
                    </button>
                    <button
                        style={{ ...styles.tabButton, ...(activeTab === 'pix' ? styles.activeTab : {}) }}
                        onClick={() => setActiveTab('pix')}
                    >
                        <QrCode size={20} />
                        PIX & Cotas
                    </button>
                </div>

                {activeTab === 'gifts' && (
                    <div className="animate-fade-in" style={styles.giftsContainer}>
                        <ul style={styles.giftsList}>
                            {giftsList.map((gift, idx) => (
                                <li key={idx} style={styles.giftItem}>
                                    <div style={styles.giftDot}></div>
                                    {gift}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === 'pix' && (
                    <div className="animate-fade-in" style={styles.pixContainer}>
                        <div style={styles.quotasGrid}>
                            {quotasList.map((cota, idx) => (
                                <div key={idx} className="card" style={styles.cotaCard}>
                                    <div style={styles.cotaIcon}>{cota.icon}</div>
                                    <h4 style={styles.cotaName}>{cota.name}</h4>
                                    <p style={styles.cotaPrice}>{cota.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="card" style={styles.pixBox}>
                            <h3 style={styles.pixTitle}>Contribuição via PIX</h3>
                            <p style={styles.pixDesc}>
                                Copie a chave abaixo ou utilize o formato que for mais conveniente para você.
                            </p>
                            <div style={styles.pixKeyBox}>
                                <span style={styles.pixLabel}>Chave PIX:</span>
                                <span style={styles.pixValue}>[Sua Chave Aqui]</span>
                            </div>
                            <div style={styles.pixKeyBox}>
                                <span style={styles.pixLabel}>Nome:</span>
                                <span style={styles.pixValue}>[Nome do Responsável]</span>
                            </div>
                        </div>

                        <div style={styles.honeymoonBox}>
                            <Plane size={32} color="var(--color-primary)" style={{ marginBottom: '15px' }} />
                            <h3 style={styles.honeymoonTitle}>Lua de Mel</h3>
                            <p style={{ textAlign: 'center', color: 'var(--color-text)' }}>
                                Também aceitamos contribuições para nossa lua de mel, que será muito
                                especial graças ao seu carinho.
                            </p>
                        </div>
                    </div>
                )}

                <div style={styles.thankYouBox}>
                    <p>Agradecemos imensamente pela generosidade e por fazer parte
                        deste momento tão importante em nossas vidas.</p>
                </div>

            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: 'var(--color-surface)',
    },
    container: {
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabsContainer: {
        display: 'flex',
        gap: '20px',
        marginBottom: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    tabButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 30px',
        borderRadius: '30px',
        border: '1px solid var(--color-border)',
        backgroundColor: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: '1.05rem',
        cursor: 'pointer',
        color: 'var(--color-text)',
        transition: 'all 0.3s ease',
    },
    activeTab: {
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        borderColor: 'var(--color-primary)',
    },
    giftsContainer: {
        width: '100%',
        padding: '30px',
        backgroundColor: 'var(--color-bg)',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
    },
    giftsList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
    },
    giftItem: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.1rem',
        color: 'var(--color-secondary)',
        padding: '10px 0',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
    },
    giftDot: {
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--color-primary-light)',
        borderRadius: '50%',
        marginRight: '15px',
        flexShrink: 0,
    },
    pixContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    quotasGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        width: '100%',
        marginBottom: '40px',
    },
    cotaCard: {
        textAlign: 'center',
        padding: '30px 20px',
        borderTop: '4px solid var(--color-primary)',
    },
    cotaIcon: {
        fontSize: '2.5rem',
        marginBottom: '15px',
    },
    cotaName: {
        fontFamily: 'var(--font-sans)',
        fontSize: '1.1rem',
        fontWeight: '500',
        color: 'var(--color-text)',
        marginBottom: '10px',
    },
    cotaPrice: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: 'var(--color-secondary)',
    },
    pixBox: {
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center',
        backgroundColor: 'var(--color-primary-light)',
        border: 'none',
    },
    pixTitle: {
        color: 'var(--color-secondary)',
        marginBottom: '10px',
        fontFamily: 'var(--font-sans)',
        fontWeight: '600',
    },
    pixDesc: {
        fontSize: '0.9rem',
        color: 'var(--color-text)',
        marginBottom: '20px',
    },
    pixKeyBox: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '4px',
        marginBottom: '10px',
        alignItems: 'center',
    },
    pixLabel: {
        fontWeight: '600',
        color: 'var(--color-secondary)',
    },
    pixValue: {
        color: 'var(--color-text)',
        userSelect: 'all',
    },
    honeymoonBox: {
        marginTop: '40px',
        padding: '40px',
        backgroundColor: 'var(--color-bg)',
        borderRadius: '8px',
        border: '1px dashed var(--color-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
    },
    honeymoonTitle: {
        fontFamily: 'var(--font-serif)',
        fontSize: '2rem',
        color: 'var(--color-secondary)',
        marginBottom: '15px',
    },
    thankYouBox: {
        marginTop: '60px',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'var(--color-text-light)',
        fontSize: '1.1rem',
        maxWidth: '600px',
        padding: '20px',
        borderTop: '1px solid var(--color-border)',
    }
};

export default Registry;
