import { useNavigate } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';
import { TCategory } from '@/types';

type TProps = {
  category: TCategory;
};

const DirectoryItem = ({ category }: TProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onClickHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onClickHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
