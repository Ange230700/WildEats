import PropTypes from "prop-types";

function Filters({ filters, handleFilterChange }) {
  return (
    <aside className="typesDesktop">
      <div className="type">
        <p>Types de restaurant</p>
        {filters.types.map((type) => (
          <div key={type.id} className={type.value.toLowerCase()}>
            <input
              type="checkbox"
              className="input-checkbox"
              name="types"
              value={type.value}
              id={type.value.toLowerCase()}
              onChange={handleFilterChange}
            />
            <label htmlFor={type.value.toLowerCase()}>{type.label}</label>
          </div>
        ))}
      </div>

      <div className="type">
        <p>Prix</p>
        {filters.prices.map((price) => (
          <div key={price.id} className={price.value.toLowerCase()}>
            <input
              type="checkbox"
              name="prices"
              value={price.value}
              id={price.value.toLowerCase()}
              onChange={handleFilterChange}
            />
            <label htmlFor={price.value.toLowerCase()}>{price.label}</label>
          </div>
        ))}
      </div>

      <div className="type">
        <p>Notes</p>
        {filters.notes.map((note) => (
          <div key={note.id} className={`stars-${note.value}`}>
            <input
              type="checkbox"
              name="notes"
              value={note.value}
              id={`stars-${note.value}`}
              onChange={handleFilterChange}
            />
            <label htmlFor={`stars-${note.value}`}>{note.label}</label>
          </div>
        ))}
      </div>
    </aside>
  );
}

Filters.propTypes = {
  filters: PropTypes.shape({
    types: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filters;
