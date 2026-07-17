import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MarqueeBand from '@/components/MarqueeBand';
import Footer from '@/components/Footer';
import BottomNavigation from '@/components/BottomNavigation';
import Reveal from '@/components/Reveal';
import { CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const perks = [
  { title: 'Zero agent fees', body: 'Keep 100% of your rent. We only charge tenants a tiny match fee.' },
  { title: 'Verified students only', body: 'Every renter is ID-checked and campus-verified. No wahala tenants.' },
  { title: 'AI-priced', body: 'We suggest the sweet-spot rent for your area so you fill rooms faster.' },
  { title: 'Payments handled', body: 'Rent lands in your account monthly. Late-payment reminders are automated.' },
];

const ListAPlace = () => {
  const [form, setForm] = useState({ name: '', phone: '', location: '', rooms: '1', price: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thanks! Our team will reach out within 24 hours.');
    setForm({ name: '', phone: '', location: '', rooms: '1', price: '' });
  };

  return (
    <div className="min-h-screen bg-paper text-ink pb-20">
      <Navbar />
      <MarqueeBand />

      <section className="bg-ink text-paper py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="inline-flex items-center gap-2 bg-ink-2 border border-paper/10 text-zest text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5">
            ◆ Landlords & hostel owners
          </div>
          <h1 className="font-display font-black text-[36px] md:text-[52px] tracking-tight leading-[1.05]">
            List your space. <em className="not-italic text-zest">Fill it faster.</em>
          </h1>
          <p className="text-paper/70 mt-4 max-w-[560px] text-[16px] md:text-[17px]">
            Odekole puts your rooms in front of thousands of verified students actively looking, right now.
          </p>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="font-display font-bold text-[26px] md:text-[30px] tracking-tight mb-6">
            Why landlords pick Odekole
          </h2>
          <div className="space-y-5">
            {perks.map((p) => (
              <div key={p.title} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-[15px]">{p.title}</div>
                  <div className="text-sm text-ink/70">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={onSubmit}
            className="bg-white border border-ink/10 rounded-2xl p-6 md:p-7 shadow-[0_10px_30px_rgba(20,19,28,0.06)]"
          >
            <h3 className="font-display font-bold text-[20px] mb-4">List in under 2 mins</h3>
            <div className="space-y-3">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-paper-2 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-ink/20"
              />
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone (WhatsApp)"
                className="w-full bg-paper-2 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-ink/20"
              />
              <input
                required
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="Location e.g. Bodija, Ibadan"
                className="w-full bg-paper-2 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-ink/20"
              />
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={form.rooms}
                  onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                  className="bg-paper-2 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-ink/20"
                >
                  <option value="1">1 room</option>
                  <option value="2">2 rooms</option>
                  <option value="3">3+ rooms</option>
                </select>
                <input
                  required
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  placeholder="₦ / month"
                  className="bg-paper-2 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-ink/20"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full bg-zest text-zest-ink font-bold text-sm py-3.5 rounded-full"
            >
              Get me listed →
            </button>
            <p className="text-[11px] text-ink/50 mt-3 text-center">
              We'll call within 24 hours to verify your space.
            </p>
          </form>
        </Reveal>
      </section>

      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default ListAPlace;
