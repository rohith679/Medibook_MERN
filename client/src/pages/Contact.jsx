import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const formData = new FormData(form);
    const params = Object.fromEntries(formData.entries());

    if (!params.name || !params.email || !params.subject || !params.message) {
      showNotification("Please fill out all fields.", 'error');
      setIsSubmitting(false);
      return;
    }

    try {
  await emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    params,
    process.env.REACT_APP_EMAILJS_USER_ID
  );
      showNotification("Email sent successfully!", 'success');
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      showNotification("Failed to send email. Please try again later.", 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => setNotification(prev => ({ ...prev, visible: false })), 5000);
  };

  return (
    <>
      <Navbar />
      <article className="contact">
        <h2 className="article-title">Contact Us</h2>
        
        <section className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit} className="form">
            <div className="input-wrapper">
              <input type="text" id="name" name="name" className="form-input" placeholder="Full name" required />
              <input type="email" id="email" name="email" className="form-input" placeholder="Email address" required />
            </div>

            <input id="subject" name="subject" className="form-input" placeholder="Subject" required />

            <textarea 
              id="message" 
              name="message" 
              className="form-input message-input" 
              placeholder="Your Message" 
              required
            ></textarea>
            
            <button className="form-btn" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && <ion-icon name="paper-plane"></ion-icon>}
            </button>
          </form>

          {notification.visible && (
            <div className={`notification ${notification.type} visible`}>
              <p>{notification.message}</p>
            </div>
          )}
        </section>
      </article>
      <Footer />

      <style jsx>{`
        .contact {
          padding: 2rem;
          background-color: #1f1f1f;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: calc(100vh - 4rem);
        }
        .article-title {
          color: hsl(45, 100%, 72%);
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        .contact-form {
          width: 100%;
          max-width: 800px;
          margin-bottom: 2rem;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background-color: #2a2a2a;
          padding: 2rem;
          border-radius: 10px;
          border: 2px solid hsl(45, 100%, 72%);
        }
        .input-wrapper {
          display: flex;
          gap: 1rem;
          
        }
        .form-input {
          background-color: #333;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          width: 100%;
          font-size: 1rem;
        }
        .form-input::placeholder {
          color: #888;
        }
        .message-input {
          height: 150px;
          resize: vertical;
        }
        .form-btn {
          background-color: hsl(45, 100%, 72%);
          color: #1f1f1f;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: bold;
          align-self: center;
          margin-top: 1rem;
          transition: background-color 0.3s ease;
        }
        .form-btn:hover:not(:disabled) {
          background-color: hsl(45, 100%, 60%);
        }
        .form-btn:disabled {
          background-color: #888;
          cursor: not-allowed;
        }
        .form-btn ion-icon {
          font-size: 1.2rem;
        }
        .notification {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 16px;
          border-radius: 5px;
          opacity: 0;
          transition: opacity 0.5s, bottom 0.5s;
          z-index: 1000;
          max-width: 90%;
          text-align: center;
        }
        .notification.success {
          background-color: #4caf50;
          color: white;
        }
        .notification.error {
          background-color: #f44336;
          color: white;
        }
        .notification.visible {
          opacity: 1;
          bottom: 40px;
        }
        @media (max-width: 768px) {
          .contact-form {
            max-width: 100%;
          }
          .input-wrapper {
            flex-direction: column;
          }
          .form {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
