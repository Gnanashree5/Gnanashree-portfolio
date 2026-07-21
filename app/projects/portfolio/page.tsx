export default function PortfolioProject() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-24">

            <p className="uppercase tracking-[0.3em] font-semibold text-blue-600">
                Personal Project • Frontend Development
            </p>

            <h1 className="mt-4 text-6xl font-bold leading-tight">
                Personal Developer Portfolio
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-400">
                A modern developer portfolio designed to showcase my software
                engineering journey, projects, technical skills, and achievements
                through immersive case studies, smooth animations, and a responsive
                user experience built with modern web technologies.
            </p>

            <img
                src="/projects/portfolio.png"
                alt="Developer Portfolio"
                className="mt-16 rounded-3xl shadow-2xl"
            />

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    The Goal
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    Instead of creating a conventional portfolio, I wanted to build an
                    experience that reflects my design philosophy and software
                    engineering skills. Every section was crafted to provide recruiters
                    with an engaging way to explore my projects, technical expertise,
                    and achievements.
                </p>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    My Solution
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    I developed this portfolio using Next.js, TypeScript, Tailwind CSS,
                    and Framer Motion. It features responsive layouts, elegant
                    animations, interactive project case studies, smooth navigation,
                    dark mode support, and a modern UI focused on delivering an
                    exceptional viewing experience across all devices.
                </p>

            </section>

            <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">

                <h2 className="text-3xl font-bold text-black">
                    Key Features
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 text-black">

                    <div>✅ Modern responsive UI</div>
                    <div>✅ Next.js App Router architecture</div>
                    <div>✅ Beautiful Framer Motion animations</div>
                    <div>✅ Interactive project case studies</div>
                    <div>✅ Dark / Light theme support</div>
                    <div>✅ Optimized performance & SEO</div>

                </div>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Technologies Used
                </h2>

                <div className="mt-8 flex flex-wrap gap-4">

                    {[
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                        "React",
                        "Vercel",
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
                    This portfolio serves as a central hub for showcasing my work,
                    demonstrating both my technical and design capabilities. Beyond
                    presenting projects, it reflects my attention to detail, creativity,
                    and passion for building polished, user-centric software solutions.
                </p>

            </section>

            <div className="mt-20 flex flex-wrap gap-5">

                <a
                    href="https://github.com/Gnanashree5/Gnanashree-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-black px-8 py-4 text-white transition hover:scale-105"
                >
                    View Source Code →
                </a>

                <a
                    href="/"
                    className="rounded-xl border border-slate-300 px-8 py-4 transition hover:border-blue-600 hover:text-blue-600"
                >
                    ← Back to Portfolio
                </a>

            </div>

        </main>
    );
}