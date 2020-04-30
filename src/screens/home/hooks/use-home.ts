import {CharacterSelectors, characterSlice} from '@store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useHome = () => {
  const dispatch = useDispatch();
  const state = useSelector(res => res);
  const data = CharacterSelectors.characters(state);

  useEffect(() => {
    dispatch(characterSlice.actions.load());
  }, [dispatch]);

  return {data};
};

export default useHome;
