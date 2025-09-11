'use client';
import React from "react";
import './menu.css';
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);

const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industry", href: "/industry" },
    { name: "About", href: "/about" },
    { name: "Our Works", href: "/our-works" },
    { name: "Contact", href: "/contact" }
];

const Menu = () => {

    const container = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const tl = useRef();


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //GSAP Hook

    useGSAP(() => {
        const q = gsap.utils.selector(container);
        const closed = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
        const open = "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)";

        gsap.set(q(".menu-link-item-holder"), { y: 75 });
        gsap.set(q(".menu-overlay"), { clipPath: closed });

        tl.current = gsap
            .timeline({ paused: true })
            .fromTo(
                q(".menu-overlay"),
                { clipPath: closed },
                { clipPath: open, duration: 1.0, ease: "power4.inOut" }
            )
            .to(q(".menu-link-item-holder"), {
                y: 0,
                duration: 0.9,
                stagger: 0.08,
                ease: "power4.out",
            }, "<0.25");
    }, { scope: container });

    useEffect(() => {
        if (!tl.current) return;
        if (isOpen) {
            gsap.set(".menu-overlay", { pointerEvents: "auto" });
            tl.current.play();
        } else {
            tl.current.eventCallback("onReverseComplete", () => {
                gsap.set(".menu-overlay", { pointerEvents: "none" });
                tl.current.eventCallback("onReverseComplete", null);
            });
            tl.current.reverse();
        }

    }, [isOpen])
    return (
        <div className="menu-container" ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href="/">PlantusMedia </Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>

            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Link href="/">PlantusMEdia</Link>
                    </div>
                    <div className="menu-close" onClick={toggleMenu}>
                        <p>Close</p>
                    </div>
                </div>
                <div className="menu-close-icon">
                    <p>&#x2715;</p>
                </div>
                <div className="menu-copy"></div>
                <div className="menu-links">
                    {menuLinks.map((link, index) => (
                        <div className="menu-link-item" key={index}>
                            <div className="menu-link-item-holder" onClick={toggleMenu}>
                                <Link href={link.href} className="menu-link">{link.name}</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="menu-info"></div>
                <div className="menu-info-col">
                    <a href="#">X &#8599;</a>
                    <a href="#">Instagram &#8599;</a>
                    <a href="#">LinkedIn &#8599;</a>
                    <a href="#">Behnace &#8599;</a>
                    <a href="#">Dribble &#8599;</a>
                </div>
                <div className="menu-info-col">
                    <p>info@plantusmedia.com</p>
                    <p>123456778</p>
                </div>
                
                <div className="menu-preview">
                    <p>View Showreel</p>
                </div>
            </div>
        </div>
    )
}


export default Menu;