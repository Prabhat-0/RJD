"use client"

const mobileNo = "44XXXXXXXXXX"; // country code ke saath, bina + ya spaces ke
const text = "Hey, I have an query";

const whatsappUrl = `https://wa.me/${mobileNo}?text=${encodeURIComponent(text)}`;

import BookFreeTrialButton from "@/components/BookFreeTrialButton";
import vector from "../../public/Frame 68.png";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/heroImage.png";
import ParaGraph from "@/components/ParaGraph";
import HeaderPara from "@/components/HeaderPara";
import { HolisticHearingMethod, HomeVisit, IndependentAdvice, LifeTimeSupport, MusicianSpecialist, RemoteCare, WhatsAppIcon } from "@/svg";
import { FaArrowRight, FaCheck, FaPlus } from "react-icons/fa";
import MainHeader from "@/components/MainHeader";
import JourneyFrame from "../../public/journeyFrame.png"
import JourneyImage from "../../public/journeyImage.png"
import FeaturedServices from "../../public/featuredServices.png"
import HearingAids from "../../public/hearingAids.png"
import EarWaxRemoval from "../../public/earWaxRemoval.svg";
import HearingTest from "../../public/hearingTests.svg";
import TittinusSupport from "../../public/tittinusSupport.svg"
import EarProtection from "../../public/earProtection.svg"
import BookSvg from "../../public/book.svg";
import AdjustementSvg from "../../public/adjustement.svg";
import AssessmentSvg from "../../public/assessment.svg";
import FreeTrial from "../../public/freeTrial.svg";
import LifeTimeCare from "../../public/lifetimeCare.svg";
import PerfectFit from "../../public/perfectFit.svg";
import ServicesBg from "../../public/servicesBg.png"
import Oticon from "../../public/Oticon.png";
import Phonak from "../../public/Phonak.png";
import Widex from "../../public/Widex.png";
import HomeVisitJpg from "../../public/HomeVisit.jpg";
import TeamsImage from "../../public/teamsImage.png"
import DoubleQuote from "../../public/DoubleQuote.png";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

/* ======================================= */
/* Framer Motion helpers (inline)          */
/* ======================================= */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
	hidden: { opacity: 0, y: 32 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const fadeLeft = {
	hidden: { opacity: 0, x: -48 },
	show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const fadeRight = {
	hidden: { opacity: 0, x: 48 },
	show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } },
};

const viewport = { once: true, amount: 0.2 };

// Single element that reveals on scroll
function Reveal({ children, variants = fadeUp, className, delay = 0 }) {
	return (
		<motion.div
			className={className}
			variants={variants}
			initial="hidden"
			whileInView="show"
			viewport={viewport}
			transition={{ delay }}
		>
			{children}
		</motion.div>
	);
}

// Parent that staggers its <Item> children on scroll
function Stagger({ children, className }) {
	return (
		<motion.div
			className={className}
			variants={stagger}
			initial="hidden"
			whileInView="show"
			viewport={viewport}
		>
			{children}
		</motion.div>
	);
}

function Item({ children, className, variants = fadeUp }) {
	return (
		<motion.div className={className} variants={variants}>
			{children}
		</motion.div>
	);
}

/* ======================================= */
/* Data                                    */
/* ======================================= */

const Accordion = [{ heading: "How long is the trial?", para: "Every trial runs for a full 30 days, giving you time to test your hearing aids in real situations, at home, out and about, and with family." },
{ heading: "How much does it cost?", para: "Every trial runs for a full 30 days, giving you time to test your hearing aids in real situations, at home, out and about, and with family." },
{ heading: "Can I return hearing aids?", para: "Every trial runs for a full 30 days, giving you time to test your hearing aids in real situations, at home, out and about, and with family." },
{ heading: "Do you visit homes?", para: "Every trial runs for a full 30 days, giving you time to test your hearing aids in real situations, at home, out and about, and with family." },
{ heading: "Do I need a GP referral?", para: "Every trial runs for a full 30 days, giving you time to test your hearing aids in real situations, at home, out and about, and with family." }];

const testimonial = {
	name: "Gregg Steveson",
	role: "Foulride",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
};
const CARD_COUNT = 5;

const hearingCards = [{ src: Oticon, header: "Oticon", para: "Designed to let the brain process sound the way it naturally would.", heading: "Best for Natural Sound" },
{ src: Phonak, header: "Phonak", para: "Exceptional at picking out speech in noisy, busy environments.", heading: "Best for Speech Clarity" },
{ src: Widex, header: "Widex", para: "Rich, detailed sound quality favoured by musicians and music lovers.", heading: "Best Music Experience" }
]

