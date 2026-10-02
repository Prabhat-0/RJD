"use client"
import Image from 'next/image'
import React from 'react'
import logo from "../../public/logo.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { useState } from 'react';
import { BookIcon } from '@/svg';

const navItems = [
    { label: "Home", href: "/" },
    { label: "Hearing Aids", href: "/hearing-aids" },
    { label: "Services", href: "/services" },
    { label: "Shop", href: "/shop" },
    { label: "Fees", href: "/fees" },
    { label: "Audiology Expert", href: "/audiology-expert" },
    { label: "Our Location", href: "/our-location" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "About Us", href: "/about-us" },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Home needs an exact match, others match their section (e.g. /shop/item)
    const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        // Outer nav: full width, sticky, holds the background
        <nav className='sticky top-0 z-50 w-full h-26 bg-background font-sans shadow-sm'>

            {/* Inner container: centered, max 1440px */}
            <div className='mx-auto flex h-full w-full max-w-360 items-center justify-between gap-4 px-4 sm:px-8 lg:px-12 xl:gap-8'>

                {/** Logo */}
                <div className='shrink-0'>
                    <Image src={logo} alt="Logo" width={100} height={40} className='h-auto w-24 sm:w-28' />
                </div>

                {/** Desktop view */}
                <div className='hidden flex-1 lg:block'>
                    <ul className='flex items-center justify-between gap-2'>
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors hover:text-primary xl:text-base ${active ? "text-primary" : "text-foreground"}`}
                                    >
                                        {active && <span className="size-1.5 shrink-0 rounded-full bg-primary" />}
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/** Desktop CTA */}
                <div className='hidden shrink-0 items-center gap-3 lg:flex'>
                    <Link href="#" className='flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 lg:text-base'>
                        Book a Free Trial <BookIcon />
                    </Link>
                </div>

                {/** Hamburger (mobile and tablet only) */}
                <div
                    className='flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center text-primary lg:hidden'
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <FaX className='h-full w-full p-3' /> : <FaBars className='h-full w-full p-3' />}
                </div>
            </div>

            {/** Mobile view: top-26 matches the navbar height */}
            <div
                className={`fixed top-26 right-0 bottom-0 z-40 flex w-full flex-col bg-primary/95 text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-in-out sm:w-80 md:w-96 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className='flex-1 overflow-y-auto'>
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <li key={item.href} className='border-b border-white/20'>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className='flex items-center gap-2 px-6 py-4 text-base font-medium transition-all duration-200 hover:bg-white/10 hover:pl-8'
                                >
                                    {active && <span className="size-1.5 shrink-0 rounded-full bg-white" />}
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className='border-t border-white/20 p-6'>
                    <Link
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className='flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-primary transition hover:bg-white/90'
                    >
                        Book a Free Trial <BookIcon />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar