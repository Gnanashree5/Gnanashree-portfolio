export default function SpashtaProblem() {
    return (
        <section className="bg-slate-950 py-28 text-white">
            <div className="mx-auto max-w-6xl px-6">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    The Problem
                </p>

                <h2 className="max-w-4xl text-5xl font-bold leading-tight">
                    Speech therapy shouldn&apos;t stop when children leave the clinic.
                </h2>

                <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                    Speech development requires consistent practice, but many families
                    struggle to continue structured articulation exercises at home.
                    Children often lose motivation, parents need guided activities, and
                    clinicians have limited visibility into home practice.
                </p>

                <div className="mt-20 grid gap-8 md:grid-cols-4">

                    <div className="rounded-2xl bg-slate-900 p-6">
                        <div className="text-5xl">🏥</div>
                        <h3 className="mt-5 text-xl font-semibold">
                            Therapy Session
                        </h3>
                        <p className="mt-3 text-slate-400">
                            Practice begins with guidance from speech-language pathologists.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-900 p-6">
                        <div className="text-5xl">🏠</div>
                        <h3 className="mt-5 text-xl font-semibold">
                            Home
                        </h3>
                        <p className="mt-3 text-slate-400">
                            Parents need structured, easy-to-follow practice activities.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-900 p-6">
                        <div className="text-5xl">📉</div>
                        <h3 className="mt-5 text-xl font-semibold">
                            Practice Gap
                        </h3>
                        <p className="mt-3 text-slate-400">
                            Without regular engagement, therapy progress becomes harder to sustain.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-blue-600 p-6">
                        <div className="text-5xl">📱</div>
                        <h3 className="mt-5 text-xl font-semibold">
                            Spashta Nudi
                        </h3>
                        <p className="mt-3 text-blue-100">
                            Extends guided speech practice beyond the clinic through an engaging mobile app.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}