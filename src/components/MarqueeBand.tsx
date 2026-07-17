const items = [
  '✦ NO WAHALA HOUSING',
  '✦ AI FINDS YOUR MATCH',
  '✦ VERIFIED LANDLORDS ONLY',
  '✦ SPLIT RENT WITH SQUAD',
];

const MarqueeBand = () => {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-zest text-zest-ink overflow-hidden py-2.5 border-y-2 border-ink">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span key={i} className="font-display font-bold text-sm px-6">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBand;
