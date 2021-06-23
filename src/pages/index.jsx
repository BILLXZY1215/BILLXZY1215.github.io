import * as React from "react";
import { useState } from "react";
import { Link, graphql } from "gatsby";
import { ChakraProvider, Tabs, TabList, Tab } from "@chakra-ui/react";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => {
  return (
    <>
      <div>About</div>
      <div>xxx</div>
    </>
  );
};

const BlogIndex = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    );
  }

  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug;

        return (
          <li key={post.fields.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        );
      })}
    </ol>
  );
};

const Index = ({ data, location }) => {
  const [tab, setTab] = useState(false);
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <ChakraProvider>
        <Tabs>
          <TabList>
            <Tab onClick={() => setTab(false)}>Posts</Tab>
            <Tab onClick={() => setTab(true)}>About</Tab>
          </TabList>
        </Tabs>
        {tab ? <About /> : <BlogIndex posts={posts} />}
      </ChakraProvider>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
