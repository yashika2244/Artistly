

import { useParams } from 'react-router-dom';
import artists from '../data/artists.json';
import { Link } from 'react-router-dom';

const ArtDetails = () => {
  const { id } = useParams();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    return <p className="text-center text-red-500 mt-20 text-lg">Artist not found!</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto mt-14">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Artist Image */}
        <img 
          src={artist.image} 
          alt={artist.name} 
          className="w-full h-72 object-cover"
        />

        <div className="p-6 space-y-4">
          {/* Name */}
          <h2 className="text-3xl font-bold text-gray-800">{artist.name}</h2>

          {/* Category & Location */}
          <p className="text-purple-600 font-medium uppercase">
            {artist.category} • {artist.location}
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{artist.description}</p>

          {/* Price */}
          <p className="text-xl font-semibold text-green-600">
             {artist.price}
          </p>

          {/* Action Button */}
          <Link to={`/book-artist/${artist.id}`}>
          <button className="md:mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
