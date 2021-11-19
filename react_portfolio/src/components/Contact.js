import React, { useState } from "react";
// Importing helper function to check if email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const [userMessage, setUserMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    } else if (id === "name") {
      setName(value);
    } else {
      setMessage(value);
    }
    return;
  };

  const validateInput = (e) => {
    if (!e.target.value.length) {
      setUserMessage(`Your ${e.target.id} is required!`);
    } else {
      setUserMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setUserMessage("Your name is required!");
    } else if (!email) {
      setUserMessage("Your email is required!");
    } else if (!message) {
      setUserMessage("Your message is required!");
    } else {
      setUserMessage("");
    }

    const isValid = validateEmail(email);

    if (!isValid) {
      setUserMessage("Your email is invalid!");
    } else {
      setUserMessage(`Thank you, ${name}!`);
    }

    // Add post to Formspree

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section>
      <h1>Contact me</h1>
      <form
        id="contact-form"
        action="https://formspree.io/f/xayarkno"
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
            onBlur={validateInput}
            id="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            autoComplete="false"
            name="_replyto"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            onBlur={validateInput}
            id="email"
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
            onBlur={validateInput}
            id="message"
          />
        </div>
        {userMessage && (
          <div>
            <p className="error-text">{userMessage}</p>
          </div>
        )}
        <button onClick={handleSubmit} type="submit" data-testid="button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
