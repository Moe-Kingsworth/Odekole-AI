import Reveal from './Reveal';

const cells = [
  {
    icon: '◆',
    title: 'Real AI matching',
    body: 'Tell Odekole your budget, campus, and vibe once — it keeps learning and surfaces rooms before you even search.',
    big: true,
  },
  {
    icon: '✓',
    title: 'Verified only',
    body: 'Every listing is inspected. No inflated photos, no ghost apartments.',
  },
  {
    icon: '₦',
    title: 'Split rent with your squad',
    body: 'Pool payments with roommates in one tap — no more chasing people for their share.',
  },
  {
    icon: '⚡',
    title: 'Book in minutes',
    body: 'Chat, view, and sign — all in-app, zero agent runaround.',
  },
  {
    icon: '☾',
    title: 'Off-campus, not off-vibe',
    body: 'Filter by nightlife, quiet streets, or your faculty crew\'s favorite blocks.',
  },
];

const FeaturesBento = () => {
  return (
    <section className="bg-ink text-paper py-20">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <div className="text-[13px] font-bold text-zest uppercase tracking-[1px] mb-2.5">
          Built different
        </div>
        <h2 className="font-display font-bold text-[28px] md:text-[32px] max-w-[520px]">
          Everything the agent hustle never gave you.
        </h2>
        <Reveal className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] gap-[18px]">
          {cells.map((c, i) => (
            <div
              key={i}
              className={`${
                c.big
                  ? 'lg:row-span-2 bg-zest text-zest-ink border-0'
                  : 'bg-ink-2 border border-paper/10'
              } rounded-2xl p-6 md:p-[26px] flex flex-col justify-between min-h-[150px]`}
            >
              <div>
                <div className="text-[26px] mb-3.5">{c.icon}</div>
                <h3 className="font-display text-[19px] mb-2.5">{c.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    c.big ? 'text-zest-ink/75' : 'text-paper/65'
                  }`}
                >
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturesBento;
