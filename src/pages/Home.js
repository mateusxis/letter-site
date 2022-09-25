import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import HeaderBar from "../components/HeaderBar";
import Copyright from "../components/Copyright";
import LetterCard from "../components/LetterCard";

const color = grey[200];
const style = {
  my: { xs: 3, md: 6 },
  p: { xs: 2, md: 3 },
  backgroundColor: color,
};

const theme = createTheme();

export default function Home({ letters }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderBar />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={style}>
          <Typography component="h1" variant="h4" align="center">
            Users
          </Typography>
          <React.Fragment>
            {letters?.map((letter) => {
              return <LetterCard key={`letter-${letter.id}`} {...letter} />;
            })}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
