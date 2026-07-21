export default function AIChatbot() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-24">

            <p className="uppercase tracking-[0.3em] font-semibold text-blue-600">
                AI • Full Stack Development
            </p>

            <h1 className="mt-4 text-6xl font-bold leading-tight">
                AI Chatbot Web Application
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-400">
                An enterprise-grade AI chatbot built using Java, Spring Boot,
                MySQL, and the OpenRouter API. The application enables
                intelligent real-time conversations through a scalable backend,
                secure REST APIs, and a modern responsive user interface.
            </p>

            <img
                src="/projects/chatbot.png"
                alt="AI Chatbot"
                className="mt-16 rounded-3xl shadow-2xl"
            />

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    The Problem
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    Modern applications increasingly require intelligent assistants
                    capable of answering user queries instantly. Building such systems
                    requires seamless integration between AI models, backend services,
                    databases, and an intuitive user interface while maintaining
                    scalability and clean software architecture.
                </p>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    My Solution
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    I developed a full-stack AI chatbot that integrates the
                    OpenRouter API with a Spring Boot backend and MySQL database.
                    The application follows enterprise software development
                    practices including layered architecture, RESTful APIs,
                    reusable services, and a responsive frontend for smooth
                    conversational experiences.
                </p>

            </section>

            <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">

                <h2 className="text-3xl font-bold text-black">
                    Key Features
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 text-black">

                    <div>✅ AI-powered real-time conversations</div>
                    <div>✅ Spring Boot REST APIs</div>
                    <div>✅ OpenRouter AI integration</div>
                    <div>✅ MySQL database connectivity</div>
                    <div>✅ Layered enterprise architecture</div>
                    <div>✅ Responsive modern web interface</div>

                </div>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Technologies Used
                </h2>

                <div className="mt-8 flex flex-wrap gap-4">

                    {[
                        "Java",
                        "Spring Boot",
                        "MySQL",
                        "REST API",
                        "OpenRouter API",
                        "HTML",
                        "CSS",
                        "JavaScript",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-blue-100 px-5 py-2 text-blue-700"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Impact
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    This project demonstrates full-stack software engineering by
                    combining backend development, database management, REST APIs,
                    and Artificial Intelligence into a scalable web application.
                    It showcases practical implementation of enterprise Java
                    development principles while delivering an intelligent and
                    interactive user experience.
                </p>

            </section>

            <div className="mt-20 flex flex-wrap gap-5">

                <a
                    href="https://github.com/Gnanashree5/AI-Chatbot-web-application"
                    target="_blank"
                    className="rounded-xl bg-black px-8 py-4 text-white transition hover:scale-105"
                >
                    View Source Code →
                </a>

                <a
                    href="/#projects"
                    className="rounded-xl border border-slate-300 px-8 py-4 transition hover:border-blue-600 hover:text-blue-600"
                >
                    ← Back to Portfolio
                </a>

            </div>

        </main>
    );
}