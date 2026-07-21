type Props = {
    title: string;
    subtitle: string;
};

export default function SectionHeading({
    title,
    subtitle,
}: Props) {
    return (
        <div className="mb-20 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
                {subtitle}
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
                {title}
            </h2>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-600" />

        </div>
    );
}