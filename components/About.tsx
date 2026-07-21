import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-8 py-32"
        >
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div>
                    <SectionHeading
                        title="Beyond the Code"
                        subtitle="About"
                    />

                    <div className="space-y-6 text-lg leading-8 text-slate-600">

                        <p>
                            I'm a Computer Science graduate specializing in Artificial Intelligence who enjoys building complete software products—from research and UI/UX design to development, deployment, and continuous improvement.
                        </p>

                        <p>
                            My strongest experience comes from leading the development of <a href="https://play.google.com/store/apps/details?id=com.spashtanudi.app" target="_blank" className="font-bold text-blue-600 underline">Spashta Nudi</a>, a speech therapy mobile application. As a Flutter developer, I led the development of Spashta Nudi, a speech therapy mobile application created in collaboration with <span className="font-bold"> All India Institute of Speech and Hearing, Mysuru (AIISH)</span>. The project strengthened my ability to design accessible user experiences, collaborate with domain experts, and deliver software for real users.
                        </p>

                        <p>
                            Alongside mobile development, I enjoy building AI-driven applications, enterprise web solutions, and modern full stack systems while continuously exploring new technologies that create meaningful impact.
                        </p>

                    </div>
                </div>

                <div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

                        <h3 className="text-2xl font-semibold mb-8">
                            Quick Facts
                        </h3>

                        <div className="space-y-5">

                            <div>🎓 Computer Science (AI)</div>

                            <div>📍 Mysuru, Karnataka</div>

                            <div>💻 Full Stack Developer</div>

                            <div>📱 Flutter Developer</div>

                            <div>🤖 AI Enthusiast</div>

                            <div>🎨 UI / UX Enthusiast</div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}