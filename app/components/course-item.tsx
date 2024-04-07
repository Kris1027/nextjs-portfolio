"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { PiCertificateLight } from "react-icons/pi";

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
            onClick={() => handleModal(id)}
          >
            Show certificate
            <PiCertificateLight size={30} />
          </button>
          {image && showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image src={image} alt={title} width={500} height={300} />
                <button
                  className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </li>
    </>
  );
}
