import { Box, Card, Divider, Grid, Typography } from "@mui/material";

const Cart = () => {
  return (
    <Box className="mainContainer">
      <Card>
        <Grid container spacing={2} p={2}>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight="bold">
              Shopping Cart
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end">
            <Typography variant="body1">Price</Typography>
          </Grid>
        </Grid>
        <Grid p={2}>
          <Divider />
        </Grid>

        <Grid container spacing={2} p={2}>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight="bold">
              Image of product
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end">
            <Typography variant="body1">Amount 754 R</Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Cart;
