import React from 'react'
import RJDFooter from "../../public/RJDFooter.png"
import ParaGraph from './ParaGraph';
import { FaMessage } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

const TeleIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="currentColor" />
        </svg>
    );
};

const services = [
    "Ear wax removal by MICRO SUCTION",
    "Remote Care",
    "Bluetooth and Hearing Aids",
    "Your Visit: What to expect",
    "ONLINE HEARING TEST",
    "Holistic Fitting Method",
    "Tinnitus",
    "Home Visits",
    "Gold+ Card",
];

const locations = [
    { id: 1, name: null, street: "1 Dewsbury Road", town: "Cleckheaton", county: "West Yorkshire", postcode: "BD19 3RS" },
    { id: 2, name: null, street: "152 High Street", town: "Northallerton", county: "North Yorkshire", postcode: "DL7 8JX" },
    { id: 3, name: null, street: "92 Main Street", town: "Fulford", county: "York", postcode: "YO10 4PS" },
    { id: 4, name: null, street: "4 West Gate", town: "Wetherby", county: null, postcode: "LS22 6LL" },
    { id: 5, name: null, street: "10 Finkle Street", town: "Richmond", county: null, postcode: "DL10 4QB" },
    { id: 6, name: null, street: "19 Market Hall", town: "Chesterfield", county: null, postcode: "S40 1AR" },
    { id: 7, name: null, street: "7 Lidget Hill", town: "Pudsey", county: null, postcode: "LS28 7LG" },
    { id: 8, name: "Oswaldtwistle Mills Conference Centre", street: "Pickup Street", town: "Oswaldtwistle", county: "East Lancs", postcode: "BB5 0EY" },
    { id: 9, name: null, street: "15 Castlegate", town: "Thirsk", county: null, postcode: "YO7 1HL" },
    { id: 10, name: null, street: "93 High Road", town: "Beeston", county: "Nottingham", postcode: "NG9 2LE" },
    { id: 11, name: null, street: "14 Laneham Street", town: "Scunthorpe", county: null, postcode: "DN15 6LJ" },
    { id: 12, name: "Vale Opticians", street: "1 High Street", town: "Boroughbridge", county: null, postcode: "YO51 9AW" },
    { id: 13, name: "Jarrod Headley Opticians", street: "21 Chapeltown", town: "Pudsey", county: null, postcode: "LS28 7RZ" },
    { id: 14, name: "Well North Physiotherapy & Wellbeing", street: "Unit 2 Phoenix Squash and Fitness Club", town: "Honley", county: null, postcode: "HD9 6PA" },
];

const quickLinks = ["Audiology Expert", "News", "Shop"];

const FooterHeading = ({ children }) => (
    <h3 className='mb-5 border-b border-white/20 pb-4 font-fraunces text-xl font-bold text-white lg:text-2xl'>{children}</h3>
);


const FooterLink = ({ children, href = "#" }) => (
    <Link
        href={href}
        className='flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white lg:text-base'
    >
        <span className='mt-[0.55em] size-1.5 shrink-0 rounded-full bg-current' />
        {children}
    </Link>
);

const Footer = () => {
    return (
        <footer id="footer" className='w-full bg-[#052F45]'>

            <div className='mx-auto grid w-full max-w-360 grid-cols-1 gap-10 px-4 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-12 lg:py-16'>

                <div className='flex flex-col gap-5'>
                    <Image src={RJDFooter} alt="RJD Hearing Care" width={98} height={60} className='h-auto w-24 sm:w-28' />

                    <ParaGraph
                        text="You will benefit from our incredibly successful ‘holistic fitting method’ developed by Robert Donnan. It’s a very simple, person-led approach to the fitting of hearing aids, structured around our free trial. No-one else offers a non-structured trial process with so much help offered to get you hearing better again."
                        textColor='text-white/70'
                        textSize='text-sm lg:text-base'
                    />

                    <div className='flex flex-col gap-4 border-t border-white/10 pt-4'>
                        <Link
                            href="tel:01274862623"
                            className="flex items-center gap-2 whitespace-nowrap text-[16px] font-semibold text-[#F2FAFF] transition-colors hover:text-primary"
                        >
                            <TeleIcon /> 01274 862623
                        </Link>
                        <Link
                            href="mailto:info@rjdhearingcare.co.uk"
                            className="flex items-center gap-2 break-all border-t border-white/10 pt-4 text-[16px] font-semibold text-[#F2FAFF] transition-colors hover:text-primary"
                        >
                            <FaMessage className='shrink-0' /> info@rjdhearingcare.co.uk
                        </Link>
                    </div>
                </div>

                <div>
                    <FooterHeading>Our Locations</FooterHeading>
                    <ul className='flex flex-col gap-3'>
                        {locations.map((loc) => (
                            <li key={loc.id} className='flex items-start gap-2 text-sm leading-relaxed text-white/70 lg:text-base text-[16px]'>
                                <span className='mt-[0.6em] size-1.5 shrink-0 rounded-full bg-current' />
                                <div>
                                    {loc.name && <span className='block font-medium text-white'>{loc.name}</span>}
                                    <span className='block'>
                                        {[loc.street, loc.town, loc.county].filter(Boolean).join(", ")}
                                    </span>
                                    <span className='block'>{loc.postcode}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <FooterHeading>Services</FooterHeading>
                    <ul className='flex flex-col gap-3'>
                        {services.map((item) => (
                            <li key={item}>
                                <FooterLink>{item}</FooterLink>
                            </li>
                        ))}
                    </ul>
                </div>


                <div>
                    <FooterHeading>Quick Links</FooterHeading>
                    <ul className='flex flex-col gap-3'>
                        {quickLinks.map((item) => (
                            <li key={item}>
                                <FooterLink>{item}</FooterLink>
                            </li>
                        ))}
                    </ul>
                </div>



            </div>


                <div className=' border-t border-white/10 mx-auto flex w-full max-w-360 flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-white/60 sm:px-8 md:flex-row md:text-left lg:px-12'>

                    <p>© {new Date().getFullYear()} RJD Hearing Care. All rights reserved.</p>

                    <Link
                        href="mailto:info@rjdhearingcare.co.uk"
                        className='flex items-center gap-2 break-all transition-colors hover:text-white'
                    >
                        <FaMessage className='shrink-0' /> info@rjdhearingcare.co.uk
                    </Link>
                </div>
            
        </footer>
    )
}

export default Footer