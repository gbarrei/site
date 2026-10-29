import { capabilities } from "@/content";

export default function Marquee() {
  const items = [...capabilities, ...capabilities];
  return (
    <div className="relative overflow-hidden border-b border-line bg-ink-2 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= capabilities.length}
            className="flex items-center gap-8 pr-8 font-mono text-sm tracking-[0.15em] whitespace-nowrap text-mist uppercase"
          >
            {item}
            <span className="size-1.5 rotate-45 bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
