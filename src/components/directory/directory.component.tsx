import DirectoryItem from '../directory-item/directory-item.component';
import { TCategory } from '../../types';
import { DirectoryContainer } from './directory.styles';

type TProps = {
  categories: TCategory[];
};

const Directory = ({ categories }: TProps) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
