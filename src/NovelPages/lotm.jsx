import { Typography, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import CustomRating from "../Components/CustomRating";
import CustomImageList from "../Components/CustomImageList";
import lotmBg from "../assets/lotmPreview/lotmMain.jpg";
import potionImage from "../assets/lotmPreview/potionImage.jpeg";
const Lotm = () => {
  return (
    <div>
      <Grid container direction={"column"}>
        <Grid item xs={12} sx={{ backgroundColor: "yellow" }} mt={2}>
          <Typography align="center" variant="h2">
            LORD OF THE MYSTERIES
          </Typography>
        </Grid>
        <Grid item container xs={12} mt={4} px={4}>
          <Grid item xs={6} sx={{ bgcolor: "red" }}>
            <img src={lotmBg} loading="lazy" width="100%" />
          </Grid>
          <Grid item container xs={6} direction={"column"} px={2}>
            <Grid item container>
              <Grid
                item
                container
                xs={"auto"}
                direction={"column"}
                sx={{
                  bgcolor: "green",
                  px: 1.5,
                  py: 1,
                  borderRight: "2px solid black",
                }}
              >
                <Grid item px={1.0}>
                  <Typography
                    variant="h6"
                    align="center"
                    bgcolor={grey[300]}
                    borderRadius={3}
                  >
                    SCORE
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4" align="center">
                    9.5
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <CustomRating />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction={"column"}
                xs={"auto"}
                sx={{
                  bgcolor: "skyblue",
                  p: 2.5,
                  borderRight: "2px solid black",
                }}
                display="flex"
                justifyContent={"center"}
              >
                <Grid item container mt={0.5}>
                  <Grid item display="flex" alignItems={"center"}>
                    <Typography variant="subtitle2">
                      Chinese Title : &nbsp;
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">诡秘之主</Typography>
                  </Grid>
                </Grid>
                <Grid item container mt={0.5}>
                  <Grid item display="flex" alignItems={"center"}>
                    <Typography variant="subtitle2">Author : &nbsp;</Typography>
                  </Grid>
                  <Grid item>
                    <Typography> Cuttlefish That Loves Diving</Typography>
                  </Grid>
                </Grid>
                <Grid item container mt={0.5}>
                  <Grid item display="flex" alignItems={"center"}>
                    <Typography variant="subtitle2">
                      Release Date : &nbsp;
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography> Apl 1, 2018 - May 1, 2020</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={"auto"}
                sx={{
                  bgcolor: "green",
                  display: "flex",
                  alignItems: "center",
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
                  520/1430
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction={"column"}>
              <Grid item bgcolor={"orange"} borderBottom={"1px solid black"}>
                <Typography variant="subtitle2">SYNOPSIS</Typography>
              </Grid>
              <Grid item bgcolor={"purple"} mt={1}>
                <Typography variant="subtitle1">
                  &emsp;Waking up to be faced with a string of mysteries, Zhou
                  Mingrui finds himself reincarnated as Klein Moretti in an
                  alternate Victorian era world where he sees a world filled
                  with machinery, cannons, dreadnoughts, airships, difference
                  machines, as well as Potions, Divination, Hexes, Tarot Cards,
                  Sealed Artifacts… <br />
                  &emsp;The Light continues to shine but the mystery has never
                  gone far. Follow Klein as he finds himself entangled with the
                  Churches of the world—both orthodox and unorthodox—while he
                  slowly develops newfound powers thanks to the Beyonder
                  potions.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} mt={6} bgcolor={grey[800]} py={4}>
          <Grid item container direction={"column"}>
            <Grid item>
              <Typography variant="h3" align="center" color={"white"}>
                PREVIEW ARTS
              </Typography>
            </Grid>
            <Grid item display={"flex"} justifyContent={"center"} mt={3}>
              <CustomImageList />
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
            mt={8}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid item container direction={"column"} xs={4} px={5}>
              <Grid item>
                <img src={potionImage} loading="lazy" width={"100%"} />
              </Grid>
              <Grid item>
                <Typography align="center" variant="h6">
                  All beyonders' sequences table
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={6} px={6} direction={"column"} mt={7}>
              <Grid item>
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
    </div>
  );
};
export default Lotm;
