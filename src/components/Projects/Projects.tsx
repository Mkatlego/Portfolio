import React from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing['2xl']};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  background: ${props => props.theme.colors.background.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius['2xl']};
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const ProjectImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 200px;
  background: ${props => props.$image ? `url(${props.$image})` : props.theme.colors.gradient.secondary};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, ${props => props.theme.colors.background.primary} 100%);
  }
`;

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text.primary};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin-bottom: ${props => props.theme.spacing.lg};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TechBadge = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.background.glassHover};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.text.tertiary};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.glassHover};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.primary[500]};
    border-color: ${props => props.theme.colors.primary[500]};
    color: ${props => props.theme.colors.background.primary};
  }
`;

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard3D: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ProjectCard
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      <ProjectImage $image={project.image || ''} />
      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectTech>
          {project.tech.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </ProjectTech>
        <ProjectLinks>
          {project.liveUrl && (
            <ProjectLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink />
              Live Demo
            </ProjectLink>
          )}
          {project.githubUrl && (
            <ProjectLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
              Code
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectContent>
    </ProjectCard>
  );
};

const Projects: React.FC = () => {
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

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mkatlego',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['TypeScript', 'Next.js', 'Prisma', 'Socket.io', 'Tailwind'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mkatlego',
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant powered by machine learning, capable of understanding context and providing personalized responses.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'WebSocket'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mkatlego',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mkatlego',
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics platform for tracking social media performance, engagement metrics, and audience insights.',
      tech: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB', 'GraphQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mkatlego',
    },
    {
      title: 'Portfolio Generator',
      description: 'A tool for developers to generate professional portfolio websites with customizable templates and easy deployment.',
      tech: ['Next.js', 'Tailwind', 'Vercel', 'GitHub API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Mkatlego',
    },
  ];

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </SectionTitle>
        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <ProjectCard3D key={index} project={project} index={index} />
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
