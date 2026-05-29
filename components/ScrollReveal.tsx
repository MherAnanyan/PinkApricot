"use client";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <div ref={ref} className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms`,
      }}>
      {children}
    </div>
  );
}
