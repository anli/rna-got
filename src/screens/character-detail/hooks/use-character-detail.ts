import {CharacterSelectors, characterSlice} from '@character/store';
import {useRoute} from '@react-navigation/native';
import {State} from '@store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useCharacterDetail = () => {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const state = useSelector<State, State>(res => res);

  const id = route.params.id;
  const isLoading = CharacterSelectors.isLoadingDetail(state);
  const data = CharacterSelectors.detail(state);

  useEffect(() => {
    dispatch(characterSlice.actions.loadDetail(id));
    return () => {
      dispatch(characterSlice.actions.clearDetail());
    };
  }, [dispatch, id]);

  return {data, isLoading};
};

export default useCharacterDetail;
