import React from "react";
import Routers from "../routers/Routers";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routers />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
