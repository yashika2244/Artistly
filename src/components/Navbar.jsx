// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Artists", path: "/artists" },
//     { name: "Onboarding", path: "/onboarding" },
//     { name: "Dashboard", path: "/dashboard" },
//   ];

//   return (
//     <nav className="bg-[#0e1d70] text-white px-6 py-4 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50">
//       <h1 className="font-bold text-2xl tracking-wide text-amber-400 ">
//         Artistly.com
//       </h1>

//       {/* Desktop Links */}
//       <div className="hidden md:flex space-x-18 font-[500] text-lg pr-5  ">
//         {links.map((link) => (
//           <Link
//             key={link.name}
//             to={link.path}
//             className="hover:text-amber-400 transition-colors duration-300"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>

//       {/* Mobile Hamburger */}
//       <div className="md:hidden z-50">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? (
//             <FiX
//               className="hover:text-red-500 hover:scale-125 duration-300"
//               size={28}
//             />
//           ) : (
//             <FiMenu size={28} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Sidebar */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0  bg-opacity-40 z-40"
//           onClick={() => setMenuOpen(false)}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="absolute top-0 left-0 w-64 font-[500] pt-20 h-full  bg-[#334155] p-6 flex flex-col space-y-8  shadow-xl text-white z-50"
//           >
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setMenuOpen(false)}
//                 className="text-lg transition-colors duration-300 py-1 px-2 rounded-sm hover:bg-slate-500"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Artists", path: "/artists" },
    { name: "Onboarding", path: "/onboarding" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-[#0e1d70] text-white px-6 py-4 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Link to="/" className="font-bold text-2xl tracking-wide ">
        Artistly.com
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-10 font-medium text-lg">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-amber-400 transition duration-300 hover:scale-[1.1] "
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX className="hover:text-red-400 transition duration-300" size={26} />
          ) : (
            <FiMenu className="hover:text-amber-400 transition duration-300" size={26} />
          )}
        </button>
      </div>

      {/* Mobile Sidebar with Smooth Slide & Backdrop */}
      <div
        className={`fixed inset-0  bg-opacity-40 backdrop-blur-sm z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 right-0 w-64 h-full bg-[#1e293b] p-6 flex flex-col space-y-8 text-white shadow-xl"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-lg py-2 px-3 rounded hover:bg-slate-600 transition   "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
