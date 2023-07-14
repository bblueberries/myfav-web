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
              <CustomImageList ImageData={WindbreakerData} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" align="center" color={"white"}>
                At first, I started reading this novel because of these amazing
                fanarts (And now, I LOVE IT!)
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
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid item container direction={"column"} xs={4} px={5}>
              <Grid item>
                <img
                  src={potionImage}
                  loading="lazy"
                  width={"100%"}
                  onClick={() => {
                    setToggleOpen(true);
                    setImgSrc(potionImage);
                  }}
                />
              </Grid>
              <Grid item>
                <Typography align="center" variant="h6">
                  All beyonders' sequences table
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={6} px={6} direction={"column"} mt={6}>
              <Grid item>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  The Power System
                </Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography variant="subtitle1">
                  The power system is extremely well done. <br />
                  &emsp;It has solid rules that can't be violated and play a key
                  part in plot progression while also having a crazy amount of
                  flexibility. It has 22 pathways. Starting at 9th sequence,the
                  less of your sequence number,the Stronger you are. (But easier
                  to loss self control and turn into monster) <br />
                  &emsp; After reading through 500 chapters, I never seen any
                  power system that can compare to LOTM's. It very
                  unique,complicating and important to the story. Each has
                  different advantage, some of them are strong since early
                  sequence, some are for create artifact or some are for spying.
                </Typography>
              </Grid>
              <Grid item mt={5}>
                <Typography variant="subtitle2" align="center">
                  What I can say is you guys have to try this amazing novels and
                  you will end up addicting it like me...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default windbreaker;
