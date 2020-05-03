export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  gender: 'Male' | 'Female';
  aliases: [];
}

export interface CharacterState {
  data: Character[];
  page: number;
  isLoadingMore?: boolean;
  isLoading?: boolean;
  detailId?: string;
  detail?: Character;
  isLoadingDetail?: boolean;
}
