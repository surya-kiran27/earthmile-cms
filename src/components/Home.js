import React, { Component, useEffect, useState } from "react";
import {
  getEarthMiles,
  useEarthMilesState,
  useEarthMilesDispatch,
} from "../Context";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Moment from "react-moment";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function Home() {
  const dispatch = useEarthMilesDispatch();

  const { earth_miles } = useEarthMilesState();

  useEffect(() => {
    async function test() {
      await getEarthMiles(dispatch);
    }
    test();
  }, [dispatch]);
  const classes = useStyles();

  return (
    <div>
      {earth_miles.map((earth_mile) => {
        return (
          <Container>
            <h1>Earth Mile Cms</h1>
            <Card variant="outlined" className={classes.root}>
              <CardContent>
                <Typography
                  style={{ display: "inline-block" }}
                  className={classes.pos}
                  color="textSecondary"
                >
                  Location
                </Typography>
                <Typography
                  style={{ display: "inline-block", paddingLeft: "5px" }}
                  variant="body2"
                  component="p"
                >
                  Unknown
                </Typography>
                <br></br>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  style={{ display: "inline-block" }}
                >
                  No Of Users:
                </Typography>
                <Typography
                  style={{ display: "inline-block" }}
                  variant="h5"
                  component="h2"
                >
                  {earth_mile.no_users}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  style={{ display: "inline-block", paddingLeft: "5px" }}
                >
                  No Of Posts:
                </Typography>
                <Typography
                  style={{ display: "inline-block" }}
                  variant="h5"
                  component="h2"
                >
                  {earth_mile.no_users}
                </Typography>
                <br></br>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  style={{ display: "inline-block", paddingLeft: "5px" }}
                >
                  Created
                </Typography>
                <Typography
                  style={{ display: "inline-block", paddingLeft: "5px" }}
                  variant="h5"
                  component="h2"
                >
                  <Moment fromNow ago>
                    {earth_mile.createdAt}
                  </Moment>
                  {" ago"}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant size="small">
                  View Users
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  size="small"
                >
                  Delete Earth Mile
                </Button>
              </CardActions>
            </Card>
          </Container>
        );
      })}
    </div>
  );
}
