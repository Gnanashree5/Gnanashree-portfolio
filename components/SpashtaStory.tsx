"use client";

import Image from "next/image";

export default function ProjectStory() {
    return (
        <section className="bg-slate-950 py-32 text-white">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Left */}

                    <div>

                        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-400">
                            The Story
                        </p>

                        <h2 className="mb-8 text-5xl font-bold leading-tight">

                            Every child deserves
                            <br />
                            the confidence
                            <br />
                            to speak.

                        </h2>

                        <p className="mb-8 text-xl leading-9 text-slate-300">

                            Speech therapy shouldn&apos;t stop when a child leaves the clinic.
                            Consistent home practice is essential for improving articulation,
                            yet many parents struggle to continue structured learning outside
                            therapy sessions.

                        </p>

                        <div className="space-y-5">

                            <div className="flex gap-4">

                                <span className="text-3xl">🏥</span>

                                <div>

                                    <h4 className="font-semibold text-xl">
                                        Clinic Visits
                                    </h4>

                                    <p className="text-slate-400">
                                        Limited therapy sessions each week.
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <span className="text-3xl">🏠</span>

                                <div>

                                    <h4 className="font-semibold text-xl">
                                        Home Practice
                                    </h4>

                                    <p className="text-slate-400">
                                        Parents need an engaging and structured learning tool.
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <span className="text-3xl">📱</span>

                                <div>

                                    <h4 className="font-semibold text-xl">
                                        Spashta Nudi
                                    </h4>

                                    <p className="text-slate-400">
                                        A complete learning ecosystem designed for children,
                                        parents and speech-language pathologists.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div>

                        <Image
                            src="/projects/spashta-cover.png"
                            alt="Spashta Nudi Cover"
                            width={900}
                            height={900}
                            className="rounded-[40px] shadow-2xl"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}