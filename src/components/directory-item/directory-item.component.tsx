import { TCategory } from '../../types';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';

type TProps = {
  category: TCategory;
};

const DirectoryItem = ({ category }: TProps) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
