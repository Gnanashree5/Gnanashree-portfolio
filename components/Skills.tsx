import SectionHeading from "./SectionHeading";

const skillGroups = [
    {
        title: "Programming",
        skills: ["Java", "Python", "Dart", "C", "SQL"],
    },
    {
        title: "Frontend",
        skills: [
            "Flutter",
            "React",
            "Next.js",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Tailwind CSS",
            "TypeScript",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Spring Boot",
            "Firebase",
            "Firestore",
            "MySQL",
        ],
    },
    {
        title: "Artificial Intelligence",
        skills: [
            "Machine Learning",
            "Deep Learning",
            "PyTorch",
            "TensorFlow",
            "OpenCV",
            "Flask",
        ],
    },
    {
        title: "Tools",
        skills: [
            "Git",
            "GitHub",
            "PowerBI",
            "Tableau",
            "Canva",
            "VS Code",
            "Android Studio",
            "Microsoft excel",
            "Google Play Console",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-white py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">
                    <SectionHeading
                        title="Technologies I work with"
                        subtitle="Skills"
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {skillGroups.map((group) => (

                        <div
                            key={group.title}
                            className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
                        >

                            <h3 className="mb-6 text-2xl font-bold text-blue-600">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {group.skills.map((skill) => (

                                    <span
                                        key={skill}
                                        className="rounded-full bg-white px-4 py-2 shadow-sm"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}