import { Typography, Grid } from "@mui/material";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import CustomDrawer from "./Components/CustomDrawer";
import { AnimatedPage } from "./Components/AnimatedRoute";
const Movie = () => {
  let mainCard = {
    width: "80%",
    imgsrc: "https://lotofsense.com/wp-content/uploads/2022/06/share.jpg",
    name: "TENET",
    detail:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ab sunt in reprehenderit optio accusamus asperiores, doloribus, ducimus nobis, expedita id commodi minus? Dolore cumque aliquid ea, officia enim praesentium dolorum veritatis perspiciatis soluta doloribus nesciunt quo perferendis esse voluptate. Dolore fugit officia eum voluptate facilis consequuntur placeat, dolorem ipsum nostrum, reiciendis ea et! Architecto temporibus repellat eos quod reprehenderit, totam officia sequi quaerat. Voluptates totam blanditiis hic excepturi quam ipsum consequuntur quisquam officiis distinctio possimus, ipsam sint quibusdam vero quo enim, odio incidunt molestiae repellendus, illum pariatur praesentium cupiditate obcaecati. Recusandae ullam culpa assumenda, cum repudiandae omnis. Mollitia, sit!",
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
          <Card cardDetail={mainCard} url="" unAvailable />{" "}
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-evenly"
        // alignItems="center"
        spacing={0}
        sx={{ mt: 10, mb: 8 }}
      ></Grid>
    </AnimatedPage>
  );
};

export default Movie;
