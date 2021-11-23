import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WishList() {
  return (
    <Card xs={1} md={2} className="g-4">
      <CardMedia component="img" alt="game cover" height="140" image="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Game Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Information about the game will be displayed here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default WishList;