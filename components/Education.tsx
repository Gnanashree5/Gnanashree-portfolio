import SectionHeading from "./SectionHeading";

export default function Education() {
    return (
        <section
            id="education"
            className="mx-auto max-w-7xl px-8 py-32"
        >
            <SectionHeading
                title="Education"
                subtitle="My studies"
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-10">

                <div className="flex flex-col justify-between md:flex-row">

                    <div>

                        <h3 className="text-3xl font-bold">
                            B.E. in Computer Science & Engineering (Artificial Intelligence)
                        </h3>

                        <p className="mt-2 text-lg text-slate-600">
                            Maharaja Institute of Technology, Mysuru
                        </p>

                    </div>

                    <p className="mt-4 text-slate-500 md:mt-0">
                        2022 – 2026
                    </p>

                </div>

                <p className="mt-8 text-lg leading-8 text-slate-600">

                    Specialized in Artificial Intelligence with hands-on experience
                    in software engineering, machine learning, mobile development
                    and full stack web technologies.

                </p>

            </div>

        </section>
    );
}