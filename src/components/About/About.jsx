import { MdLocationOn } from 'react-icons/md'

const About = () => {
    return (
        <section className="about-us section" id="about-us">
            <div className="about-container">
                <h1 className="title-section"> Sobre nós </h1>
                <div className="store-image">
                    <img src="images/loja-photo.png" alt="Imagem da loja"/>
                </div>
                <p className="store-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio debitis obcaecati doloremque odio aperiam! Iusto cupiditate inventore architecto. Saepe repellendus perspiciatis nobis odit ad magni harum illum, tempore optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo cum quas placeat delectus, pariatur officia culpa veniam repellat, nisi doloribus illum voluptas alias! Quas nam corrupti cumque eveniet minus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil perspiciatis perferendis? Sequi repellendus saepe perferendis. Vel assumenda sequi expedita dicta perferendis. Quisquam sunt odit praesentium aut nemo at aperiam.
                </p>
                <hr/>
                <div className="store-location">
                    <h2> Visite nossa loja </h2>
                    <div className="location">
                        <div className="iframe">
                            <iframe title='fake-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11923.864085496709!2d-46.64516638760085!3d-23.544926705666168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5853d96a1441%3A0xebba5cad95ff31bb!2sZona%20Central%20de%20S%C3%A3o%20Paulo%20-%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001037-010!5e0!3m2!1spt-PT!2sbr!4v1676403573569!5m2!1spt-PT!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='address'>
                            <span className="text-address">
                                <MdLocationOn/>
                                Rua Example, nº 10, São Paulo/SP - CEP 01001-001
                            </span>
                            <div className='rotas'>
                                <span>
                                    <a href="/">
                                        <img src="images/icons/waze-icon.png" alt="Waze" className='waze'/>
                                    </a>
                                    Veja no Waze
                                </span>
                                <span>
                                    <a href="/">
                                        <img src="images/icons/google-maps-icon.png" alt="Google Maps" className='google-maps'/>
                                    </a>
                                    Veja no Google Maps
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About