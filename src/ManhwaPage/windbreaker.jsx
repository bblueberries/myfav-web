import { Typography, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import CustomRating from "../Components/CustomRating";
import CustomImageList from "../Components/CustomImageList";
import lotmBg from "../assets/lotmPreview/lotmMain.jpg";
import potionImage from "../assets/lotmPreview/potionImage.jpeg";
import greyfogWallpaper from "../assets/lotmPreview/greyfogWallpaper.avif";
import EnlargeImage from "../Components/EnlargeImage";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { WindbreakerData } from "../Components/ImageData";

const windbreaker = () => {
  const { toggleOpen, setToggleOpen } = useContext(Context);
  const { imgSrc, setImgSrc } = useContext(Context);

  useEffect(() => {
    setToggleOpen(false);
    setImgSrc("");
  }, []);

  return (
    <>
      {toggleOpen && <EnlargeImage imgLink={imgSrc} />}
      <Grid container direction={"column"}>
        <Grid item xs={12} mt={2}>
          <Typography align="center" variant="h2">
            LORD OF THE MYSTERIES
          </Typography>
        </Grid>
        <Grid item container xs={12} mt={10} px={4}>
          <Grid item xs={6} px={8} display="flex" justifyContent="center">
            <img
              src="https://read-windbreaker.online/wp-content/uploads/2022/09/wind-breaker-poster-1.jpg"
              loading="lazy"
              width="70%"
            />
          </Grid>
          <Grid item container xs={6} direction={"column"} px={3}>
            <Grid item container>
              <Grid
                item
                container
                xs={"auto"}
                direction={"column"}
                sx={{
                  px: 2,
                  py: 1,
                  borderRight: "1px solid grey",
                }}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    align="center"
                    borderRadius={3}
                    bgcolor={grey[300]}
                    px={1}
                  >
                    MY SCORE
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4" align="center">
                    9.0
                  </Typography>
                </Grid>
                <Grid item display={"flex"} justifyContent={"center"}>
                  <Typography>
                    <CustomRating value="9" />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction={"column"}
                xs={"auto"}
                sx={{
                  px: 1.5,
                  borderRight: "1px solid grey",
                }}
                display="flex"
                justifyContent={"center"}
              >
                <Grid item container mt={0.5}>
                  <Grid item display="flex" alignItems={"center"}>
                    <Typography variant="subtitle2">
                      Korean Title : &nbsp;
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">윈드 브레이커</Typography>
                  </Grid>
                </Grid>
                <Grid item container mt={0.5}>
                  <Grid item display="flex" alignItems={"center"}>
                    <Typography variant="subtitle2">Author : &nbsp;</Typography>
                  </Grid>
                  <Grid item>
                    <Typography> Jo Yongseok</Typography>
                  </Grid>
                </Grid>
                <Grid item container mt={0.5}>
                  <Grid item display="flex" alignItems={"center"}>
                    <Typography variant="subtitle2">
                      Release Date : &nbsp;
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography> Dec 15, 2013 - ongoing</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={"auto"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2.5,
                }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  bgcolor={grey[300]}
                  borderRadius={2}
                  p={1}
                >
                  Current Reading
                  <br />
                  finished ss3
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction={"column"}>
              <Grid item b borderBottom={"1px solid black"} mt={2}>
                <Typography variant="subtitle2">SYNOPSIS</Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography variant="subtitle1">
                  &emsp;Burdened with expectations since childhood, second-year
                  high schooler Jo "Jay" Ja Hyun feels obligated to aim for the
                  top through his studies. Despite obtaining the title of
                  student president at Taeyang High, he continues to study
                  diligently, giving him little time to befriend others.
                  However, possessing an exceptional talent for biking with a
                  technique that astonishes other experienced bikers, there is
                  more to him than meets the eye. <br />
                  &emsp;One afternoon, while Jay is skidding his bike at high
                  speed, he catches the interest of his classmate, Yoon Min Woo.
                  Amazed by his unparalleled biking skill, Min Woo is quick to
                  recruit him to his biking crew, but Jay coldly rejects the
                  offer. With a determination to show Jay the fun of riding with
                  others, Min Woo proposes a simple deal—to race against a
                  member of his team, promising to leave him alone if he wins.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          mt={12}
          sx={{
            pt: 4,
            pb: 7,
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/fog-smoke-move-black-color-background-smoke-black-background-light-smoke_232104-3676.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid item container direction={"column"}>
            <Grid item>
              <Typography variant="h3" align="center" color={"white"}>
                PREVIEW ARTS
              </Typography>
            </Grid>
            <Grid item display={"flex"} justifyContent={"center"} mt={3}>
              <CustomImageList ImageData={WindbreakerData} col={4} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" align="center" color={"white"}>
                Amazing Arts, good highschool drama, romance and action
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction={"column"} mt={6} px={4}>
          <Grid item>
            <Typography align="center" variant="h3">
              WHAT I LOVE THE MOST
            </Typography>
          </Grid>
          <Grid
            item
            container
            mt={6}
            justifyContent={"space-evenly"}
            // display={"flex"}
            // justifyContent={"center"}
          >
            <Grid item xs={5}>
              <img
                src="https://preview.redd.it/dr3rc72444s81.png?width=1145&format=png&auto=webp&s=f9908a9e84814d4012f2ef0a3d5fa752e15871b4"
                loading="lazy"
                width={"100%"}
                onClick={() => {
                  setToggleOpen(true);
                  setImgSrc(
                    "https://preview.redd.it/dr3rc72444s81.png?width=1145&format=png&auto=webp&s=f9908a9e84814d4012f2ef0a3d5fa752e15871b4"
                  );
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <img
                src="https://preview.redd.it/1gnbntj144s81.png?width=1183&format=png&auto=webp&s=4d0dca059502888de29c988080bb897f2be67001"
                loading="lazy"
                width={"100%"}
                onClick={() => {
                  setToggleOpen(true);
                  setImgSrc(
                    "https://preview.redd.it/1gnbntj144s81.png?width=1183&format=png&auto=webp&s=4d0dca059502888de29c988080bb897f2be67001"
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} mt={5}>
              <Typography align="center" variant="subtitle2">
                Amazing art evolution since ss1 to ss4
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default windbreaker;
