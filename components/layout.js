import BlogAppBar from './BlogAppBar'
import { Container } from '@material-ui/core';
const Layout = ({ children, title }) => {
    return <div>
        <BlogAppBar title={title} />
        <Container maxWidth="lg">
            {children}
        </Container>
    </div>
}

export default Layout;