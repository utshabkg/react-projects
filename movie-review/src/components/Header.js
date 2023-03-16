import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="text-3xl flex justify-between items-center border-b-2 border-gray-500">
      <span>
        <span className="text-red-500 font-bold p-3">Film</span> Universe
      </span>
      <h1 className="text-lg cursor-pointer">
        <Button>
          <AddIcon className="mr-1" color="secondary" />
          <span className="text-white">Add new</span>
        </Button>
      </h1>
    </div>
  );
};

export default Header;
