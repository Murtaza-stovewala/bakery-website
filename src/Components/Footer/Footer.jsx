import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-credit">
                    <p>DESIGNED BY</p>
                    <h3>MURTAZA STOVE WALA</h3>

                    <a
                        href="https://www.murtazastove.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VIEW PORTFOLIO <span>↗</span>
                    </a>
                </div>

                <div className="footer-brand">
                    <h2>
                        CAKE GALLERY
                        <br />
                        <span>BY ALEFIYA</span>
                    </h2>
                </div>

                <div className="footer-social">
                    <p>FOLLOW US ON</p>

                    <div className="footer-social-links">
                        <a
                            href="https://www.instagram.com/cakegallerybyalefiya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" />
                            </svg>
                        </a>

                        <a
                            href="https://wa.me/919111005253"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.5 11.2a8.5 8.5 0 0 1-12.6 7.4L3 20l1.5-4.7A8.5 8.5 0 1 1 20.5 11.2Z" />
                                <path d="M8.7 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.3 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.4.2-1.1-.3-2.3-.9-3.5-2-1.1-1-1.8-2.2-2-3.5-.1-.5 0-1 .2-1.4Z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}