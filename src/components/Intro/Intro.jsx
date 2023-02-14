import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <section className="intro" id='intro'>
            <div className="intro-description">
                <div>
                    <strong> Gigante </strong>
                    <strong> Gostoso </strong>
                    <strong> Irresistível </strong>
                </div>

                <span>
                    Experimente o melhor hambúrguer de São Paulo. <br/> Viva essa experiência!
                </span>

                <button>
                    <Link to='/burguers'>Conheça nossos produtos</Link>
                </button>
            </div>
            <div className="burguer-img">
                <img src="/images/burguer-img.png" alt="Burguer Img" />
            </div>
        </section>
    )
}

export default Inicio