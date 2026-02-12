import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

import {
    SiSpring, SiSpringboot,
    SiMysql, SiPostgresql, SiRedis, SiElasticsearch, SiMongodb,
    SiDocker, SiJenkins,
    SiApachekafka,
    SiReact, SiTailwindcss, SiBootstrap, SiMui, SiVite,
    SiAwslambda,
    SiExpress, SiCloudinary, SiVercel, SiKubernetes,
    SiJhipster, SiJsonwebtokens, SiClerk, SiKeycloak
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaJava, FaAws } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

/* ================= TAG ================= */
const Tag = ({ position, icon, name }) => {
    const [hovered, setHovered] = useState(false);
    const { theme } = useTheme();

    const bgClass = theme === "dark" ? "bg-slate-900/90 border-white/10" : "bg-white/90 border-black/10";
    const textClass = theme === "dark" ? "text-white" : "text-slate-800";
    const shadowClass = theme === "dark" ? "shadow-xl" : "shadow-lg shadow-gray-200";

    return (
        <Html position={position} center>
            <div
                className={`flex flex-col items-center gap-2 select-none transition-all duration-300 cursor-pointer 
                        ${hovered ? "scale-125 z-50" : "hover:scale-110"}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div
                    className={`${bgClass} backdrop-blur-md p-3 rounded-xl border 
                        ${shadowClass} flex items-center justify-center
                        ${hovered ? "border-primary/50 shadow-primary/20" : ""}`}
                >
                    <div className="text-3xl">{icon}</div>
                </div>

                <div className={`px-2 py-1 rounded-md 
                    ${bgClass} backdrop-blur-md border text-xs font-bold 
                    ${textClass} whitespace-nowrap overflow-hidden transition-all duration-300 
                    ${hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none absolute"}`}
                >
                    {name}
                </div>
            </div>
        </Html>
    );
};

/* ================= CLOUD ================= */
const Cloud = ({ radius = 20, skills }) => {
    const points = useMemo(() => {
        const temp = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

        for (let i = 0; i < skills.length; i++) {
            const y = 1 - (i / (skills.length - 1)) * 2;
            const r = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;

            temp.push([x * radius, y * radius, z * radius]);
        }

        return temp;
    }, [radius, skills.length]);

    const ref = useRef(null);

    useFrame((_state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.y += delta * 0.1;
        ref.current.rotation.x += delta * 0.05;
    });

    return (
        <group ref={ref}>
            {points.map((pos, i) => (
                <Tag
                    key={i}
                    position={pos}
                    icon={skills[i].icon}
                    name={skills[i].name}
                />
            ))}
        </group>
    );
};

/* ================= MAIN ================= */
const SkillsSphere = () => {
    const { theme } = useTheme();
    const fogColor = theme === "dark" ? "#202025" : "#f8fafc";

    /* ===== Skills Sphere Data ===== */
    const skills = useMemo(
        () => [
            { name: "Java", icon: <FaJava color={`${theme === 'dark' ? '#e06c00' : '#ea2d2e'}`} /> },
            { name: "Spring", icon: <SiSpring color={`${theme === 'dark' ? "#6db33f" : "#6cb52d"}`} /> },
            { name: "Spring Boot", icon: <SiSpringboot color={`${theme === 'dark' ? "#6db33f" : "#6cb52d"}`} /> },
            { name: "Node.js", icon: <FaNodeJs color='#417e38' /> },
            { name: "ExpressJS", icon: <SiExpress color="" />, },
            { name: "MongoDB", icon: <SiMongodb color={`${theme === 'dark' ? '#00ed64' : '#00a35c'}`} />, },
            { name: "React", icon: <SiReact color={`${theme === 'dark' ? '#58c4dc' : '#087ea4'}`} /> },
            { name: "Vite", icon: <SiVite color={`${theme === 'dark' ? "#fdc700" : "#9754ff"}`} /> },
            { name: "Tailwindcss", icon: <SiTailwindcss color="#00bcff" /> },
            // { name: "Material UI", icon: <SiMui color={`${theme === 'dark' ? '#0071e1' : '#0072e3'}`} /> },
            { name: "Bootstrap", icon: <SiBootstrap color="#6f2cf5" /> },
            { name: "MySQL", icon: <SiMysql color={`${theme === 'dark' ? '#f29111' : '#00758f'}`} /> },
            // { name: "SQL Server", icon: <DiMsqlServer color="red" /> },
            { name: "KeyCloak", icon: <SiKeycloak color="#1d63ed" /> },
            { name: "Clerk", icon: <SiClerk color="#1d63ed" /> },
            { name: "Docker", icon: <SiDocker color="#1d63ed" /> },
            // { name: "Kubernetes", icon: <SiKubernetes color="#1d63ed" /> },
            { name: "Vercel", icon: <SiVercel color={`${theme === 'dark' ? 'white' : 'black'}`} /> },
            { name: "Cloudinary", icon: <SiCloudinary color="#3448c5" /> },
            // { name: "PostgreSQL", icon: <SiPostgresql color="#3b82f6" /> },
            // { name: "Redis", icon: <SiRedis color="#ef4444" /> },
            // { name: "Elasticsearch", icon: <SiElasticsearch color="#eab308" /> },
            // { name: "Jenkins", icon: <SiJenkins color="#f87171" /> },
            // { name: "Kafka", icon: <SiApachekafka color="#94a3b8" /> },
            // { name: "AWS", icon: <FaAws color="#f97316" /> },
            // { name: "Lambda", icon: <SiAwslambda color="#f97316" /> },
        ],
        [theme]
    );

    return (
        <div className="w-full h-112.5 cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 45], fov: 60 }}>
                <fog attach="fog" args={[fogColor, 0, 80]} />
                <Cloud radius={22} skills={skills} />
            </Canvas>
        </div>
    );
};

export default SkillsSphere;
