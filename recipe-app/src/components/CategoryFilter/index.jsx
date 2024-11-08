import React from 'react';

const CategoryFilter = ({ setCategory, currentCategory }) => {
  const categories = ['All', 'Vegetarian', 'Meat Based', 'Seafood', 'Dessert'];

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-btn ${currentCategory === cat ? 'active' : ''}`}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
