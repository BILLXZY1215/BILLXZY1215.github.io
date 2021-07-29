import * as React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import ViewCounter from "./lib/ViewCounter";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <OutboundLink href="https://www.gatsbyjs.com" style={{ color: "blue" }}>
          Gatsby
        </OutboundLink>
        <ViewCounter
          path="/"
          colorScheme="blue"
          extraText="In This Site"
          badge={true}
        />
      </footer>
    </div>
  );
};

export default Layout;
