// import React, { useRef, useState } from 'react';
// import '../assets/styles/Contact.scss';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';
// import Alert from '@mui/material/Alert';  // Import Alert for better UI feedback

// function Contact() {
//     const [name, setName] = useState<string>('');
//     const [email, setEmail] = useState<string>('');
//     const [message, setMessage] = useState<string>('');

//     const [nameError, setNameError] = useState<boolean>(false);
//     const [emailError, setEmailError] = useState<boolean>(false);
//     const [messageError, setMessageError] = useState<boolean>(false);

//     const [responseMessage, setResponseMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

//     const form = useRef();

//     const sendEmail = async (e: React.FormEvent) => {
//         e.preventDefault();

//         // Validation
//         setNameError(name === '');
//         setEmailError(email === '');
//         setMessageError(message === '');

//         if (!name || !email || !message) {
//             setResponseMessage({ type: 'error', text: 'All fields are required.' });
//             return;
//         }

//         const data = { name, email, message };

//         try {
//             const response = await fetch('https://jypyqhroxj.execute-api.us-east-1.amazonaws.com/test/form', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data)
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 setResponseMessage({ type: 'success', text: 'Message sent successfully!' });
//                 setName('');
//                 setEmail('');
//                 setMessage('');
//             } else {
//                 setResponseMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
//             }
//         } catch (error) {
//             setResponseMessage({ type: 'error', text: 'An error occurred. Please try again.' });
//         }
//     };

//     return (
//         <div id="contact">
//             <div className="items-container">
//                 <div className="contact_wrapper">
//                     <h1>Contact Me</h1>
//                     <p>Lets collab.!</p>

//                     {/* Display Success or Error Message */}
//                     {responseMessage && (
//                         <Alert severity={responseMessage.type} sx={{ marginBottom: 2 }}>
//                             {responseMessage.text}
//                         </Alert>
//                     )}

//                     <Box 
//                         ref={form}
//                         component="form"
//                         noValidate
//                         autoComplete="off"
//                         className='contact-form'
//                     >
//                         <div className='form-flex'>
//                             <TextField
//                                 required
//                                 id="outlined-required"
//                                 label="Your Name"
//                                 placeholder="What's your name?"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 error={nameError}
//                                 helperText={nameError ? "Please enter your name" : ""}
//                             />
//                             <TextField
//                                 required
//                                 id="outlined-required"
//                                 label="Email / Phone"
//                                 placeholder="How can I reach you?"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 error={emailError}
//                                 helperText={emailError ? "Please enter your email or phone number" : ""}
//                             />
//                         </div>
//                         <TextField
//                             required
//                             id="outlined-multiline-static"
//                             label="Message"
//                             placeholder="Send me any inquiries or questions"
//                             multiline
//                             rows={10}
//                             className="body-form"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             error={messageError}
//                             helperText={messageError ? "Please enter the message" : ""}
//                         />
//                         <Button
//                             variant="contained"
//                             endIcon={<SendIcon />}
//                             onClick={sendEmail}
//                         >
//                             Send
//                         </Button>
//                     </Box>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;

import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setResponseMessage({ type: 'error', text: 'All fields are required.' });
            return;
        }

        emailjs.sendForm(
            'service_nctcvdq', // replace with your actual EmailJS service ID
            'template_qde3k3d', // replace with your actual EmailJS template ID
            form.current!,
            'xN39mHnXNvYNosFdg' // replace with your EmailJS public key
        ).then(() => {
            setResponseMessage({ type: 'success', text: 'Message sent successfully!' });
            setName('');
            setEmail('');
            setMessage('');
        }, () => {
            setResponseMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        });
    };

    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper">
                    <h1>Contact Me</h1>
                    <p>Let's collab!</p>

                    {responseMessage && (
                        <Alert severity={responseMessage.type} sx={{ marginBottom: 2 }}>
                            {responseMessage.text}
                        </Alert>
                    )}

                    <Box
                        component="form"
                        ref={form}
                        noValidate
                        autoComplete="off"
                        className="contact-form"
                        onSubmit={sendEmail}
                    >
                        <div className="form-flex">
                            <TextField
                                required
                                label="Your Name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                required
                                label="Email / Phone"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <TextField
                            required
                            label="Message"
                            multiline
                            rows={10}
                            name="message"
                            className="body-form"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            type="submit"
                        >
                            Send
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Contact;
