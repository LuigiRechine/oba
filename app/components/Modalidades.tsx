import "../css/modalidades.css";

export default function Modalidades() {
    return (
        <section className="modalidades">

            <div className="modalidades-header">

                <p className="modalidades-tag">
                    Modalidades
                </p>

                <h2 className="modalidades-title">
                    Explore o universo da OBA
                </h2>

                <p className="modalidades-description">
                    Conheça as principais modalidades e projetos
                    da Olimpíada Brasileira de Astronomia e Astronáutica.
                </p>

            </div>

            <div className="modalidades-cards">

                <div className="modalidade-card">

                    <img
                        src="/oba-card.png"
                        alt="OBA"
                    />

                    <div className="modalidade-content">

                        <h3>OBA</h3>

                        <p>
                            Olimpíada de Astronomia e Astronáutica
                            para estudantes de todo o Brasil.
                        </p>

                        <button>
                            Saiba mais
                        </button>

                    </div>

                </div>

                <div className="modalidade-card">

                    <img
                        src="/obafog-card.jpg"
                        alt="OBAFOG"
                    />

                    <div className="modalidade-content">

                        <h3>OBAFOG</h3>

                        <p>
                            Construção e lançamento de foguetes
                            reais em diferentes níveis.
                        </p>

                        <button>
                            Saiba mais
                        </button>

                    </div>

                </div>

                <div className="modalidade-card">

                    <img
                        src="/jornada-card.jpg"
                        alt="Jornada"
                    />

                    <div className="modalidade-content">

                        <h3>Jornada de Foguetes</h3>

                        <p>
                            Evento nacional para equipes destaque
                            da Olimpíada Brasileira de Foguetes.
                        </p>

                        <button>
                            Saiba mais
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}