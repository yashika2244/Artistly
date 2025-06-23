
const FilterBlock = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center">
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md shadow-sm"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Comedian">Comedian</option>
      </select>

      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md shadow-sm"
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <select
        name="price"
        value={filters.price}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md shadow-sm"
      >
        <option value="">Any Price</option>
        <option value="30000">Up to ₹30,000</option>
        <option value="50000">Up to ₹50,000</option>
      </select>
    </div>
  );
};

export default FilterBlock;
