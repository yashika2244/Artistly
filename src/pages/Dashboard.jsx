
import artists from '../data/artists.json';
import { toast } from 'react-toastify';

const Dashboard = () => {
  return (
    <section className="p-4 sm:p-8 min-h-screen bg-gradient-to-b from-white to-gray-50 mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-purple-800">
        📋 Manager Dashboard - Artist Submissions
      </h2>

      {artists.length === 0 ? (
        <p className="text-center text-gray-500">No artist submissions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-lg border border-gray-200">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left text-sm sm:text-base">Name</th>
                <th className="py-3 px-4 text-left text-sm sm:text-base pl-10 md:pl-0 ">Category</th>
                <th className="py-3 px-4 text-left text-sm sm:text-base">Location</th>
                <th className="py-3 px-4 text-left text-sm sm:text-base">Fee</th>
                <th className="py-3 px-4 text-center text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr key={artist.id} className="border-b hover:bg-purple-50 transition">
                  <td className="py-2 px-4 flex items-center gap-3">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-10 h-10 object-cover rounded-full border border-gray-300"
                    />
                    <span className="text-sm sm:text-base">{artist.name}</span>
                  </td>
                  <td className="py-2 px-4 text-sm sm:text-base md:pl-0 pl-10">{artist.category}</td>
                  <td className="py-2 px-4 text-sm sm:text-base">{artist.location}</td>
                  <td className="py-2 px-4 text-green-600 font-semibold text-sm sm:text-base">{artist.price}</td>
                  <td className="py-2 px-4 text-center space-x-2">
                    <button
                      onClick={() =>   toast.info(`Edit clicked for Artist ID: ${artist.id}`)}
                      className="bg-green-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full hover:bg-green-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>  toast.info(`Delete clicked for Artist ID: ${artist.id}`)}
                      className="bg-red-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full hover:bg-red-600 transition"
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
