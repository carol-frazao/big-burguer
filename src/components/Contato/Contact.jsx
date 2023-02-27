import { useState, useEffect } from 'react'
import { FaTelegram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
    // for inputs
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [mensagem, setMensagem] = useState()
    // for errors on inputs
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const [formInvalid, setFormInvalid] = useState(false)

    const Feedback = ({error}) => <i style={{color: 'red', fontSize: '12px'}}> {error} </i>

    const validaNome = () => {
        if (nome && nome.length < 3) {
            setErrorName('O nome deve ter no mínimo 3 caracteres')
            setFormInvalid(true)
        } else setFormInvalid(false)
    }
    const validaEmail = () => {
        if (email && (email.indexOf('@') === -1 || email.indexOf('.') === -1)) {
            setErrorEmail('Formato de e-mail inválido')
            setFormInvalid(true)
        } else setFormInvalid(false)
    }
    const validaMensagem = () => {
        if (mensagem && mensagem.length < 10) {
            setErrorMsg('Sua mensagem deve ter no mínimo 10 caracteres')
            setFormInvalid(true)
        } else setFormInvalid(false)
    }

    const handleSubmit = (e) => {
        if (formInvalid) e.preventDefault()
    }

    useEffect(() => {
        if ( (nome && nome.length >= 3) || !nome) setErrorName('')
        if ( (email && (email.indexOf('@') !== -1 || email.indexOf('.') !== -1)) || !email) setErrorEmail('')
        if ( (mensagem && mensagem.length >= 10) || !mensagem) setErrorMsg('')
    }, [nome, email, mensagem])

    return (
        <section className="contact section" id="contact">
            <div className="contact-container">
                <h1 className="title-section"> Contato </h1>

                <div className="phones">
                    <a
                    className="tel"
                    href='/'
                    onClick={(e) => {
                        e.preventDefault()
                        alert('Redireciona para a chamada')
                    }}>
                        <FaPhoneAlt/>
                        (11) XXXX-XXXX
                    </a>
                    <a
                    className="wpp"
                    href='/'
                    onClick={(e) => {
                        e.preventDefault()
                        alert('Redireciona para o whatsapp')
                    }}>

                        <FaWhatsapp/>
                        (11) 9XXXX-XXXX
                    </a>
                    <a
                    className="telegram"
                    href='/'
                    onClick={(e) => {
                        e.preventDefault()
                        alert('Redireciona para o telegram')
                    }}>
                        <FaTelegram/>
                        (11) 9XXXX-XXXX
                    </a>
                </div>

                <hr />

                <span> OU </span>

                <div className="form-container d-flex direction-column align-items-center">
                    <form className="form" name='form-contact' onSubmit={e => handleSubmit(e)}>
                        <div className="input-name label-float">
                            <input
                            type="text"
                            name="name"
                            id="name"
                            className='w-100'
                            placeholder=' '
                            value={nome}
                            onChange={e => setNome((e.target.value).replace(/\d/, ''))}
                            onBlur={validaNome}
                            required
                            />
                            <label htmlFor="name">Nome</label>
                            <Feedback error={errorName}/>
                        </div>
                        <div className="input-email m-top-8 label-float">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            className='w-100'
                            placeholder=' '
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onBlur={validaEmail}
                            required/>
                            <label htmlFor="email">Email</label>
                            <Feedback error={errorEmail}/>
                        </div>
                        <div className="input-assunto m-top-8 label-float">
                            <input type="text" name="assunto" id="assunto" className='w-100' placeholder=' ' required/>
                            <label htmlFor="name">Assunto</label>
                        </div>
                        <div className="input-mensagem m-top-8 label-float">
                            <textarea
                            name="mensagem"
                            id="mensagem"
                            cols="30" rows="10"
                            className='w-100'
                            placeholder=' '
                            value={mensagem}
                            onChange={e => setMensagem(e.target.value)}
                            onBlur={validaMensagem}
                            required/>
                            <label htmlFor="mensagem" className='label-msg'>Mensagem</label>
                            <Feedback error={errorMsg}/>
                        </div>
                        <button type="submit" className='w-100 m-top-10'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact