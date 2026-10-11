export default function Eyebrow({
  index,
  children,
  dark = false,
}: {
  index: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${
        dark ? "text-white/50" : "text-ink/50"
      }`}
    >
      {index} — {children}
    </p>
  );
}
