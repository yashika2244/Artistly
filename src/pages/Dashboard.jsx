import artists from "../data/artists.json";
import { toast } from "react-toastify";

const Dashboard = () => {
  return (
    <section className="p-4 sm:p-8 min-h-screen bg-gradient-to-b from-white to-gray-50 mt-20">
      <h2 className="text-xl sm:text-3xl font-bold mb-6 text-center text-purple-800">
        📋 Manager Dashboard - Artist Submissions
      </h2>

      {artists.length === 0 ? (
        <p className="text-center text-gray-500">
          No artist submissions found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-lg border border-gray-200">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-2 text-left text-xs sm:text-sm">Name</th>
                <th className="py-3 px-2 text-left text-xs sm:text-sm">
                  Category
                </th>
                <th className="py-3 px-2 text-left text-xs sm:text-sm">
                  Location
                </th>
                <th className="py-3 px-2 text-left text-xs sm:text-sm">Fee</th>
                <th className="py-3 px-2 text-center text-xs sm:text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr
                  key={artist.id}
                  className="border-b hover:bg-purple-50 transition"
                >
                  <td className="py-2 px-2 flex items-center gap-2 sm:gap-3">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full border border-gray-300"
                    />
                    <span className="text-xs sm:text-sm">{artist.name}</span>
                  </td>
                  <td className="py-2 px-2 text-xs sm:text-sm">
                    {artist.category}
                  </td>
                  <td className="py-2 px-2 text-xs sm:text-sm">
                    {artist.location}
                  </td>
                  <td className="py-2 px-2 text-green-600 font-semibold text-xs sm:text-sm">
                    {artist.price}
                  </td>
                  <td className="py-2 px-2 text-center space-x-1 sm:space-x-2">
                    <button
                      onClick={() =>
                        toast.info(`Edit clicked for Artist ID: ${artist.id}`)
                      }
                      className="bg-green-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full hover:bg-green-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        toast.info(`Delete clicked for Artist ID: ${artist.id}`)
                      }
                      className="bg-red-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
