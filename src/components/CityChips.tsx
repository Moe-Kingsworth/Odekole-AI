import Reveal from './Reveal';

const cities = [
  { code: 'UI', label: 'Ibadan' },
  { code: 'UNN', label: 'Nsukka' },
  { code: 'UNILAG', label: 'Lagos' },
  { code: 'ABU', label: 'Zaria' },
  { code: 'OAU', label: 'Ife' },
  { code: 'UNIBEN', label: 'Benin' },
  { code: 'FUTA', label: 'Akure' },
];

const CityChips = () => {
  return (
    <Reveal as="section" className="max-w-[1180px] mx-auto px-5 md:px-8 pt-14 pb-6">
      <div className="text-[13px] font-bold text-coral uppercase tracking-[1px] mb-3">
        Popping off right now
      </div>
      <div className="flex gap-[18px] overflow-x-auto no-scrollbar py-2 pb-5">
        {cities.map((c) => (
          <button
            key={c.code}
            className="flex-shrink-0 flex flex-col items-center gap-2 group"
          >
            <div className="w-[76px] h-[76px] rounded-full bg-ink border-[3px] border-zest flex items-center justify-center font-display font-bold text-paper text-[15px] group-hover:scale-105 transition-transform">
              {c.code}
            </div>
            <div className="text-xs font-semibold text-ink">{c.label}</div>
          </button>
        ))}
      </div>
    </Reveal>
  );
};

export default CityChips;
