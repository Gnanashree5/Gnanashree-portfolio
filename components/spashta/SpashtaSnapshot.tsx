import {
    Calendar,
    Users,
    Smartphone,
    Code2,
    Trophy,
    Building2,
} from "lucide-react";

const items = [
    {
        icon: <Building2 size={22} />,
        title: "Collaboration",
        value: "AIISH Mysuru + MIT Mysore",
    },
    {
        icon: <Users size={22} />,
        title: "Target Users",
        value: "Children (6-14 yrs), Parents & Clinicians",
    },
    {
        icon: <Code2 size={22} />,
        title: "Tech Stack",
        value: "Flutter • Firebase • Firestore Cloud Storage",
    },
    {
        icon: <Smartphone size={22} />,
        title: "Platform",
        value: "Android",
    },
    {
        icon: <Calendar size={22} />,
        title: "Status",
        value: "Published on Google Play",
    },
    {
        icon: <Trophy size={22} />,
        title: "My Role",
        value: "Lead Developer & Product Designer",
    },
];

export default function SpashtaSnapshot() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
                    Project Snapshot
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 text-blue-600">{item.icon}</div>

                            <h3 className="font-semibold text-slate-500">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-lg font-bold text-black">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}