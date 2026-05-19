import "../css/navbar.css"
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="nav-group">
            <div className="nav">
                <Link href="/">
                    <img
                        src="/logoOBA.png"
                        alt="Logo OBA"
                        className="logo"
                    />
                </Link>
                <div className="nav-sections">

                    <div className="dropdown">
                        <p className="sec">Sobre</p>

                        <div className="dropdown-menu">
                            <p>Quem somos</p>
                            <p>Histórico</p>
                            <p>Cronograma</p>
                            <p>Datas importantes</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <p className="sec">Modalidades</p>

                        <div className="dropdown-menu">
                            <p>OBA</p>
                            <p>OBAFOG</p>
                            <p>Jornada de Foguetes</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <p className="sec">Resultados</p>

                        <div className="dropdown-menu">
                            <p>Resultado 2025</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <p className="sec">Documentos</p>

                        <div className="dropdown-menu">
                            <p>Regulamentos</p>
                            <p>Provas e Gabaritos</p>
                            <p>Materiais de Estudo</p>
                            <p>Mídia e Divulgação</p>
                            <p>Downloads</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <p className="sec">Projetos</p>

                        <div className="dropdown-menu">
                            <p>EREA</p>
                            <p>OLAA</p>
                            <p>Olimpíadas Internacionais</p>
                            <p>Seletivas</p>
                            <p>Instituições</p>
                            <p>Planetário</p>
                        </div>
                    </div>

                    <button className="school-btn">
                        Área das escolas
                    </button>

                </div>

                <Link href="/">
                    <img
                        src="/logoOBAFOG.png"
                        alt="Logo OBAFOG"
                        className="logo"
                    />
                </Link>
            </div>
        </nav>
    );
}
