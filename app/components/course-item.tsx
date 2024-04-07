import { type CoursesListProps } from "../data/courses-data";
import { GoLinkExternal } from "react-icons/go";
import { PiCertificateLight } from "react-icons/pi";
import { useState } from "react";
import Modal from "./modal";

export default function CourseItem({ title, image, link }: CoursesListProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal} image={image} title={title} />
      )}
      <li className="flex flex-col w-full gap-4 bg-slate-400 bg-opacity-20 rounded-2xl p-6 text-slate-700 dark:text-slate-300 shadow-lg dark:shadow-sm dark:shadow-white">
        <h4 className="text-3xl">{title}</h4>
        <div className="flex justify-between">
          <a
            className="flex items-center gap-2 border-[1px] border-slate-300 dark:border-slate-700 py-1 px-3 cursor-pointer hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-400"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Link
            <GoLinkExternal />
          </a>
          <button
            className="flex items-center gap-2 border-[1px] border-slate-300 dark:border-slate-700 py-1 px-3 cursor-pointer hover:text-amber-400 hover:border-amber-400 dark:hover:border-amber-400"
            onClick={() => setShowModal(true)}
          >
            Show certificate
            <PiCertificateLight size={30} />
          </button>
        </div>
      </li>
    </>
  );
}
