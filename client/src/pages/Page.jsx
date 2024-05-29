import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import Map from "../components/Map";
import Footer from "../components/Footer";

import FilterOptions from "../data/FilterOptions";
import CardRestaurants from "../data/CardRestaurants";

import UseFilter from "../hooks/UseFilter";

function Page() {
  const { filteredRestaurants, handleSearch, handleFilterChange } =
    UseFilter(CardRestaurants);

  return (
    <>
      <Navbar />
      <Hero handleSearch={handleSearch} />
      <Filters
        filters={FilterOptions}
        handleFilterChange={handleFilterChange}
      />
      <main>
        <Cards restaurants={filteredRestaurants} />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default Page;
