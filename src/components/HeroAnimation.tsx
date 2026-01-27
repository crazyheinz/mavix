import { motion } from "framer-motion";

const HeroAnimation = () => {
  const terms = [
    { text: "Clean architecture", angle: 45 },
    { text: "Scalable systems", angle: 135 },
    { text: "Production-ready software", angle: 225 },
    { text: "Built to last", angle: 315 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Floating terms */}
      {terms.map((term, i) => (
        <motion.div
          key={term.text}
          className="absolute text-sm md:text-base font-medium text-primary/70 whitespace-nowrap"
          style={{
            top: `${50 + Math.sin(term.angle * (Math.PI / 180)) * 38}%`,
            left: `${50 + Math.cos(term.angle * (Math.PI / 180)) * 38}%`,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          {term.text}
        </motion.div>
      ))}

      {/* Main floating blob */}
      <motion.div
        className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Primary blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-xl"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{
            scale: [1, 1.2, 1],
            x: ["-50%", "-30%", "-50%"],
            y: ["-50%", "-70%", "-50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-accent/25 to-primary/15 blur-xl"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: ["-50%", "-70%", "-50%"],
            y: ["-50%", "-30%", "-50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tertiary blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-36 h-36 md:w-56 md:h-56 rounded-full bg-gradient-to-bl from-primary-light/40 to-accent/10 blur-lg"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{
            scale: [1, 1.3, 1],
            x: ["-50%", "-60%", "-50%"],
            y: ["-50%", "-40%", "-50%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-primary/20"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full border border-accent/15"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{
            rotate: [0, 360],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Small floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary/40"
            style={{
              top: `${30 + Math.sin(i * 60 * (Math.PI / 180)) * 35}%`,
              left: `${50 + Math.cos(i * 60 * (Math.PI / 180)) * 35}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
