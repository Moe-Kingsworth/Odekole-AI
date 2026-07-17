import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MarqueeBand from '@/components/MarqueeBand';
import CityChips from '@/components/CityChips';
import PropertyGrid from '@/components/PropertyGrid';
import Footer from '@/components/Footer';
import BottomNavigation from '@/components/BottomNavigation';
import Reveal from '@/components/Reveal';
import { Search, MapPin } from 'lucide-react';

const PropertyListings = () => {
  const [q, setQ] = useState('');

  return (
    <div className="min-h-screen bg-paper text-ink pb-20">
      <Navbar />
      <MarqueeBand />

      {/* Page hero */}
      <section className="bg-ink text-paper py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="inline-flex items-center gap-2 bg-ink-2 border border-paper/10 text-zest text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5">
            ◆ Browse verified digs
          </div>
          <h1 className="font-display font-black text-[36px] md:text-[52px] tracking-tight leading-[1.05]">
            Every room, <em className="not-italic text-zest">no wahala</em>.
          </h1>
          <p className="text-paper/70 mt-4 max-w-[520px] text-[16px] md:text-[17px]">
            Search verified rooms near your campus. Filter by budget, vibe, and squad size.
          </p>

          <div className="mt-8 bg-paper rounded-2xl p-3 flex items-center gap-2 max-w-[640px]">
            <div className="flex-1 flex items-center gap-2 px-3">
              <Search className="w-4 h-4 text-ink/60" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Bodija, UNILAG, Nsukka…"
                className="flex-1 bg-transparent py-3 text-ink placeholder:text-ink/50 outline-none text-[15px]"
              />
            </div>
            <button className="bg-zest text-zest-ink font-bold text-sm px-5 py-3 rounded-full inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </section>

      <CityChips />

      <Reveal className="max-w-[1180px] mx-auto px-5 md:px-8 pt-2">
        <div className="bg-zest text-zest-ink rounded-2xl p-5 md:p-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-display font-bold text-[18px]">AI-matched to your profile</div>
            <div className="text-sm opacity-80">We keep learning what you like — matches update in real time.</div>
          </div>
          <button className="bg-ink text-paper px-5 py-2.5 rounded-full font-bold text-sm">
            Retrain my matches →
          </button>
        </div>
      </Reveal>

      <PropertyGrid heading={q ? `Results for "${q}"` : 'All verified digs'} />

      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default PropertyListings;
