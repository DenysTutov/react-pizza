const categoriesList = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories = ({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categoriesList.map((category, idx) => (
          <li
            key={category}
            onClick={() => onChangeCategory(idx)}
            className={value === idx ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
