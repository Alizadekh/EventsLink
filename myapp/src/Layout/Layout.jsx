import React from "react";
import Navbar from "../components/layout/Navbar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