const steps = [
	{ src: BookSvg, title: "Book", text: "A simple call or online form to get started, whenever suits you." },
	{ src: AssessmentSvg, title: "Assessment", text: "A relaxed, thorough hearing evaluation with no rush." },
	{ src: FreeTrial, title: "Free Trial", text: "Thirty days living with your hearing aids in real life." },
	{ src: AdjustementSvg, title: "Adjustements", text: "Fine tuning based on how the trial actually felt." },
	{ src: PerfectFit, title: "Perfect Fit", text: "Hearing aids that suit your ears and your life." },
	{ src: LifeTimeCare, title: "LifeTime Care", text: "Reviews, support and honest advice for years to come." },
];

const journeyCardDetail = [{ imgSrc: EarWaxRemoval, headerText: "Ear Wax Removal", headerTextColor: "text-white", paraText: "Gentle micro-suction, quick and comfortable.", paraTextColor: "text-white", bg: "bg-[#4373B6]" },
{ imgSrc: HearingTest, headerText: "Hearing Tests", headerTextColor: " text-[#052F45]", paraText: " Thorough, unhurried, explained simply.", paraTextColor: "text-[#0A1E2B99] ", bg: "bg-[#F1F8FC]" },
{ imgSrc: TittinusSupport, headerText: "Tinnitus Support", headerTextColor: " text-white", paraText: " A calmer approach to ringing or buzzing.", paraTextColor: " text-white", bg: "bg-[#64B0E2]" },
{ imgSrc: EarProtection, headerText: "Ear Protection", headerTextColor: " text-[#052F45]", paraText: " Moulded plugs for music, work and sleep.", paraTextColor: " text-[#0A1E2B99]", bg: "bg-[#F1F8FC]" }
];

const journeySteps = [
	{
		title: "Hearing Assessment",
		text: "A thorough, professional hearing evaluation, explained clearly and without jargon, so you always know exactly where you stand.",
	},
	{
		title: "Free Hearing Aid Trial",
		text: "Take your hearing aids home for thirty days. Experience real conversations, real rooms and real life before deciding anything.",
	},
	{
		title: "Ongoing Care",
		text: "Fine tuning, remote support and annual reviews. We stay with you for the long run, not just the first fitting.",
	},
];

const reasonCardItems = [
	{ element: <IndependentAdvice />, headerText: "Independent Advice", paraText: "Not tied to one manufacturer, so our recommendations are about what suits you, never sales targets." },
	{ element: <HomeVisit />, headerText: "Home Visit", paraText: "Can't get to a clinic easily? We'll bring the appointment to your own front room instead." },
	{ element: <RemoteCare />, headerText: "Remote Care", paraText: "Small adjustments can often be made remotely, so you're not always travelling in for minor tweaks." },
	{ element: <MusicianSpecialist />, headerText: "Musician Specialist", paraText: "Small adjustments can often be made remotely, so you're not always travelling in for minor tweaks." },
	{ element: <HolisticHearingMethod />, headerText: "Holistic Hearing Method", paraText: "We look at your whole lifestyle, not just a test result, to find the right long-term fit." },
	{ element: <LifeTimeSupport />, headerText: "Life Time Support", paraText: "Ongoing reviews, adjustments and honest advice for as long as you're with us." }
]

const heroIcons = [
	{ text: "30-Day Free Trial" },
	{ text: "★★★★★Google" },
	{ text: "★★★★★Trustpilot" },
	{ text: "20+ Years Experience" },
	{ text: "1000+ Happy Patients" },
	{ text: "Independent Audiologists" },
];

const TeleIcon = () => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="shrink-0"
		>
			<path d="M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="currentColor" />
		</svg>
	);
};

const paraText =
	"Try any leading hearing aid free for one month, in your own home, with no pressure to buy. Our friendly Yorkshire team makes it simple, from your very first phone call.";

/* ======================================= */
/* Page                                    */
/* ======================================= */

