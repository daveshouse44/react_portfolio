import React, { useState } from "react";
// Importing helper function to check if email is valid
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  let [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // console.log(isValid);
      // Conditional statement to determine if email is valid
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("User submission", formState);
    setFormState({
      name: "",
      email: "",
      message: "",
    });
    alert(`Thank you ${name}!`);
    return;
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" action="https://formspree.io/f/mdoyqaew" method="POST">
        {/* action="https://formspree.io/f/mdoyqaew"></f */}
        {/* // method="POST" </section>onSubmit={handleSubmit}> */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
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
};

export default Contact;
