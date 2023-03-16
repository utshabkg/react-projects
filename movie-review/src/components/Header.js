import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header sticky top-0 z-10 text-3xl flex justify-between items-center border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          <span className="text-red-500 font-bold p-3">Film</span> Universe
        </span>
      </Link>
      <Link to={"addmovie"}>
        <h1 className="text-lg cursor-pointer">
          <Button>
            <AddIcon className="mr-1" color="secondary" />
            <span className="text-white">Add new</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
