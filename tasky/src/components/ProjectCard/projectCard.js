import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CustomDiv } from "./styles";
import { CardHeader, CardMedia, Avatar, IconButton } from "@mui/material";
import { red, blue, green, yellow, orange, purple } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const colors = [red[500], blue[500], green[500], yellow[500], orange[500], purple[500]];
const letters = ["R", "B", "G", "Y", "O", "P", "A", "C", "D", "E", "F", "H", "I", "J", "K", "L"];

export default function ProjectCard(project) {
  return (
    <Card
      sx={{ width: 300, height: 200, margin: 2, backgroundColor: "#d9d9d9" }}
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
        subheader="September 14, 2016"
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
            Sprints: 1
          </Typography>
          <Typography variant="body2" color="text.secondary" flex={0.5}>
            Tasks: 5
          </Typography>
        </CustomDiv>
      </CardContent>
    </Card>
  );
}
