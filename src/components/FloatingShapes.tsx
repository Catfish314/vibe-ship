import { motion } from "framer-motion";

const FloatingShapes = () => {
  const shapes = [
    { size: 80, x: "10%", y: "20%", delay: 0, duration: 7 },
    { size: 60, x: "80%", y: "15%", delay: 1, duration: 8 },
    { size: 100, x: "70%", y: "60%", delay: 2, duration: 6 },
    { size: 40, x: "20%", y: "70%", delay: 0.5, duration: 9 },
    { size: 50, x: "50%", y: "40%", delay: 1.5, duration: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `linear-gradient(135deg, 
              hsla(265, 100%, 64%, 0.1), 
              hsla(185, 100%, 60%, 0.05))`,
            border: "1px solid hsla(265, 100%, 64%, 0.1)",
            backdropFilter: "blur(4px)",
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -3, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
