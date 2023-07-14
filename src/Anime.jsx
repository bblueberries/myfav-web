import { Typography, Grid } from "@mui/material";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import CustomDrawer from "./Components/CustomDrawer";
import { AnimatedPage } from "./Components/AnimatedRoute";
const Anime = () => {
  let mainCard = {
    width: "80%",
    imgsrc: "https://images8.alphacoders.com/457/457869.jpg",
    name: "CODE GEASS",
    detail:
      "The Empire of Britannia has invaded Japan using giant robot weapons called Knightmare Frames. Japan is now referred to as Area 11, and its people the 11's. A Britannian who was living in Japan at the time, Lelouch, vowed to his Japanese friend Suzaku that he'd destroy Britannia. Years later, Lelouch is in high school, but regularly skips out of school to go play chess and gamble on himself. One day, he stumbles on terrorists 11's who've stolen a military secret and is caught by a member of the Britannian task force sent after them, who is Suzaku. As the rest of the squad arrives, Suzaku is shot for disobeying orders, while the military secret, a young immortal witch, gives Lelouch the power of Geass, which makes anyone obey any order. While Suzaku is secretly made the pilot of Britannia's brand new prototype Knightmare, Lancelot, Lelouch becomes the masked Zero to lead the rebellion to destroy Britannia once and for all.",
  };
  let subCard1 = {
    width: "100%",
    imgsrc:
      "https://wallpapers.com/images/featured/steins-gate-eyml4k816uled9bw.jpg",
    name: "STEIN GATE",
    detail:
      "Okabe Rintarou, a university student who refers to himself as Crazy Mad Scientist Hououin Kyouma and his lab's members work on a microwave device that can transfer messages to the past. Without getting captured, they should get it working in order to beat the evil organization, SERN and stop their evil plans.",
  };
  let subCard2 = {
    width: "100%",
    imgsrc:
      "https://a-static.besthdwallpaper.com/86-shinei-nouzen-vladilena-milize-wallpaper-2880x1800-84205_8.jpg",
    name: "EIGHTY SIX 86",
    detail:
      'The Republic of San Magnolia is at war with its neighboring country, the Empire of Giad. Both sides use unmanned drones to conduct a "war without casualties". The story follows Lena as she commands a squad of drones called the 86.',
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
          <Card cardDetail={mainCard} url="" />{" "}
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
          <Card cardDetail={subCard1} url="" unAvailable />
        </Grid>

        <Grid item xs={5}>
          <Card cardDetail={subCard2} url="" unAvailable />
        </Grid>
      </Grid>
    </AnimatedPage>
  );
};

export default Anime;
