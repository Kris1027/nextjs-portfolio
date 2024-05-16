"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import CourseModal from "./course-modal";
import { fadeInAnimation } from "../theme/fadeInAnimation";
import { GoLinkExternal } from "react-icons/go";
import { PiCertificateLight } from "react-icons/pi";

type CourseItemProps = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export default function CourseItem({
  id,
  title,
  image,
  link,
}: CourseItemProps) {
  const [showModal, setShowModal] = useState(false);
  const modal =
    typeof window !== "undefined" &&
    createPortal(
      <CourseModal image={image} title={title} setShowModal={setShowModal} />,
      document.body
    );

  function handleModal(getCurrentId: number) {
    if (getCurrentId === id) {
      setShowModal(!showModal);
    }
  }

  return (
    <>
      <motion.li
        className="flex flex-col w-full gap-4 bg-slate-400 bg-opacity-20 rounded-lg p-6 text-slate-700 dark:text-slate-300 shadow-lg dark:shadow-sm dark:shadow-white"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        custom={id}
        viewport={{ once: true }}
      >
        <h4 className="text-lg md:text-3xl">{title}</h4>
        <div className="flex justify-between text-sm md:text-base">
          <a
            className="flex items-center gap-2 border-[1px] border-slate-300 dark:border-slate-700 px-1 md:py-1 md:px-3 cursor-pointer hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-400"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Link
            <GoLinkExternal />
          </a>
          <button
            className="flex items-center gap-2 border-[1px] border-slate-300 dark:border-slate-700 px-1 md:py-1 md:px-3 cursor-pointer hover:text-amber-400 hover:border-amber-400 dark:hover:border-amber-400"
            onClick={() => handleModal(id)}
          >
            Show certificate
            <PiCertificateLight size={30} />
          </button>
          {image && showModal && modal}
        </div>
      </motion.li>
    </>
  );
}
