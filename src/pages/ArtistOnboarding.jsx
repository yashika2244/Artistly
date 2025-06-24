// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { toast } from "react-toastify";

// const categories = ["Singer", "Dancer", "DJ", "Comedian"];
// const languages = ["English", "Hindi", "Punjabi", "Marathi"];

// const schema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   bio: Yup.string().required("Bio is required"),
//   categories: Yup.array().min(1, "Select at least one category"),
//   languages: Yup.array().min(1, "Select at least one language"),
//   price: Yup.string().required("Fee range is required"),
//   location: Yup.string().required("Location is required"),
//   image: Yup.mixed().required("Profile Image is required"),
// });

// const ArtistOnboarding = () => {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: "",
//       bio: "",
//       categories: [],
//       languages: [],
//       price: "",
//       location: "",
//       image: null,
//     },
//   });

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     toast.success("🎉 Artist Registered Successfully!");
//   };

//   const handleCategoryChange = (category) => {
//     const current = watch("categories") || [];
//     if (current.includes(category)) {
//       setValue(
//         "categories",
//         current.filter((c) => c !== category)
//       );
//     } else {
//       setValue("categories", [...current, category]);
//     }
//   };

//   const handleLanguageChange = (lang) => {
//     const current = watch("languages") || [];
//     if (current.includes(lang)) {
//       setValue(
//         "languages",
//         current.filter((l) => l !== lang)
//       );
//     } else {
//       setValue("languages", [...current, lang]);
//     }
//   };

//   const handleImageChange = (e) => {
//     setValue("image", e.target.files[0]);
//   };

//   return (
//     <div className=" min-h-[80vh]  mt-8  flex items-center justify-center bg-white md:p-6 px-1">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white/40 backdrop-blur-xl max-w-lg w-full md:p-8 p-3 rounded-3xl shadow-2xl space-y-2"
//       >
//         <h2 className="text-3xl  md:pt-0 pt-5 font-bold text-center text-gray-800">
//           🎨 Artist Onboarding
//         </h2>

//         {/* Name */}
//         <div>
//           <input
//             type="text"
//             placeholder="Artist Name"
//             {...register("name")}
//             className="w-full border-b-2 bg-transparent py-2 focus:outline-none focus:border-purple-600"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm">{errors.name.message}</p>
//           )}
//         </div>

//         {/* Bio */}
//         <div>
//           <textarea
//             placeholder="Bio"
//             rows="2"
//             {...register("bio")}
//             className="w-full border-b-2 bg-transparent py-2 focus:outline-none focus:border-purple-600 resize-none"
//           />
//           {errors.bio && (
//             <p className="text-red-500 text-sm">{errors.bio.message}</p>
//           )}
//         </div>

//         {/* Categories */}
//         <div>
//           <p className="font-medium text-gray-700 mb-1">Select Categories</p>
//           <div className="flex flex-wrap gap-3">
//             {categories.map((cat) => (
//               <label
//                 key={cat}
//                 className={`px-4 py-2 rounded-full cursor-pointer border ${
//                   watch("categories").includes(cat)
//                     ? "bg-purple-600 text-white"
//                     : "bg-white/50 text-gray-700 border-gray-300 hover:bg-purple-100"
//                 }`}
//               >
//                 <input
//                   type="checkbox"
//                   value={cat}
//                   onChange={() => handleCategoryChange(cat)}
//                   checked={watch("categories").includes(cat)}
//                   className="hidden"
//                 />
//                 {cat}
//               </label>
//             ))}
//           </div>
//           {errors.categories && (
//             <p className="text-red-500 text-sm">{errors.categories.message}</p>
//           )}
//         </div>

//         {/* Languages */}
//         <div>
//           <p className="font-medium text-gray-700 mb-1">Languages Spoken</p>
//           <div className="flex flex-wrap gap-3">
//             {languages.map((lang) => (
//               <label
//                 key={lang}
//                 className={`px-4 py-2 rounded-full cursor-pointer border ${
//                   watch("languages").includes(lang)
//                     ? "bg-purple-600 text-white"
//                     : "bg-white/50 text-gray-700 border-gray-300 hover:bg-purple-100"
//                 }`}
//               >
//                 <input
//                   type="checkbox"
//                   value={lang}
//                   onChange={() => handleLanguageChange(lang)}
//                   checked={watch("languages").includes(lang)}
//                   className="hidden"
//                 />
//                 {lang}
//               </label>
//             ))}
//           </div>
//           {errors.languages && (
//             <p className="text-red-500 text-sm">{errors.languages.message}</p>
//           )}
//         </div>

//         {/* Fee Range */}
//         <div>
//           <select
//             {...register("price")}
//             className="w-full border-b-2 bg-transparent py-2 focus:outline-none focus:border-purple-600"
//           >
//             <option value="">Select Fee Range</option>
//             <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
//             <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
//             <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
//           </select>
//           {errors.price && (
//             <p className="text-red-500 text-sm">{errors.price.message}</p>
//           )}
//         </div>

