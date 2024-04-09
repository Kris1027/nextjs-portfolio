import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./skill-item";

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
    <motion.form
      className="flex flex-col gap-3 w-full lg:w-3/4 mx-auto"
      onSubmit={handleSubmit}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <input
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        type="text"
        placeholder="Your name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        type="email"
        placeholder="Your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        placeholder="Your message"
        required
        cols={30}
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-pink-400 dark:bg-pink-700 text-white font-bold py-2 px-4 rounded active:scale-95"
        type="submit"
      >
        Send!
      </button>
    </motion.form>
  );
}
