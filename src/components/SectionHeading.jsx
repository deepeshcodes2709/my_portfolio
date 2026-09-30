export default function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-10">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-purple-300">
        {Icon && <Icon aria-hidden="true" className="h-3.5 w-3.5" />}
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-2 text-sm text-slate-400">{description}</p>}
    </div>
  );
}
