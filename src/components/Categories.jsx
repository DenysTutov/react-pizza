export const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, idx) => (
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
