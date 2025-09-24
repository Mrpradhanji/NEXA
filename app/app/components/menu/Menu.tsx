'use client';
import React, { useState, useRef, useEffect } from 'react';
import './menu.css';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Industry', href: '/industry' },
  { name: 'Blogs', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Our Works', href: '/our-works' },
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
  }, [isOpen, toggleMenu]);

  // Remove body lock on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  useGSAP(
    () => {
      const q = gsap.utils.selector(container);
      const closed = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
      const open = 'polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)';

      gsap.set(q('.menu-link-item-holder'), { y: 75, opacity: 0 });
      gsap.set(q('.menu-info, .menu-preview'), { y: 30, opacity: 0 });
      gsap.set(q('.menu-overlay'), { clipPath: closed });

      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          q('.menu-overlay'),
          { clipPath: closed },
          { clipPath: open, duration: 1, ease: 'power4.inOut' }
        )
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
        )
        .to(
          q('.menu-info, .menu-preview'),
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );

      // pointer-events reset after reverse
      tl.current.eventCallback('onReverseComplete', () => {
        gsap.set(q('.menu-overlay'), { pointerEvents: 'none' });
      });
    },
    { scope: container }
  );

  useEffect(() => {
    const timeline = tl.current;
    if (!timeline) return;

    if (isOpen) {
      gsap.set('.menu-overlay', { pointerEvents: 'auto' });

      // Focus trap: focus first link
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
          <Link href="/">PLANTUSMEDIA</Link>
        </div>
        <div
          className="menu-open"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
        >
          <p>Menu</p>
        </div>
      </div>

      {/* Overlay */}
      <div className="menu-overlay" ref={overlayRef}>
        {/* Top Bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">PLANTUSMEDIA</Link>
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
            <p>Close</p>
          </div>
        </div>

        {/* Links Section (centered) */}
        <div className="menu-links">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <Link href={link.href} className="menu-link">
                  {link.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info & Social Section */}
        <div className="menu-info">
          <div className="menu-info-col">
            <p>
              <a href="mailto:hello@plantusmedia.com">
                hello@plantusmedia.com
              </a>
            </p>
            <p>
              <a href="tel:+441204669566">+44 (0)1204 669566</a>
            </p>
          </div>
          <div className="menu-info-col social-row">
            <a
              href="https://linkedin.com/company/plantusmedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://instagram.com/plantusmedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://youtube.com/@plantusmedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube ↗
            </a>
            <a
              href="https://behance.net/plantusmedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance ↗
            </a>
            <a
              href="https://dribbble.com/plantusmedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble ↗
            </a>
          </div>
        </div>

        {/* Preview */}
        <div className="menu-preview">
          <Link href="/our-works">
            <p>View Showreel</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
