import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

const Home = () => {

  const classes = useStyles()

  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={12} md={6} className={classes.intro}>
        <Typography className={classes.header} variant='h3'>
        Chat Rooms
        </Typography>
        <Typography  component='p' variant='h5' className={classes.subHeader}>
          Simple. Secure.Reliable messaging. With Chat Rooms, you'll get fast, simple, secure messaging for <b>FREE</b>, available on devices all over the world.
          <br />
          <br />
        </Typography>
        <Link to='/join-chat' style={{ textDecoration: 'none' }}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.registerButton}
          >
           Try it out now!
          </Button>
        </Link>
      </Grid>
      <Grid item  md={6}>
        <img src='https://cdn.dribbble.com/users/2329333/screenshots/9291756/tinder-01_4x.png' className={classes.vector} alt='hero'/>
      </Grid>
    </Grid>

  );
};

export default Home;