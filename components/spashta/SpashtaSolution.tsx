import PhoneMockup from "./PhoneMockup";

export default function SpashtaSolution() {
    return (
        <section className="bg-white py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-20 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                        The Solution
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Spashta Nudi
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
                        A speech therapy mobile application that transforms speech articulation
                        practice into an engaging home-learning experience through structured
                        lessons, gamification, progress tracking and expert-guided content.
                    </p>

                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div className="flex justify-center">

                        <PhoneMockup />

                    </div>

                    <div className="space-y-8">

                        <div className="rounded-2xl border p-6">
                            <h3 className="text-2xl font-bold text-blue-600">
                                👧 Target Users
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Children aged <strong>6-14 years</strong>, parents, and
                                speech-language pathologists.
                            </p>
                        </div>

                        <div className="rounded-2xl border p-6">
                            <h3 className="text-2xl font-bold text-blue-600">
                                🏥 Clinical Collaboration
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Designed and validated in collaboration with AIISH, Mysuru to
                                support structured home-based speech therapy.
                            </p>
                        </div>

                        <div className="rounded-2xl border p-6">
                            <h3 className="text-2xl font-bold text-blue-600">
                                💻 My Role
                            </h3>

                            <p className="mt-3 text-slate-600">
                                I led the complete application development including UI/UX,
                                Flutter, Firebase, progress
                                tracking, gamification, testing and Google Play deployment.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}