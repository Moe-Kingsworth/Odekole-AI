import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import MarqueeBand from '@/components/MarqueeBand';
import Footer from '@/components/Footer';
import BottomNavigation from '@/components/BottomNavigation';
import Reveal from '@/components/Reveal';

const steps = [
  {
    n: '01',
    title: 'Tell us your vibe',
    body: 'Budget, campus, roommate preference, must-haves. Takes 90 seconds.',
  },
  {
    n: '02',
    title: 'AI matches your digs',
    body: 'We scan 12k+ verified rooms and rank them by fit — not by who paid to be first.',
  },
  {
    n: '03',
    title: 'Tour & lock it in',
    body: 'Book a physical or video tour. Sign digitally. Pay rent in-app. Move in.',
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-paper text-ink pb-20">
      <Navbar />
      <MarqueeBand />

      <section className="bg-ink text-paper py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="inline-flex items-center gap-2 bg-ink-2 border border-paper/10 text-zest text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5">
            ◆ How Odekole works
          </div>
          <h1 className="font-display font-black text-[36px] md:text-[52px] tracking-tight leading-[1.05]">
            Three steps. <em className="not-italic text-zest">Zero drama.</em>
          </h1>
          <p className="text-paper/70 mt-4 max-w-[560px] text-[16px] md:text-[17px]">
            No agents. No fake listings. No showing up to a house that doesn't exist. Just matches that actually fit.
          </p>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <Reveal
            key={s.n}
            className="bg-white border border-ink/10 rounded-2xl p-6 hover:-translate-y-1 transition-transform"
          >
            <div className="font-mono text-zest-ink bg-zest inline-block px-2.5 py-1 rounded-full text-[12px] font-bold mb-4">
              {s.n}
            </div>
            <h3 className="font-display font-bold text-[20px] mb-2">{s.title}</h3>
            <p className="text-sm text-ink/70 leading-relaxed">{s.body}</p>
          </Reveal>
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-20">
        <Reveal className="bg-zest text-zest-ink rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display font-black text-[28px] md:text-[36px] tracking-tight">
            Ready to find your digs?
          </h2>
          <p className="text-sm md:text-base mt-2 opacity-80 max-w-[420px] mx-auto">
            Start matching in 90 seconds. Free forever for students.
          </p>
          <Link
            to="/properties"
            className="mt-6 inline-flex bg-ink text-paper px-7 py-3.5 rounded-full font-bold text-sm"
          >
            Start matching →
          </Link>
        </Reveal>
      </section>

      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default HowItWorks;
