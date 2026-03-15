import { useRef, useState } from "react";
import useHttp from "../../hooks/useHttp";
import ErrorBlock from "../UI/ErrorBlock";
import classes from "./Contact.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Contact() {
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
  } = useHttp("https://backend-kitchen.onrender.com/contacts", requestConfig);

  function validateName(fullName) {
    const names = fullName.trim().split(/\s+/);

    if (names.length !== 2) {
      return "Please enter exactly two names (First Name Last Name)";
    }

    for (const name of names) {
      if (name[0] !== name[0].toUpperCase()) {
        return "Both names must start with uppercase letters";
      }
    }

    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setValidationError("");

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    // Validate full name
    const nameError = validateName(customerData.name);
    if (nameError) {
      setValidationError(nameError);
      return;
    }

    sendRequest(
      JSON.stringify({
        contact: {
          customer: customerData,
        },
      }),
    );

    setFormSubmitted(true);
  }

  if (data && !error && formSubmitted) {
    name.current.value = "";
    email.current.value = "";
    subject.current.value = "";
    message.current.value = "";
    setFormSubmitted(false);
    setValidationError("");
  }

  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroOverlay}></div>
        <img
          className={classes.heroImage}
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Beautiful restaurant exterior building facade"
        />
        <div className={classes.heroContent}>
          <h1 className={classes.heroTitle}>Get in Touch</h1>
          <p className={classes.heroDescription}>
            Experience the finest culinary traditions in the heart of Pleven.
            We're here to make your visit unforgettable.
          </p>
        </div>
      </section>

      <section className={classes.mainContent}>
        <div className={classes.contentGrid}>
          <div className={classes.formContainer}>
            <h2 className={classes.formTitle}>Send us a Message</h2>

            <form onSubmit={handleSubmit} className={classes.form}>
              <div className={classes.inputRow}>
                <div className={classes.inputGroup}>
                  <label className={classes.label}>Full Name</label>
                  <input
                    className={classes.input}
                    ref={name}
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    pattern="[A-Z][a-zA-Z]* [A-Z][a-zA-Z]*"
                    title="Please enter exactly two names, both starting with uppercase letters"
                    required
                  />
                </div>
                <div className={classes.inputGroup}>
                  <label className={classes.label}>Email Address</label>
                  <input
                    className={classes.input}
                    ref={email}
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className={classes.inputGroup}>
                <label className={classes.label}>Subject</label>
                <input
                  className={classes.input}
                  ref={subject}
                  type="text"
                  name="subject"
                  placeholder="Feedback"
                  required
                />
              </div>

              <div className={classes.inputGroup}>
                <label className={classes.label}>Your Message</label>
                <textarea
                  className={classes.textarea}
                  ref={message}
                  name="message"
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  required
                ></textarea>
              </div>

              {validationError && (
                <div className={classes.statusMessage}>
                  <span className={classes.error}>{validationError}</span>
                </div>
              )}

              {error && (
                <div className={classes.statusMessage}>
                  <ErrorBlock title="Failed to send message" message={error} />
                </div>
              )}

              {data && !error && (
                <div className={classes.statusMessage}>
                  <span className={classes.success}>
                    Message sent successfully!
                  </span>
                </div>
              )}

              <button
                className={classes.submitButton}
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className={classes.contactDetails}>
            <div className={classes.detailsContent}>
              <h2 className={classes.detailsTitle}>Contact Details</h2>

              <div className={classes.contactInfo}>
                <div className={classes.contactItem}>
                  <div className={classes.contactIcon}>
                    <span className={classes.icon}>📍</span>
                  </div>
                  <div className={classes.contactTextContainer}>
                    <h4 className={classes.contactLabel}>Visit Us</h4>
                    <p className={classes.contactText}>5800 Pleven, Bulgaria</p>
                  </div>
                </div>

                <div className={classes.contactItem}>
                  <div className={classes.contactIcon}>
                    <span className={classes.icon}>📞</span>
                  </div>
                  <div className={classes.contactTextContainer}>
                    <h4 className={classes.contactLabel}>Call Us</h4>
                    <p className={classes.contactText}>
                      Phone: +359 877 115 125
                    </p>
                  </div>
                </div>

                <div className={classes.contactItem}>
                  <div className={classes.contactIcon}>
                    <span className={classes.icon}>✉️</span>
                  </div>
                  <div className={classes.contactTextContainer}>
                    <h4 className={classes.contactLabel}>Email Us</h4>
                    <p className={classes.contactText}>
                      daniel.katsanski@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.hoursSection}>
                <h3 className={classes.hoursTitle}>Opening Hours</h3>
                <div className={classes.hoursInfo}>
                  <div className={classes.hoursRow}>
                    <span>Mon - Fri</span>
                    <span>11:00 - 23:00</span>
                  </div>
                  <div className={classes.hoursRow}>
                    <span>Sat - Sun</span>
                    <span>10:00 - 00:00</span>
                  </div>
                  <div className={classes.hoursNote}>
                    Closed on Public Holidays
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
