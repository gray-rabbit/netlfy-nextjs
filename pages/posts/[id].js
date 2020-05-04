import { getAllPostIds, getPostData } from "../../lib/posts"

const PostViewer = ({ postData }) => {
    const { id, title, date } = postData;
    return <div>
        {id}
        {title}
        {date}
    </div>
}
export async function getStaticPaths() {
    const paths = getAllPostIds()
    console.log(paths);
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    console.log(postData);
    return {
        props: {
            postData
        }
    }
}

export default PostViewer;