"use client";

import { motion } from "framer-motion";

// Fade + rise as the element scrolls into view. Respects reduced motion via
// framer-motion's built-in handling; `once` so it doesn't re-trigger.
export function FadeIn({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

// Container that staggers its FadeIn children.
export function Stagger({ children, className = "", delayChildren = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 24 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
