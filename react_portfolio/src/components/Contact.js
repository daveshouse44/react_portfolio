import React, { useState } from "react";
// Importing helper function to check if email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "name") {
      setName(value);
    } else {
      setMessage(value);
    }
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Your name is required!");
    } else if (!email) {
      setErrorMessage("Your email is required!");
    } else if (!message) {
      setErrorMessage("Your message is required!");
    } else {
      setErrorMessage("");
    }

    const isValid = validateEmail(email);

    if (!isValid) {
      setErrorMessage("Your email is invalid!");
    } else {
      setErrorMessage(`Thank you, ${name}!`)
    }

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form
        id="contact-form"
        action="https://formspree.io/f/myylrdkz"
        method="POST"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            autoComplete="false"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            autoComplete="false"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Thanks for your feedback"
            value={message}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button onClick={handleSubmit} data-testid="button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
