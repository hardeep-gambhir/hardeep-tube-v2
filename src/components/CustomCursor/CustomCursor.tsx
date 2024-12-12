// components/CustomCursor.tsx
'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface CursorProps {
  isHovering: boolean;
}

const CursorOuter = styled.div<CursorProps>`
  width: ${props => props.isHovering ? '45px' : '60px'};
  height: ${props => props.isHovering ? '45px' : '60px'};
  border: 1px solid ${props => props.theme.text};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  backdrop-filter: blur(4px);
  transition: width 0.3s, height 0.3s;
`

const CursorInner = styled.div<CursorProps>`
  width: ${props => props.isHovering ? '13px' : '11px'};
  height: ${props => props.isHovering ? '13px' : '11px'};
  background-color: ${props => props.theme.text};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: width 0.3s, height 0.3s;
`

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    const handleLinkHoverEnter = () => setIsHovering(true);
    const handleLinkHoverLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', moveCursor);
    
    // Wait for DOM to be ready
    const setupHoverListeners = () => {
      // Select both links and buttons
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      
      // Add cursor: none to all interactive elements
      interactiveElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.cursor = 'none';
        }
      });

      // Add hover listeners
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleLinkHoverEnter);
        element.addEventListener('mouseleave', handleLinkHoverLeave);
      });

      return interactiveElements;
    }

    // Initial setup
    const interactiveElements = setupHoverListeners();

    // Setup mutation observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        setupHoverListeners();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHoverEnter);
        element.removeEventListener('mouseleave', handleLinkHoverLeave);
      });
    }
  }, []);

  return (
    <>
      <CursorOuter 
        isHovering={isHovering} 
        className="cursor-outer"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <CursorInner 
        isHovering={isHovering} 
        className="cursor-inner"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  )
}
