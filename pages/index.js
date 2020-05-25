import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";

const IndexPage = ({ allPostData }) => {
  return (
    <Layout title="Coala Devlog">
      <h2>Blog</h2>
      <Grid container>
        {allPostData && allPostData.map(({ id, date, title }) => (
          <Grid item
            key={id}
            sm={6}
            md={4}
            style={{ width: "100%", padding: "1rem" }}
          >
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>
                <Card>
                  <CardContent>
                    <Typography variant="h5">{title}</Typography>
                    {date}
                  </CardContent>
                </Card>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}

export default IndexPage;
