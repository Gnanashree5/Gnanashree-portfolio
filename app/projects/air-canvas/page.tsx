export default function AirCanvas() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-24">

            <p className="uppercase tracking-[0.3em] font-semibold text-cyan-600">
                Computer Vision • Human Computer Interaction
            </p>

            <h1 className="mt-4 text-6xl font-bold leading-tight">
                Air Canvas using OpenCV
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-400">
                A touchless virtual drawing application that enables users to draw
                in the air using hand gestures. Built with OpenCV and MediaPipe,
                the project demonstrates real-time hand tracking, gesture
                recognition, and intuitive human-computer interaction without
                requiring physical touch.
            </p>

            <img
                src="/projects/aircanvas.png"
                alt="Air Canvas"
                className="mt-16 rounded-3xl shadow-2xl"
            />

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    The Problem
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    Traditional drawing applications require physical devices such
                    as a mouse, stylus, or touchscreen. This project explores a more
                    natural and interactive way of drawing by allowing users to
                    control the canvas entirely through hand gestures captured by a
                    webcam.
                </p>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    My Solution
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    I developed a gesture-controlled virtual canvas that tracks hand
                    landmarks in real time using MediaPipe. Users can draw, erase,
                    change colors, and save their artwork without touching the
                    computer, creating an intuitive and engaging computer vision
                    application.
                </p>

            </section>

            <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">

                <h2 className="text-3xl font-bold text-black">
                    Key Features
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 text-black">

                    <div>✅ Real-time hand tracking</div>
                    <div>✅ Finger gesture recognition</div>
                    <div>✅ Touchless virtual drawing</div>
                    <div>✅ Multiple brush colors</div>
                    <div>✅ Eraser & canvas clearing</div>
                    <div>✅ Save artwork locally</div>

                </div>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Technologies Used
                </h2>

                <div className="mt-8 flex flex-wrap gap-4">

                    {[
                        "Python",
                        "OpenCV",
                        "MediaPipe",
                        "NumPy",
                        "Computer Vision",
                        "Hand Tracking",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-cyan-100 px-5 py-2 text-cyan-700"
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
                    This project showcases practical applications of computer vision
                    and human-computer interaction by replacing traditional input
                    devices with intuitive hand gestures. It demonstrates real-time
                    image processing, gesture recognition, and interactive software
                    development using AI-powered vision techniques.
                </p>

            </section>

            <div className="mt-20 flex flex-wrap gap-5">

                <a
                    href="https://github.com/Gnanashree5/Air-canvas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-black px-8 py-4 text-white transition hover:scale-105"
                >
                    View Source Code →
                </a>

                <a
                    href="/#projects"
                    className="rounded-xl border border-slate-300 px-8 py-4 transition hover:border-cyan-600 hover:text-cyan-600"
                >
                    ← Back to Portfolio
                </a>

            </div>

        </main>
    );
}