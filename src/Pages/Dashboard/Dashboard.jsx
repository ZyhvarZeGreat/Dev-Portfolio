import React, { useState } from "react";
import "./Dashboard.css";
import {
  Dashboard_Content,
  Dashboard_Header,
  Dashboard_Sidenav,
} from "../../Dashboard_Components";
import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
const Dashboard = () => {
  // const theme = useTheme((theme.breakpoints.up))
  const [opened, setOpened] = useState("slidein");
  return (
    <div>
      <Grid container className="urcrypto_dashboard">
        <Grid container xs={2} height='100vh'>
          <Dashboard_Sidenav opened={opened} />
        </Grid>

        <Grid container direction="column"  className="Dashboard_content"   xs={10}>
          <Dashboard_Header setopened={setOpened} />
          <Dashboard_Content />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
