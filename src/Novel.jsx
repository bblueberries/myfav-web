import { Typography, Grid } from "@mui/material";
import Card from "./Components/Card";
function Novel() {
  let mainCard = {
    width: "100%",
    imgsrc: "https://wallpaperaccess.com/full/8084043.jpg",
    name: "LORD OF THE MYSTERIES",
    detail:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti incidunt consectetur quaerat aspernatur delectus eius libero dolorem doloremque aliquam beatae, dolor illum. Eveniet vero nemo accusantium nisi aspernatur cum laborum enim quibusdam iste quos totam itaque voluptas earum atque, minus sequi officia, consectetur, qui quas! Voluptatibus quam, magnam autem nemo iure quidem similique doloribus perspiciatis provident ab aut? Molestiae laboriosam fugiat ipsum vitae cumque doloremque nemo cupiditate veritatis corporis maiores, praesentium expedita? Rerum delectus sit excepturi accusantium nisi labore optio pariatur rem porro necessitatibus sed, vitae molestiae, aut nesciunt culpa asperiores repellendus eveniet exercitationem commodi officiis architecto! Iusto, error.",
  };
  let subCard = {
    width: "100%",
    imgsrc: "https://wallpaperaccess.com/full/8084043.jpg",
    name: "THIS IS SUB CCARD",
    detail:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti incidunt consectetur quaerat aspernatur delectus eius libero dolorem ",
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Card cardDetail={mainCard} />
      </Grid>
      <Grid
        container
        justifyContent="space-evenly"
        // alignItems="center"
        spacing={0}
        sx={{ mt: 10, mb: 8 }}
      >
        <Grid item xs={5}>
          <Card cardDetail={subCard} />
        </Grid>

        <Grid item xs={5}>
          <Card cardDetail={subCard} />
        </Grid>
      </Grid>
    </>
  );
}
export default Novel;
