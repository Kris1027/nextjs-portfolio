"use client";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {
  MdAlternateEmail,
  MdOutlineMessage,
  MdOutlineScheduleSend,
} from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../theme/fadeInAnimation";
import { FaUserEdit } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is required" })
    .max(30, { message: "Name is too long" }),
  email: z.string().email({ message: "Email is invalid" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message is too long" }),
});

type FormFields = z.infer<typeof schema>;

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const API_DATA = {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        to_name: "Krzysztof",
        message: data.message,
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", API_DATA);
      reset();
      toast.success("Email sent successfully!", {
        position: "bottom-center",
        style: {
          background: "#000",
          color: "#04E824",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", {
        position: "bottom-center",
        style: {
          background: "#000",
          color: "#BD1E1E",
        },
      });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full tablet:w-3/4 mx-auto"
      noValidate
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="relative">
        <input
          {...register("name")}
          className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none pl-14"
          placeholder="Your name"
        />
        {errors.name && (
          <span className="text-red-500 px-4 py-1">{errors.name.message}</span>
        )}
        <FaUserEdit
          size={30}
          className="text-primary dark:text-primaryDark absolute top-1 left-3"
        />
      </div>
      <div className="relative">
        <input
          {...register("email")}
          className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none pl-14"
          placeholder="Your email"
        />
        {errors.email && (
          <span className="text-red-500 px-4 py-1">{errors.email.message}</span>
        )}
        <MdAlternateEmail
          size={30}
          className="text-primary absolute top-1 left-3"
        />
      </div>
      <div className="relative">
        <textarea
          {...register("message")}
          className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:outline-none pl-14"
          placeholder="Your message"
          rows={10}
        />
        {errors.message && (
          <span className="text-red-500 px-4 py-1">
            {errors.message.message}
          </span>
        )}
        <MdOutlineMessage
          size={30}
          className="text-primary absolute top-1 left-3"
        />
      </div>
      <button
        className="bg-primary dark:bg-primaryDark text-white font-bold py-2 md:py-4 rounded active:scale-95 flex justify-center items-center"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <MdOutlineScheduleSend size={30} />
        ) : (
          <IoSend size={30} />
        )}
      </button>
    </motion.form>
  );
}
