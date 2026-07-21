export default function SpashtaEngineering() {
    const tech = [
        {
            title: "Frontend",
            items: ["Flutter", "Dart", "Responsive UI", "Accessibility"],
        },
        {
            title: "Backend",
            items: ["Firebase", "Firestore", "Cloud Storage"],
        },
        {
            title: "Features",
            items: [
                "Progress Tracking",
                "Gamification",
                "Analytics",
                "Offline Learning",
            ],
        },
        {
            title: "Deployment",
            items: [
                "Google Play Console",
                "Testing",
                "Performance Optimization",
                "Bug Fixing",
            ],
        },
    ];

    return (
        <section className="bg-white py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">
                    <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Engineering
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-black">
                        Building the Complete Product
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        Beyond designing the user experience, I developed the complete
                        application—from frontend development and backend integration to
                        deployment on Google Play.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2">

                    {tech.map((section) => (
                        <div
                            key={section.title}
                            className="rounded-3xl border border-slate-200 p-8 shadow-sm"
                        >
                            <h3 className="text-2xl font-bold text-blue-600">
                                {section.title}
                            </h3>

                            <ul className="mt-6 space-y-3 text-black">
                                {section.items.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span>✔</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div className="mt-20 rounded-3xl bg-slate-900 p-10 text-white">

                    <h3 className="text-3xl font-bold">
                        My Contributions
                    </h3>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">

                        <div>✔ Product Planning</div>
                        <div>✔ UI / UX Design</div>
                        <div>✔ Flutter Development</div>
                        <div>✔ Firebase Integration</div>
                        <div>✔ Firestore Database</div>
                        <div>✔ Progress Tracking</div>
                        <div>✔ Reward System</div>
                        <div>✔ Analytics Dashboard</div>
                        <div>✔ Testing & Debugging</div>
                        <div>✔ Play Store Publishing</div>
                        <div>✔ Collaboration with AIISH</div>

                    </div>

                </div>

            </div>
        </section>
    );
}