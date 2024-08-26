import { boxSizing, fontFamily, fontSize } from '@mui/system';
import React, { useState } from 'react';
import "./FormularComponent.css"

const FormularComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Zakódování hodnot
        const encodedName = encodeURIComponent(name);
        const encodedEmail = encodeURIComponent(email);
        const encodedMessage = encodeURIComponent(message);

        // URL Google Formuláře
        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf1CpPhky7JAPU4XAzTCaAkSVIV6fBhput12fUCT2mTS_uOug/formResponse";
        const queryString = `?entry.1335097068=${encodedName}&entry.1787652965=${encodedEmail}&entry.67482208=${encodedMessage}&submit=Submit`;
        const finalUrl = googleFormUrl + queryString;

        // Odeslání GET požadavku
        fetch(finalUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: 'no-cors'  // Google Forms neodpovídá, ale odeslání funguje
        }).then(() => {
            alert('Díky za vyplnění formuláře. Brzy se Vám ozvu.');
            setName(''); // Vymazání jména po odeslání
            setEmail(''); // Vymazání e-mailu po odeslání
            setMessage(''); // Vymazání zprávy po odeslání
        }).catch((error) => {
            console.error('Chyba při odesílání formuláře:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <label htmlFor="name" className='label'>Jméno:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
            />

            <label htmlFor="email" className='label'>E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
            />

            <label htmlFor="message" className='label'>Zpráva:</label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={textareaStyle}
            />
            <button type="submit" className='formularButton'>Odeslat</button>
        </form>
    );
};

// Inline stylování (můžete přenést do CSS souboru)

const formStyle = {
    background: 'var(--second-color)',
    padding: '20px 30px',
    borderRadius: '16px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '60rem',
    height: "40rem",
    boxSizing: "border-box",
    margin: '0 100px',
    display: 'flex',
    flexDirection: 'column',
    justifyConent: "start",
    alignItems: "start",
    fontSize: "var(--size-s)",
    fontFamily: "var(--main-font)"
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: "border-box",
    backgroundColor: "#e7f4fc"
};

const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    minHeight: '100px',
    boxSizing: "border-box",
    backgroundColor: "#e7f4fc"
};

export default FormularComponent;
