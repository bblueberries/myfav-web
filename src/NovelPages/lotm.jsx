import { Typography, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import CustomRating from "../Components/CustomRating";
const Lotm = () => {
  return (
    <div>
      <Grid container direction={"column"}>
        <Grid item xs={12} sx={{ backgroundColor: "yellow" }}>
          <Typography align="center" variant="h2">
            LORD OF THE MYSTERIES
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={6} sx={{ bgcolor: "red", p: 2 }}>
            <img
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/c3/33/97.jpg"
              loading="lazy"
              width="100%"
            />
          </Grid>
          <Grid item container xs={6} direction={"column"}>
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
              <Grid item xs={4} sx={{ bgcolor: "blue" }}>
                <Typography>2222</Typography>
              </Grid>
              <Grid item xs={4} sx={{ bgcolor: "green" }}>
                <Typography>3333</Typography>
              </Grid>
            </Grid>
            <Grid item container direction={"column"}>
              <Grid item bgcolor={"orange"}>
                <Typography>Synopsis</Typography>
              </Grid>
              <Grid item bgcolor={"purple"}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Adipisci, labore porro quae perferendis ad repellendus nisi
                  laboriosam sequi optio quod reprehenderit alias dolore sed
                  voluptate sapiente explicabo qui illum eius voluptatem unde
                  temporibus, similique aliquam repudiandae vitae. Soluta
                  commodi quo doloribus quis praesentium debitis officiis minima
                  suscipit, mollitia incidunt voluptatem!
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
