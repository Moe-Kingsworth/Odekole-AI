import Navbar from '@/components/Navbar';
import MarqueeBand from '@/components/MarqueeBand';
import FeaturesBento from '@/components/FeaturesBento';
import PropertyGrid from '@/components/PropertyGrid';
import CityChips from '@/components/CityChips';
import Footer from '@/components/Footer';
import BottomNavigation from '@/components/BottomNavigation';
import Reveal from '@/components/Reveal';
import { Link } from 'react-router-dom';

const tips = [
  { icon: '◷', title: 'Start early', body: 'Begin your search 3–4 months before resumption to lock the best rooms.' },
  { icon: '◉', title: 'Visit in person', body: 'Always inspect before paying. Odekole verified badges help, but eyes on ground matter.' },
  { icon: '₦', title: 'Budget wisely', body: 'Factor in transport, power, and food — not just rent.' },
  { icon: '☗', title: 'Safety first', body: 'Choose blocks with good lighting, security, and student presence.' },
];

const testimonials = [
  { name: 'Adunni O.', school: 'UNILAG', course: 'Computer Science', text: 'Odekole matched me with a studio 10 mins from campus. Signed in 2 days.' },
  { name: 'Ibrahim M.', school: 'ABU Zaria', course: 'Engineering', text: 'Split rent with 2 coursemates, no drama. This is how it should\'ve always been.' },
  { name: 'Chioma N.', school: 'UNN', course: 'Medicine', text: 'The budget filter saved me. Every place I toured was actually within my range.' },
];

const ForStudents = () => {
  return (
    <div className="min-h-screen bg-paper text-ink pb-20">
      <Navbar />
      <MarqueeBand />

      {/* Hero */}
      <section className="bg-ink text-paper py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-ink-2 border border-paper/10 text-zest text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5">
              ◆ Built for Naija students
            </div>
            <h1 className="font-display font-black text-[36px] md:text-[52px] tracking-tight leading-[1.05]">
              Housing that <em className="not-italic text-zest">gets</em> student life.
            </h1>
            <p className="text-paper/70 mt-4 text-[16px] md:text-[17px] max-w-[480px]">
              Verified rooms near your campus, budget-friendly options, and squad-split payments. All in one app.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/properties" className="bg-zest text-zest-ink px-6 py-3.5 rounded-full font-bold text-sm">
                Start matching →
              </Link>
              <a href="#tips" className="border-[1.5px] border-paper/20 text-paper px-6 py-3.5 rounded-full font-semibold text-sm">
                Read the guide
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '12.4k+', l: 'verified rooms' },
              { n: '₦45k', l: 'avg. rent' },
              { n: '98%', l: 'match satisfaction' },
              { n: '2 min', l: 'to first match' },
            ].map((s) => (
              <div key={s.l} className="bg-ink-2 border border-paper/10 rounded-2xl p-5">
                <div className="font-mono font-bold text-[26px] text-zest">{s.n}</div>
                <div className="text-xs text-paper/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CityChips />

      <FeaturesBento />

      {/* Tips */}
      <section id="tips" className="max-w-[1180px] mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <div className="text-[13px] font-bold text-coral uppercase tracking-[1px] mb-2.5">The student playbook</div>
          <h2 className="font-display font-bold text-[28px] md:text-[32px] max-w-[520px] mb-8">
            Rules of the digs game.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tips.map((t) => (
            <Reveal key={t.title} className="bg-white border border-ink/10 rounded-2xl p-6 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-zest text-zest-ink font-display font-bold text-xl flex items-center justify-center flex-shrink-0">
                {t.icon}
              </div>
              <div>
                <h3 className="font-display text-[18px] mb-1.5">{t.title}</h3>
                <p className="text-sm text-[#4A493F] leading-relaxed">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-16">
        <Reveal>
          <div className="text-[13px] font-bold text-cobalt uppercase tracking-[1px] mb-2.5">The word on campus</div>
          <h2 className="font-display font-bold text-[28px] md:text-[32px] mb-8">Students, actually happy.</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Reveal key={t.name} className="bg-white border border-ink/10 rounded-2xl p-6">
              <p className="text-[15px] text-ink/85 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-5 pt-4 border-t border-ink/10">
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-[#6B6A63] mt-0.5">{t.course} • {t.school}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PropertyGrid heading="Popular with students" limit={3} />

      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default ForStudents;
