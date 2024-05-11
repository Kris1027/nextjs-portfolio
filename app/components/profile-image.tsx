"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../views/about";
import { imageKitLoader } from "../util/image-kit-loader";

export default function ProfileImage() {
  return (
    <motion.div
      className="relative rounded-full w-56 h-56 sm:w-96 sm:h-96 md:w-[29rem] md:h-[29rem] lg:w-[32rem] lg:h-[32rem] xl:h-[40rem] xl:w-[40rem] mx-auto shadow-lg shadow-zinc-800 dark:shadow-zinc-600"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Image
        className="rounded-full object-cover"
        loader={imageKitLoader}
        src="profile.jpeg"
        sizes="(min-width: 768px) 640px, (min-width: 512px) 512px, (min-width: 464px) 464px, (min-width: 384px) 384px , (min-width: 224px) 224px"
        alt="profile image"
        width={640}
        height={640}
        priority
      />
    </motion.div>
  );
}
