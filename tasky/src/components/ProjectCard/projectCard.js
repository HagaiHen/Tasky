import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CustomDiv } from "./styles";
import { CardHeader, CardMedia, Avatar, IconButton, CardActionArea } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getUser } from '../../controller/UserController' 


export default function ProjectCard(props) {

  const [teamLeader, setTeamLeader] = React.useState({});
  React.useEffect(() => {
    getUser(props.project.teamLeaderUid).then((user) => {
      setTeamLeader(user);
    });
  }, []);

  const handleClick = () => {
    props.setBacklogProject(props.project);
    props.handleNav("Backlog");
  };

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
      <CardActionArea onClick={handleClick}>
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
      </CardActionArea>
    </Card>
  );
}
