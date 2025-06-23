const CategoryCard = ({ name, image }) => (
  <div className="bg-white shadow rounded p-4 text-center">
    <img src={image} alt={name} className="h-32 mx-auto" />
    <h2 className="mt-2 font-semibold">{name}</h2>
  </div>
);

export default CategoryCard;