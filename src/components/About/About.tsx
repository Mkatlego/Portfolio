import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayers, FiZap, FiUsers } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.lg};
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(${props => props.theme.typography.fontSize['3xl']}, 5vw, ${props => props.theme.typography.fontSize['5xl']});
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['2xl']};
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing['2xl']};

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: ${props => props.theme.spacing['2xl']};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.gradient.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${props => props.theme.transitions.normal};
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    border-color: rgba(0, 184, 255, 0.3);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius.lg};
  background: ${props => props.theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  color: ${props => props.theme.colors.background.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const CardTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text.primary};
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const TechTag = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.glassHover};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.primary[500]};
    border-color: ${props => props.theme.colors.primary[500]};
    color: ${props => props.theme.colors.background.primary};
  }
`;

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const aboutCards = [
    {
      icon: <FiCode />,
      title: 'Full Stack Development',
      description: 'I build robust, scalable applications using modern technologies. From backend APIs to beautiful frontend interfaces, I handle the entire development lifecycle with precision and care.',
      tech: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'],
    },
    {
      icon: <FiLayers />,
      title: 'UI/UX Design',
      description: 'I create intuitive and visually stunning interfaces that delight users. My design philosophy centers on accessibility, performance, and creating seamless user experiences.',
      tech: ['Figma', 'Styled Components', 'Tailwind', 'Framer Motion'],
    },
    {
      icon: <FiZap />,
      title: 'Performance Optimization',
      description: 'I obsess over performance metrics. From bundle size optimization to efficient data fetching, I ensure applications load fast and run smoothly across all devices.',
      tech: ['Webpack', 'Vite', 'React Query', 'Next.js'],
    },
    {
      icon: <FiUsers />,
      title: 'Collaboration',
      description: 'I thrive in team environments and believe in knowledge sharing. I contribute to open source, participate in code reviews, and mentor junior developers.',
      tech: ['Git', 'Agile', 'CI/CD', 'Documentation'],
    },
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        <AboutGrid
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {aboutCards.map((card, index) => (
            <AboutCard
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <CardIcon>{card.icon}</CardIcon>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <TechStack>
                {card.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </AboutCard>
          ))}
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
