import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white pt-32">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl"></div>

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-8 lg:grid-cols-2">

                {/* LEFT */}

                <div>

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
                        SOFTWARE ENGINEER • AI Enthusiast • FULL STACK DEVELOPER • FLUTTER DEVELOPER
                    </p>

                    <h1 className="mb-8 text-3xl lg:text-5xl font-bold leading-tight text-slate-900">

                        Building software that is
                        <br />
                        thoughtfully designed,
                        <br />

                        <span className="text-blue-600">
                            carefully engineered.
                        </span>

                    </h1>

                    <p className="max-w-2xl text-lg leading-8 text-slate-600">

                        Hi, I&apos;m <span className="font-semibold text-black">S B GNANASHREE JAIN</span>,
                        a Software Engineer passionate about transforming ideas into intuitive, impactful software. From collaborating with <Link href="https://aiishmysore.in/" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-blue-800">All India Institute of Speech and Hearing, Mysuru (AIISH)</Link> to develop a healthcare-focused mobile application, to building AI-powered and full stack solutions, I enjoy creating technology that solves meaningful real-world problems.
                    </p>

                    <div className="mt-12 flex gap-5">

                        <Link
                            href="#projects"
                            className="rounded-xl bg-blue-500 px-8 py-4 text-white transition hover:bg-blue-700"
                        >
                            Explore Projects
                        </Link>

                        <Link
                            href="/resume.pdf"
                            download
                            className="rounded-xl bg-blue-500 px-8 py-4 text-white transition hover:bg-blue-700"
                        >
                            Download Resume
                        </Link>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.spashtanudi.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-blue-500 px-8 py-4 text-white transition hover:bg-blue-700"
                        >
                            View app on Play Store
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-4">

                        <span className="rounded-full bg-blue-100 px-5 py-2">
                            📍 Mysuru, India
                        </span>

                        <span className="rounded-full bg-blue-100 px-5 py-2">
                            🎓 Computer Science Artificial Intelligence Graduate
                        </span>

                        <span className="rounded-full bg-blue-100 px-5 py-2">
                            💻 Open to Software Engineering Roles
                        </span>
                        <span className="rounded-full bg-blue-100 px-5 py-2">📱 Published Google Play Store Application</span>

                    </div>

                </div>

                {/* RIGHT */}

                {/* RIGHT */}

                <div className="relative flex justify-center">

                    {/* Animated Background */}

                    <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-200 via-sky-100 to-white blur-2xl opacity-70" />

                    {/* Profile */}

                    <div className="relative">

                        <Image
                            src="/profile.png"
                            alt="S B Gnanashree Jain"
                            width={420}
                            height={420}
                            priority
                            className="rounded-full border-8 border-white object-cover shadow-[0_30px_80px_rgba(59,130,246,0.25)]"
                        />

                        {/* Floating Badge */}

                        <div className="absolute -right-6 top-8 rounded-2xl bg-white px-5 py-3 shadow-xl">

                            🤖 AI

                        </div>

                        <div className="absolute -left-10 top-36 rounded-2xl bg-white px-5 py-3 shadow-xl">

                            💻 Full Stack

                        </div>

                        <div className="absolute right-0 bottom-12 rounded-2xl bg-white px-5 py-3 shadow-xl">

                            📱 Flutter

                        </div>

                        <div className="absolute left-10 bottom-2 rounded-2xl bg-white px-5 py-3 shadow-xl">

                            🌾 Computer Vision

                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
}