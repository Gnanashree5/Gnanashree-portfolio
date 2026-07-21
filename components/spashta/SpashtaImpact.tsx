import Link from "next/link";

export default function SpashtaImpact() {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Results & Impact
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        From Research to Real Users
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        Spashta Nudi demonstrates how thoughtful engineering and
                        accessibility-focused design can extend speech therapy beyond
                        clinical settings into children&apos;s everyday lives.
                    </p>

                </div>

                {/* Metrics */}

                <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-3xl bg-white p-8 shadow-lg">
                        <h3 className="text-5xl font-bold text-blue-600">19</h3>
                        <p className="mt-3 text-black">Kannada Letters</p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-lg">
                        <h3 className="text-5xl font-bold text-blue-600">520+</h3>
                        <p className="mt-3 text-black">Learning Words</p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-lg">
                        <h3 className="text-5xl font-bold text-blue-600">57</h3>
                        <p className="mt-3 text-black">Practice Sentences</p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-lg">
                        <h3 className="text-5xl font-bold text-blue-600">19</h3>
                        <p className="mt-3 text-black">Interactive Stories</p>
                    </div>

                </div>

                {/* Closing */}

                <div className="mt-24 rounded-[40px] bg-slate-900 p-12 text-center text-white">

                    <h3 className="text-4xl font-bold">
                        Technology should empower therapy,
                        <br />
                        not replace it.
                    </h3>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
                        Spashta Nudi was created to help children practice consistently,
                        support parents with structured home intervention, and complement
                        the work of speech-language pathologists through accessible
                        technology.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <Link
                            href="https://play.google.com/store/apps/details?id=com.spashtanudi.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                        >
                            View on Google Play
                        </Link>

                        <a
                            href="/"
                            className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-slate-900"
                        >
                            ← Back to Portfolio
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}