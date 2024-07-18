import { Box, Card, Grid, Typography } from "@mui/material";
import CardContents from "../views/cardContent";

const ProductDetails = () => {
  return (
    <>
      <Box className="CarouselAlignment">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
                    Category of the product:-
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ overflowX: "auto" }}>
                    <Grid
                      container
                      spacing={2}
                      sx={{ minWidth: "fit-content", flexWrap: "nowrap" }}
                    >
                      <Grid item xs={3} sm={3} md={3}>
                        <CardContents />
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <CardContents />
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <CardContents />
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <CardContents />
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <CardContents />
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <CardContents />
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <CardContents />
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <CardContents />
                      </Grid>
                    </Grid>
                  </Box>
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
