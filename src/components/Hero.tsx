import { Link } from 'react-router-dom';

interface Pin {
  img: string;
  price: string;
  match: string;
  cls: string;
}

const pins: Pin[] = [
  {
    img: 'https://picsum.photos/seed/odk1/300/380',
    price: '₦38k/mo',
    match: '92% match',
    cls: 'w-[190px] h-[230px] top-0 left-5 -rotate-[7deg] z-[2]',
  },
  {
    img: 'https://picsum.photos/seed/odk2/300/380',
    price: '₦52k/mo',
    match: '88% match',
    cls: 'w-[170px] h-[210px] top-10 right-10 rotate-[5deg] z-[1]',
  },
  {
    img: 'https://picsum.photos/seed/odk3/300/380',
    price: '₦29k/mo',
    match: '95% match',
    cls: 'w-[180px] h-[220px] bottom-0 left-[110px] rotate-[4deg] z-[3]',
  },
  {
    img: 'https://picsum.photos/seed/odk4/300/380',
    price: '₦60k/mo',
    match: '81% match',
    cls: 'w-[150px] h-[180px] bottom-5 right-0 -rotate-[6deg] z-[1]',
  },
];

const Hero = () => {
  return (
    <header className="bg-ink text-paper pt-16 md:pt-[72px] pb-24 md:pb-[120px] relative">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-ink-2 border border-paper/10 text-zest text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5">
            ◆ AI-matched in under 2 minutes
          </div>
          <h1 className="font-display font-black text-[36px] md:text-[52px] leading-[1.05] tracking-tight">
            Find digs that
            <br />
            actually get <em className="not-italic text-zest">you</em>.
          </h1>
          <p className="text-[17px] text-paper/70 mt-5 mb-8 max-w-[460px] leading-relaxed">
            Odekole learns your budget, your campus, your vibe — then matches you with verified rooms near you. No agent
            wahala, no fake listings, no wasted weekends.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              to="/properties"
              className="bg-zest text-zest-ink px-7 py-4 rounded-full font-bold text-[15px] inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
            >
              Start matching →
            </Link>
            <Link
              to="/list"
              className="border-[1.5px] border-paper/15 text-paper px-7 py-4 rounded-full font-semibold text-[15px] hover:bg-ink-2 transition-colors"
            >
              List your space
            </Link>
          </div>
          <div className="flex gap-8 mt-11 flex-wrap">
            <div className="border-l-2 border-zest pl-3">
              <div className="font-mono font-bold text-[22px] text-paper">12.4k+</div>
              <div className="text-xs text-paper/55 mt-0.5">verified rooms</div>
            </div>
            <div className="border-l-2 border-zest pl-3">
              <div className="font-mono font-bold text-[22px] text-paper">₦45k</div>
              <div className="text-xs text-paper/55 mt-0.5">avg. student rent</div>
            </div>
            <div className="border-l-2 border-zest pl-3">
              <div className="font-mono font-bold text-[22px] text-paper">98%</div>
              <div className="text-xs text-paper/55 mt-0.5">match satisfaction</div>
            </div>
          </div>
        </div>

        {/* Corkboard */}
        <div className="relative h-[360px] md:h-[460px] mt-6 md:mt-0">
          {pins.map((p, i) => (
            <div key={i} className={`odk-pin ${p.cls}`}>
              <img src={p.img} alt="" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center">
                <span className="font-mono font-bold text-[13px] text-ink">{p.price}</span>
              </div>
              <span className="absolute -top-2 -right-2 bg-coral text-white font-display text-[10px] font-bold px-2 py-1 rounded-full -rotate-[4deg]">
                {p.match}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
