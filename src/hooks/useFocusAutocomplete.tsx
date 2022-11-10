import { useRef, useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setIsAutocomplete } from '../redux/reducer/searchSlice';

function useFocusAutocomplete() {
  const searchInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLInputElement;
      if (searchInput.current && !searchInput.current.contains(target)) {
        dispatch(setIsAutocomplete(false));
      } else {
        dispatch(setIsAutocomplete(true));
      }
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [searchInput]);

  return searchInput;
}

export default useFocusAutocomplete;
