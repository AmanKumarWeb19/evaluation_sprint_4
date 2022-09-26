import React from "react";
import { NavLink } from "react-router-dom";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`


const link = [
  { path: "/", title: "Home" },
  { path: "/Login", title: "Login" },
  { path: "/Cart", title: "Cart" },
]
const Navbar = () => {
  return (
   <div>
    {link.map((e) => (
      <NavLink key={e.title} to={e.path} end>
      {e.title}
      </NavLink>
    ))}
   </div>
  );
};

export default Navbar;
