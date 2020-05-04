import { getAllPostIds, getPostData } from "../../lib/posts"
import Layout from "../../components/layout";
import { Typography, Paper } from "@material-ui/core";
import marked from 'marked';
import MarkdownEl from '../../components/MarkdownEl';

const PostViewer = ({ postData }) => {
    const { id, title, date, content } = postData;
    return <Layout title={title}>
        <Paper elevation={4} style={{ padding: '1rem' }}>
            <Typography variant="body1">
                {date}
            </Typography>
            <br></br>
            <br></br>
            <MarkdownEl>{content}</MarkdownEl>
        </Paper>
        <br />
    </Layout>
}
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default PostViewer;