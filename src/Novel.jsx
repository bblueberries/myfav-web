import { Typography, Grid } from "@mui/material";
import Card from "./Components/Card";
import videoBg from "./assets/homepagebg.mp4";
function Novel() {
  const videoStyle = {
    width: "100%",
    height: "100%",
    marginBottom: "-10px",
    objectFit: "cover",
  };
  let mainCard = {
    width: "90%",
    imgsrc: "https://wallpaperaccess.com/full/8084043.jpg",
    name: "LORD OF THE MYSTERIES",
    detail:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti incidunt consectetur quaerat aspernatur delectus eius libero dolorem doloremque aliquam beatae, dolor illum. Eveniet vero nemo accusantium nisi aspernatur cum laborum enim quibusdam iste quos totam itaque voluptas earum atque, minus sequi officia, consectetur, qui quas! Voluptatibus quam, magnam autem nemo iure quidem similique doloribus perspiciatis provident ab aut? Molestiae laboriosam fugiat ipsum vitae cumque doloremque nemo cupiditate veritatis corporis maiores, praesentium expedita? Rerum delectus sit excepturi accusantium nisi labore optio pariatur rem porro necessitatibus sed, vitae molestiae, aut nesciunt culpa asperiores repellendus eveniet exercitationem commodi officiis architecto! Iusto, error.",
  };
  let subCard1 = {
    width: "100%",
    imgsrc:
      "https://i.pinimg.com/originals/48/ed/95/48ed959ec1799848ba932dcc56af0df1.jpg",
    name: "OMNISCIENT READER'S VIEWPOINT",
    detail:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti incidunt consectetur quaerat aspernatur delectus eius libero dolorem ",
  };
  let subCard2 = {
    width: "100%",
    imgsrc: "https://wallpaperaccess.com/full/2043991.png",
    name: "CLASSROOM OF THE ELITE",
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
          <Card cardDetail={subCard1} />
        </Grid>

        <Grid item xs={5}>
          <Card cardDetail={subCard2} />
        </Grid>
      </Grid>
    </>
  );
}
export default Novel;
