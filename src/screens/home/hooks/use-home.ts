import {useNavigation} from '@react-navigation/native';
import {CharacterSelectors, characterSlice, State} from '@store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useHome = () => {
  const dispatch = useDispatch();
  const state = useSelector<State, State>(res => res);
  const {navigate} = useNavigation();

  const data = CharacterSelectors.data(state);
  const page = CharacterSelectors.page(state);
  const isLoadingMore = CharacterSelectors.isLoadingMore(state);
  const isLoading = CharacterSelectors.isLoading(state);

  const onLoadMore = () => {
    if (!isLoadingMore) {
      dispatch(characterSlice.actions.loadMore(page + 1));
    }
  };

  const onShowDetail = (id: string) => {
    navigate('CharacterDetailScreen', {id});
  };

  useEffect(() => {
    dispatch(characterSlice.actions.load());
  }, [dispatch]);

  return {data, onLoadMore, isLoadingMore, isLoading, onShowDetail};
};

export default useHome;
