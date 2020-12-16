import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px auto;
  width: 300px;
  padding: 10px;
  border: 2px solid #000;
  text-align: center;
`;

class Panel extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Panel;
