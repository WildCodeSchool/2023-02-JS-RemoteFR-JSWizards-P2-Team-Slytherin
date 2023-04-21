import PropTypes from "prop-types";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="layout grid min-h-screen grid-rows-[auto_1fr]">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
