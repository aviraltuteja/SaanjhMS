"use client";
import { FaUsers, FaHandshake, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyUs(): React.ReactElement {
  const features = [
    {
      title: "Trusted by Families",
      description:
        "Connect with profiles that share your cultural and familial values.",
      icon: FaUsers,
    },
    {
      title: "Cultural Compatibility",
      description:
        "Filter by community, traditions, and preferences for a meaningful match.",
      icon: FaHandshake,
    },
    {
      title: "Secure & Private",
      description: "Advanced security ensures your data is protected.",
      icon: FaLock,
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full bg-[#f9f9f9] py-16 px-6 md:px-20 text-black">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Why choose Saanjh?
      </h2>

      <motion.div
        className="flex flex-col md:flex-row gap-8 justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}>
        {features.map(({ title, description, icon: Icon }, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 w-72 text-center hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}>
            <div className="mx-auto w-16 h-16 mb-4 bg-red-100 text-red-600 flex items-center justify-center rounded-full">
              <Icon className="text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-blackshade mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
