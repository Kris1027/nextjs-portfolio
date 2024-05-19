"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
};

export default function Reveal({
  children,
  width = "fit-content",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
    console.log(isInView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "100%",
          },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#059669",
          zIndex: 20,
        }}
      />
    </div>
  );
}
