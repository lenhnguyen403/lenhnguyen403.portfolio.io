import { useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";
import { FaCode, FaUser, FaGithub } from "react-icons/fa6";

const PreLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    /* ================= Progress ================= */
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    /* ================= Icons ================= */
    const icons = [
        { Icon: FaCode, delay: 0, label: "Code" },
        { Icon: FaUser, delay: 0.2, label: "Developer" },
        { Icon: FaGithub, delay: 0.4, label: "Projects" },
    ];

    /* ================= Particles (FIX PURITY) ================= */
    const particles = useMemo(
        () =>
            Array.from({ length: 20 }).map(() => ({
                left: Math.random() * 100,
                top: Math.random() * 100,
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
            })),
        []
    );

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a]"
        >
            {/* ================= Background particles ================= */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* ================= Main ================= */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Icons */}
                <div className="flex gap-8 mb-12">
                    {icons.map(({ Icon, delay, label }) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 50, scale: 0 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="relative"
                        >
                            {/* Glow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay,
                                }}
                                className="absolute inset-0 bg-primary/30 rounded-full blur-xl"
                            />

                            {/* Icon */}
                            <motion.div
                                animate={{ rotateY: [0, 360] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay,
                                }}
                                className="relative w-20 h-20 flex items-center justify-center bg-linear-to-br from-primary/20 to-purple-600/20 rounded-full border-2 border-primary/30"
                            >
                                <Icon className="text-3xl text-primary" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mb-8"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Welcome To My
                    </motion.h1>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        Portfolio Website
                    </motion.h2>
                </motion.div>

                {/* Progress */}
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "300px" }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-linear-to-r from-primary via-purple-500 to-cyan-500 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="text-center mt-3 text-primary/80 text-sm font-medium">
                        {progress}%
                    </div>
                </motion.div>

                {/* Loading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="mt-6 flex items-center gap-2 text-secondary text-sm"
                >
                    <span>Loading experience</span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        ...
                    </motion.span>
                </motion.div>
            </div>

            {/* Decorations */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
            />
        </motion.div>
    );
};

export default PreLoader;
