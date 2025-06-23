
import { toast } from "react-toastify";

const ArtistCard = ({ name, category, price, location, image }) => (
  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
    <img src={image} alt={name} className="h-40 w-full object-cover rounded-t-xl" />
    <div className="mt-3 space-y-1 text-center">
      <h3 className="text-lg font-bold text-purple-800">{name}</h3>
      <p className="text-gray-600">{category} • {location}</p>
      <p className="text-green-600 font-semibold">{price}</p>
   
      <button
  onClick={() => toast.success(`Quote request sent for ${name}`)}
  className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
>
  Ask for Quote
</button>
    </div>
  </div>
);

export default ArtistCard;
