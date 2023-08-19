import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CustomDiv, contentStyles, cardStyles } from './styles';

export default function NewProjectCard(props) {

  return (
    <Card sx={cardStyles}>
      <CardActionArea onClick={() => props.setOpen()}>
        {/* You can replace 'imageSrc' with the actual image source */}
        <img
          src="https://media.istockphoto.com/id/1291339958/vector/project-management-concept-vector-illustration-business-team-working-together-with-project.jpg?s=612x612&w=0&k=20&c=N9WABnqOX_wcuUOJmIYiB3czbb1EklCgdvR8lzAda44="
          alt="Project Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Make the image cover the entire area
          }}
        />
        <CardContent sx={contentStyles} >
          <Typography className={props.classNameCRT} variant="h6" fontWeight="bold" gutterBottom>
            Create a Project
          </Typography>     
          <CustomDiv>
            {/* You can add buttons for 'Create Project' and 'Join Project' actions */}
          </CustomDiv>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}