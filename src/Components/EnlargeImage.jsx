import { Box, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { alpha } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export default function EnlargeImage(props) {
  const imgLink = props.imgLink;
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Box
          sx={{
            position: "fixed",
            zIndex: 1,
            bgcolor: alpha(grey[900], 0.5),
            width: "100vw",
            height: "100vh",
            left: 0,
            top: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth="none"
          onClick={() => {
            setShow(false);
          }}
        >
          <img
            src={imgLink}
            style={{ width: "60%" }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </Box>
      )}
    </>
  );
}
