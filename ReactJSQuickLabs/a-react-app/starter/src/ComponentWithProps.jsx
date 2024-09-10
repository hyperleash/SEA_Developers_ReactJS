import React from "react";
import PropTypes from "prop-types";

function ComponentWithProps({ header, content, number, nonexistent }) {
  return (
    <>
      <h1>{header}</h1>
      <p>{content}</p>
      <p>This is a number from props: {number}</p>
      <p>This is a display of a prop that doesn't exist: {nonexistent}</p>
    </>
  );
}

ComponentWithProps.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

ComponentWithProps.defaultProps = {
  header: "Header from defaults",
  content: "Content from defaults",
  number: 100,
};

export default ComponentWithProps;
