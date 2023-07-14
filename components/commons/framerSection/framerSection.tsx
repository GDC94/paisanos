import { motion } from "framer-motion";
interface FramerSectionProps {
  children: React.ReactNode;
  delay: number;
  duration?: string;
}
const FramerSection = ({ children, delay, duration }: FramerSectionProps) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

export default FramerSection;
