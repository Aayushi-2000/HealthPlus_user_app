import { Box, Card, Grid, Typography } from "@mui/material";
import CardContents from "../views/cardContent";

const ProductDetails = () => {
  return (
    <>
      <Box className="CarouselAlignment">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <Grid container spacing={2} display="grid">
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
                    Category of the product:-
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container display="flex" spacing={2}>
                    <Grid item xs={3}>
                      <CardContents />
                    </Grid>
                    <Grid item xs={3}>
                      <CardContents />
                    </Grid>
                    <Grid item xs={3}>
                      <CardContents />
                    </Grid>
                    <Grid item xs={3}>
                      <CardContents />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <CardContents />
          </Grid>
          <Grid item xs={12}>
            <CardContents />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ProductDetails;
