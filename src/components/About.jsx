import { motion } from "motion/react";
import {
    FaGraduationCap,
    FaLightbulb,
    FaBolt,
    FaRocket,
    FaCode,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import HeadingSection from "./common/HeadingSection";
import { personalInfo, currentlyLearning, responsibilites } from "../constants";

const About = () => {
    const { theme } = useTheme();
    const highlightClass = theme === "dark" ? "text-white font-medium" : "text-slate-800 font-semibold";
    const titleClass = theme === "dark" ? "text-white" : "text-slate-800";

    return (
        <section id="about" className="py-16 flex justify-center">
            <div className="w-full max-w-6xl px-8 sm:px-12 lg:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <HeadingSection
                        classNameP={'text-secondary uppercase tracking-wider'}
                        classNameH2={`text-3xl lg:text-4xl font-bold mt-2 ${titleClass}`}
                        children1={'Introduction'}
                        children2={'Overview'}
                    />
                </motion.div>

                {/* About Me */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="card-gradient p-8 rounded-2xl border border-primary/20 mb-6"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <FaCode className="text-primary text-xl" />
                        </div>
                        <h3 className={`text-xl font-semibold ${titleClass}`}>
                            About Me
                        </h3>
                    </div>

                    <div className="space-y-4 text-secondary leading-relaxed">
                        <p>
                            I'm a passionate{" "}
                            <span className={highlightClass}>
                                Java Backend Engineer
                            </span>{" "}
                            graduated from{" "}
                            <span className="text-primary font-medium">
                                {personalInfo.university}
                            </span>{" "}
                            with GPA {personalInfo.gpa}
                        </p>

                        <p>
                            Experienced with{" "}
                            <span className={highlightClass}>
                                Java, Spring Boot, Microservices
                            </span>
                            , building production-ready systems serving real users.
                        </p>

                        {/* <p>
                            Strong interest in{" "}
                            <span className={highlightClass}>
                                System Design, Distributed Systems, AWS
                            </span>
                            . Clean code & scalability first.
                        </p> */}
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Education */}
                    <Card
                        icon={<FaGraduationCap />}
                        title="Education"
                        subtitle="Software Engineering"
                        delay={0.2}
                    >
                        <p>{personalInfo.university}</p>
                        <p className="text-sm mt-2">GPA: {personalInfo.gpa}</p>
                    </Card>

                    {/* What I Do */}
                    <Card
                        icon={<FaRocket />}
                        title="What I Do"
                        delay={0.3}
                    >
                        <ul className="space-y-2 text-sm">
                            {responsibilites.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </Card>

                    {/* Learning */}
                    <Card
                        icon={<FaLightbulb />}
                        title="Currently Learning"
                        delay={0.4}
                    >
                        <ul className="space-y-2 text-sm">
                            {currentlyLearning.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </Card>

                    {/* Fun Fact */}
                    <Card
                        icon={<FaBolt />}
                        title="Fun Fact"
                        delay={0.5}
                    >
                        <blockquote className="italic border-l-4 border-primary pl-4 text-sm">
                            "{personalInfo.quote}"
                        </blockquote>
                        <span className="inline-block mt-4 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm">
                            {personalInfo.openTo}
                        </span>
                    </Card>
                </div>
            </div>
        </section>
    );
};

const Card = ({ icon, title, subtitle, children, delay }) => {
    const { theme } = useTheme();
    const titleClass =
        theme === "dark" ? "text-white" : "text-slate-800";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="card-gradient p-6 rounded-2xl border border-primary/20"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                    {icon}
                </div>
                <div>
                    <h3 className={`text-lg font-semibold ${titleClass}`}>
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-secondary text-sm">{subtitle}</p>
                    )}
                </div>
            </div>
            <div className="text-secondary">{children}</div>
        </motion.div>
    );
};

export default About;
