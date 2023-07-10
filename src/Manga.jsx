import { Typography, Grid } from "@mui/material";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import CustomDrawer from "./Components/CustomDrawer";
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
  let subCard2 = {
    width: "100%",
    imgsrc:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fdcfb3b0-ce5d-4d84-b195-7bbdf1674486/de9ciq8-e07cfce4-2297-473e-9462-c7a12550a426.jpg/v1/fill/w_1192,h_670,q_70,strp/jujutsu_kaisen_wallpaper_by_vale0912_de9ciq8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZmRjZmIzYjAtY2U1ZC00ZDg0LWIxOTUtN2JiZGYxNjc0NDg2XC9kZTljaXE4LWUwN2NmY2U0LTIyOTctNDczZS05NDYyLWM3YTEyNTUwYTQyNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EHAnNPoTaqC40QuO3Zk7jvcZM26U6ox5fCmRulrYXaI",
    name: "JUJITSU KAISEN",
    detail:
      "Yuji Itadori, a kind-hearted teenager, joins his school's Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed talisman - the finger of Sukuna, a demon - and its being targeted by other cursed beings.",
  };
  return (
    <>
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
          <Card cardDetail={subCard1} url="" />
        </Grid>

        <Grid item xs={5}>
          <Card cardDetail={subCard2} url="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Manga;
