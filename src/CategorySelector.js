import { Modal } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import LeadingClickAway from "./DropDown";

function CategorySelector({ name, category }) {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState();

  let nintendoList = [
    { name: "All categories", category: "All" },
    { name: "Games", category: "Games" },
    { name: "Hardware", category: "Hardware" },
    { name: "Merchandise", category: "Merchandise" },
    { name: "News and Events", category: "News" },
    { name: "Support", category: "Support" },
  ];

  // useEffect(() => {
  //   selectedCategory(nintendoList);
  // }, []);

  function handleCategoryChange(event) {
    selectedCategory(event.target.value);
  }

  return (
    <>
      <div className="dropdown">
        <LeadingClickAway>
          {nintendoList.map((e, i) => {
            return <div key={`${i}-${e.name}`}>{e.name}</div>;
          })}
        </LeadingClickAway>
      </div>
    </>
  );
}
export default CategorySelector;
