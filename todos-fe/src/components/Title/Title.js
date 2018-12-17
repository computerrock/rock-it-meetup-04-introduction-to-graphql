import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Title.css";

const Title = props => {
  const {children, align} = props;
  const className = classNames("Title", {
    "Title--left": align === "left",
    "Title--center": align === "center",
    "Title--right": align === "right"
  });

  return <h1 className={className}>{children}</h1>;
};

Title.defaultProps = {
  align: "left"
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"])
};

export default Title;
