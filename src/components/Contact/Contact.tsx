import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = styled.section`
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
  max-width: 800px;
  margin: 0 auto;
`;

const ContactForm = styled(motion.form)`
  background: ${props => props.theme.colors.background.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: ${props => props.theme.spacing['2xl']};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.tertiary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.base};
  transition: all ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px rgba(0, 184, 255, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.tertiary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: all ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px rgba(0, 184, 255, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const SubmitButton = styled(motion.button)<{ $disabled: boolean }>`
  width: 100%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.gradient.primary};
  color: ${props => props.theme.colors.background.primary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
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
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: ${props => props.theme.spacing.md};
  background: rgba(0, 184, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.primary[500]};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.primary[500]};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ContactInfo = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing['2xl']};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.glassHover};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const ContactCardIcon = styled.div`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ContactCardText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin: 0;
`;

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [state, handleSubmit] = useForm('mjkrldyl');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    if (!state.submitting) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionTitle initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          Get In Touch
        </SectionTitle>
        <ContactInfo variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <ContactCard variants={itemVariants}>
            <ContactCardIcon>📧</ContactCardIcon>
            <ContactCardText>khupemooketsi@gmail.com</ContactCardText>
          </ContactCard>
          <ContactCard variants={itemVariants}>
            <ContactCardIcon>📍</ContactCardIcon>
            <ContactCardText>Botswana</ContactCardText>
          </ContactCard>
          <ContactCard variants={itemVariants}>
            <ContactCardIcon>💼</ContactCardIcon>
            <ContactCardText>Open to opportunities</ContactCardText>
          </ContactCard>
        </ContactInfo>
        <ContactForm variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} onSubmit={onSubmit}>
          {state.succeeded && (
            <SuccessMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              Thanks for reaching out! I'll get back to you soon.
            </SuccessMessage>
          )}
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
            <ValidationError prefix="Name" errors={state.errors} field="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
            <ValidationError prefix="Email" errors={state.errors} field="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required />
            <ValidationError prefix="Message" errors={state.errors} field="message" />
          </FormGroup>
          <SubmitButton type="submit" disabled={state.submitting} $disabled={state.submitting} whileHover={{ scale: state.submitting ? 1 : 1.02 }} whileTap={{ scale: state.submitting ? 1 : 0.98 }}>
            {state.submitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;
