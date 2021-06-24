import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import {
  ChakraProvider,
  Tabs,
  TabList,
  Tab,
  Text,
  Divider,
  Heading,
  HStack,
  Button,
  Tooltip,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { FaLinkedin, FaResearchgate, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
  const info = [
    {
      url:
        "https://www.linkedin.com/in/%E6%B3%BD%E5%AE%87-%E7%86%8A-5940b01a2/",
      name: "LinkedIn",
      cs: "linkedin",
      icon: <FaLinkedin />,
    },
    {
      url: "https://github.com/BILLXZY1215",
      name: "GitHub",
      cs: "blackAlpha",
      icon: <FaGithub />,
    },
    {
      url: "https://www.researchgate.net/profile/Zeyu-Xiong-5/research",
      name: "ResearchGate",
      cs: "green",
      icon: <FaResearchgate />,
    },
    {
      url: "scyzx2@gmail.com",
      name: "Email",
      cs: "teal",
      icon: <AiOutlineMail />,
    },
  ];
  const Item = ({ item }) => {
    const { hasCopied, onCopy } = useClipboard(item.url);
    const toast = useToast();
    useEffect(() => {
      if (hasCopied) {
        toast({ title: "Copied!", status: "success", position: "top" });
      }
    }, [hasCopied, toast]);
    return (
      <Tooltip label={item.url}>
        <Button leftIcon={item.icon} colorScheme={item.cs} onClick={onCopy}>
          {item.name}
        </Button>
      </Tooltip>
    );
  };
  return (
    <ChakraProvider>
      <Heading mb={2}>Intro</Heading>
      <Text fontSize="md">
        Hi, I'm Zeyu. you can call be Bill as well. I'm a final year student
        from Univeristy of Nottigham, Ningbo China🚀, currently, I'm a front-end
        engineer trainee in{" "}
        <a href="https://taoyoumu.yashihq.com/" style={{ color: "red" }}>
          yashi
        </a>
        ,{" "}
        <a href="https://ufair.net.cn/" style={{ color: "orange" }}>
          uFair
        </a>{" "}
        and a Research fellow in{" "}
        <a href="https://unnc-ucc.github.io/" style={{ color: "blue" }}>
          ucc
        </a>
        . Beside's programming, I enjoy rock music and basketball.
      </Text>
      <Divider mt={2} mb={2} />
      <Heading mb={2}>Interest</Heading>
      <Heading mt={2} size="lg">
        Developer
      </Heading>
      <Text fontSize="lg">
        Currently, as a developer, I'm mainly focus on{" "}
        <strong>front-end</strong> development. I'm learning{" "}
        <strong>JavaScript</strong>,<strong>React.js</strong> and{" "}
        <strong>Vue.js</strong>, if you have some awesome projects that need to
        develop or maintain, please let me know.
      </Text>
      <Heading mt={2} size="lg">
        Researcher
      </Heading>
      <Text fontSize="lg">
        As a Researcher, I'm interested in areas of{" "}
        <strong>CV (Computer Vision)</strong> and{" "}
        <strong>NLP (Natural Language Processing)</strong>, especially facial
        detection and symbolic music applied in computer science. If you have
        some projects related to these areas, please let me know. Besides, I'm
        looking for a master project as well.
      </Text>
      <Heading mt={2} size="md">
        Publication
      </Heading>
      <Text fontSize="lg">
        1.{" "}
        <strong>
          Demystifying Interactions between Driving Behaviors and Styles through
          Self-Clustering Algorithms.
        </strong>{" "}
        2021 February, Y.Zhang, W.Jin, Z.Xiong, Z.Li, Y.Liu, X.Peng{" "}
        <a href="https://www.researchgate.net/publication/349640595_Demystifying_Interactions_between_Driving_Behaviors_and_Styles_through_Self-Clustering_Algorithms">
          [<span style={{ color: "blue" }}>Detail</span>]
        </a>
      </Text>
      {/* <Heading mt={2} size="lg">
        Music
      </Heading>
      <Text fontSize="lg">
        For avocation, I enjoy rock music, especially from China mainland: Tang
        Dynasty, Baojiajie 43, ZhiNanZhen, Miserable Faith, Lost Train are my
        favorite bands.
      </Text> */}
      {/* <Text fontSize="lg">I'm also the vocal of band Universe 25.</Text> */}
      <Divider mt={2} mb={2} />
      <Heading mb={2}>Contact</Heading>
      <HStack>
        {info.map((k) => (
          <Item item={k} />
        ))}
      </HStack>
    </ChakraProvider>
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