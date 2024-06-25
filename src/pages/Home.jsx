import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { profile } from "../components/common/constants";
import CardContents from "../views/cardContent";

const HomePage = () => {
  return (
    <Box className="CarouselAlignment">
      <Carousel navButtonsAlwaysVisible={true}>
        {profile?.map((item) => (
          <Paper key={item}>
            <img src={item.img} alt="" height="350" width="100%" />
          </Paper>
        ))}
      </Carousel>
      <Grid container spacing={6} pb={2}>
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
    </Box>
  );
};

export default HomePage;
