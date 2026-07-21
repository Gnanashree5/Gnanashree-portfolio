"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import PhoneMockup from "./spashta/PhoneMockup";

export default function FeaturedProject() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-28"
        >
            {/* Background Blur */}
            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <SectionHeading
                        title="Spashta Nudi"
                        subtitle="Featured project"
                    />

                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                        A clinically-inspired Flutter application that helps Kannada-speaking
                        speech impaired children improve speech clarity through engaging home-based practice.
                        Developed in collaboration with <a href="https://aiishmysore.in/" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-blue-800">All India Institute of Speech and Hearing, Mysuru (AIISH)</a> and published on <a
                            href="https://play.google.com/store/apps/details?id=com.spashtanudi.app"
                            target="_blank"
                            rel="noopener noreferrer" className="underline font-semibold text-blue-800">Google Playstore.</a>
                    </p>

                </div>

                {/* Hero Card */}

                <div className="grid items-center gap-8 lg:grid-cols-[1.50fr_0.50fr]">

                    {/* Left */}

                    <div>

                        <div className="mb-8 inline-flex rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium">
                            📱 Live on Google Play
                        </div>

                        <h3 className="mb-8 text-4xl font-bold leading-tight text-slate-900">

                            Bringing Speech Therapy

                            <span className="text-blue-600">
                                {" "}Beyond Clinical Walls.
                            </span>

                        </h3>

                        <p className="mb-8 text-lg leading-8 text-slate-600">

                            Spashta Nudi transforms speech practice into an engaging learning
                            experience through structured activities, gamification and progress
                            tracking. Children continue practicing at home while parents and
                            clinicians can monitor their development.

                        </p>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                ✅ Flutter + Firebase
                            </div>

                            <div className="flex items-center gap-3">
                                ✅ Structured Kannada Learning
                            </div>

                            <div className="flex items-center gap-3">
                                ✅ AIISH Clinical Collaboration
                            </div>

                            <div className="flex items-center gap-3">
                                ✅ Rewards & Gamification
                            </div>

                            <div className="flex items-center gap-3">
                                ✅ Progress Analytics
                            </div>

                            <div className="flex items-center gap-3">
                                ✅ Published on Play Store
                            </div>

                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <a
                                href="https://play.google.com/store/apps/details?id=com.spashtanudi.app"
                                target="_blank"
                                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                            >
                                View on Play Store
                            </a>

                            <Link
                                href="/projects/spashta-nudi"
                                className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
                            >
                                Explore the Journey →
                            </Link>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="relative">

                        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl" />

                        {/* <div className="relative overflow-hidden rounded-[40px] bg-white p-8 shadow-2xl"> */}

                        <PhoneMockup />

                    </div>

                </div>

            </div>

            {/* </div> */}
        </section >
    );
}