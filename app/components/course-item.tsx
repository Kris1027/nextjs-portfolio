"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { PiCertificateLight } from "react-icons/pi";
import CourseModal from "./course-modal";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./skill-item";

export default function CourseItem({
  id,
  title,
  image,
  link,
}: {
  id: number;
  title: string;
  image: StaticImageData;
  link: string;
}) {
  const [showModal, setShowModal] = useState(false);

  function handleModal(getCurrentId: number) {
    if (getCurrentId === id) {
      setShowModal(!showModal);
    }
  }

  return (
    <>
      <motion.li
        className="flex flex-col w-full gap-4 bg-slate-400 bg-opacity-20 rounded-2xl p-6 text-slate-700 dark:text-slate-300 shadow-lg dark:shadow-sm dark:shadow-white"
        variants={fadeInAnimationVariants}
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
          {image && showModal && (
            <CourseModal
              image={image}
              title={title}
              setShowModal={setShowModal}
            />
          )}
        </div>
      </motion.li>
    </>
  );
}
