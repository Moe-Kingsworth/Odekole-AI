import { useEffect, useRef, PropsWithChildren, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: number;
}

export const Reveal = ({
  as: Tag = 'div',
  className,
  delay = 0,
  children,
}: PropsWithChildren<RevealProps>) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as never} className={cn('reveal', className)}>
      {children}
    </Tag>
  );
};

export default Reveal;