export default function Home() {
	const [openIndex, setOpenIndex] = useState(null);

	const handleAccordion = (index) => {
		setOpenIndex(openIndex == index ? null : index);
	}

	return (
		<MotionConfig reducedMotion="user">

			{/* ======================================= */}
			{/**Hero Section */}
			{/* ======================================= */}

			<main
				className="relative h-auto w-full overflow-x-clip bg-[#F2FAFF] pt-(--nav-h)"
				id="hero"
			>

				{/* Background vector */}
				<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
					<Image
						src={vector}
						alt=""
						width={958}
						height={806}
						quality={75}
						className="absolute bottom-0 left-0 h-2/3 lg:h-5/6 lg:w-3/5 object-bottom-left"
					/>
				</div>

				<div className="relative z-10 mx-auto flex w-full max-w-[1250px] flex-col items-center gap-8 md:gap-12 px-4 pt-7 xl:pt-10 pb-4 md:pb-20 lg:pb-40 sm:px-8 lg:flex-row md:px-7 xl:px-0 xl:gap-15 2xl:max-w-360 2xl:px-0">

					{/* Left column (animates on load) */}
					<motion.div
						className="flex w-full min-w-0 flex-col gap-3 lg:w-1/2 md:gap-4 lg:gap-10 xl:gap-15"
						variants={stagger}
						initial="hidden"
						animate="show"
					>
						<motion.div variants={fadeUp}>
							<HeaderPara
								text="FREE, NO-OBLIGATION TRIAL"
								leading={"leading-[100%]"}
								textSize={"text-[16px] sm:text-[18px]"}
							/>
						</motion.div>

						<motion.h1
							variants={fadeUp}
							className="font-fraunces font-bold text-primary text-display xl:text-[60px] 2xl:text-display leading-[1.1] tracking-tight text-balance wrap-break-word"
						>
							Hear every{" "}
							<span className="lg:block xl:whitespace-nowrap">conversation clearly</span>{" "}
							<span className="lg:block xl:whitespace-nowrap">again, right now</span>
						</motion.h1>

						<motion.div variants={fadeUp} className="max-w-162">
							<ParaGraph text={paraText} textSize="lg:text-xl 2xl:text-[22px] md:text-xl" />
						</motion.div>

						<motion.div
  variants={fadeUp}
  className="flex items-stretch gap-2 sm:gap-5 md:flex-nowrap md:items-center
  max-sm:*:min-w-0 max-sm:*:flex-1 max-sm:*:justify-center max-sm:*:gap-1.5!
  max-sm:*:px-3! max-sm:*:py-3! max-sm:*:text-xs! max-sm:*:whitespace-nowrap!
  max-[360px]:*:px-2!"
>
  <BookFreeTrialButton
    text="Call us: 01274 862623"
    icon={
      <span className="shrink-0 ml-1 [&>svg]:size-3.5 sm:ml-0 sm:[&>svg]:size-5">
        <TeleIcon />
      </span>
    }
    padding="px-6"
  />

  <BookFreeTrialButton
    background="bg-[#F2FAFF]"
    textColor="text-primary"
    hoverBg="hover:bg-primary"
    hoverText="hover:text-[#F2FAFF]"
    padding="px-6 md:px-10"
  />
</motion.div>
					</motion.div>

					{/* Right column (animates on load) */}
					<motion.div
						variants={fadeRight}
						initial="hidden"
						animate="show"
						className="relative z-10 mx-auto h-auto w-full max-w-xl md:h-100 lg:mx-0 lg:h-157 lg:w-1/2 lg:max-w-none lg:pt-[60px] xl:pt-19.25 xl:h-full"
					>
						<Image
							src={HeroImage}
							alt="Hearing specialist helping a patient"
							priority
							quality={75}
							sizes="(min-width: 1024px) 50vw, 100vw"
							className="pointer-events-none h-full w-full object-contain"
						/>
					</motion.div>
				</div>

				{/* Marquee (CSS animated, left as is) */}
				<div className="absolute bottom-10 sm:bottom-10 md:bottom-15 xl:bottom-20 left-0 z-10 w-full overflow-hidden font-sans text-[18px]">
					<div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
						{[0, 1].map((copy) => (
							<div key={copy} className="flex shrink-0 gap-3 pr-3" aria-hidden={copy === 1}>
								{heroIcons.map((item) => {
									return (
										<span className="flex h-10 md:h-15 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-white p-2 px-3 md:px-8 md:text-[20px] text-sm font-semibold text-[#052F45B2] shadow-sm shadow-white/25" key={item.text}>
											{item.icon}
											{item.text}
										</span>
									)
								})}
							</div>
						))}
					</div>
				</div>

				{/* WhatsApp button */}
				<motion.a
					href={whatsappUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Chat on WhatsApp"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.92 }}
					className="fixed bottom-4 right-4 z-40 p-4 sm:p-0 size-18 cursor-pointer items-center justify-center rounded-full bg-white/30 shadow-md shadow-black/40 backdrop-blur-xl sm:bottom-6 sm:right-6 sm:size-20 md:bottom-10 md:right-8 lg:size-24 xl:bottom-10 xl:right-25 xl:size-27.5 flex"
				>
					<WhatsAppIcon className="object-contain z-40 " />
				</motion.a>

			</main>

			{/* ======================================= */}
			{/**Trusted Across cards  */}
			{/* ======================================= */}

			<section className="grid h-auto w-full place-items-center overflow-hidden md:px-8 lg:px-8 2xl:px-0" id="trusted-Across">
				<div className="flex w-full max-w-[1250px] 2xl:max-w-360 flex-col items-center justify-center py-6 sm:py-10 md:py-20 gap-4 sm:gap-10 px-4 sm:px-4 md:px-0 lg:px-0">
					<Reveal className="flex flex-col gpa-2 sm:gap-3 items-center justify-center text-center">
						<HeaderPara text="TRUSTED ACROSS YORKSHIRE" textSize="lg:text-2xl md:text-[22px] text-base" />
						<MainHeader text={"Why choose RJD Hearing Care"} textSize="lg:text-[48px] md:text-[40px] sm:text-[28px] text-2xl " font="font-gelasio" />
						<ParaGraph textSize=" text-[16px] md:text-[20px]  " text={"Six reasons patients across Yorkshire trust us with their hearing, year after year."} />
					</Reveal>

					<Stagger className="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
						{reasonCardItems.map((item) => {
							return (
								<Item key={item.headerText} className="h-full">
									<div className="group relative flex h-full flex-col items-center justify-start gap-2 md:gap-4 xl:gap-6 overflow-hidden rounded-2xl border border-primary/20 bg-white px-6 lg:px-10 py-4 sm:py-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0">

										<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

										<div className="z-10 grid size-14 mb:size-16 sm:size-[72px] lg:size-20 xl:size-25 shrink-0 place-items-center overflow-hidden rounded-full bg-primary p-3 sm:p-4 xl:p-5 transition-all duration-300 ease-out [&>svg]:h-full [&>svg]:w-full [&>svg]:max-h-full [&>svg]:max-w-full">
											{item.element}
										</div>

										<div className="relative z-10 flex flex-col items-center gap-2 md:gap-3 lg:gap-3 ">
											<h3 className="text-primary lg:text-[28px]  md:text-[24px] text-[22px] font-bold max-w-[400px] font-gelasio" > {item.headerText} </h3>
											<ParaGraph text={item.paraText} textSize="text-base lg:text-[18px]" />
										</div>
									</div>
								</Item>
							)
						})}
					</Stagger>

					<Reveal>
						<BookFreeTrialButton width=" w-[280px] sm:w-[351px]" />
					</Reveal>
				</div>
			</section>

			{/* ======================================= */}
			{/**Journey section  */}
			{/* ======================================= */}
			<section className="relative w-full overflow-hidden bg-[#03B2E71A] py-6 sm:py-10 md:py-15 lg:py-20 md:px-8 lg:px-8 2xl:px-0" id="journey-section">

				{/* Background vector */}
				<div className="pointer-events-none absolute inset-0 z-0">
					<Image
						src={JourneyFrame}
						alt=""
						width={1058}
						height={806}
						quality={75}
						className="absolute bottom-0 right-0 h-auto md:h-full lg:h-[806px] w-[70vw] max-w-none object-contain object-bottom-right "
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 mx-auto w-full max-w-[1250px] 2xl:max-w-360 px-4 sm:px-8 lg:px-0 h-auto">

					{/* Heading */}
					<Reveal className=" mb-2 sm:mb-4 md:mb-12 flex flex-col items-center justify-center md:gap-4 text-center ">
						<HeaderPara text="YOUR JOURNEY"  />
						<MainHeader text="How We Help You" textSize="lg:text-[48px] md:text-[40px] sm:text-[28px] text-[26px]" font="font-gelasio" />
					</Reveal>

					<div className="flex lg:flex-row flex-col items-center gap-4 sm:gap-8 md:gap-10 lg:gap-15">

						{/* Left: image (desktop only) */}
						<Reveal variants={fadeLeft} className="hidden lg:flex w-full lg:max-w-[630px] shrink-0">
							<Image
								src={JourneyImage}
								alt="Journey Image"
								width={630}
								height={806}
								quality={90}
								className="h-auto w-full object-contain"
							/>
						</Reveal>

						{/* Right: timeline */}
						<div className="flex w-full flex-col items-start gap-8 md:gap-10 lg:w-[590px]">
							<motion.ol
								variants={stagger}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, amount: 0.15 }}
							>
								{journeySteps.map((step, index) => (
									<motion.li
										key={step.title}
										variants={fadeUp}
										className="relative pb-5 md:pb-15 lg:pb-15  xl:pb-25 pl-12 sm:pl-20 last:pb-0 lg:last:pb-0 sm:pl-24"
									>
										{/* Number circle */}
										<div className="absolute left-0 top-0 z-10 grid size-8 md:size-15 place-items-center rounded-full bg-primary text-sm md:text-xl font-semibold text-white">
											{index + 1}
										</div>

										{/* Line */}
										<div className="absolute bottom-0 left-4 md:left-7.5 top-4 md:top-15 w-px -translate-x-1/2 bg-primary" />
										<div className="flex flex-col md:gap-2 lg:gap-5">
											<MainHeader
												text={step.title}
												textColor="text-primary"
												textSize=" text-[20px] md:text-2xl lg:text-[28px]"
												font="font-gelasio"
											/>
											<ParaGraph text={step.text} textSize=" text-sm md:text-base lg:text-[18px]" />
										</div>
									</motion.li>
								))}
							</motion.ol>

							<Reveal className="grid w-full place-items-center">
								<BookFreeTrialButton
									background="bg-primary"
									textColor="text-[#F2FAFF]"
									hoverBg="hover:bg-[#F2FAFF]"
									hoverText="hover:text-primary"
									width="max-w-[281px]"
								/>
							</Reveal>
						</div>
					</div>
				</div>
			</section>

			{/* ======================================= */}
			{/** Featured Section */}
			{/* ======================================= */}

			<section id="featured-section" className="relative w-full overflow-hidden py-6 sm:py-10 md:py-15 lg:py-25 md:px-8 lg:px-8 2xl:px-0">

				{/* Background image*/}
				<div className="pointer-events-none absolute inset-0 z-0">
					<Image
						src={FeaturedServices}
						alt=""
						width={1440}
						height={806}
						quality={75}
						className="absolute bottom-0 right-0 h-auto w-full max-w-none object-contain object-right-bottom"
					/>
				</div>

				{/* Header row */}
				<Reveal className="relative z-10 mx-auto mb-4 sm:mb-8 flex w-full max-w-[1250px] 2xl:max-w-360 flex-col gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-8  md:mb-8 md:flex-row md:items-end md:justify-between lg:mb-10 lg:px-0">

					<div className="flex flex-col items-start gap-1 md:gap-4 ">
						<div className="flex items-center gap-3 md:gap-5 whitespace-nowrap">
							<div className="h-0.5 w-8 md:w-13 bg-[#03B2E7]" />
							<HeaderPara text={"Featured Services"} textColor={"text-[#03B2E7]"} textSize="lg:text-[24px] md:text-[22px] text-sm" />
						</div>

						<MainHeader text="Everything your ears need" font="font-gelasio" textSize="lg:text-[48px] md:text-[40px] text-[25px]" />
					</div>

					<BookFreeTrialButton
						background="bg-primary"
						textColor="text-[#F2FAFF]"
						hoverBg="hover:bg-[#F2FAFF]"
						hoverText="hover:text-primary w-fit"
					/>
				</Reveal>

				{/* Cards grid */}
				<Stagger className="relative z-10 mx-auto grid w-full max-w-[1250px] 2xl:max-w-360 grid-cols-1 gap-4 sm:gap-6 px-4 sm:grid-cols-2  lg:grid-cols-4 lg:grid-rows-2 lg:px-0">

					{/* Big card*/}
					<Item className="relative min-h-55 overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2">
						<Image
							src={HearingAids}
							alt="Hearing Aids"
							width={670}
							height={500}
							quality={75}
							className="absolute inset-0 z-0 h-full w-full object-cover"
						/>
						<div className="absolute inset-x-0  bottom-0 z-20 bg-linear-to-t from-black/80 to-transparent px-6 pb-5 pt-20 sm:px-10">
							<MainHeader text="Hearing Aids" textSize="text-2xl sm:text-3xl lg:text-[38px]" font="font-gelasio" textColor="text-white" />
							<ParaGraph text="Every major brand, fitted and tuned by qualified audiologists." textColor="text-white" textSize="text-base" />
						</div>
					</Item>

					{/* Small cards */}
					{journeyCardDetail.map((item) => (
						<Item
							key={item.headerText}
							className={`${item.bg} flex h-full w-full flex-col gap-1 mb:gap-2 md:gap-4 overflow-hidden rounded-2xl p-5`}
						>
							<div className="size-8 mb:size-10 sm:size-12  shrink-0">
								<Image src={item.imgSrc} width={60} height={60} alt={item.headerText} className="object-cover" />
							</div>

							<MainHeader
								text={item.headerText}
								textColor={item.headerTextColor}
								font="font-gelasio" textSize="text-xl md:text-2xl 2xl:text-[28px]" />
							<div className="max-w-145">
								<ParaGraph
									text={item.paraText}
									textColor={item.paraTextColor} />
							</div>
						</Item>
					))}
				</Stagger>
			</section>

			{/* ======================================= */}
			{/**Services Section  */}
			{/* ======================================= */}
			<section  className="relative w-full overflow-hidden bg-linear-[118.47deg,#0E4461_0%,#04293D_100%]" id="Services">
				{/* Background image */}
				<Image
					src={ServicesBg}
					alt=""
					width={1920}
					height={744}
					quality={75}
					sizes="100vw"
					className="pointer-events-none absolute bottom-0 right-0 z-0 h-auto w-full"
				/>

				<div className="relative z-10 mx-auto flex w-full max-w-360 flex-col items-center gap-4 sm:gap-6 sm:gap-12 px-4 py-6 sm:py-10 md:py-16 text-center sm:px-8 lg:gap-20 lg:px-12 lg:py-25">

					<Reveal className="flex w-full flex-col items-center justify-center gap-2 md:gap-5">
						<HeaderPara text="Featured Services" textColor="text-primary" textSize="lg:text-2xl md:text-[22px] text-lg" />
						<MainHeader text="Why patients stay with us for years" textColor="text-white" textSize="lg:text-[48px] md:text-[40px] sm:text-[28px] text-2xl" font="font-gelasio" />
						<ParaGraph text="A clear, unhurried path from first phone call to lifelong hearing care." textColor="text-white" textSize="lg:text-lg 2xl:text-xl md:text-lg" />
					</Reveal>

					{/* Timeline */}
					<ol className="w-full text-left ">
						{steps.map((step, index) => {

							const isLeft = index % 2 === 1;
							return (
								<motion.li
									key={step.title}
									variants={isLeft ? fadeLeft : fadeRight}
									initial="hidden"
									whileInView="show"
									viewport={{ once: true, amount: 0.3 }}
									className="relative min-h-20 pb-4 sm:pb-13.5 pl-15  sm:pl-20 md:pl-28 last:pb-0 lg:grid lg:grid-cols-2 lg:pl-0"
								>

									<div className="absolute left-0 top-0 z-10 grid size-10 sm:size-15 p-2.5 sm:p-4 md:p-0 md:size-20 place-items-center rounded-full bg-white lg:left-1/2 lg:-translate-x-1/2">
										<Image src={step.src} alt="" width={35} height={26} className="h-full w-full md:w-auto md:h-auto" />
									</div>

									{index < steps.length - 1 && (
										<div className="absolute left-5 sm:left-7.5 md:left-10 top-10 sm:top-15 md:top-20 -bottom-15 sm:-bottom-25 md:-bottom-34 w-px -translate-x-1/2 bg-white/30 lg:left-1/2" />
									)}

									<div className={`flex flex-col gap-2 sm:gap-3 ${isLeft ? "lg:col-start-1 lg:items-end lg:pr-20 lg:text-right" : "lg:col-start-2 lg:pl-20"}`}>
										<h2 className="text-white text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-gelasio font-bold " >{`${index + 1}. ${step.title}`}</h2>
										<ParaGraph text={step.text} textColor="text-white/80" textSize=" lg:text-lg xl:text-[20px] font-sans" />
									</div>
								</motion.li>
							);
						})}
					</ol>

					<Reveal className="w-fit">
						<BookFreeTrialButton
							text="Start Your Journey"
							background="bg-white"
							textColor="text-[#063047]"
							hoverBg="hover:bg-primary"
							border="border-none"
							hoverText="hover:text-white"
							width="w-[281px]"
						/>
					</Reveal>
				</div>
			</section>

			{/* ======================================= */}
			{/**Best hearing aids section */}
			{/* ======================================= */}
			<section className="relative w-full overflow-hidden lg:flex lg:min-h-150 lg:items-center" id="HearingAids">

				<div className="relative z-10 mx-auto flex w-full max-w-360 flex-col items-center gap-4 sm:gap-8 px-4 py-6 mb:py-10 sm:py-14 md:py-18 text-center sm:px-8 lg:gap-10 lg:px-12 lg:py-25">

					{/* Heading */}
					<Reveal className="flex w-full flex-col items-center justify-center gap-1 sm:gap-3 lg:gap-4">
						<MainHeader text="Best hearing aids" textSize="lg:text-[48px] md:text-[44px] sm:text-[38px] text-[28px]" font="font-gelasio" />
						<ParaGraph text="Our most recommended brands, chosen for what each does best." />
					</Reveal>

					{/* Cards (marquee/grid switch, left without motion wrappers) */}
					<div className=" -mx-2  overflow-hidden motion-reduce:overflow-x-auto sm:-mx-8 md:mx-0 md:overflow-visible">
						<div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none md:grid md:w-full md:grid-cols-3 md:animate-none md:gap-0">
							{[0, 1].map((copy) => (
								<div
									key={copy}
									aria-hidden={copy === 1}
									className={`flex shrink-0 gap-4 pr-4 ${copy === 0 ? "md:contents" : "md:hidden"}`}
								>
									{hearingCards.map((item, index) => (
										<div
											key={item.header}
											className="relative flex w-70 shrink-0 flex-col items-center justify-center gap-2 sm:gap-5 p-4 sm:w-80 md:w-full md:shrink md:p-5 lg:gap-6 lg:p-8"
										>
											{/* Shorter divider */}
											{index < hearingCards.length - 1 && (
												<div className="absolute block right-0 top-1/2  h-3/5 w-px -translate-y-1/2 bg-[#B7B9B9]" />
											)}

											{/* Image */}
											<div className="flex h-28 w-full items-center justify-center md:h-32 lg:h-36">
												<Image
													src={item.src}
													alt={item.header}
													width={310}
													height={190}
													className="h-full w-auto max-w-full object-contain"
												/>
											</div>

											<div className="flex flex-col items-center justify-center gap-3">
												<MainHeader text={item.header} textColor="text-[#052F45]" textSize="text-2xl lg:text-[28px]" font="font-gelasio" />

												<p className="text-base font-bold text-[#1E1E1E] lg:text-lg">{item.heading}</p>

												<ParaGraph text={item.para} textColor="text-[#454545] max-w-90" textSize="text-sm md:text-base lg:text-xl leading-normal md:leading-[20px] lg:leading-[30px]"  />

												<Link
													href="#"
													tabIndex={copy === 1 ? -1 : undefined}
													className="inline-flex items-center gap-2 whitespace-nowrap text-primary underline"
												>
													Learn more <FaArrowRight className="shrink-0" />
												</Link>
											</div>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>

			</section>

			{/* ======================================= */}
			{/**Home Visits  */}
			{/* ======================================= */}

			<section id="HomeVisits" className="grid w-full grid-cols-1 overflow-hidden lg:min-h-181.75 lg:grid-cols-2 ">

				{/* Left */}
				<Reveal variants={fadeLeft} className="relative hidden lg:block">
					<Image
						src={HomeVisitJpg}
						alt="Audiologist on a home visit"
						fill
						quality={75}
						sizes="50vw"
						className="object-cover"
					/>
				</Reveal>

				{/* Right */}
				<Reveal
					variants={fadeRight}
					className="flex flex-col items-start justify-center gap-2 sm:gap-4 bg-linear-[118.47deg,#0E4461_0%,#04293D_100%] px-4 py-6 mb:py-10 sm:px-8 sm:py-16 lg:gap-5 lg:p-14 xl:p-20 xl:pr-32"
				>

					<div className="flex items-center gap-3 md:gap-5 whitespace-nowrap">
						<div className="h-0.5 w-8 md:w-13 bg-[#03B2E7]" />
						<HeaderPara text="HOME VISITS" textColor="text-[#03B2E7]" textSize="lg:text-[24px] md:text-[22px] text-sm" />
					</div>
					<div className="max-w-131.5">
						<MainHeader text="Can't visit us? We'll come to you." textColor="text-white" textSize="lg:text-[48px] md:text-[44px] sm:text-[38px] text-2xl" font="font-gelasio" />
					</div>

					<ParaGraph
						text="Many of our patients prefer the comfort of their own home. So if that suits you better, we'll simply bring the appointment to your front room."
						textColor="text-white/80"
						textSize="lg:text-xl font-medium"
					/>

					{/* Checklist */}
					<ul className="flex mt-2 sm:mt-0 flex-col gap-3 font-sans text-base lg:text-[24px] text-white/80 lg:text-xl font-semibold ">
						{["✓   Comfortable",
							"✓   Family can join",
							"✓   Same expert every time"].map((label) => (
								<li key={label} className="flex items-center ">
									{label}
								</li>
							))}
					</ul>
				</Reveal>

			</section>

			{/* ======================================= */}
			{/**Frequently asked Questions  */}
			{/* ======================================= */}

			<section id="queries" className="w-full overflow-hidden py-6 sm:py-10 md:py-20 md:px-8 lg:px-8 2xl:px-0">
				<div className="mx-auto grid w-full max-w-[1250px] 2xl:max-w-360 grid-cols-1 mb:gap-5 gap-2 sm:gap-10 px-4 sm:px-8 lg:grid-cols-[28rem_minmax(0,1fr)] lg:gap-16 lg:px-0">

					{/* Left column */}
					<Reveal className="relative z-10 flex w-full flex-col gap-4 mb:gap-6 sm:gap-10 md:gap-12 lg:gap-20">
						<div className="flex flex-col items-start gap-2">
							<div className="flex items-center gap-3 md:gap-5 whitespace-nowrap">
								<div className="h-0.5 w-8 md:w-13 bg-[#03B2E7]" />
								<HeaderPara text="Questions" textColor="text-[#03B2E7]" textSize="lg:text-[24px] md:text-[22px] text-sm" />
							</div>
							<MainHeader text="Frequently asked questions" textSize="lg:text-[48px] md:text-[40px] sm:text-[38px] text-2xl" font="font-gelasio" />
							<ParaGraph
								text="Still unsure about something? Give us a call and we'll talk it through."
								textSize="lg:text-xl 2xl:text-[20px]"
							/>
						</div>

						<div className="flex w-full flex-col items-center gap-3 sm:gap-5 rounded-3xl border border-[#0474BC1A] bg-[#F1F8FC] px-4 py-3 mb:py-4 sm:py-8">
							<h2 className="font-sans text-base sm:text-2xl md:text-[27px] font-bold">Speak To The Directly</h2>
							<BookFreeTrialButton text="Call us: 01274 862623" icon={<TeleIcon />} padding="md:px-10 sm:px-8 px-6" />
						</div>
					</Reveal>

					{/* Accordion */}
					<Stagger className="flex min-w-0 flex-col">
						{Accordion.map((item, index) => {
							const isOpen = openIndex === index;
							return (
								<Item key={index}>
									<div
										className={`flex flex-col px-2 justify-center  transition-all duration-300 ease-in-out ${isOpen ? "bg-[linear-gradient(90deg,rgba(3,178,231,0.1)_0%,rgba(3,178,231,0)_100%)]" : ""
											}`}
									>
										<button
											type="button"
											className="flex w-full cursor-pointer items-center justify-between gap-4 border-t border-[#0474BC1A] px-2 py-2 sm:py-5 text-left"
											onClick={() => handleAccordion(index)}
											aria-expanded={isOpen}
										>
											<h3 className="font-gelasio text-base sm:text-xl md:text-2xl font-bold text-nav-items lg:text-3xl">
												{item.heading}
											</h3>
											<FaPlus
												className={`shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45" : "rotate-0"
													}`}
											/>
										</button>

										<div
											className={`grid px-2 transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
												}`}
										>
											<div className="overflow-hidden">
												<ParaGraph text={item.para} textSize="text-base md:text-xl leading-normal sm:leading-[20px] md:leading-[30px]" />
												<div className="h-3 sm:h-5" />
											</div>
										</div>
									</div>
								</Item>
							);
						})}
					</Stagger>
				</div>
			</section>

			{/* ======================================= */}
			{/**Team Visits  */}
			{/* ======================================= */}

			<section id="TeamsVisit" className="grid w-full grid-cols-1 overflow-hidden lg:min-h-181.75 lg:grid-cols-2">

				{/* Left: image (desktop only) */}
				<Reveal variants={fadeLeft} className="relative hidden lg:block">
					<Image
						src={TeamsImage}
						alt="speak to team"
						fill
						quality={75}
						sizes="50vw"
						className="object-cover"
					/>
				</Reveal>

				{/* Right: text */}
				<Reveal
					variants={fadeRight}
					className="flex flex-col items-start justify-center gap-2 mb:gap-3 sm:gap-4 bg-primary px-4 py-6 mb:py-12 sm:px-8 sm:py-16 lg:gap-5 lg:p-14 xl:p-20 xl:pr-32"
				>

					<h1 className="text-white text-2xl sm:text-display font-gelasio font-bold" > Speak to our team directly</h1>

					<ParaGraph
						text="Book your free, no-obligation hearing assessment today and take the first step back to easy conversation."
						textColor="text-white/80" textSize="lg:text-xl 2xl:text-[24px]"
					/>

					<div className="flex flex-row transition lg:flex-col justify-between gap-2 md:gap-4 lg:gap-6">

						<BookFreeTrialButton text="Book Your Assessment" rounded="rounded-2xl" padding="px-3 sm:px-6 md:px-10 py-3 sm:py-6" background=" bg-white" textColor="text-primary" hoverBg="bg-white/90" />
						<Link
							href="#"
							className="flex items-center justify-center gap-2 sm:gap-4 whitespace-nowrap rounded-2xl border border-white px-3 mb:px-6 py-3 text-sm sm:text-[16px] font-semibold text-[#F2FAFF] transition hover:bg-primary/80  bg-white/10 backdrop-blur-3xl"
						>
							<TeleIcon />{"01274 862623"}
						</Link>
					</div>

				</Reveal>

			</section>

			{/* ======================================= */}
			{/**Testimonials */}
			{/* ======================================= */}

			<section id="testimonials" className="w-full overflow-hidden py-6 sm:py-10 md:py-12 lg:py-14">

				<Reveal className="mx-auto flex w-full max-w-360 flex-col items-center px-4 text-center sm:px-8">
					<MainHeader text="Testimonials" textSize="lg:text-[48px] md:text-[40px] md:text-[38px] text-[30px]" font="font-gelasio" />
				</Reveal>

				{/* Marquee window */}
				<div className="mt-2 w-full overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] lg:mt-6">
					<div className="flex w-max animate-marquee  [animation-duration:70s] hover:[animation-play-state:paused] motion-reduce:animate-none">
						{[0, 1].map((copy) => (
							<div key={copy} className="flex shrink-0 gap-6 pr-6" aria-hidden={copy === 1}>
								{Array.from({ length: CARD_COUNT }).map((_, i) => (
									<div
										key={`${copy}-${i}`}
										className="group relative flex w-80  shrink-0 flex-col overflow-hidden rounded-2xl border border-[#B7B9B9]/50 bg-white px-6 py-2 md:p-6 lg:p-7 text-left shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15 sm:w-80 lg:w-[518px] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
									>
										{/* Soft glow on hover */}
										<div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

										<div className="relative z-10 flex w-full flex-col gap-4 pt-4 md:pt-4 lg:pt-8 lg:w-[470px] ">
											<Image
												src={DoubleQuote}
												alt=""
												width={105}
												height={91}
												className="pointer-events-none absolute left-0 top-0 mb:top-2 lg:top-0 z-0 size-12 mb:h-auto mb:w-20 opacity-80 transition-transform duration-700 ease-out group-hover:-rotate-6 group-hover:scale-110 "
											/>

											<ParaGraph
												text={testimonial.text}
												textColor="text-[#454545]"
												textSize="text-sm lg:text-[22px] italic font-normal"
											/>
											<div className="flex flex-col">
												<p className="text-lg font-semibold text-primary">{testimonial.name}</p>
												<p className="text-sm text-[#7B7B7B]">{testimonial.role}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</section>

		</MotionConfig>
	);
}