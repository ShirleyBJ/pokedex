import { useRouteError, Link } from "react-router-dom";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { purple } from '@mui/material/colors';

export default function ErrorPage() {
  const error = useRouteError();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  return (
    <Container id="error-page">
      <h1 style={{ fontSize: '100px'}}>Oops!</h1>
      <p style={{ fontSize: '50px'}}>Sorry, an unexpected error has occurred.</p>
      <p style={{ fontSize: '25px'}}>
        <span >Your error message : "{error.statusText || error.message}"</span>
      </p>

        <Link to="/" style={{textDecoration: 'none'}}>
        <ColorButton variant="contained">Back to home </ColorButton>
        </Link>
      
    </Container>
  );
}
