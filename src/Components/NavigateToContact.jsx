import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavigateToContact() {
  return (
    <div>
      <div className="mt-5    ">
        <NavLink
          className="bg-[#0C6967] p-2  flex   justify-center items-center gap-x-1 w-60   rounded-3xl  text-white  "
          to="/contact"
        >
          Get In Touch
          <BsArrowRightShort size={32} className="mt-1" />
        </NavLink>
      </div>
    </div>
  );
}

export default NavigateToContact;
