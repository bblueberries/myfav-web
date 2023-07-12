import { Typography, Grid } from "@mui/material";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import CustomDrawer from "./Components/CustomDrawer";
import { AnimatedPage } from "./Components/AnimatedRoute";
function Novel() {
  let mainCard = {
    width: "90%",
    imgsrc: "https://wallpaperaccess.com/full/8084043.jpg",
    name: "LORD OF THE MYSTERIES",
    detail:
      " Waking up to be faced with a string of mysteries, Zhou Mingrui finds himself reincarnated as Klein Moretti in an alternate Victorian era world where he sees a world filled with machinery, cannons, dreadnoughts, airships, difference machines, as well as Potions, Divination, Hexes, Tarot Cards, Sealed Artifacts… The Light continues to shine but the mystery has never gone far. Follow Klein as he finds himself entangled with the Churches of the world—both orthodox and unorthodox—while he slowly develops newfound powers thanks to the Beyonder potions.",
  };
  let subCard1 = {
    width: "100%",
    imgsrc:
      "https://i.pinimg.com/originals/48/ed/95/48ed959ec1799848ba932dcc56af0df1.jpg",
    name: "OMNISCIENT READER'S VIEWPOINT",
    detail:
      " When the real world is plunged into the premise of Ways of Survival, Kim Dokja's unique knowledge of the novel becomes vital to his survival. Kim Dokja allies with Yoo Joonghyuk, the protagonist of Ways of Survival, in order to change the novel's original plot and more quickly approach the end of the story. ",
  };
  let subCard2 = {
    width: "100%",
    imgsrc: "https://wallpaperaccess.com/full/2043991.png",
    name: "CLASSROOM OF THE ELITE",
    detail:
      " Koudo Ikusei Senior High School is a leading prestigious school with state-of-the-art facilities where nearly 100% of students go on to university or find employment. The students there have the freedom to wear any hairstyle and bring any personal effects they desire. Koudo Ikusei is a paradise-like school, but the truth is that only the most superior of students receive favorable treatment. Ayanokouji Kiyotaka is a student of D-class, which is where the school dumps its 'inferior' students in order to ridicule them. For a certain reason, Kiyotaka was careless on his entrance examination, and was put in D-class. After meeting Horikita Suzune and Kushida Kikyou, two other students in his class, Kiyotaka's situation begins to change.",
  };
  return (
    <AnimatedPage>
      <Grid container>
        <Grid item xs={"auto"}>
          {/* <SearchBar /> */}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Card cardDetail={mainCard} url="/novel/lotm" />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-evenly"
        // alignItems="center"
        spacing={0}
        sx={{ mt: 10, mb: 8 }}
      >
        <Grid item xs={5}>
          <Card cardDetail={subCard1} url="" />
        </Grid>

        <Grid item xs={5}>
          <Card cardDetail={subCard2} url="" />
        </Grid>
      </Grid>
    </AnimatedPage>
  );
}
export default Novel;
