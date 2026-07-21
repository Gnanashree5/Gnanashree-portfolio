import {
    Award,
    GraduationCap,
    Smartphone,
    Users,
    Briefcase,
    Trophy,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
    {
        icon: <Smartphone className="text-blue-600" />,
        title: "Published Android App",
        desc: "Spashta Nudi successfully published on Google Play Store.",
    },
    {
        icon: <Users className="text-blue-600" />,
        title: "All India Institute of Speech and Hearing Collaboration",
        desc: "Worked with AIISH Mysuru for building impactful speech therapy application which is clinically validated and appreciated from users.",
    },
    {
        icon: <Trophy className="text-blue-600" />,
        title: "Department Topper",
        desc: "Secured 9.45 CGPA and ranked as the top performer.",
    },
    {
        icon: <GraduationCap className="text-blue-600" />,
        title: "Ready Tensor project expo 2024 participant",
        desc: "Recognized by Ready tensor for the Computer vision project expo 2024.",
    },
    {
        icon: <GraduationCap className="text-blue-600" />,
        title: "AI & Software Engineering",
        desc: "Strong foundation in AI, Flutter, Java and Full Stack Development.",
    },
    {
        icon: <Award className="text-blue-600" />,
        title: "Technical Certifications",
        desc: "Google AI essentials, MLOps and other Coursera professional certifications.",
    },
];

export default function Achievements() {
    return (
        <section className="bg-white py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">
                    <SectionHeading
                        title="Milestones along my journey"
                        subtitle="Achievements"
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {achievements.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-5">{item.icon}</div>

                            <h3 className="text-2xl font-bold">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-slate-600 leading-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}