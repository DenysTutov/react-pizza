import { useDispatch, useSelector } from "react-redux";

import { setCategoryIdx } from "redux/slices/filterSlice";

const categoriesList = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories = () => {
  const dispatch = useDispatch();
  const { categoryIdx: value } = useSelector((state) => state.filter);

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((category, idx) => (
          <li
            key={category}
            onClick={() => dispatch(setCategoryIdx(idx))}
            className={value === idx ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
