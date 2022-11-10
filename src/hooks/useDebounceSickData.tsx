import { useEffect } from 'react';
import { getSickData } from '../apis/clinicalTrialService';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setIsLoading, setSickData } from '../redux/reducer/searchSlice';

function useDebounceSickData() {
  const dispatch = useAppDispatch();
  const { searchWord } = useAppSelector(state => state.search);

  useEffect(() => {
    const getSickName = async () => {
      try {
        dispatch(setIsLoading(true));
        const searchResult = await getSickData(searchWord);
        dispatch(setSickData(searchResult));
        dispatch(setIsLoading(false));
      } catch (e) {
        dispatch(setIsLoading(false));
        alert(e);
      }
    };
    const timer = setTimeout(() => getSickName(), 300);

    return () => clearTimeout(timer);
  }, [searchWord, dispatch]);
}

export default useDebounceSickData;
