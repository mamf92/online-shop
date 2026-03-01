import { useEffect } from 'react';

export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  onClickOutside: () => void,
) {
  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      const clickedElement = event.target as Node;
      const isInsideMenu = ref.current?.contains(clickedElement);

      if (!isInsideMenu) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, onClickOutside]);
}
