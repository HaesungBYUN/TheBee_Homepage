
import { motion } from "motion/react";
import { SolutionsContent } from "../components/Solutions";



export default function Solutions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white content-stretch flex flex-col items-center relative size-full"
    >
      <SolutionsContent />
    </motion.div>
  );
}
