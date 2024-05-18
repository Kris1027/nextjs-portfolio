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
        className="bg-stone-100 dark:bg-stone-950 text-secondary dark:text-stone-100 p-6 tablet:p-2 rounded-lg shadow-xl dark:shadow-none transform transition-transform hover:scale-105 flex flex-col gap-5 justify-between"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        custom={id}
        viewport={{ once: true }}
      >
        <h4 className="text-lg tablet:text-3xl">{title}</h4>
        <div className="flex justify-between text-sm tablet:text-base">
          <a
            className="flex items-center gap-2 border-[1px] border-slate-300 dark:border-slate-700 px-1 tablet:py-1 tablet:px-3 cursor-pointer hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-400"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Link
            <GoLinkExternal />
          </a>
          <button
            className="flex items-center gap-2 border-[1px] border-slate-300 dark:border-slate-700 px-1 tablet:py-1 tablet:px-3 cursor-pointer hover:text-amber-400 hover:border-amber-400 dark:hover:border-amber-400"
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
