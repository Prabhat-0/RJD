"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "../../public/_.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa6';
import { FaX } from 'react-icons/fa6';
import { BookIcon } from '@/svg';
import BookFreeTrialButton from './BookFreeTrialButton';

const navItems = [
    { label: "Home", href: "/" },
    { label: "Hearing Aids", href: "#HearingAids" },
    { label: "Services", href: "/#Services" },
    { label: "Shop", href: "/#HearingAids" },
    { label: "Fees", href: "/#HomeVisits" },
    { label: "Audiology Expert", href: "/#featured-section" },
    { label: "Our Location", href: "/#locations" },
    { label: "Contact Us", href: "/contactUs" },
    { label: "About Us", href: "/#TeamsVisit" },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Home needs an exact match, others match their section
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

        <nav className='fixed top-0 z-50 py-1 md:py-5 w-full bg-background font-sans shadow-md shadow-black/5 '>

            {/* Inner container */}
            <div className='relative mx-auto flex h-full w-full max-w-[1250px] items-center justify-between gap-5 px-4 sm:px-8 xl:px-0 min-[1400px]:gap-7.5 2xl:max-w-360 2xl:px-0'>

                {/** Logo */}
                <Link href="/" className='shrink-0 transition-all size-14 sm:size-16 md:size-20 lg:w-28.5 lg:h-17.5 grid place-items-center' aria-label="Home">
                    <Image src={logo} alt="Logo" width={114} height={70} quality={75} priority className='h-auto w-24 object-contain sm:w-28.5' />
                </Link>

                {/** Desktop view */}
                <div className='hidden flex-1 xl:block'>
                    <ul className='flex items-center justify-around gap-4'>
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`flex items-center gap-2 whitespace-nowrap font-sans text-base font-medium transition-colors hover:text-primary test-sm lg:text-[16px] 2xl:text-lg ${active ? "text-primary opacity-100" : "text-foreground opacity-70"}`}
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
                <div className='hidden shrink-0 items-center md:flex md:flex-10 xl:flex-0 md:flex-row-reverse '>
                        <BookFreeTrialButton text='Book a Free Trial' icon={<BookIcon />} textColor='text-white' background='bg-primary flex-row-reverse gap-2 transition' padding='px-6' hoverBg='bg-primary' hoverText='text-white/90'/>
                </div>

                {/** Hamburger */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className='flex size-11 shrink-0 cursor-pointer items-center justify-center text-primary xl:hidden'
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <FaX className='size-5 sm:size-6' /> : <FaBars className='size-6 sm:size-7' />}
                </button>
            </div>

            {/** Backdrop*/}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-x-0 bottom-0 top-(--nav-h) z-30 bg-black/40 transition-opacity duration-300 xl:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />

            {/** Mobile view */}
            <div
                className={`fixed bottom-0 right-0 top-(--nav-h) z-40 flex w-full flex-col bg-transparent text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-in-out sm:w-80 md:w-96 xl:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className='flex-1 overflow-y-auto'>
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <li key={item.href} className='border-b border-white/20 '>
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