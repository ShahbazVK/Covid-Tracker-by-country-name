import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: "red",
  },
});

export default function SimpleCard(props) {
    // console.log("props",props);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className='cardhai'>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Covid Cases
        </Typography>
        <Typography variant="h5" component="h2">
          {props.country}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Confirmed: {props.obj[0]}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Recovered: {props.obj[1]}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Deaths: {props.obj[2]}
        </Typography>
        <Typography variant="body2" component="p">
          Stay Clean, Stay Safe...
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
