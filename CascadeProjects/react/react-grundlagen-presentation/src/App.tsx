import { useState } from 'react';
import { Box, Button, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

import IntroSlide from './slides/IntroSlide';
import ComponentsSlide from './slides/ComponentsSlide';
import HooksSlide from './slides/HooksSlide';
import PropsStateSlide from './slides/PropsStateSlide';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [IntroSlide, ComponentsSlide, PropsStateSlide, HooksSlide];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ minHeight: '100vh', py: 4 }}>
          <AnimatePresence mode="wait">
            <CurrentSlideComponent />
          </AnimatePresence>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button 
              variant="contained" 
              onClick={previousSlide}
              disabled={currentSlide === 0}
            >
              Zurück
            </Button>
            <Button 
              variant="contained" 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              Weiter
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
