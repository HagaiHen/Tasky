import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CustomDiv } from "./styles";
import { CardHeader, CardMedia, Avatar, IconButton } from "@mui/material";
import { red, blue, green, yellow, orange, purple } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//TODO: connect ot backend
const colors = [red[500], blue[500], green[500], yellow[500], orange[500], purple[500]];
const letters = ["R", "B", "G", "Y", "O", "P", "A", "C", "D", "E", "F", "H", "I", "J", "K", "L"];
const dates = [
  "September 14, 2016",
  "March 5, 2020",
  "June 20, 2019",
  "December 2, 2018",
  "August 10, 2015",
  "January 30, 2017",
  "November 8, 2022",
  "April 18, 2014",
  "July 25, 2021",
  "October 12, 2013",
];


export default function ProjectCard(project) {
  return (
    <Card
      sx={{ width: 300, height: 185, margin: 2, backgroundColor: "#d9d9d9" }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: colors[Math.floor(Math.random() * colors.length)] }} aria-label="recipe">
            {letters[Math.floor(Math.random() * letters.length)]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" >
            <MoreVertIcon />
          </IconButton>
        }
        title="last updated:"
        subheader={dates[Math.floor(Math.random() * dates.length)]}
      />
      <CardMedia
        component="img"
        height="0"
        image="/static/images/cards/paella.jpg"
        alt=""
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Project Name
        </Typography>
        <CustomDiv>
          <Typography variant="body2" color="text.secondary" flex={1}>
            Sprints: {Math.floor(Math.random() * 10) + 1}
          </Typography>
          <Typography variant="body2" color="text.secondary" flex={0.5}>
            Tasks: {Math.floor(Math.random() * 100) + 1}
          </Typography>
        </CustomDiv>
      </CardContent>
    </Card>
  );
}
