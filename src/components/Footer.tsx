import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-paper-2 pt-14 pb-8">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <div className="flex flex-wrap justify-between items-start gap-6 pb-8 border-b border-ink/10">
          <div>
            <h2 className="font-display font-bold text-[24px] md:text-[28px] max-w-[380px] leading-tight">
              Your next digs are one match away.
            </h2>
          </div>
          <div className="flex gap-10 md:gap-14">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#8a897d] mb-3">Explore</h4>
              <Link to="/properties" className="block text-sm mb-2 text-ink/80 hover:text-ink">
                Find digs
              </Link>
              <Link to="/for-students" className="block text-sm mb-2 text-ink/80 hover:text-ink">
                For students
              </Link>
              <Link to="/list" className="block text-sm mb-2 text-ink/80 hover:text-ink">
                List a place
              </Link>
              <Link to="/how" className="block text-sm mb-2 text-ink/80 hover:text-ink">
                How it works
              </Link>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#8a897d] mb-3">Company</h4>
              <a href="#" className="block text-sm mb-2 text-ink/80 hover:text-ink">
                About
              </a>
              <a href="#" className="block text-sm mb-2 text-ink/80 hover:text-ink">
                Safety
              </a>
              <a href="#" className="block text-sm mb-2 text-ink/80 hover:text-ink">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-5 text-xs text-[#8a897d]">
          <span>© 2026 Odekole</span>
          <span>Made for Naija students, everywhere.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
