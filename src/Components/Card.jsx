import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid, alpha } from "@mui/material";
import { useNavigate } from "react-router";
import { grey } from "@mui/material/colors";
export default function ActionAreaCard(props) {
  let cardDetail = props.cardDetail;
  let url = props.url;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
    window.scrollTo(0, 0); // Reset window scroll position
  };
  return (
    <Card sx={{ maxWidth: cardDetail.width, borderRadius: "0" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="100%"
          image={cardDetail.imgsrc}
          alt="pics"
          loading="lazy"
        />
      </CardActionArea>
      <CardContent sx={{ maxHeight: "1", px: 4 }}>
        <Typography gutterBottom variant="h5" component="div">
          {cardDetail.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardDetail.detail}
        </Typography>

        <Button
          sx={{
            mt: 2,
            "&:hover": { bgcolor: alpha(grey[300], 0.1), color: "black" },
          }}
          onClick={handleClick}
        >
          GET START
        </Button>
      </CardContent>
    </Card>
  );
}
