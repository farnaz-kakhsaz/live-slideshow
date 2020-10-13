import React from "react";
import PropTypes from "prop-types";
// Material-UI
import Container from "@material-ui/core/Container";

export default function ContainerBase({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ContainerBase.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
