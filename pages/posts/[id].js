import { getAllPostIds, getPostData } from "../../lib/posts"
import Layout from "../../components/layout";
import { Typography, Paper } from "@material-ui/core";
import marked from 'marked';
import MarkdownEl from '../../components/MarkdownEl';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser'

const PostViewer = ({ postData }) => {
    const { id, title, date, content, rawText } = postData;
    console.log(rawText);
    return <Layout title={title}>
        <Paper elevation={4} style={{ padding: '1rem' }}>
            <Typography variant="body1">
                {date}
            </Typography>
            <br></br>
            <br></br>
            {/* <MarkdownEl>{content}</MarkdownEl> */}
            <ReactMarkdown
                source={content}
                escapeHtml={false}
                skipHtml={false}
                // astPlugins={[parseHtml]}
                renderers={{ inlineCode: InlineCodeBlock }} />

            {/* <Markdown source={rawText}></Markdown> */}
        </Paper>
        <br />
    </Layout>
}

const parseHtml = htmlParser({
    processingInstructions:[{
        shouldProcessNode: (node)=>node&& node.name==='span',
        processNode:()=><span style={{color:'#f00'}}></span>
    }]
})


function InlineCodeBlock(props) {
    return (
        <span style={{ backgroundColor: '#ff0' }}>
            {props.value}
        </span>
    )
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