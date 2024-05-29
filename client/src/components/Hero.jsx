import PropTypes from "prop-types";

function Hero({ handleSearch }) {
  return (
    <section className="hero">
      <div className="heroImage">
        <h1>Retrouvez les meilleurs restos près du campus !</h1>
        <div className="search-bar">
          <input
            type="text"
            id="searchInput"
            placeholder="Que désirez-vous ?"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Hero;
