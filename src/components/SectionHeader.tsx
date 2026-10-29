import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="mb-6 flex items-center gap-4 font-mono text-xs tracking-[0.2em] text-mist uppercase">
        <span className="text-signal">{index}</span>
        <span className="h-px w-10 bg-line" />
        <span>{label}</span>
      </div>
      <h2 className="max-w-4xl text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
