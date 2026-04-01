import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function CountUp({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(from, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(spring, (current) => {
    return `${prefix}${current.toFixed(decimals)}${suffix}`;
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && mounted) {
      spring.set(to);
    }
  }, [isInView, spring, to, mounted]);

  return (
    <motion.span ref={ref}>
      {mounted ? displayValue : `${prefix}${from.toFixed(decimals)}${suffix}`}
    </motion.span>
  );
}
