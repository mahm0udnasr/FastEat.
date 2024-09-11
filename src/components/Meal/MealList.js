import "./Meal.scss";
import { Link } from "react-router-dom";

const MealList = ({ meals }) => {
  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="sc-title">meals</div>
        <section className="sc-meal grid">
          {meals?.map((mealItem, index) => {
            const {
              idMeal: id,
              strArea: area,
              strCategory: category,
              strMeal: meal,
              strMealThumb: Thumbnail,
            } = mealItem;
            return (
              <Link
                to={`/meal/${id}`}
                className="meal-itm align-center justify-center"
                key={id || index}
              >
                <div className="meal-itm-img">
                  <img src={Thumbnail} alt={meal} />
                  <div className="meal-itm-cat bg-orange text-orange fw-6">{category}</div>
                </div>
                <div className="meal-itm-body">
                  <div className="meal-itm-body-info flex flex-column">
                    <div className="area fs-14 ls-1 fw-5">{area}</div>
                    <div className="meal fs-15 op-09 fw-7">{meal}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default MealList;
