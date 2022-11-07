import React from 'react'

export default function Categories({ value, onClickCategory }) {
  const arrayPizza = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  
  return (
    <div className="categories">
      <ul>
        {arrayPizza.map((categoryName, i) => <li
          key={i}
          onClick={() => onClickCategory(i)}
          className={value === i ? "active" : ''}>{categoryName}</li>)}
      </ul>
    </div>
  );
}