import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_8z3ockk";
    const templateId = "template_tmkxvqi";
    const publicKey = "Qymcju6eXS26VvGY_";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Kris",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols={30}
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send email!</button>
    </form>
  );
}
