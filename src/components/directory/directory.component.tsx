import CategoryItem from '../category-item/category-item.component';
import { TCategory } from '../types';
import './directory.styles.scss';

type TProps = {
  categories: TCategory[];
};

const Directory = ({ categories }: TProps) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
