import { useState } from 'react'

import '../styles/Headline.css'

function Headline() {
    const [buttonText, setButtonText] = useState('Copy Email');
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = () => {
        const email = 'moojntariq@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            setButtonText('Copied !!!!!!');
            setIsCopied(true);
            setTimeout(() => {
                setButtonText('Copy Email');
                setIsCopied(false);
            }, 1000);
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    };

    return (
        <>
            <div className='headline'>
                <h1>Helping clients build innovative, efficient solutions fast.</h1>
                <p>If you're an early-stage founder, SaaS owner, or indie-maker seeking efficient and innovative solutions, I'd love to collaborate.</p>
                <p>Let's build something amazing together!</p>
            </div>
            <div className='call-to-action'>
                <button id='contact'>Collaborate Now</button>
                <button id='email' className={isCopied ? 'copied' : ''} onClick={handleCopyEmail}>{buttonText}</button>
            </div>
        </>
    )
}

export default Headline
