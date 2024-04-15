import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./skill-item";
import { FaUserEdit } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";

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
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      toast.success("Email sent successfully!", {
        position: "top-center",
        style: {
          background: "#000",
          color: "#04E824",
        },
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", {
        position: "top-center",
        style: {
          background: "#000",
          color: "#BD1E1E",
        },
      });
    }
  };

  return (
    <motion.form
      className="flex flex-col gap-4 w-full md:w-3/4 mx-auto"
      onSubmit={handleSubmit}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="relative">
        <input
          className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none pl-14"
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FaUserEdit
          size={30}
          className="text-pink-400 dark:text-pink-700 absolute top-1 left-3"
        />
      </div>
      <div className="relative">
        <input
          className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none pl-14"
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MdAlternateEmail
          size={30}
          className="text-pink-400 dark:text-pink-700 absolute top-1 left-3"
        />
      </div>
      <div className="relative">
        <textarea
          className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none pl-14"
          placeholder="Your message"
          rows={10}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <MdOutlineMessage
          size={30}
          className="text-pink-400 dark:text-pink-700 absolute top-1 left-3"
        />
      </div>
      <button
        className="bg-pink-400 dark:bg-pink-700 text-white font-bold py-2 md:py-4 rounded hover:bg-pink-500 dark:hover:bg-pink-800 active:scale-95 flex justify-center items-center"
        type="submit"
      >
        <IoSend size={30} />
      </button>
    </motion.form>
  );
}
