export function BurgerButton({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex h-5 w-7 cursor-pointer flex-col items-center justify-center gap-1"
      aria-label="Toggle menu"
    >
      <span
        className={`bg-accent block h-0.75 w-6 origin-center rounded-3xl transition-all duration-300 ${isOpen ? 'translate-y-1.75 rotate-45' : ''}`}
      />
      <span
        className={`bg-accent block h-0.75 w-6 rounded-3xl transition-all duration-300 ${isOpen ? 'scale-x-0 opacity-0' : ''}`}
      />
      <span
        className={`bg-accent block h-0.75 w-6 origin-center rounded-3xl transition-all duration-300 ${isOpen ? '-translate-y-1.75 -rotate-45' : ''}`}
      />
    </button>
  );
}
