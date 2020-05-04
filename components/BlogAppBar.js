import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, IconButton, Typography, Container } from '@material-ui/core';

const BlogAppBar = ({ title }) => {
    return <Container maxWidth="lg">
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Link href="/">
                        <MenuIcon />
                    </Link>
                </IconButton>
                <Typography variant="h6" >
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </Container>
}

export default BlogAppBar;