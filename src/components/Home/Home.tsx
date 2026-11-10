import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.lg};
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Greeting = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.primary[500]};
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

const Name = styled(motion.h1)`
  font-size: clamp(${props => props.theme.typography.fontSize['4xl']}, 8vw, ${props => props.theme.typography.fontSize['6xl']});
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  cursor: default;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    pointer-events: none;
  }

  &::before {
    animation: glitch-1 2s infinite linear alternate-reverse;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  }

  &::after {
    animation: glitch-2 3s infinite linear alternate-reverse;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  }

  @keyframes glitch-1 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }

  @keyframes glitch-2 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(2px, -2px); }
    40% { transform: translate(2px, 2px); }
    60% { transform: translate(-2px, -2px); }
    80% { transform: translate(2px, 2px); }
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(${props => props.theme.typography.fontSize['2xl']}, 4vw, ${props => props.theme.typography.fontSize['4xl']});
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing.xl};
  font-weight: ${props => props.theme.typography.fontWeight.normal};
`;

const Description = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.text.tertiary};
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing['2xl']};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.background.glass};
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.xl};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    background: ${props => props.theme.colors.primary[500]};
    border-color: ${props => props.theme.colors.primary[500]};
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.gradient.primary};
  color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-size: ${props => props.theme.typography.fontSize.base};
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left ${props => props.theme.transitions.slow};
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${props => props.theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text.tertiary};
  font-size: ${props => props.theme.typography.fontSize.sm};
`;

const ScrollIcon = styled(motion.div)`
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
`;

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Greeting variants={itemVariants}>Hello, I'm</Greeting>
          <Name
            variants={itemVariants}
            data-text="Mooketsi Katlego"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            Mooketsi Katlego
          </Name>
          <Title variants={itemVariants}>
            Full Stack Developer | React, TypeScript, Supabase
          </Title>
          <Description variants={itemVariants}>
            I build modern web applications with React 19, TypeScript, and Supabase.
            Specialized in accessible, performant, and user-friendly digital experiences.
            Currently working on innovative solutions for e-commerce and booking platforms.
          </Description>
          <SocialLinks variants={itemVariants}>
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
          <motion.div variants={itemVariants}>
            <CTAButton
              href="#projects"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              View My Work
              <FiArrowDown />
            </CTAButton>
          </motion.div>
        </motion.div>
      </HeroContent>
      <ScrollIndicator>
        <span>Scroll to explore</span>
        <ScrollIcon>
          <FiArrowDown />
        </ScrollIcon>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Home;
