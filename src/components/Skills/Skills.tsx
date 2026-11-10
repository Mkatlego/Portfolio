import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = styled.section`
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing['2xl']};

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SkillCategoryCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: ${props => props.theme.spacing['2xl']};
`;

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const SkillItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const SkillName = styled.span`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

const SkillPercentage = styled.span`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.primary[500]};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)<{ $color: string }>`
  height: 100%;
  background: ${props => props.$color};
  border-radius: ${props => props.theme.borderRadius.full};
  box-shadow: 0 0 10px ${props => props.$color};
`;

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryData {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillCategories: SkillCategoryData[] = [
    {
      title: 'Frontend Development',
      icon: '⚛️',
      color: '#00b8ff',
      skills: [
        { name: 'React 19', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vite', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Shadcn/ui', level: 85 },
        { name: 'Styled Components', level: 88 },
        { name: 'Framer Motion', level: 82 },
      ],
    },
    {
      title: 'Backend Development',
      icon: '🔧',
      color: '#9d00ff',
      skills: [
        { name: 'Supabase', level: 90 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'REST APIs', level: 88 },
        { name: 'Real-time Subscriptions', level: 85 },
        { name: 'Authentication', level: 88 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      color: '#ff0069',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Vercel', level: 92 },
        { name: 'CI/CD', level: 80 },
        { name: 'Performance Optimization', level: 85 },
        { name: 'Code Splitting', level: 88 },
      ],
    },
    {
      title: 'Design & Accessibility',
      icon: '🎨',
      color: '#00b8ff',
      skills: [
        { name: 'WCAG Compliance', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'SEO Optimization', level: 82 },
        { name: 'Problem Solving', level: 92 },
      ],
    },
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </SectionTitle>
        <SkillsGrid
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategoryCard key={categoryIndex} variants={itemVariants}>
              <CategoryTitle>
                <span>{category.icon}</span>
                {category.title}
              </CategoryTitle>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillHeader>
                    <SkillName>{skill.name}</SkillName>
                    <SkillPercentage>{skill.level}%</SkillPercentage>
                  </SkillHeader>
                  <ProgressBar>
                    <ProgressFill
                      $color={category.color}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        ease: 'easeOut',
                      }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillCategoryCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
