import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
const experience = [
    {
        icon: <GraduationCap className="text-blue-600" />,
        title: "Java Full Stack development Intern",
        company: "Pentagon Space",
        duration: "2026",
        description:
            "Developed enterprise applications using Java, Spring Boot, MySQL and modern web technologies while learning software engineering best practices.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="bg-slate-50 py-28">
            <div className="mx-auto max-w-6xl px-6">

                <div className="mb-16 text-center">
                    <SectionHeading
                        title="Professional Journey"
                        subtitle="Experience"
                    />
                </div>

                <div className="space-y-8">

                    {experience.map((item) => (

                        <div
                            key={item.title}
                            className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                        >

                            <div className="flex items-start gap-5">

                                <div>{item.icon}</div>

                                <div>

                                    <h3 className="text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-blue-600 font-semibold">
                                        {item.company}
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        {item.duration}
                                    </p>

                                    <p className="mt-5 leading-8 text-slate-600">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}