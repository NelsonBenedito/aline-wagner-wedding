import React from 'react';
import { MapPin, CalendarDays, Clock, UtensilsCrossed } from 'lucide-react';

const Details = () => {
    return (
        <section className="section" style={styles.section}>
            <div className="container" style={styles.container}>

                <div style={styles.invitationBlock}>
                    <h2 style={styles.inviteHeading} className="font-serif">Convite Especial</h2>
                    <p style={styles.inviteText}>
                        Com grande alegria, convidamos você para celebrar um novo começo que Deus preparou para nós.
                    </p>
                    <p style={styles.inviteText}>
                        Cremos no Deus de novos começos, aquele que renova histórias, une caminhos e transforma o amor em propósito.
                    </p>
                    <p style={styles.inviteText}>
                        Diante de Deus e com a bênção de nossas famílias, uniremos nossas vidas em matrimônio
                        e teremos a honra de compartilhar este momento especial com você.
                    </p>
                    <p style={styles.signature} className="font-serif text-primary mt-4">
                        Com amor, <br />
                        <span style={{ fontSize: '1.8rem' }}>Aline & Wagner</span>
                    </p>
                </div>

                <div style={styles.cardContainer}>
                    {/* Ceremony Card */}
                    <div className="card" style={styles.detailCard}>
                        <div style={styles.iconCircle}>
                            <CalendarDays size={28} color="white" />
                        </div>
                        <h3 style={styles.cardTitle}>A Cerimônia</h3>

                        <div style={styles.infoContainer}>
                            <div style={styles.infoRow}>
                                <CalendarDays size={20} style={styles.infoIcon} />
                                <span>Sábado, 28 de Março de 2026</span>
                            </div>
                            <div style={styles.infoRow}>
                                <Clock size={20} style={styles.infoIcon} />
                                <span>11:30h</span>
                            </div>
                            <a
                                href="https://share.google/05bKn4Z7KDdQrm1eF"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ ...styles.infoRow, textDecoration: 'underline', textDecorationColor: 'var(--color-primary-light)', textUnderlineOffset: '4px', cursor: 'pointer', color: 'inherit' }}
                            >
                                <MapPin size={20} style={styles.infoIcon} />
                                <span>Angra Restaurante</span>
                            </a>
                        </div>

                        <p style={styles.subtext}>
                            Sua presença será uma grande alegria em nosso novo capítulo.
                        </p>
                    </div>

                    {/* Reception Card */}
                    <div className="card" style={styles.detailCard}>
                        <div style={styles.iconCircle}>
                            <UtensilsCrossed size={28} color="white" />
                        </div>
                        <h3 style={styles.cardTitle}>A Recepção</h3>
                        <p style={{ textAlign: 'center', marginBottom: '15px' }}>
                            Após a cerimônia, teremos a alegria de compartilhar um momento especial com
                            nossos convidados em um almoço no próprio restaurante.
                        </p>
                        <p style={styles.noticeText}>
                            Informamos, gentilmente, que a recepção será realizada com <strong>comandas individuais</strong>,
                            sendo o consumo de responsabilidade de cada convidado, permitindo que todos
                            escolham livremente suas preferências.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: 'var(--color-bg)',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    },
    container: {
        maxWidth: '1000px',
    },
    invitationBlock: {
        textAlign: 'center',
        marginBottom: '60px',
        maxWidth: '700px',
        margin: '0 auto 60px auto',
    },
    inviteHeading: {
        fontSize: '2.5rem',
        color: 'var(--color-secondary)',
        marginBottom: '30px',
    },
    inviteText: {
        fontSize: '1.2rem',
        color: 'var(--color-text)',
        marginBottom: '15px',
        fontWeight: '300',
        lineHeight: '1.7',
    },
    signature: {
        marginTop: '30px',
        fontStyle: 'italic',
    },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        alignItems: 'stretch',
    },
    detailCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 30px',
    },
    iconCircle: {
        width: '70px',
        height: '70px',
        backgroundColor: 'var(--color-primary)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
    },
    cardTitle: {
        fontSize: '1.8rem',
        marginBottom: '25px',
        color: 'var(--color-secondary)',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '0 auto',
    },
    infoRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        fontSize: '1.1rem',
        justifyContent: 'flex-start',
    },
    infoIcon: {
        color: 'var(--color-primary)',
        marginRight: '12px',
        flexShrink: 0,
    },
    subtext: {
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '0.95rem',
        fontStyle: 'italic',
        color: 'var(--color-text-light)',
    },
    noticeText: {
        backgroundColor: 'var(--color-bg)',
        padding: '15px 20px',
        borderRadius: '8px',
        fontSize: '0.95rem',
        textAlign: 'center',
        color: 'var(--color-secondary)',
        border: '1px solid var(--color-border)',
    }
};

export default Details;
