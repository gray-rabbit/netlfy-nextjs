import Link from 'next/link';
import { getSortedPostsData } from "../lib/posts";

const IndexPage = ({ allPostData }) => {
    console.log(allPostData);
    return <div>
        <section>
            <h2 >Blog</h2>
            <ul >
                {allPostData.map(({ id, date, title }) => (
                    <li key={id}>
                        {title}
                        <br />
                        <Link href="/posts/[id]" as={`/posts/${id}`}>
                            <a>{id}</a>
                        </Link>
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    </div>
}


export async function getStaticProps() {
    const allPostData = getSortedPostsData();
    return {
        props: {
            allPostData
        }
    }
}

export default IndexPage;