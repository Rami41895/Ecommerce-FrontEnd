/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Affichearticlecard = ({ article }) => {
  console.log("aaaaaaaaaa", article);
  return (
    <div className='container'>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        {article
          ? article.map((art, index) => (
              <Card key={index} sx={{ maxWidth: 400, margin: 1 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={art.imageart}
                  title={art.reference}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    designation:{art.designation.substr(0, 20)}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    prix: {art.prix} DT
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained'>ADD TO CART</Button>
                </CardActions>
              </Card>
            ))
          : "errr"}
      </div>
    </div>
  );
};

export default Affichearticlecard;
