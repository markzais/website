import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span className="text-faint">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-mute">{description}</p>
      )}
    </Reveal>
  );
}
