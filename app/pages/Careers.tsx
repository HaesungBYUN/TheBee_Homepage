import type { Route } from "./+types/Careers";
import { motion } from "motion/react";
import { CareersContent } from "../components/Careers";

export const meta: Route.MetaFunction = () => [
  { title: "인재채용 | 더비소프트(TheBeeSoft)" },
  { name: "description", content: "채용부터 성장, 일하는 즐거움, 성과의 공유까지 구성원의 모든 여정을 세심하게 살피는 더비소프트의 진심을 확인해 보십시요." },
];
export default function Careers() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white content-stretch flex flex-col items-center relative size-full"
    >
      <CareersContent />
    </motion.div>
  );
}
