import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CustomDiv } from "./styles";
import { CardHeader, CardMedia, Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getUser } from '../../controller/UserController' 

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


export default function ProjectCard(props) {

  const [teamLeader, setTeamLeader] = React.useState({});
  React.useEffect(() => {
    getUser(props.project.teamLeaderUid).then((user) => {
      setTeamLeader(user);
    });
  }, []);

  return (
    <Card
      sx={{ width: 300, height: 185, margin: 2, backgroundColor: "#d9d9d9" }}
      className={props.className}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
          <img src={teamLeader.imageUrl} width={40} height={40} />  
          </Avatar>
        }
        action={
          <IconButton aria-label="project-settings" >
            <MoreVertIcon />
          </IconButton>
        }
        title="last updated:"
        subheader={props.project.recentChange}
      />
      <CardMedia
        component="img"
        height="0"
        image="/static/images/cards/paella.jpg"
        alt=""
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.project.name}
        </Typography>
        <CustomDiv>
          <Typography variant="body2" color="text.secondary" flex={1}>
            Sprints: {props.project.sprintNum}
          </Typography>
          <Typography variant="body2" color="text.secondary" flex={0.5}>
            Tasks: {props.project.taskNum}
          </Typography>
        </CustomDiv>
      </CardContent>
    </Card>
  );
}
