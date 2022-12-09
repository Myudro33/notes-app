import * as React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        Note App With React + TypeScript
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}


