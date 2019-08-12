import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Bounce from 'react-reveal/Bounce';
import ScrollArea from '../../../components/ScrollArea';
import '../style.scss';

const useStyles = makeStyles({
  card: {
    marginTop: 10,
    maxWidth: 500,
  },
  mediaCard: {
    cursor: 'pointer',
  },
});

const HomePageMain = () => {
  const {
    user, repositories, bounce,
  } = useSelector(state => ({
    user: state.home.user.info,
    repositories: state.home.user.repositories,
    bounce: state.home.bounce,
  }));
  const classes = useStyles();
  const openGitHab = () => {
    window.open(
      `${user.html_url}?tab=repositories`,
      '_blank',
    );
  };

  return (
    <Bounce center opposite cascade collapse when={bounce}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.mediaCard}
            component="img"
            alt="Avatar"
            height="400"
            width="80"
            title="avatar"
            image={user.avatar_url}
            onClick={openGitHab}
          />
          <CardContent className="user">
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <div>
              <Typography gutterBottom variant="h5" color="textSecondary" component="p">
                Company
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center" component="p">
                {user.company || '-'}
              </Typography>
            </div>
          </CardContent>
          <Typography className="title" gutterBottom variant="h5" align="left" component="p">
            Repositories
          </Typography>
        </CardActionArea>
        <CardActions className="repositories">
          <ScrollArea style={{ maxWidth: 600, height: 200 }}>
            { repositories.map(item => (
              <Typography gutterBottom color="textSecondary" align="left" component="p" key={item.html_url}>
                <a href={`${item.html_url}`} rel="noopener noreferrer" target="_blank">{item.html_url}</a>
              </Typography>
            ))}
          </ScrollArea>
        </CardActions>
      </Card>
    </Bounce>
  );
};

export default HomePageMain;
