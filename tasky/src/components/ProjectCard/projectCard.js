import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { color } from "@mui/system";
import { StyledTypography, CustomDiv } from "./styles";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function ProjectCard(project) {
  return (
    <Card
      sx={{ width: 300, height: 150, margin: 2, backgroundColor: "#d9d9d9" }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Project Owner
        </Typography>
        <Typography variant="h5" component="div">
          Project Name
        </Typography>
        <CustomDiv>
          <Typography color="text.secondary" flex={1}>
            Sprints: 1
          </Typography>
          <Typography color="text.secondary" flex={0.5}>
            Tasks: 5
          </Typography>
        </CustomDiv>
      </CardContent>
    </Card>
  );
}
