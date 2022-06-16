import * as React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import CategorySelector from "./CategorySelector";

export default function LeadingClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  let nintendoList = [
    { name: "All categories", category: "All" },
    { name: "Games", category: "Games" },
    { name: "Hardware", category: "Hardware" },
    { name: "Merchandise", category: "Merchandise" },
    { name: "News and Events", category: "News" },
    { name: "Support", category: "Support" },
  ];

  const styles = {
    position: "absolute",
    top: 28,
    left: 0,
    zIndex: 1,
    border: "1px solid ",
    p: 1,
    bgcolor: "background.paper",
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: "relative", left: 350, top: 25 }}>
        <button type="button" onClick={handleClick}>
          All categories
        </button>
        {open ? (
          <Box sx={styles}>
            {nintendoList.map((e, i) => {
              return <div key={`${i}-${e.name}`}>{e.name}</div>;
            })}
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
