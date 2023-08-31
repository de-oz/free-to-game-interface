import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from '@mui/material/Container';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Container
          sx={{ mt: 5, mb: { xs: 10, sm: 15, md: 20 } }}
          component="main"
          maxWidth="xl">
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
