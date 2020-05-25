import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, IconButton, Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const BlogAppBar = ({ title }) => {
  const classes = useStyles();
  return <AppBar position="static" style={{ backgroundColor: 'black' }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <Link href="/">
          <MenuIcon />
        </Link>
      </IconButton>
      <Typography variant="h6" className={classes.title} >
        {title}
      </Typography>
      <Button color="inherit" onClick={()=>window.open('https://docs.google.com/forms/d/e/1FAIpQLSfb6ul3W4WEz-tUoWG7C8a0J8RBdS0zEsi_iJ49SW6Xpjqmbg/viewform?usp=sf_link','_self')}>문의하기</Button>
    </Toolbar>
  </AppBar>

}

export default BlogAppBar;