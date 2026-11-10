import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ScrollToTop } from './utils/scrollToTop';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Background />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/Portfolio" element={
            <>
              <Home />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="/" element={<Navigate to="/Portfolio" replace />} />
          <Route path="*" element={<Navigate to="/Portfolio" replace />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