//         {/* Location */}
//         <div>
//           <input
//             type="text"
//             placeholder="Location"
//             {...register("location")}
//             className="w-full border-b-2 bg-transparent py-2 focus:outline-none focus:border-purple-600"
//           />
//           {errors.location && (
//             <p className="text-red-500 text-sm">{errors.location.message}</p>
//           )}
//         </div>

//         {/* Profile Image */}
//         <div>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full text-sm"
//           />
//           {errors.image && (
//             <p className="text-red-500 text-sm">{errors.image.message}</p>
//           )}
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105"
//         >
//           🚀 Register Artist
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArtistOnboarding;
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

const categories = ["Singer", "Dancer", "DJ", "Comedian"];
const languages = ["English", "Hindi", "Punjabi", "Marathi"];

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  categories: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  price: Yup.string().required("Fee range is required"),
  location: Yup.string().required("Location is required"),
  image: Yup.mixed().required("Profile Image is required"),
});

const ArtistOnboarding = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      price: "",
      location: "",
      image: null,
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("🎉 Artist Registered Successfully!");
  };

  const handleCategoryChange = (category) => {
    const current = watch("categories") || [];
    if (current.includes(category)) {
      setValue("categories", current.filter((c) => c !== category));
    } else {
      setValue("categories", [...current, category]);
    }
  };

  const handleLanguageChange = (lang) => {
    const current = watch("languages") || [];
    if (current.includes(lang)) {
      setValue("languages", current.filter((l) => l !== lang));
    } else {
      setValue("languages", [...current, lang]);
    }
  };

  const handleImageChange = (e) => {
    setValue("image", e.target.files[0]);
  };

  return (
    <div className="min-h-[85vh] mt-12 flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/60 backdrop-blur-lg w-full max-w-lg md:p-8 p-5 rounded-3xl shadow-xl space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          🎨 Artist Onboarding
        </h2>

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Artist Name"
            {...register("name")}
            className="w-full border-b-2 bg-transparent py-2 text-sm focus:outline-none focus:border-purple-600 placeholder-gray-500"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <textarea
            placeholder="Bio"
            rows="3"
            {...register("bio")}
            className="w-full border-b-2 bg-transparent py-2 text-sm focus:outline-none focus:border-purple-600 placeholder-gray-500 resize-none"
          />
          {errors.bio && (
            <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>
          )}
        </div>

        {/* Categories */}
        <div>
          <p className="font-medium text-gray-700 mb-1 text-sm">Select Categories</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className={`px-3 py-1.5 rounded-full cursor-pointer border text-sm ${
                  watch("categories").includes(cat)
                    ? "bg-purple-600 text-white"
                    : "bg-white/60 text-gray-700 border-gray-300 hover:bg-purple-100"
                }`}
              >
                <input
                  type="checkbox"
                  value={cat}
                  onChange={() => handleCategoryChange(cat)}
                  checked={watch("categories").includes(cat)}
                  className="hidden"
                />
                {cat}
              </label>
            ))}
          </div>
          {errors.categories && (
            <p className="text-red-500 text-xs mt-1">{errors.categories.message}</p>
          )}
        </div>

        {/* Languages */}
        <div>
          <p className="font-medium text-gray-700 mb-1 text-sm">Languages Spoken</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <label
                key={lang}
                className={`px-3 py-1.5 rounded-full cursor-pointer border text-sm ${
                  watch("languages").includes(lang)
                    ? "bg-purple-600 text-white"
                    : "bg-white/60 text-gray-700 border-gray-300 hover:bg-purple-100"
                }`}
              >
                <input
                  type="checkbox"
                  value={lang}
                  onChange={() => handleLanguageChange(lang)}
                  checked={watch("languages").includes(lang)}
                  className="hidden"
                />
                {lang}
              </label>
            ))}
          </div>
          {errors.languages && (
            <p className="text-red-500 text-xs mt-1">{errors.languages.message}</p>
          )}
        </div>

        {/* Fee Range */}
        <div>
          <select
            {...register("price")}
            className="w-full border-b-2 bg-transparent py-2 text-sm focus:outline-none focus:border-purple-600 text-gray-600"
          >
            <option value="">Select Fee Range</option>
            <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
            <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
            <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
          </select>
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <input
            type="text"
            placeholder="Location"
            {...register("location")}
            className="w-full border-b-2 bg-transparent py-2 text-sm focus:outline-none focus:border-purple-600 placeholder-gray-500"
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
          )}
        </div>

        {/* Profile Image */}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm file:bg-purple-600 file:text-white file:px-3 file:py-1 file:rounded-full file:border-none file:cursor-pointer file:hover:bg-purple-700"
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white text-sm rounded-full hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105"
        >
          🚀 Register Artist
        </button>
      </form>
    </div>
  );
};

export default ArtistOnboarding;
