import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import PropertyCard, { PropertyCardData } from './PropertyCard';
import Reveal from './Reveal';

// Fallback data used when Supabase returns nothing yet
const fallback: PropertyCardData[] = [
  {
    id: 'f1',
    title: 'Sunny self-con near UI gate',
    location: 'Bodija, Ibadan',
    subtitle: '8 min to campus',
    image: 'https://picsum.photos/seed/odk10/400/300',
    price: 35000,
    matchPercent: 94,
    amenities: ['WiFi', 'Prepaid meter', 'Roommate ok'],
  },
  {
    id: 'f2',
    title: 'Shared flat, girls only',
    location: 'Yaba, Lagos',
    subtitle: '12 min to UNILAG',
    image: 'https://picsum.photos/seed/odk11/400/300',
    price: 55000,
    matchPercent: 89,
    amenities: ['Security', 'Water 24/7'],
  },
  {
    id: 'f3',
    title: 'Studio off Nsukka road',
    location: 'Nsukka',
    subtitle: 'walk to UNN',
    image: 'https://picsum.photos/seed/odk12/400/300',
    price: 22000,
    matchPercent: 97,
    amenities: ['Furnished', 'Quiet street'],
  },
];

interface Props {
  heading?: string;
  limit?: number;
}

const PropertyGrid = ({ heading = 'Fresh matches for you', limit }: Props) => {
  const [rows, setRows] = useState<PropertyCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const query = supabase
        .from('properties')
        .select('id, name, location, images, outright_price, payment_plan_price, features')
        .order('created_at', { ascending: false });
      const { data, error } = limit ? await query.limit(limit) : await query;

      if (!error && data && data.length > 0) {
        const mapped: PropertyCardData[] = data.map((p, i) => ({
          id: p.id,
          title: p.name,
          location: p.location,
          image:
            (p.images && p.images[0]) ||
            `https://picsum.photos/seed/odk-db-${i}/400/300`,
          price: p.payment_plan_price ?? p.outright_price ?? 0,
          amenities: (p.features ?? []).slice(0, 3),
        }));
        setRows(mapped);
      } else {
        setRows(fallback);
      }
      setLoading(false);
    })();
  }, [limit]);

  const items = loading ? [] : rows;

  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-6 pb-20">
      <Reveal className="flex justify-between items-end mb-7">
        <h2 className="font-display font-bold text-[26px] md:text-[30px] tracking-tight">
          {heading}
        </h2>
      </Reveal>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl h-[320px] border border-ink/10 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {items.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PropertyGrid;
