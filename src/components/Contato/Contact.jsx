
import { FaTelegram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="contact-container">
                <h1 className="title-section"> Contato </h1>

                <div className="phones">
                    <a className="tel" onClick={() => alert('Redireciona para a chamada')}>
                        <FaPhoneAlt/>
                        (11) XXXX-XXXX
                    </a>
                    <a className="wpp" onClick={() => alert('Redireciona para o Whatsapp')}>
                        <FaWhatsapp/>
                        (11) 9XXXX-XXXX
                    </a>
                    <a className="telegram" onClick={() => alert('Redireciona para o Telegram')}>
                        <FaTelegram/>
                        (11) 9XXXX-XXXX
                    </a>
                </div>

                <hr />

                <span> OU </span>

                <div className="form-container d-flex direction-column align-items-center">
                    <form className="form w-50" name='form-contact' onSubmit={e => e.preventDefault()}>
                        <div className="input-name label-float">
                            <input type="text" name="name" id="name" className='w-100' placeholder=' ' required/>
                            <label htmlFor="name">Nome</label>
                        </div>
                        <div className="input-assunto m-top-8    label-float">
                            <input type="text" name="assunto" id="assunto" className='w-100' placeholder=' ' required/>
                            <label htmlFor="name">Assunto</label>
                        </div>
                        <div className="input-email m-top-8 label-float">
                            <input type="email" name="email" id="email" className='w-100' placeholder=' ' required/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-mensagem m-top-8 label-float">
                            <textarea name="mensagem" id="mensagem" cols="30" rows="10" className='w-100' placeholder=' ' required></textarea>
                            <label htmlFor="mensagem" className='label-msg'>Mensagem</label>
                        </div>
                        <button type="submit"className='w-100 m-top-10'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact