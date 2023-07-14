import { Typography, Grid } from "@mui/material";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import CustomDrawer from "./Components/CustomDrawer";
import { AnimatedPage } from "./Components/AnimatedRoute";
const Manga = () => {
  let mainCard = {
    width: "80%",
    imgsrc: "https://images3.alphacoders.com/612/612522.jpg",
    name: "ATTACK ON TITAN",
    detail:
      "Humans are nearly exterminated by giant creatures called Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a land protected by extremely high walls, even taller than the biggest of titans. Flash forward to the present, and mankind has not seen a titan in over 100 years. One day, 10 year old Eren and his childhood friend Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as Eren's mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.",
  };
  let subCard1 = {
    width: "100%",
    imgsrc: "https://images8.alphacoders.com/715/715321.jpg",
    name: "PANDORA HEART",
    detail:
      "The story follows Oz Vessalius, the 15-year old heir to the house of Vessalius. During his coming-of-age ceremony is set upon by strangers who condemn him for the sin of being alive and banish him into the depths of Abyss, an otherworldly dimension.",
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
      </Grid>
    </AnimatedPage>
  );
};

export default Manga;
