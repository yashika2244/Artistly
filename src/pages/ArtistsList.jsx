import { useState } from "react";
import artists from "../data/artists.json";
import ArtistCard from "../components/ArtistCard";
import FilterBlock from "../components/FilterBlock";

const ArtistsList = () => {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
  });

  const filteredArtists = artists.filter((artist) => {
    const priceValue = parseInt(artist.price.replace("₹", "").replace(",", ""));
    return (
      (!filters.category || artist.category === filters.category) &&
      (!filters.location || artist.location === filters.location) &&
      (!filters.price || priceValue <= parseInt(filters.price))
    );
  });

  return (
    <div className="p-8 max-w-7xl mx-auto mt-20">
      <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-8">
        🎭 Artist Listings
      </h2>
      <FilterBlock filters={filters} setFilters={setFilters} />

      {filteredArtists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No artists found matching your filters.
        </p>
      )}
    </div>
  );
};

export default ArtistsList;
