import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageUrl from "../../assets/herobanner.jpg";

const CollectionComponent = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt="Collection"
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black via-transparent to-transparent p-8">
        {/* Animated Text */}
        <motion.h2
          className="text-white text-lg md:text-xl font-thin font-riss text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The new collection is the synthesis of the harmonious elements of
          Playful elegance
        </motion.h2>

        {/* Animated Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/new">
            <p className="text-white underline text-sm md:text-lg text-center mb-6">
              EXPLORE OUR NEW COLLECTION
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionComponent;
