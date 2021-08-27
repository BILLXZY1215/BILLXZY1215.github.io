import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import {
  ChakraProvider,
  Box,
  Badge,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Divider,
  HStack,
  Button,
  Tooltip,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  FaLinkedin,
  FaResearchgate,
  FaGithub,
  FaRssSquare,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiArrowToTop } from "react-icons/bi";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import ViewCounter from "../components/lib/ViewCounter";
import ThumbCounter from "../components/lib/ThumbCounter";
import ProgressiveImage from "react-progressive-image";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

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
    {
      url: "https://billxzy1215.github.io/feed.xml",
      name: "RSS Feed",
      cs: "orange",
      icon: <FaRssSquare />,
    },
  ];
  const Item = ({ item, index }) => {
    const { hasCopied, onCopy } = useClipboard(item.url);
    const toast = useToast();
    useEffect(() => {
      if (hasCopied) {
        toast({
          title: "Copied!",
          status: "success",
          position: "top",
          isClosable: true,
        });
      }
    }, [hasCopied, toast]);
    return (
      <Tooltip label={item.url}>
        <Button
          leftIcon={item.icon}
          colorScheme={item.cs}
          onClick={onCopy}
          mb={2}
          mr={5}
          key={index}
        >
          {item.name}
        </Button>
      </Tooltip>
    );
  };
  return (
    <ChakraProvider>
      <Badge variant="solid" fontSize="1.5em" pl={2} pr={2} borderRadius={5}>
        Intro
      </Badge>
      <Text fontSize="md">
        Hi, I'm Zeyu. you can call be Bill as well. I'm a final year student
        from Univeristy of Nottigham, Ningbo China, currently, I'm a front-end
        engineer trainee in{" "}
        <a
          href="https://taoyoumu.yashihq.com/"
          target="_blank"
          style={{ color: "red" }}
          rel="noopener noreferrer"
        >
          yashi
        </a>
        ,{" "}
        <a
          href="https://ufair.net.cn/"
          target="_blank"
          style={{ color: "orange" }}
          rel="noopener noreferrer"
        >
          uFair
        </a>{" "}
        and a Research fellow in{" "}
        <a
          href="https://unnc-ucc.github.io/"
          target="_blank"
          style={{ color: "blue" }}
          rel="noopener noreferrer"
        >
          ucc
        </a>
        . Beside's programming, I enjoy rock music and basketball.
      </Text>
      <Divider mt={2} mb={2} />
      <Badge variant="solid" fontSize="1.5em" pl={2} pr={2} borderRadius={5}>
        Interest
      </Badge>
      <br />
      <Badge fontSize="1em" pl={2} pr={2} mt={2}>
        Developer
      </Badge>
      <Text fontSize="lg">
        Currently, as a developer, I'm mainly focusing on{" "}
        <strong>front-end</strong> development. I'm learning{" "}
        <strong>JavaScript</strong>, <strong>JQuery</strong>,{" "}
        <strong>React.js</strong> and <strong>Vue.js</strong>. I'm also paying
        attention to the novel front-end techniques, such as{" "}
        <strong>vite.js</strong>.
        <br />
        For <strong>back-end</strong>, I focus on <strong>Node.js</strong> and{" "}
        <strong>FastAPI of Python</strong>.
        <br />
        I'm also interested in implementing data structure algorithms by using{" "}
        <strong>C</strong>, <strong>C++</strong>, <strong>Java</strong>,{" "}
        <strong>JavaScript</strong>, <strong>Haskell</strong> and{" "}
        <strong>Python</strong>.
        <br />
        If you have some awesome projects that need to develop or maintain,
        please let me know.
      </Text>
      <Divider mt={2} mb={2} />
      <Badge fontSize="1em" pl={2} pr={2}>
        Researcher
      </Badge>
      <Text fontSize="lg">
        As a Researcher, I'm interested in areas of{" "}
        <strong>CV (Computer Vision)</strong> and{" "}
        <strong>NLP (Natural Language Processing)</strong>, especially facial
        detection and symbolic music applied in computer science. If you have
        some projects related to these areas, please let me know. Besides, I'm
        looking for an awesome master project related to those areas as well.
      </Text>
      <Badge fontSize="1em" pl={2} pr={2} mt={2}>
        Publication
      </Badge>
      <Text fontSize="lg">
        1. Zhang Y., Jin W., Xiong Z., Li Z., Liu Y., Peng X. (2021)
        <strong>
          Demystifying Interactions Between Driving Behaviors and Styles Through
          Self-clustering Algorithms.
        </strong>{" "}
        In: Krömker H. (eds) HCI in Mobility, Transport, and Automotive Systems.
        HCII 2021. Lecture Notes in Computer Science, vol 12791. Springer, Cham.
        <OutboundLink
          target="_blank"
          href="https://doi.org/10.1007/978-3-030-78358-7_23"
        >
          [<span style={{ color: "blue" }}>Detail</span>]
        </OutboundLink>
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
      <Badge
        variant="solid"
        fontSize="1.5em"
        mb={2}
        pl={2}
        pr={2}
        borderRadius={5}
      >
        Contact
      </Badge>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {info.map((k, index) => (
          <Item item={k} key={index} />
        ))}
      </div>
    </ChakraProvider>
  );
};

