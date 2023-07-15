import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import { LotmData } from "./ImageData";
import EnlargeImage from "./EnlargeImage";
import { Context } from "../Context/Context";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
// const itemData = LotmData;
// console.log(itemData);
export default function QuiltedImageList(props) {
  const itemData = props.ImageData;
  const col = props.col;
  const { toggleOpen, setToggleOpen } = React.useContext(Context);
  const { imgSrc, setImgSrc } = React.useContext(Context);
  return (
    <>
      {toggleOpen && <EnlargeImage imgLink={imgSrc} />}
      <ImageList
        sx={{ width: "80%", height: "600px" }}
        variant="quilted"
        cols={col}
        rowHeight={110}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                setImgSrc(item.img);
                setToggleOpen(true);
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
