import React, { useEffect, useState } from 'react'
import "./contact.css"
import theme_pattern from "../../assets/sl.png"
import gmail_icon from "../../assets/gmail.png"
import location_icon from "../../assets/location_icon.svg"
import LinkedIn_icon from "../../assets/LinkedIn.png"
import whatsapp_icon from "../../assets/whatsapp.png"
import emailjs from '@emailjs/browser';

function Contact() {
    const [formStatus, setFormStatus] = useState('');

    // Initialize EmailJS with your user ID (you'll need to get this from EmailJS dashboard)
    useEffect(() => {
        emailjs.init("jq70Sv06gpbpkc2wl"); // Replace with your actual EmailJS user ID
    }, []);

    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            setFormStatus('sending');
            
            // Prepare the template parameters from form data
            const form = event.target;
            const templateParams = {
                from_name: form.name.value,
                from_email: form.email.value,
                message: form.message.value
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                'service_wbpm5oe', // Replace with your EmailJS service ID
                'template_k9mq6yi', // Replace with your EmailJS template ID
                templateParams
            );

            if (response.status === 200) {
                console.log("Success", response);
                setFormStatus('success');
                form.reset(); // Clear the form
                setTimeout(() => setFormStatus(''), 3000); // Clear status after 3 seconds
            } else {
                throw new Error("Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
            setFormStatus('error');
            setTimeout(() => setFormStatus(''), 3000); // Clear status after 3 seconds
        }
    };

    return (
        <div id='Contact' className='contact'>
            <div className="contactTitle">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contactMain">
                <div className="left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take new projects, so feel free to send a message about anything that you want me to work on. You can contact me anytime.</p>

                    <div className="contactInfo">
                        <div className="info">
                            <img className='gmail' src={gmail_icon} alt="" />
                            <p>umerq0875@gmail.com</p>
                        </div>
                        <div className="info">
                            <img className='whatsapp' src={whatsapp_icon} alt="" />
                            <p>03313652280</p>
                        </div>
                        <div className="info">
                            <img src={location_icon} alt="" />
                            <p>Karachi, Pakistan</p>
                        </div>
                        <div className="info">
                            <a href="https://www.linkedin.com/in/umar-naeem-a01633202/" target='_blank' rel="noreferrer">
                                <img className='whatsapp' src={LinkedIn_icon} alt="" />
                                <p>Umar Naeem</p>
                            </a>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="right">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder='Enter your name' required />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='Enter your e-mail' required />
                    
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" id="message" placeholder='Enter your message' required></textarea>
                    
                    <button type="submit" disabled={formStatus === 'sending'}>
                        {formStatus === 'sending' ? 'Sending...' : 'Submit'}
                    </button>
                    
                    {formStatus === 'success' && <p className="success-message">Message sent successfully!</p>}
                    {formStatus === 'error' && <p className="error-message">Failed to send message. Please try again.</p>}
                </form>
            </div>
        </div>
    )
}

export default Contact