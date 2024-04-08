import { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_8z3ockk";
    const templateId = "template_tmkxvqi";
    const publicKey = "Qymcju6eXS26VvGY_";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Kris",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 md:w-3/4 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        placeholder="Your message"
        cols={30}
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Send!
      </button>
    </form>
  );
}
