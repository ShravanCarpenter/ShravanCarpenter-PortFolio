import React, { useState } from 'react';
import { Instagram, Linkedin, Github, Mail, Phone, MapPin, Send, Check, AlertTriangle } from 'lucide-react';
import './Contact.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        errorMessage: ''
    });

    const WEB3FORMS_ACCESS_KEY = 'a95b4375-d64f-47fe-98de-49b74c4bf536';

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Reset specific field validation on typing
        if (formStatus.isError) {
            setFormStatus(prev => ({
                ...prev,
                isError: false,
                errorMessage: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs
        if (!formData.name.trim()) {
            setFormStatus({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: 'Please enter your name'
            });
            return;
        }

        if (!validateEmail(formData.email)) {
            setFormStatus({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: 'Please enter a valid email address'
            });
            return;
        }

        if (!formData.message.trim()) {
            setFormStatus({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: 'Please enter a message'
            });
            return;
        }

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('access_key', WEB3FORMS_ACCESS_KEY);
        formDataToSubmit.append('name', formData.name);
        formDataToSubmit.append('email', formData.email);
        formDataToSubmit.append('message', formData.message);

        formDataToSubmit.append('subject', 'New Contact Form Submission');

        setFormStatus({
            isSubmitting: true,
            isSuccess: false,
            isError: false,
            errorMessage: ''
        });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSubmit
            });

            const result = await response.json();

            if (result.success) {
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

                setFormStatus({
                    isSubmitting: false,
                    isSuccess: true,
                    isError: false,
                    errorMessage: ''
                });

                setTimeout(() => {
                    setFormStatus({
                        isSubmitting: false,
                        isSuccess: false,
                        isError: false,
                        errorMessage: ''
                    });
                }, 3000);
            } else {
                throw new Error(result.message || 'Submission failed');
            }

        } catch (error) {
            setFormStatus({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                errorMessage: error.message || 'Failed to send message. Please try again.'
            });
        }
    };

    const socialLinks = [
        {
            Icon: Instagram,
            link: 'https://www.instagram.com/_shrawnnn_',
            name: 'Instagram'
        },
        {
            Icon: Linkedin,
            link: 'https://linkedin.com/in/shravan-carpenter-26046b248',
            name: 'LinkedIn'
        },
        {
            Icon: Github,
            link: 'https://github.com/ShravanCarpenter',
            name: 'GitHub'
        }
    ];

    return (
        <div id='contact' className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="title">
                        Get in Touch
                    </h1>
                    <p className="contact-intro">
                        As a fresh graduate hungry to make my mark, I'm eager to transform academic potential into real-world impact. Looking to connect with employers who value fresh perspectives and innovative potential.
                    </p>

                    <div className="contact-details">
                        <p className="contact-detail">
                            <Mail size={24} />
                            <span>shravancarpenter22@gmail.com</span>
                        </p>
                        <p className="contact-detail">
                            <Phone size={24} />
                            <span>+91 9329992814</span>
                        </p>
                        <p className="contact-detail">
                            <MapPin size={24} />
                            <span>Indore, M.P.</span>
                        </p>
                    </div>

                    <div className="social-icons">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <social.Icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="contact-right">
                    <div className="contact-form-container">
                        <form
                            onSubmit={handleSubmit}
                            className={`contact-form ${formStatus.isError ? 'error-shake' : ''}`}
                        >
                            {formStatus.isError && (
                                <div className="form-error-message">
                                    <AlertTriangle size={20} />
                                    <span>{formStatus.errorMessage}</span>
                                </div>
                            )}

                            <div className={`form-group ${formData.name ? 'has-value' : ''}`}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="name"
                                />
                            </div>

                            <div className={`form-group ${formData.email ? 'has-value' : ''}`}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="email"
                                />
                            </div>

                            <div className={`form-group ${formData.message ? 'has-value' : ''}`}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="button-container">
                                <button
                                    type="submit"
                                    className="contact-uiverse send-email"
                                    disabled={formStatus.isSubmitting}
                                >
                                    <div className="wrapper">
                                        {formStatus.isSubmitting ? (
                                            <span>Sending...</span>
                                        ) : formStatus.isSuccess ? (
                                            <>
                                                <span>Message Sent</span>
                                                <div className='arrow-icon'>
                                                    <Check size={24} />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                {[...Array(12)].map((_, circleIndex) => (
                                                    <div
                                                        key={circleIndex}
                                                        className={`circle circle-${circleIndex + 1}`}
                                                    />
                                                ))}
                                                <div className='arrow-icon'>
                                                    <Send size={24} />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;