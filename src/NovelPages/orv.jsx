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
import { OrvData } from "../Components/ImageData";

const Orv = () => {
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
            OMNISCIENT READER'S VIEWPOINT
          </Typography>
        </Grid>
        <Grid item container xs={12} mt={10} px={4}>
          <Grid item xs={6} px={8}>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhci6KSYbZtZdGDY9CxaJk4wD7-ChCT_SMA2sVb6zYJwBXSoUF8U1Jhm3ZsnMC0Ib7ksztpGxu-Anv02t0iqE4LWmC37QhG2sa-OU2qi-a9nY905ot4WZcJRGPIebW26US0phe4bmJ5r4Ta0_z1YVSY59n1xHuFEhkIYPGysR1VQkiER_VbcAuC4I6znf4/s1920/OMNISCIENT%20READERS%20VIEWPOINT%201.jpg"
              loading="lazy"
              width="100%"
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
                    <CustomRating value="9.0" />
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
                    <Typography variant="subtitle1">
                      전지적 독자 시점
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container mt={0.5}>
                  <Grid item display="flex" alignItems={"center"}>
                    <Typography variant="subtitle2">Author : &nbsp;</Typography>
                  </Grid>
                  <Grid item>
                    <Typography> Sing Shong</Typography>
                  </Grid>
                </Grid>
                <Grid item container mt={0.5}>
                  <Grid item display="flex" alignItems={"center"}>
                    <Typography variant="subtitle2">
                      Release Date : &nbsp;
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography> 6 Jan, 2018 – 2 Feb, 2020 </Typography>
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
                  Finished
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction={"column"}>
              <Grid item b borderBottom={"1px solid black"} mt={2}>
                <Typography variant="subtitle2">SYNOPSIS</Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography variant="subtitle1">
                  &emsp;A novel called Three Ways to Survive in a Ruined World
                  (written by the anonymous author tls123) has been written and
                  published over the course of a decade, and Kim Dokja is the
                  sole reader who has followed it to its ending. When the real
                  world is plunged into the premise of Ways of Survival, Kim
                  Dokja's unique knowledge of the novel becomes vital to his
                  survival. Kim Dokja allies with Yoo Joonghyuk, the protagonist
                  of Ways of Survival, in order to change the novel's original
                  plot and more quickly approach the end of the story. As Kim
                  Dokja and his party members progress through the scenarios,
                  they face increasingly difficult threats and life-or-death
                  challenges, struggling to stay alive and work together as they
                  aim to destroy the "Star Stream" that demands their suffering.
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
              <CustomImageList ImageData={OrvData} col={3} />
              {/* <Typography>hello</Typography> */}
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" align="center" color={"white"}>
                Official arts of mr BlackBox is the best!
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
                src="https://w0.peakpx.com/wallpaper/928/920/HD-wallpaper-han-sooyoung-and-scan-gallery-omniscient-reader-s-viewpoint.jpg"
                loading="lazy"
                width={"100%"}
                onClick={() => {
                  setToggleOpen(true);
                  setImgSrc(
                    "https://w0.peakpx.com/wallpaper/928/920/HD-wallpaper-han-sooyoung-and-scan-gallery-omniscient-reader-s-viewpoint.jpg"
                  );
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <img
                src="https://cdn.donmai.us/original/87/c8/87c8da549c21ce48e87337d8d70447e5.jpg"
                loading="lazy"
                width={"100%"}
                onClick={() => {
                  setToggleOpen(true);
                  setImgSrc(
                    "https://cdn.donmai.us/original/87/c8/87c8da549c21ce48e87337d8d70447e5.jpg"
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} mt={5}>
              <Typography align="center" variant="subtitle2">
                I love how this novel show the meaning of "friendship" the most,
                and this trio are the BEST I've ever seen..
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Orv;
