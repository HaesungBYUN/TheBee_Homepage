import type { Route } from "./+types/Solutions";
import { motion } from "motion/react";
import { SolutionsContent } from "../components/Solutions";

export const meta: Route.MetaFunction = () => [
  { title: "솔루션 | 더비소프트(TheBeeSoft)" },
  { name: "description", content: "ERP 구축부터 시스템 고도화까지, 귀사의 경쟁력을 높여줄 더비소프트의 IT 솔루션과 시스템 구축 서비스를 소개합니다." },
];
export default function Solutions() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white content-stretch flex flex-col items-center relative size-full"
    >
      <SolutionsContent />
    </motion.div>
  );
}
