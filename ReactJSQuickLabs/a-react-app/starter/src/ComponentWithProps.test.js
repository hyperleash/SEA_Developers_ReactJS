import React from "react";
import ComponentWithProps from "./ComponentWithProps";
import { create } from "react-test-renderer";

test("it should render the correct heading from props when a header prop is supplied", () => {
  const testHeader = "Hello";
  const testRenderer = create(<ComponentWithProps header={testHeader} />);
  const testInstance = testRenderer.root;
  const testInstanceH1 = testInstance.findAllByType("h1");
  expect(testInstanceH1[0].children).toContain(testHeader);
});

test("it should rendered the correct content from props when a content prop is supplied", () => {
  const testContent = "ByeBye";
  const testRenderer = create(<ComponentWithProps content={testContent} />);
  const testInstance = testRenderer.root;
  const renderedParagraph = testInstance.findAllByType("p");
  expect(renderedParagraph[0].children).toContain(testContent);
});

test("it should rendered the correct number from props when a number prop is supplied", () => {
  const testNumber = 42;
  const testRenderer = create(<ComponentWithProps number={testNumber} />);
  const testInstance = testRenderer.root;
  const renderedParagraphs = testInstance.findAllByType("p");
  expect(renderedParagraphs[1].children).toContain(testNumber.toString());
});
