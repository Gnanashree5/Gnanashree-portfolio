import Link from "next/link";
import Image from "next/image";

export default function SpashtaHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <div>

                        <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

                            🏥 AIISH × MIT Mysore Collaboration

                        </div>

                        <div className="flex items-center gap-6">

                            <Image
                                src="/projects/spashta icon.png"
                                alt="Spashta Nudi Logo"
                                width={90}
                                height={90}
                                className="rounded-3xl shadow-lg"
                            />

                            <div>
                                <h1 className="text-6xl font-bold text-black drop-shadow-lg">
                                    Spashta Nudi
                                </h1>

                                <p className="mt-2 text-xl text-blue-600 font-semibold">
                                    Bringing Kannada Speech Therapy Beyond Clinical Walls
                                </p>
                            </div>

                        </div>

                        <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">

                            A Flutter application designed to help children with speech
                            articulation practice through structured learning,
                            gamification, progress analytics and parent-guided intervention.

                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-black">
                                Flutter
                            </span>
                            <span className="rounded-full bg-slate-100 px-4 py-2 text-black">
                                Dart
                            </span>

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-black">
                                Firebase
                            </span>
                            <span className="rounded-full bg-slate-100 px-4 py-2 text-black">
                                Firestore
                            </span>
                            <span className="rounded-full bg-slate-100 px-4 py-2 text-black">
                                Google Play
                            </span>

                        </div>

                        <div className="mt-10 flex gap-4">

                            <Link
                                href="https://play.google.com/store/apps/details?id=com.spashtanudi.app"
                                target="_blank"
                                className="inline-flex items-center gap-1 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                            ><Image
                                    src="/icons/google play.jpg"
                                    alt="Google Play"
                                    width={60}
                                    height={60}
                                />
                                View app on Play Store
                            </Link>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="relative">

                        <Image
                            src="/projects/spashta cover.png"
                            alt="Spashta Nudi"
                            width={800}
                            height={900}
                            className="rounded-[35px] shadow-2xl"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}