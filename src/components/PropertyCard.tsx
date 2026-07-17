import Reveal from './Reveal';

export interface PropertyCardData {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  matchPercent?: number;
  amenities?: string[];
  subtitle?: string; // e.g. "8 min to campus"
}

interface Props {
  property: PropertyCardData;
}

const PropertyCard = ({ property }: Props) => {
  const match = property.matchPercent ?? Math.floor(80 + Math.random() * 18);
  const price = new Intl.NumberFormat('en-NG').format(property.price);

  return (
    <Reveal className="bg-white rounded-2xl overflow-hidden border border-ink/10 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(20,19,28,0.12)] transition-all duration-200">
      <div className="relative h-[170px]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="match-sticker absolute top-3 left-3 bg-zest text-zest-ink font-display text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
          {match}% match
        </span>
      </div>
      <div className="p-4 pt-4 pb-[18px]">
        <div className="text-[15px] font-bold mb-1 text-ink line-clamp-2">{property.title}</div>
        <div className="text-[13px] text-[#6B6A63] mb-3">
          {property.location}
          {property.subtitle ? ` · ${property.subtitle}` : ''}
        </div>
        {property.amenities && property.amenities.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {property.amenities.slice(0, 3).map((a) => (
              <span
                key={a}
                className="text-[11px] font-semibold bg-paper-2 px-2.5 py-1 rounded-full text-[#4A493F]"
              >
                {a}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center mt-3">
          <div className="font-mono font-bold text-[15px] text-ink">
            ₦{price}
            <small className="font-sans font-medium text-[11px] text-[#6B6A63] ml-1">/month</small>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default PropertyCard;
