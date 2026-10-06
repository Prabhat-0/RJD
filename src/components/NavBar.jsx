"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "../../public/_.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa6';
import { FaX } from 'react-icons/fa6';
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

    // Lock page scroll while the mobile menu is open, close it on Escape
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        const onKey = (e) => e.key === "Escape" && setIsOpen(false);
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [isOpen]);

    return (
        <nav className='fixed top-0 z-50 h-20 w-full bg-background font-sans md:h-27.5'>

            {/* Inner container: centered, max 1440px, padded on every screen size */}
            <div className='mx-auto flex h-full w-full max-w-[1250px] 2xl:max-w-360 items-center justify-between gap-5 px-4 lg:px-8 sm:px-8 min-[1400px]:gap-7.5 xl:px-0'>

                {/** Logo */}
                <Link href="/" className='h-17.5 w-28.5 shrink-0' aria-label="Home">
                    <Image src={logo} alt="Logo" width={114} height={70} quality={[75,90]} priority className='h-auto w-28.5 object-cover' />
                </Link>

                {/** Desktop view: 18px from 1400px, 16px between 1280 and 1399px so all links fit */}
                <div className='hidden flex-1 xl:block'>
                    <ul className='flex items-center justify-around gap-4 min-[1400px]:gap-5'>
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`flex items-center gap-2 whitespace-nowrap font-sans text-base font-medium transition-colors hover:text-primary min-[1400px]:text-lg ${active ? "text-primary opacity-100" : "text-foreground opacity-70"}`}
                                    >
                                        {active && <span className="size-2.5 shrink-0 rounded-full bg-primary" />}
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/** Desktop CTA */}
                <div className='hidden shrink-0 items-center xl:flex'>
                    <Link href="#" className='flex items-center gap-3 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-[18px] font-medium text-white transition hover:opacity-90 min-[1400px]:gap-5 min-[1400px]:px-6 min-[1400px]:py-4'>
                        Book a Free Trial <BookIcon />
                    </Link>
                </div>

                {/** Hamburger*/}
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className='flex size-12 shrink-0 cursor-pointer items-center justify-center text-primary xl:hidden'
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <FaX className='size-10' /> : <FaBars className='size-10' />}
                </button>
            </div>

            {/** Backdrop: tap outside the menu to close */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-x-0 bottom-0 top-20 z-30 bg-black/40 transition-opacity duration-300 md:top-27.5 xl:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />

            {/** Mobile view: top matches the navbar height at each breakpoint */}
            <div
                className={`fixed bottom-0 right-0 top-20 z-40 flex w-full flex-col bg-primary/95 text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-in-out sm:w-80 md:top-27.5 md:w-96 xl:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className='flex-1 overflow-y-auto'>
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <li key={item.href} className='border-b border-white/20'>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    aria-current={active ? "page" : undefined}
                                    className={`flex items-center gap-2 px-6 py-4 text-lg font-medium transition-all duration-200 hover:bg-white/10 hover:pl-8 hover:opacity-100 ${active ? "opacity-100" : "opacity-70"}`}
                                >
                                    {active && <span className="size-2.5 shrink-0 rounded-full bg-white" />}
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
                        className='flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-medium text-primary transition hover:bg-white/90'
                    >
                        Book a Free Trial <BookIcon />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar