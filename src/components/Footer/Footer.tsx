import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.background.secondary};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.lg};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.text.tertiary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.background.glass};
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.lg};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.primary[500]};
    border-color: ${props => props.theme.colors.primary[500]};
    color: ${props => props.theme.colors.background.primary};
    transform: translateY(-2px);
  }
`;

const ScrollToTop = styled(motion.button)`
  position: absolute;
  bottom: ${props => props.theme.spacing.xl};
  right: ${props => props.theme.spacing.xl};
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.gradient.primary};
  border: none;
  color: ${props => props.theme.colors.background.primary};
  font-size: ${props => props.theme.typography.fontSize.xl};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.glow};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    bottom: ${props => props.theme.spacing.md};
    right: ${props => props.theme.spacing.md};
  }
`;

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <Copyright>
            © {new Date().getFullYear()} Mooketsi Katlego. All rights reserved.
          </Copyright>
          <SocialLinks>
            <SocialLink
              href="https://github.com/Mkatlego"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/mooketsi-katlego"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:khupemooketsi@gmail.com"
              aria-label="Email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
            </SocialLink>
          </SocialLinks>
        </FooterContent>
      </Container>
      <ScrollToTop
        onClick={scrollToTop}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FiArrowUp />
      </ScrollToTop>
    </FooterContainer>
  );
};

export default Footer;
