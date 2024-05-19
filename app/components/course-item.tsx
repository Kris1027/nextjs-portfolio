"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import CourseModal from "./course-modal";
import { GoLinkExternal } from "react-icons/go";
import { PiCertificateLight } from "react-icons/pi";
import ListItem from "../ui/list-item";
import { fadeInAnimation } from "../theme/animations/fadeInAnimation";

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
      <ListItem id={id} variants={fadeInAnimation}>
        <h4 className="text-lg tablet:text-3xl">{title}</h4>
        <div className="flex justify-between text-sm tablet:text-base">
          <a
            className="flex items-center gap-2 border-[1px] border-[var(--secondary)] px-1 tablet:py-1 tablet:px-3 cursor-pointer hover:text-[var(--link)] hover:border-[var(--link)]"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Link
            <GoLinkExternal />
          </a>
          <button
            className="flex items-center gap-2 border-[1px] border-[var(--secondary)] px-1 tablet:py-1 tablet:px-3 cursor-pointer hover:text-[var(--linkSecondary)] hover:border-[var(--linkSecondary)]"
            onClick={() => handleModal(id)}
          >
            Show certificate
            <PiCertificateLight size={30} />
          </button>
          {image && showModal && modal}
        </div>
      </ListItem>
    </>
  );
}
