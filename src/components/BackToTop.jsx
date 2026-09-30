import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        })
      }
      className="fixed bottom-6 right-6 z-40 rounded-xl bg-purple-600/90 p-3 text-white shadow-lg shadow-purple-600/30 backdrop-blur transition hover:bg-purple-600"
      aria-label="Back to top"
    >
      <ChevronUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
