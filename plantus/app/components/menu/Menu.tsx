'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import AnimatedHamburgerButton from '../AnimatedHamburgerButton';
import './menu.css';

const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Industry', href: '/industry' },
  { name: 'About', href: '/about' },
  { name: 'Our-Works', href: '/our-works' },
  { name: 'Contact', href: '/contact' },
];

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    if (isOpen) {
      document.body.classList.remove('menu-open');
    } else {
      document.body.classList.add('menu-open');
    }
    setIsOpen(!isOpen);
  };

  // Close menu with ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) toggleMenu();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Remove body lock on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  // GSAP Animation Setup
  useEffect(() => {
    if (!container.current) return;

    const q = gsap.utils.selector(container);
    const closed = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
    const open = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

    gsap.set(q('.menu-link-item-holder'), { y: 75, opacity: 0 });
    gsap.set(q('.menu-overlay'), { clipPath: closed, pointerEvents: 'none' });

    tl.current = gsap
      .timeline({ paused: true })
      .to(q('.menu-overlay'), {
        clipPath: open,
        duration: 1,
        ease: 'power4.inOut',
        pointerEvents: 'auto',
      })
      .to(
        q('.menu-link-item-holder'),
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power4.out',
        },
        '<0.25'
      );

    tl.current.eventCallback('onReverseComplete', () => {
      gsap.set(q('.menu-overlay'), { pointerEvents: 'none' });
    });
  }, []);

  // Play or reverse timeline
  useEffect(() => {
    const timeline = tl.current;
    if (!timeline) return;

    if (isOpen) {
      gsap.set('.menu-overlay', { pointerEvents: 'auto' });
      const firstLink = overlayRef.current?.querySelector<HTMLElement>(
        '.menu-link-item-holder a'
      );
      firstLink?.focus();
      timeline.play();
    } else {
      timeline.reverse();
    }
  }, [isOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* Top bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="PlantusMedia Logo"
              width={110}
              height={40}
              priority
            />
          </Link>
        </div>
        <div
          className="menu-open"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) =>
            (e.key === 'Enter' || e.key === ' ') && toggleMenu()
          }
        >
          <AnimatedHamburgerButton 
            active={isOpen}
            onClick={toggleMenu}
            className="h-12 w-12"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="menu-overlay" ref={overlayRef}>
        {/* Top Bar in overlay */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="PlantusMedia Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>
          <div
            className="menu-close"
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && toggleMenu()
            }
          >
            <AnimatedHamburgerButton 
              active={isOpen}
              onClick={toggleMenu}
              className="h-12 w-12"
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="menu-links">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <Link 
                  href={link.href} 
                  className="menu-link"
                >
                  {link.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
