export default function WeedDetection() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-24">

            <p className="uppercase tracking-[0.3em] font-semibold text-green-600">
                AI • Computer Vision
            </p>

            <h1 className="mt-4 text-6xl font-bold leading-tight">
                Weed Detection in Wheat Crops using Computer Vision
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-400">
                An AI-powered precision agriculture system developed to automatically
                identify weeds in wheat fields using deep learning and computer vision.
                The project assists farmers by enabling accurate weed detection,
                reducing unnecessary herbicide usage, and improving crop productivity
                through explainable AI.
            </p>

            <img
                src="/projects/weed.png"
                alt="Weed Detection"
                className="mt-16 rounded-3xl shadow-2xl"
            />

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    The Problem
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    Manual weed identification is time-consuming, labour-intensive,
                    and often inaccurate. Incorrect identification can lead to excessive
                    herbicide application, increased farming costs, and reduced crop yield.
                    This project explores how Artificial Intelligence can assist precision
                    agriculture through automated image-based weed detection.
                </p>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    My Solution
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                    I designed and developed an end-to-end computer vision pipeline that
                    preprocesses agricultural images, classifies them using a trained
                    deep learning model, and visualizes model attention using Grad-CAM.
                    The solution was deployed as an interactive Flask web application
                    allowing users to upload crop images and receive instant predictions.
                </p>

            </section>

            <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">

                <h2 className="text-3xl font-bold text-black">
                    Key Features
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 text-black">

                    <div>✅ DenseNet-121 based image classification</div>
                    <div>✅ Explainable AI using Grad-CAM</div>
                    <div>✅ Image preprocessing & augmentation</div>
                    <div>✅ PyTorch training pipeline</div>
                    <div>✅ Flask-based prediction interface</div>
                    <div>✅ Real-time image upload & inference</div>

                </div>

            </section>

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Technologies Used
                </h2>

                <div className="mt-8 flex flex-wrap gap-4">

                    {[
                        "Python",
                        "PyTorch",
                        "OpenCV",
                        "Flask",
                        "DenseNet-121",
                        "Grad-CAM",
                        "NumPy",
                        "Matplotlib",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-green-100 px-5 py-2 text-green-700"
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
                    This project demonstrates how computer vision can support sustainable
                    agriculture by enabling accurate weed identification, reducing manual
                    effort, improving decision-making, and promoting efficient use of
                    agricultural resources.
                </p>

            </section>

            <div className="mt-20 flex flex-wrap gap-5">

                <a
                    href="https://github.com/Gnanashree5/Weed-detection-in-wheat-crops-using-Computer-Vision"
                    target="_blank"
                    className="rounded-xl bg-black px-8 py-4 text-white transition hover:scale-105"
                >
                    View Source Code →
                </a>

                <a
                    href="/#projects"
                    className="rounded-xl border border-slate-300 px-8 py-4 transition hover:border-green-600 hover:text-green-600"
                >
                    ← Back to Portfolio
                </a>

            </div>

        </main>
    );
}