import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.theme.spacing.lg} 0;
  transition: background ${props => props.theme.transitions.normal};
`;

const Nav = styled.nav<{ $scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  background: ${props => props.$scrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  border-radius: ${props => props.$scrolled ? props.theme.borderRadius.lg : '0'};
  border: ${props => props.$scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  padding: ${props => props.$scrolled ? props.theme.spacing.md : props.theme.spacing.lg};
  transition: all ${props => props.theme.transitions.normal};
`;

const Logo = styled(Link)`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.gradient.primary};
    transition: width ${props => props.theme.transitions.normal};
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: ${props => props.theme.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: ${props => props.theme.colors.background.secondary};
    flex-direction: column;
    padding: ${props => props.theme.spacing['2xl']};
    gap: ${props => props.theme.spacing.lg};
    transition: right ${props => props.theme.transitions.normal};
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? props.theme.colors.primary[500] : props.theme.colors.text.secondary};
  text-decoration: none;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  font-size: ${props => props.theme.typography.fontSize.base};
  position: relative;
  transition: color ${props => props.theme.transitions.fast};

  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.primary[500]};
    transition: width ${props => props.theme.transitions.normal};
  }

  &:hover::before,
  &:hover {
    color: ${props => props.theme.colors.primary[500]};
    width: 100%;
  }

  ${props => props.$active && `
    color: ${props.theme.colors.primary[500]};
    &::before {
      width: 100%;
    }
  `}
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/Portfolio', label: 'Home' },
    { path: '/Portfolio#about', label: 'About' },
    { path: '/Portfolio#projects', label: 'Projects' },
    { path: '/Portfolio#skills', label: 'Skills' },
    { path: '/Portfolio#contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/Portfolio') {
      return location.pathname === '/Portfolio' || location.pathname === '/';
    }
    return location.hash === path.split('#')[1];
  };

  return (
    <>
      <HeaderContainer>
        <Nav $scrolled={scrolled}>
          <Logo to="/Portfolio">MK</Logo>
          <MenuButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
          <NavLinks $isOpen={isOpen}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  $active={isActive(item.path)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </NavLinks>
        </Nav>
      </HeaderContainer>
      <AnimatePresence>
        {isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
