import { motion } from "framer-motion";

function SectionTitle({ smallTitle, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <span className="uppercase tracking-widest text-blue-600 font-semibold">
        {smallTitle}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-800">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl mx-auto mt-5 text-slate-600 leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;