const BlogIndex = ({ posts, type }) => {
  const [page, setPage] = useState(0);
  const [postInPage, setPostInPage] = useState([]);
  const limit = 5;
  const length = posts.length;
  const maxPage =
    length % limit === 0 ? length / limit - 1 : Math.floor(length / limit);
  const [disablePrevious, setDisablePrevious] = useState(page === 0);
  const [disableNext, setDisableNext] = useState(page === maxPage);
  useEffect(() => {
    if (type === "All") {
      setPostInPage(posts);
    } else {
      setPostInPage(posts.slice(limit * page, limit * (page + 1)));
    }
  }, [page, length, posts, type]);
  useEffect(() => {
    setDisablePrevious(page === 0);
    setDisableNext(page === maxPage);
  }, [page, maxPage]);
  const handlePrevious = () => {
    if (page !== 0) {
      setPage((v) => v - 1);
    }
  };
  const handleNext = () => {
    if (page < maxPage) {
      setPage((v) => v + 1);
    }
  };
  if (posts.length === 0) {
    return (
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    );
  }
  if (!postInPage) {
    return <Button colorScheme="blue" isLoading loadingText={"Loading"} />;
  }

  return (
    <ol style={{ listStyle: `none` }}>
      {postInPage.map((post) => {
        const title = post.frontmatter.title || post.fields.slug;
        // console.log(post);
        return (
          <li key={title}>
            <HStack display="flex" position="sticky" justify="space-between">
              <Box maxW="50vw">
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link
                        to={post.fields.slug}
                        itemProp="url"
                        style={{
                          color: colorTitle[post.frontmatter.type],
                        }}
                      >
                        <span itemProp="headline">{title}</span>{" "}
                        <Badge
                          p={1}
                          variant="solid"
                          // borderRadius="full"
                          colorScheme={colorScheme[post.frontmatter.type]}
                        >
                          {post.frontmatter.type}
                        </Badge>
                        <ViewCounter
                          path={post.fields.slug}
                          colorScheme={colorTitle[post.frontmatter.type]}
                          extraText=""
                          badge={false}
                        />
                      </Link>
                      <ThumbCounter
                        path={post.fields.slug}
                        colorScheme={colorScheme[post.frontmatter.type]}
                      />
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
              </Box>
              <Tooltip label={post.frontmatter.description}>
                <Box
                  maxW="30vw"
                  maxH="12vh"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <ProgressiveImage
                    src={post.frontmatter.cover}
                    // delay={3000}
                    placeholder="https://z3.ax1x.com/2021/07/30/WLqoN9.png"
                  >
                    {(src, loading) => (
                      <Image
                        src={src}
                        // fallbackSrc="https://z3.ax1x.com/2021/07/30/WLqoN9.png"
                        onLoad={(e) => {}}
                        style={{ opacity: loading ? 0.5 : 1 }}
                      />
                    )}
                  </ProgressiveImage>
                </Box>
              </Tooltip>
            </HStack>
            <Divider />
          </li>
        );
      })}
      {type !== "All" && (
        <HStack display="flex" p={2} position="sticky" justify="space-between">
          <Button
            colorScheme={colorScheme[type]}
            disabled={disablePrevious}
            onClick={handlePrevious}
            pl={10}
            pr={10}
          >
            Prev
          </Button>
          <Button
            colorScheme={colorScheme[type]}
            disabled={disableNext}
            onClick={handleNext}
            pl={10}
            pr={10}
          >
            Next
          </Button>
        </HStack>
      )}
    </ol>
  );
};

const colorScheme = {
  Life: "pink",
  Programming: "blue",
  Research: "green",
  About: "gray",
  All: "facebook",
};

const colorTitle = {
  Life: "#c54c8a",
  Programming: "#1377c4",
  Research: "#179660",
};

const top = {
  left: "90%",
  zIndex: 1,
  position: "fixed",
  padding: "1vw",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "black",
  borderRadius: "60%",
  color: "white",
  opacity: 0.5,
  overflow: "auto",
};
const Index = ({ data, location }) => {
  const [, setTabIndex] = useState(0);
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const postFilter = (dataStream, type) => {
    return dataStream.filter((post) => post.frontmatter.type === type);
  };
  return (
    <Layout location={location} title={siteTitle}>
      <div onClick={scrollToTop} style={top}>
        <BiArrowToTop />
      </div>
      <Seo title="寰宇泽" />
      <Bio />
      <ChakraProvider>
        <Tabs
          isFitted
          onChange={(index) => setTabIndex(index)}
          variant="solid-rounded"
        >
          <TabList
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Tab
              id="All"
              _selected={{ color: "white", bg: `${colorScheme.All}.500` }}
            >
              All
            </Tab>
            <Tab
              _selected={{ color: "white", bg: `${colorScheme.Life}.500` }}
              id="Life"
            >
              Life
            </Tab>
            <Tab
              _selected={{
                color: "white",
                bg: `${colorScheme.Programming}.500`,
              }}
              id="Programming"
            >
              Programming
            </Tab>
            <Tab
              _selected={{
                color: "white",
                bg: `${colorScheme.Research}.500`,
              }}
              id="Research"
            >
              Research
            </Tab>
            <Tab
              _selected={{ color: "white", bg: `${colorScheme.About}.500` }}
              id="About"
            >
              About
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BlogIndex posts={posts} type={"All"} />
            </TabPanel>
            <TabPanel>
              <BlogIndex posts={postFilter(posts, "Life")} type={"Life"} />
            </TabPanel>
            <TabPanel>
              <BlogIndex
                posts={postFilter(posts, "Programming")}
                type={"Programming"}
              />
            </TabPanel>
            <TabPanel>
              <HStack>
                {/* <Button
                  colorScheme="blue"
                  isLoading
                  loadingText={"Coming Soon"}
                /> */}
                <BlogIndex
                  posts={postFilter(posts, "Research")}
                  type={"Research"}
                />
              </HStack>
            </TabPanel>
            <TabPanel>
              <About />
            </TabPanel>
          </TabPanels>
        </Tabs>
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
          type
          cover
        }
      }
    }
  }
`;
