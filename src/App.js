import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./components/common/common";
import NavBar from "./pages/NavBar";
import { Grid } from "@mui/material";
import "./App.css";
import ErrorBoundary from "./components/errorboundry";

const Router = createBrowserRouter(routes);

const Routing = () => {
  return (
    <>
      <RouterProvider router={Router}>
        <Grid container>
          <Grid item xs={12} lg={12} sm={12} className="sticky">
            <ErrorBoundary>
              <NavBar />
            </ErrorBoundary>
          </Grid>
        </Grid>
      </RouterProvider>
    </>
  );
};

export default Routing;
