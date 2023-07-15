import { Typography, Grid } from "@mui/material";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import CustomDrawer from "./Components/CustomDrawer";
import { AnimatedPage } from "./Components/AnimatedRoute";
const Manhwa = () => {
  let mainCard = {
    width: "70%",
    imgsrc: "https://pbs.twimg.com/media/Fy6SYX3WwAQkBVs.jpg",
    name: "WINDBREAKER",
    detail:
      "Jay's the perfect student. He's got straight As and he's the student body president. But after being coerced into joining the school's biking team, the Hummingbird Crew, he discovers a whole new world outside of studying. What new adventures will he face outside the comfort of his textbooks?",
  };
  let subCard1 = {
    width: "100%",
    imgsrc:
      "https://cdn.shopify.com/s/files/1/1074/9876/files/download_314b3369-c3d4-46f0-8a54-551608355262.jpg?v=1644467043",
    name: "SEASONS OF BLOSSOM",
    detail:
      " Seasons of Blossom tells the story of various teenagers and young adults who experience the tumultuous age of youthhood—dealing with matters such as young romance, friendship, the cost of tiger parenting, bullying and mental health. The plot of this manhwa is laid out in four parts, each representing one of the four temperate seasons. ",
  };
  let subCard2 = {
    width: "100%",
    imgsrc:
      "https://www.allkpop.com/upload/2022/03/content/092323/1646886213-14416344-1a74-4893-8512-c3e28179e3d9.jpeg",
    name: "THE GIRL DOWNSTAIR",
    detail:
      " When Joon moves into a new apartment for his first day in college, he was not expecting an ex celebrity, Duna, to be living downstairs, hiding from her past life. Joon finds Duna strange and avoids her at first, but soon finds himself in her room without realizing what he is getting himself into.",
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
          <Card cardDetail={mainCard} url="/manhwa/windbreaker" />{" "}
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
export default Manhwa;
