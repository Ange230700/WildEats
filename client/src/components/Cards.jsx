import PropTypes from "prop-types";
import CreateCard from "../utils/CreateCard";

function Cards({ restaurants }) {
  return (
    <section className="cards">
      {restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <CreateCard key={restaurant.restaurantName} restaurant={restaurant} />
        ))
      ) : (
        <p className="no-result">Aucun résultat</p>
      )}
    </section>
  );
}

Cards.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      restaurantName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      note: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Cards;
