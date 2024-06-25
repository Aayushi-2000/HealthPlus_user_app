import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const CardContents = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} gutterBottom>
            Product Name:-
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Price:-
          </Typography>
          <Box display="ruby-text">
            <img
              src="/paracitamol.jpeg"
              alt="medicine"
              height="200"
              width="200"
            />
          </Box>
        </CardContent>
        <Box display="ruby-text">
          <CardActions>
            <Button size="small" variant="outlined">
              Order now
            </Button>
            <Button size="small" variant="contained">
              Add to cart
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default CardContents;
