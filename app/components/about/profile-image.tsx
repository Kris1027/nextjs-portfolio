"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { imageKitLoader } from "../../util/image-kit-loader";
import { fadeInAnimation } from "@/app/theme/animations/fadeInAnimation";

export default function ProfileImage() {
  return (
    <motion.div
      className="relative rounded-full w-56 h-56 mobile:w-[28rem] mobile:h-[28rem] tablet:h-[40rem] tablet:w-[40rem] mx-auto shadow-lg shadow-[var(--secondary)]"
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Image
        className="rounded-full object-cover"
        loader={imageKitLoader}
        src="profile.jpeg"
        sizes="(min-width: 1400px) 1400px, (min-width: 1000px) 1000px, (min-width: 464px) 464px"
        alt="profile image"
        width={640}
        height={640}
        priority
      />
    </motion.div>
  );
}
