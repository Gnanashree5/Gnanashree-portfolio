import { Mail, Download } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-7xl px-8 py-32"
        >
            <div className="rounded-[40px] bg-slate-900 p-20 text-center text-white">

                <div className="mb-20 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
                        Contact
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-slate-90 text-white">
                        Let's build something meaningful together
                    </h2>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-600" />

                </div>

                <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 leading-8">
                    I'm currently seeking Software Engineering opportunities where I can contribute, learn, and build impactful products. Whether you'd like to discuss a project, an opportunity, or simply connect, I'd love to hear from you.
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-5">

                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">

                            <Mail className="text-blue-600" size={22} />

                        </div>

                        <div>

                            <p className="text-sm text-slate-500">
                                Email
                            </p>

                            <a
                                href="mailto:gnanashreesbjain@gmail.com"
                                className="font-semibold text-slate-900 transition hover:text-blue-600"
                            >
                                gnanashreesbjain@gmail.com
                            </a>

                        </div>

                    </div>

                    <a
                        href="https://www.linkedin.com/in/s-b-gnanashree-jain-127263281?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-slate-900"
                    >
                        💼 LinkedIn
                    </a>

                    <a
                        href="https://github.com/Gnanashree5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-slate-900"
                    >
                        💻 GitHub
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-slate-900"
                    >
                        📄 Resume
                    </a>

                </div>
            </div>
        </section>
    );
}