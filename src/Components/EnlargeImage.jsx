import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { alpha } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { Context } from "../Context/Context";

export default function EnlargeImage(props) {
  const imgLink = props.imgLink;
  const { toggleOpen, setToggleOpen } = useContext(Context);
  // console.log(toggleOpen);
  return (
    <>
      {toggleOpen && (
        <Box
          sx={{
            position: "fixed",
            zIndex: 1,
            bgcolor: alpha(grey[900], 0.8),
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth="none"
          onClick={() => {
            setToggleOpen(false);
          }}
        >
          <img
            src={imgLink}
            style={{
              width: "60%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "center",
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </Box>
      )}
    </>
  );
}
