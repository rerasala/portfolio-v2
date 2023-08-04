'use client'

import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('your-component-id');
    if (element) {
      const { top } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setIsVisible(top < windowHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CSSTransition
      in={isVisible}
      timeout={500} // Adjust the fade-in duration as desired
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeInOnScroll;