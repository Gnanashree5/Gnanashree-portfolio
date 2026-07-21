import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
    {
        title: "AI Chatbot Web Application",
        description:
            "Enterprise AI chatbot built with Java, Spring Boot, MySQL, REST APIs, and OpenRouter AI for intelligent real-time conversations.",
        image: "/projects/chatbot.png",
        tech: ["Java", "Spring Boot", "MySQL", "OpenRouter"],
        github:
            "https://github.com/Gnanashree5/AI-Chatbot-web-application",
        caseStudy: "/projects/ai-chatbot",
    },

    {
        title: "Weed Detection using Computer Vision",
        description:
            "AI-powered crop analysis system using ResNet18, PyTorch, Flask, and Grad-CAM to accurately classify weeds, wheat, and other objects.",
        image: "/projects/weed.png",
        tech: ["Python", "PyTorch", "Flask", "OpenCV"],
        github:
            "https://github.com/Gnanashree5/Weed-detection-in-wheat-crops-using-Computer-Vision",
        caseStudy: "/projects/weed-detection",
    },

    {
        title: "Heart Disease Analytics Dashboard",
        description:
            "Interactive Power BI dashboard providing healthcare insights through DAX, Power Query, diagnosis trees, and health driver analysis.",
        image: "/projects/heart.mp4",
        tech: ["Power BI", "DAX", "Power Query", "Analytics"],
        github:
            "https://github.com/Gnanashree5/Data-analysis-on-heart-disease-public-dataset",
        caseStudy: "/projects/heart-dashboard",
    },

    {
        title: "Air Canvas using OpenCV",
        description:
            "Touchless virtual drawing application using OpenCV and MediaPipe with real-time hand tracking, gesture recognition, and multi-color painting.",
        image: "/projects/aircanvas.png",
        tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
        github:
            "https://github.com/Gnanashree5/Air-canvas",
        caseStudy: "/projects/air-canvas",
    },

    {
        title: "Personal Portfolio Website",
        description:
            "Modern portfolio showcasing software engineering projects with Next.js, Tailwind CSS, TypeScript, Framer Motion, responsive UI, and immersive case studies.",
        image: "/projects/portfolio.png",
        tech: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
        github: "https://github.com/Gnanashree5/Gnanashree-portfolio",
        caseStudy: "/projects/portfolio",
    },
];

export default function OtherProjects() {
    return (
        <section className="bg-slate-50 py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <SectionHeading
                        title="More things I&apos;ve built"
                        subtitle="Other projects"
                    />

                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    {projects.map((project) => (

                        <div
                            key={project.title}
                            className={`overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${project.title === "Personal Portfolio Website"
                                ? "md:col-span-2"
                                : ""
                                }`}
                        >

                            {
                                project.image.endsWith(".mp4") ? (
                                    <video
                                        src={project.image}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="h-80 w-full object-cover object-top"
                                    />
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={350}
                                        className="h-80 w-full object-cover object-top"
                                    />
                                )
                            }

                            <div className="p-8">

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-5 leading-8 text-slate-600">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">

                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                                        >
                                            {item}
                                        </span>
                                    ))}

                                </div>

                                <div className="mt-8 flex gap-4">

                                    <a
                                        href={project.github}
                                        className="rounded-lg bg-slate-900 px-5 py-3 text-white transition hover:bg-black"
                                    >
                                        GitHub
                                    </a>

                                    <Link
                                        href={project.caseStudy}
                                        className="rounded-lg border px-5 py-3 transition hover:border-blue-600 hover:text-blue-600"
                                    >
                                        View Case Study →
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}