const useHome = () => {
  return {data: MOCK_DATA};
};

export default useHome;

const MOCK_DATA = [
  {id: '1', name: 'John', imageUrl: 'https://picsum.photos/id/1/48'},
  {id: '2', name: 'Mary', imageUrl: 'https://picsum.photos/id/2/48'},
  {id: '3', name: 'Jane', imageUrl: 'https://picsum.photos/id/3/48'},
];
