import PropTypes from "prop-types";
import Link from "../../../server/public/assets/icons/link-alt.svg";
import CheckIcon from "../../../server/public/assets/icons/check-circle.svg";

function CreateCard({ restaurant }) {
  const {
    restaurantName,
    image,
    link,
    category,
    address,
    takeaway,
    price,
    note,
  } = restaurant;

  return (
    <div className="card">
      <div className="block-card-image">
        <img className="restaurant-photo" src={image} alt="restaurant" />
        <p className="category">{category}</p>
      </div>
      <div className="block-card-text">
        <div className="box-title-euro-link">
          <div className="restaurantname-div">
            <p className="restaurant-title">{restaurantName}</p>
          </div>
          <div>
            {price}{" "}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="website link"
            >
              {/* <i className="fa-solid fa-link"></i> */}
              <img src={Link} alt="" />
            </a>
          </div>
        </div>
        <p className="card-adress">{address}</p>
        <div className="box-takeaway-stars">
          <div className="box-takeaway-icon-text">
            {takeaway && (
              <>
                <img src={CheckIcon} alt="" />
                <p className="card-takeaway">vente à emporter</p>
              </>
            )}
          </div>
          <div>{note}</div>
        </div>
      </div>
    </div>
  );
}

CreateCard.propTypes = {
  restaurant: PropTypes.shape({
    restaurantName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    takeaway: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    note: PropTypes.number.isRequired,
  }).isRequired,
};

export default CreateCard;
