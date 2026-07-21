import Link from "next/link";

export default function HeartDashboard() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-24">

            <p className="uppercase tracking-[0.3em] font-semibold text-red-600">
                Data Analytics • Business Intelligence
            </p>

            <h1 className="mt-4 text-6xl font-bold leading-tight">
                Heart Disease Data Analysis & Interactive Dashboard
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-400">
                A comprehensive healthcare analytics project that transforms raw heart
                disease data into meaningful visual insights using Excel, Python, and
                Power BI. The dashboard enables healthcare professionals to analyze
                patient risk factors, identify trends, and support data-driven clinical
                decision making.
            </p>

            <video
                src="/projects/heart.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="mt-16 w-full rounded-3xl shadow-2xl"
            />

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    The Problem
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    Healthcare datasets contain numerous demographic and clinical
                    attributes that can be difficult to interpret through raw tables
                    alone. Decision makers require interactive visualizations that reveal
                    disease trends, patient risk factors, and meaningful relationships
                    between medical variables.
                </p>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    My Solution
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    I developed an end-to-end healthcare analytics solution by performing
                    exploratory data analysis in Excel and Python, followed by an
                    interactive Power BI dashboard powered by DAX measures and Power
                    Query. The dashboard provides intuitive visualizations that help users
                    explore patient demographics, diagnosis patterns, and key health
                    drivers through dynamic filters and drill-down analysis.
                </p>

            </section>

            <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">

                <h2 className="text-3xl font-bold text-black">
                    Key Features
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 text-black">

                    <div>✅ Excel & Python Exploratory Data Analysis</div>
                    <div>✅ Interactive Power BI Dashboard</div>
                    <div>✅ Dynamic Filters & Slicers</div>
                    <div>✅ KPI Cards & DAX Measures</div>
                    <div>✅ Diagnosis Tree & Health Driver Analysis</div>
                    <div>✅ Drill-down Visual Analytics</div>

                </div>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Technologies Used
                </h2>

                <div className="mt-8 flex flex-wrap gap-4">

                    {[
                        "Power BI",
                        "Power Query",
                        "DAX",
                        "Python",
                        "Pandas",
                        "Matplotlib",
                        "Excel",
                        "Data Analytics",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-red-100 px-5 py-2 text-red-700"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Key Insights
                </h2>

                <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-400">

                    <li>Patients aged 50–60 showed the highest heart disease prevalence.</li>

                    <li>Heart disease occurrence was slightly higher among males.</li>

                    <li>Chest pain type and exercise-induced angina were strong indicators.</li>

                    <li>High cholesterol and lower maximum heart rate correlated with increased risk.</li>

                    <li>Patients with more blocked vessels demonstrated significantly higher disease probability.</li>

                </ul>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Impact
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    This project demonstrates my ability to work across the complete data
                    analytics pipeline—from data cleaning and exploratory analysis to
                    interactive dashboard development. It showcases practical skills in
                    Business Intelligence, healthcare analytics, and data storytelling
                    for supporting informed decision-making.
                </p>

            </section>

            <div className="mt-20 flex flex-wrap gap-5">

                <Link
                    href="https://github.com/Gnanashree5/Data-analysis-on-heart-disease-public-dataset"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-black px-8 py-4 text-white transition hover:scale-105"
                >
                    View Source Code →
                </Link>

                <Link
                    href="/#projects"
                    className="rounded-xl border border-slate-300 px-8 py-4 transition hover:border-red-600 hover:text-red-600"
                >
                    ← Back to Portfolio
                </Link>

            </div>

        </main>
    );
}