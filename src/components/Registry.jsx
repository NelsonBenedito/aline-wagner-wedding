import React, { useState } from 'react';
import { Gift, CreditCard, Plane, QrCode, X } from 'lucide-react';

const Registry = () => {
    const [activeTab, setActiveTab] = useState('gifts'); // 'gifts' or 'pix'
    const [selectedCota, setSelectedCota] = useState(null);
    const [modalTab, setModalTab] = useState('pix'); // 'pix' or 'card'
    const [customAmount, setCustomAmount] = useState('');
    const [copied, setCopied] = useState(false);

    const pixKey = "31987376888"; // Removed spaces so it copies cleanly as a valid PIX key
    const displayPixKey = "31 9 87376888"; // Used for display

    const handleCopy = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const closeModal = () => {
        setSelectedCota(null);
        setModalTab('pix');
        setCustomAmount('');
    };

    const getFinalPrice = () => {
        if (!selectedCota) return '0';
        if (selectedCota.price === 'Valor à sua escolha') {
            return customAmount || '0';
        }
        // Extract numbers from "R$ 100" -> "100"
        return selectedCota.price.replace(/\D/g, '');
    };

    const finalPrice = getFinalPrice();

    const giftsList = [
        'Televisão', 'Sofá', 'Máquina de lavar (frontal)',
        'Roupas de cama, lençol king, cobre-leito king',
        'Toalhas de banho', 'Air Fryer', 'Batedeira',
        'Espremedor de suco', 'Liquidificador', 'Misteira',
        'Jogo de panelas', 'Jogo de pratos', 'Talheres',
        'Taças', 'Panela de arroz', 'Chaleira elétrica'
    ];

    const quotasList = [
        { name: 'Lua de Mel', price: 'R$ 100', icon: '✈️' },
        { name: 'Jantar Romântico', price: 'R$ 150', icon: '🍷' },
        { name: 'Chá de Casa Nova', price: 'R$ 200', icon: '🏡' },
        { name: 'Dia de Spa', price: 'R$ 120', icon: '💆‍♀️' },
        { name: 'Máquina de Café', price: 'R$ 250', icon: '☕' },
        { name: 'Jogo de Panelas', price: 'R$ 300', icon: '🍳' },
        { name: 'Outro Valor', price: 'Valor à sua escolha', icon: '✨' },
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
                                <div
                                    key={idx}
                                    style={styles.cotaCard}
                                    onClick={() => setSelectedCota(cota)}
                                >
                                    <div style={styles.cotaIcon}>{cota.icon}</div>
                                    <h4 style={styles.cotaName}>{cota.name}</h4>
                                    <p style={styles.cotaPrice}>{cota.price}</p>
                                    <span style={styles.presentearBtn}>PRESENTEAR</span>
                                </div>
                            ))}
                        </div>


                    </div>
                )}

                <div style={styles.thankYouBox}>
                    <p>Agradecemos imensamente pela generosidade e por fazer parte
                        deste momento tão importante em nossas vidas.</p>
                </div>

            </div>

            {/* Modal de Pagamento da Cota */}
            {selectedCota && (
                <div style={{ ...styles.modalOverlay, zIndex: 1000 }} onClick={closeModal}>
                    <div style={{ ...styles.modalContent, padding: 0, overflow: 'hidden', maxWidth: '450px', borderRadius: '4px' }} onClick={e => e.stopPropagation()}>

                        {/* Header */}
                        <div style={styles.modalHeader}>
                            <div>
                                <h3 style={styles.modalHeading}>Presentear</h3>
                                <p style={styles.modalSubheading}>{selectedCota.name}</p>

                                {selectedCota.price !== 'Valor à sua escolha' ? (
                                    <p style={styles.modalPriceValue}>{selectedCota.price}</p>
                                ) : (
                                    <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '1.2rem' }}>R$</span>
                                        <input
                                            type="number"
                                            value={customAmount}
                                            onChange={(e) => setCustomAmount(e.target.value)}
                                            placeholder="0,00"
                                            style={styles.customAmountInput}
                                            autoFocus
                                        />
                                    </div>
                                )}
                            </div>
                            <button onClick={closeModal} style={styles.closeButtonAbsolute}>
                                <X size={28} />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div style={styles.modalTabsContainer}>
                            <button
                                type="button"
                                style={modalTab === 'pix' ? styles.modalTabActive : styles.modalTabInactive}
                                onClick={() => setModalTab('pix')}
                            >
                                <QrCode size={16} /> PIX
                            </button>
                            <button
                                type="button"
                                style={modalTab === 'card' ? styles.modalTabActive : styles.modalTabInactive}
                                onClick={() => setModalTab('card')}
                            >
                                <CreditCard size={16} /> Cartão
                            </button>
                        </div>

                        {/* Content */}
                        <div style={styles.modalBody}>
                            {modalTab === 'pix' && (
                                <div style={{ textAlign: 'center', width: '100%' }}>
                                    <div style={styles.qrCodeBox}>
                                        <img src="/qrcode-pix.png" alt="QR Code PIX" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '24px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        Escaneie com o app do seu banco
                                    </p>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <input
                                            type="text"
                                            value={displayPixKey}
                                            readOnly
                                            style={styles.pixKeyInput}
                                        />
                                        <button
                                            onClick={handleCopy}
                                            style={copied ? styles.copyBtnSuccess : styles.copyBtnDefault}
                                        >
                                            {copied ? "Copiado!" : "Copiar Chave"}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {modalTab === 'card' && (
                                <div style={{ textAlign: 'center', width: '100%' }}>
                                    <div style={styles.cardIconBox}>
                                        <CreditCard size={40} color="var(--color-secondary)" />
                                    </div>
                                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '8px' }}>
                                        Pagamento Seguro
                                    </p>
                                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '30px', fontStyle: 'italic' }}>
                                        Processado via InfinitePay
                                    </p>

                                    <a
                                        href={finalPrice === '0' || finalPrice === '' ? '#' : `https://link.infinitepay.io/aline-pires-5h2/VC1DLTItSQ-PLBiQ7KP1-${finalPrice.replace(',', '.')}`}
                                        target={finalPrice === '0' || finalPrice === '' ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        style={finalPrice === '0' || finalPrice === '' ? styles.payBtnDisabled : styles.payBtnActive}
                                    >
                                        Pagar com Cartão (R$ {finalPrice})
                                    </a>

                                    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.65rem', color: 'var(--color-text-light)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        <span style={{ opacity: 0.6 }}>🔒 SSL</span>
                                        <span style={{ opacity: 0.6 }}>🛡️ Seguro</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        width: '100%',
        marginBottom: '40px',
    },
    cotaCard: {
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: 'var(--color-surface)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--color-border)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        borderRadius: '2px', // Slight rounding or sharp like image
    },
    cotaIcon: {
        fontSize: '2.2rem',
        marginBottom: '15px',
        filter: 'grayscale(100%) opacity(80%)',
    },
    cotaName: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.25rem',
        fontWeight: '500',
        color: 'var(--color-secondary)',
        marginBottom: '8px',
    },
    cotaPrice: {
        fontFamily: 'var(--font-sans)',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#1a4e76', // Deep blue from the image
        marginBottom: '30px',
    },
    presentearBtn: {
        fontSize: '0.65rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        color: '#555',
        textTransform: 'uppercase',
        borderBottom: '1px solid #ddd',
        paddingBottom: '2px',
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
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
        backdropFilter: 'blur(5px)',
    },
    modalContent: {
        backgroundColor: 'var(--color-surface)',
        borderRadius: '12px',
        padding: '40px 30px',
        width: '100%',
        maxWidth: '500px',
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
        maxHeight: '90vh',
        overflowY: 'auto',
    },
    modalHeader: {
        backgroundColor: 'rgba(212, 175, 55, 0.05)',
        padding: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        position: 'relative',
    },
    modalHeading: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.8rem',
        color: 'var(--color-secondary)',
        marginBottom: '5px',
    },
    modalSubheading: {
        fontFamily: 'var(--font-serif)',
        color: 'var(--color-text-light)',
        fontStyle: 'italic',
        fontSize: '1rem',
    },
    modalPriceValue: {
        color: 'var(--color-secondary)',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        marginTop: '8px',
    },
    customAmountInput: {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--color-secondary)',
        color: 'var(--color-secondary)',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        width: '100px',
        outline: 'none',
    },
    closeButtonAbsolute: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--color-text-light)',
        transition: 'color 0.3s ease',
    },
    modalTabsContainer: {
        display: 'flex',
        borderBottom: '1px solid var(--color-border)',
    },
    modalTabActive: {
        flex: 1,
        padding: '18px 0',
        fontSize: '0.65rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: 'none',
        borderBottom: '2px solid var(--color-secondary)',
        backgroundColor: 'rgba(212, 175, 55, 0.03)',
        color: 'var(--color-secondary)',
        cursor: 'pointer',
    },
    modalTabInactive: {
        flex: 1,
        padding: '18px 0',
        fontSize: '0.65rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: 'none',
        borderBottom: '2px solid transparent',
        backgroundColor: 'transparent',
        color: 'var(--color-text-light)',
        cursor: 'pointer',
    },
    modalBody: {
        padding: '40px',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrCodeBox: {
        width: '200px',
        height: '200px',
        backgroundColor: 'white',
        margin: '0 auto 30px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '4px solid rgba(212, 175, 55, 0.1)',
        padding: '16px',
        borderRadius: '4px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
        position: 'relative',
    },
    pixKeyInput: {
        flex: 1,
        backgroundColor: 'var(--color-bg)',
        fontSize: '0.65rem',
        fontFamily: 'monospace',
        padding: '12px',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text-light)',
        textAlign: 'center',
        outline: 'none',
    },
    copyBtnDefault: {
        backgroundColor: 'var(--color-secondary)',
        color: 'white',
        border: 'none',
        fontSize: '0.65rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        padding: '12px 24px',
        cursor: 'pointer',
        minWidth: '130px',
        transition: 'background-color 0.3s ease',
    },
    copyBtnSuccess: {
        backgroundColor: '#2e7d32',
        color: 'white',
        border: 'none',
        fontSize: '0.65rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        padding: '12px 24px',
        cursor: 'pointer',
        minWidth: '130px',
        transition: 'background-color 0.3s ease',
    },
    cardIconBox: {
        width: '80px',
        height: '80px',
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px auto',
    },
    payBtnActive: {
        display: 'block',
        width: '100%',
        backgroundColor: 'var(--color-secondary)',
        color: 'white',
        padding: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.75rem',
        textAlign: 'center',
        borderRadius: '2px',
        textDecoration: 'none',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
    },
    payBtnDisabled: {
        display: 'block',
        width: '100%',
        backgroundColor: '#d1d5db',
        color: 'white',
        padding: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.75rem',
        textAlign: 'center',
        borderRadius: '2px',
        textDecoration: 'none',
        cursor: 'not-allowed',
        pointerEvents: 'none',
    }
};

export default Registry;
