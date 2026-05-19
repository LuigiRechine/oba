import "../css/hero.css";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <p className="hero-tag">
                    
                </p>

                <h1 className="hero-title">
                    Olimpíada Brasileira de Astronomia e Astronáutica
                </h1>

                <p className="hero-description">
                    Explore o universo através da ciência,
                    da astronomia, da astronáutica e
                    do lançamento de foguetes.
                </p>

                <div className="hero-buttons">

                    <button className="hero-btn-primary">
                        Inscrever escola
                    </button>

                    <button className="hero-btn-secondary">
                        Conhecer modalidades
                    </button>

                </div>

            </div>

        </section>
    );
}
