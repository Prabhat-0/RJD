"use client"

import BookFreeTrialButton from "@/components/BookFreeTrialButton";
import vector from "../../public/Frame 68.png";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/heroImage.png";
import ParaGraph from "@/components/ParaGraph";
import HeroIcons from "@/components/HeroIcons";
import HeaderPara from "@/components/HeaderPara";
import { HolisticHearingMethod, HomeVisit, IndependentAdvice, LifeTimeSupport, MusicianSpecialist, RemoteCare, WhatsAppIcon } from "@/svg";

import { FaGift, FaStar, FaAward, FaUsers, FaCalendarCheck, FaArrowRight, FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import { FaEarListen } from "react-icons/fa6";
import MainHeader from "@/components/MainHeader";
import ReasonCard from "@/components/ReasonCard";
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
{ imgSrc: HearingTest, headerText: "Hearing Tests", headerTextColor: " text-[#052F45]", paraText: " Thorough, unhurried, explained simply.", paraTextColor: "text-[#0A1E2B] ", bg: "bg-[#F1F8FC]" },
{ imgSrc: TittinusSupport, headerText: "Tinnitus Support", headerTextColor: " text-white", paraText: " A calmer approach to ringing or buzzing.", paraTextColor: " text-white", bg: "bg-[#64B0E2]" },
{ imgSrc: EarProtection, headerText: "Ear Protection", headerTextColor: " text-[#052F45]", paraText: " Moulded plugs for music, work and sleep.", paraTextColor: " text-[#0A1E2B]", bg: "bg-[#F1F8FC]" }];

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
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="currentColor" />
		</svg>
	);
};

const paraText =
	"Try any leading hearing aid free for one month, in your own home, with no pressure to buy. Our friendly Yorkshire team makes it simple, from your very first phone call.";

export default function Home() {
	const [openIndex, setOpenIndex] = useState(null);

	const handleAccordion = (index) => {
		setOpenIndex(openIndex == index ? null : index);
	}

	return (
		<>

			{/* ======================================= */}

			{/**Hero Section */}

			{/* ======================================= */}

			<main
				className="relative w-full bg-[#F2FAFF] pt-20 md:pt-27.5 xl:h-[929px]"
				id="hero"
			>

				{/* Background vector */}
				<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden top-27.5 ">
					<Image
						src={vector}
						alt=""
						width={1058}
						height={806}
						quality={90}
						className="absolute bottom-0 left-0 h-full w-auto max-w-[1058px] object-contain object-bottom-left"
					/>
				</div>

				{/* Centered content container */}
				<div className="relative z-10 mx-auto flex w-full max-w-360 items-center gap-8 px-4 pt-10 pb-44 sm:px-8 lg:px-0 xl:h-full xl:pt-0 xl:pb-40">

					{/* Left column */}
					<div className="flex w-full flex-col gap-6 lg:w-1/2 lg:gap-8">
						<HeaderPara text="FREE, NO-OBLIGATION TRIAL" leading={"leading-[100%]"} textSize={"text-[18px]"} />

						<h1 className="font-fraunces font-bold text-primary text-[clamp(2rem,6vw,4rem)] leading-[1.1] tracking-tight text-balance wrap-break-word">
							Hear every{" "}
							<span className="lg:block">conversation clearly</span>{" "}
							<span className="lg:block">again, right now</span>
						</h1>

						<ParaGraph text={paraText} />

						<div className="flex flex-wrap gap-3 sm:gap-5">
							<Link
								href="#"
								className="flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-primary bg-primary px-6 py-3 text-[16px] font-semibold text-[#F2FAFF] transition hover:bg-primary/80"
							>
								<TeleIcon /> Call us: 01274 862623
							</Link>
							<BookFreeTrialButton
								background="bg-[#F2FAFF]"
								textColor="text-primary"
								hoverBg="hover:bg-primary"
								hoverText="hover:text-[#F2FAFF]"

							/>
						</div>
					</div>

					{/* Right column: explicit height so `fill` works */}
					<div className="relative hidden h-157 w-[706px] lg:block xl:h-full">
						<Image
							src={HeroImage}
							alt="Hearing specialist helping a patient"
							fill
							sizes={"100vw"}
							priority
							quality={90}
							className="pointer-events-none absolute right-0 object-contain object-bottom-right"
						/>
					</div>
				</div>

				{/* Marquee */}
				<div className="absolute bottom-20 left-0 z-10 w-full overflow-hidden font-sans text-[18px]">
					<div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
						{[0, 1].map((copy) => (
							<div key={copy} className="flex shrink-0 gap-3 pr-3" aria-hidden={copy === 1}>
								{heroIcons.map((item) => (
									<HeroIcons key={`${copy}-${item.text}`} text={item.text} />
								))}
							</div>
						))}
					</div>
				</div>

				{/* WhatsApp button */}
				<a
					href="https://wa.me/44XXXXXXXXXX"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Chat on WhatsApp"
					className="fixed bottom-4 right-4 z-40 flex size-16 cursor-pointer items-center justify-center rounded-full bg-white/30 shadow-md shadow-black/40 backdrop-blur-xl transition-transform duration-300 ease-out hover:scale-105 sm:bottom-6 sm:right-6 sm:size-20 md:bottom-8 md:right-8 lg:size-24 xl:bottom-10 xl:right-25 xl:size-27.5 motion-reduce:transition-none motion-reduce:hover:scale-100"
				>
					<WhatsAppIcon className="size-8 sm:size-10 lg:size-12 xl:size-14" />
				</a>
			</main>

			{/* ======================================= */}

			{/**Trusted Across cards  */}

			{/* ======================================= */}

			<section className="grid h-auto w-full place-items-center">
				<div className="flex w-full max-w-360 flex-col items-center justify-center py-20 gap-10 p-2 lg:px-0">
					<div className="flex flex-col gap-3 items-center justify-center text-center">
						<HeaderPara text="TRUSTED ACROSS YORKSHIRE" textSize="text-[24px]" />
						<MainHeader text={"Why choose RJD Hearing Care"} />
						<ParaGraph textSize="text-[20px]" text={"Six reasons patients across Yorkshire trust us with their hearing, year after year."} />
					</div>
					<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
						{reasonCardItems.map((item) => (
							<ReasonCard key={item.headerText} element={item.element} headerText={item.headerText} paraText={item.paraText} />
						))}
					</div>
					<BookFreeTrialButton width="w-[351px]" />
				</div>
			</section>

			{/* ======================================= */}

			{/**Journey section  */}

			{/* ======================================= */}
			<section className="relative w-full overflow-hidden bg-[#03B2E71A] py-16 lg:py-20 max-h-[1146px]">

				{/* Background vector: 40% of screen width, pinned bottom-right */}
				<div className="pointer-events-none absolute inset-0 z-0">
					<Image
						src={JourneyFrame}
						alt=""
						width={1058}
						height={806}
						quality={90}
						className="absolute bottom-0 right-0 h-auto md:h-full lg:h-[806px] w-[70vw] max-w-none object-contain object-bottom-right "
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-0 h-auto">

					{/* Heading */}
					<div className=" mb-12 flex flex-col items-center justify-center gap-4 text-center ">
						<HeaderPara text="YOUR JOURNEY" />
						<MainHeader text="How We Help You" />
					</div>

					<div className="flex items-center gap-10  lg:gap-">

						{/* Left: image */}
						<div className="hidden h-[806px] w-[630px] shrink-0 lg:block">
							<Image
								src={JourneyImage}
								alt="Journey Image"
								width={630}
								height={806}
								quality={90}
								className="h-full w-full object-cover"
							/>
						</div>

						{/* Right: timeline */}
						<div className="flex w-full flex-col items-start gap-10 lg:w-[590px]">
							<ol>
								{journeySteps.map((step, index) => (
									<li
										key={step.title}
										className="relative pb-25 pl-20 last:pb-0 sm:pl-24"
									>
										{/* Number circle */}
										<div className="absolute left-0 top-0 z-10 grid size-15 place-items-center rounded-full bg-primary text-xl font-semibold text-white">
											{index + 1}
										</div>

										{/* Line: from below the circle to the bottom of this li */}
										<div className="absolute bottom-0 left-7.5 top-15 w-px -translate-x-1/2 bg-primary" />

										<MainHeader
											text={step.title}
											textColor="text-primary"
											textSize="text-2xl lg:text-[28px]"
										/>
										<ParaGraph text={step.text} textSize="text-base lg:text-[18px]" />
									</li>
								))}
							</ol>

							<div className="grid w-full place-items-center">
								<BookFreeTrialButton
									background="bg-primary"
									textColor="text-[#F2FAFF]"
									hoverBg="hover:bg-[#F2FAFF]"
									hoverText="hover:text-primary"
									width="w-[281px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ======================================= */}

			{/** Featured Section */}

			{/* ======================================= */}

			<section className="relative w-full overflow-hidden py-16 lg:py-20">

				{/* Background image*/}
				<div className="pointer-events-none absolute inset-0 z-0">
					<Image
						src={FeaturedServices}
						alt=""
						width={1440}
						height={806}
						quality={90}
						className="absolute bottom-0 right-0 h-auto w-full max-w-none object-contain object-right-bottom"
					/>
				</div>

				{/* Header row */}
				<div className="relative z-10 mx-auto mb-10 flex w-full max-w-360 flex-col gap-6 px-4 sm:px-8 md:mb-12 md:flex-row md:items-end md:justify-between lg:mb-16 lg:px-12">

					<div className="flex flex-col items-start gap-4">
						<div className="flex items-center gap-5">
							<div className="h-0.5 w-13 bg-[#03B2E7]" />
							<HeaderPara text={"Featured Services"} textColor={"text-[#03B2E7]"} textSize={"text-[18px]"} />
						</div>
						<MainHeader text="Everything your ears need" />
					</div>

					<div className="w-fit shrink-0">
						<BookFreeTrialButton
							background="bg-primary"
							textColor="text-[#F2FAFF]"
							hoverBg="hover:bg-[#F2FAFF]"
							hoverText="hover:text-primary"
						/>
					</div>
				</div>

				{/* Cards grid */}
				<div className="relative z-10 mx-auto grid w-full max-w-360 grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:grid-rows-2 lg:px-12">

					{/* Big card*/}
					<div className="relative min-h-80 overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2">
						<Image
							src={HearingAids}
							alt="Hearing Aids"
							width={670}
							height={500}
							quality={90}
							className="absolute inset-0 z-0 h-full w-full object-cover"
						/>
						<div className="absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/80 to-transparent px-6 pb-5 pt-24 sm:px-10">
							<MainHeader text="Hearing Aids" textSize="text-3xl lg:text-[38px]" textColor="text-white" />
							<ParaGraph text="Every major brand, fitted and tuned by qualified audiologists." textColor="text-white" />
						</div>
					</div>

					{/* Small cards */}
					{journeyCardDetail.map((item) => (
						<div
							key={item.headerText}
							className={`${item.bg} flex h-full w-full flex-col gap-4 overflow-hidden rounded-2xl p-5`}
						>
							<div className="size-12 shrink-0">
								<Image src={item.imgSrc} width={60} height={60} alt={item.headerText} className="object-cover" />
							</div>
							<MainHeader text={item.headerText} textColor={item.headerTextColor} textSize="text-2xl lg:text-[28px]" />
							<ParaGraph text={item.paraText} textColor={item.paraTextColor} />
						</div>
					))}
				</div>
			</section>

			{/* ======================================= */}

			{/**Services Section  */}

			{/* ======================================= */}
			<section className="relative w-full overflow-hidden bg-linear-[118.47deg,#0E4461_0%,#04293D_100%]" id="Services">
				{/* Background image */}
				<Image
					src={ServicesBg}
					alt=""
					width={1920}
					height={744}
					quality={90}
					sizes="100vw"
					className="pointer-events-none absolute bottom-0 right-0 z-0 h-auto w-full"
				/>

				<div className="relative z-10 mx-auto flex w-full max-w-360 flex-col items-center gap-12 px-4 py-16 text-center sm:px-8 lg:gap-16 lg:px-12 lg:py-25">

					<div className="flex w-full flex-col items-center justify-center gap-5">
						<HeaderPara text="Featured Services" textColor="text-primary" />
						<MainHeader text="Why patients stay with us for years" textColor="text-white" />
						<ParaGraph text="A clear, unhurried path from first phone call to lifelong hearing care." textColor="text-white" />
					</div>

					{/* Timeline */}
					<ol className="w-full text-left">
						{steps.map((step, index) => {

							const isLeft = index % 2 === 1;
							return (
								<li key={step.title} className="relative min-h-20 pb-12 pl-28 last:pb-0 lg:grid lg:grid-cols-2 lg:pl-0">

									<div className="absolute left-0 top-0 z-10 grid size-20 place-items-center rounded-full bg-white lg:left-1/2 lg:-translate-x-1/2">
										<Image src={step.src} alt="" width={35} height={26} />
									</div>

									{index < steps.length - 1 && (
										<div className="absolute left-10 top-20 -bottom-34 w-px -translate-x-1/2 bg-white/30 lg:left-1/2" />
									)}

									<div className={`flex flex-col gap-3 ${isLeft ? "lg:col-start-1 lg:items-end lg:pr-20 lg:text-right" : "lg:col-start-2 lg:pl-20"}`}>
										<MainHeader text={`${index + 1}. ${step.title}`} textColor="text-white" textSize="text-[32px]" />
										<ParaGraph text={step.text} textColor="text-white/80" textSize="text-[20px]" />
									</div>
								</li>
							);
						})}
					</ol>

					<div className="w-fit">
						<BookFreeTrialButton
							text="Start Your Journey"
							background="bg-white"
							textColor="text-[#063047]"
							hoverBg="hover:bg-primary"
							border="border-none"
							hoverText="hover:text-white"
							width="w-[281px]"
						/>
					</div>
				</div>
			</section>
			{/* ======================================= */}

			{/**Best hearing aids section */}

			{/* ======================================= */}
			<section className="relative w-full overflow-hidden lg:flex lg:min-h-150 lg:items-center" id="HearingAids">

				<div className="relative z-10 mx-auto flex w-full max-w-360 flex-col items-center gap-8 px-4 py-12 text-center sm:px-8 lg:gap-10 lg:px-12 lg:py-10">

					{/* Heading */}
					<div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-4">
						<MainHeader text="Best hearing aids" />
						<ParaGraph text="Our most recommended brands, chosen for what each does best." />
					</div>

					{/* Cards */}
					<div className="grid h-auto w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
						{hearingCards.map((item, index) => (
							<div
								key={item.header}
								className="relative flex h-full w-full flex-col items-center justify-center gap-5 p-4 md:p-5 lg:gap-6 lg:p-8"
							>
								{/* Shorter divider */}
								{index < hearingCards.length - 1 && (
									<div className="absolute right-0 top-1/2 hidden h-3/5 w-px -translate-y-1/2 bg-[#B7B9B9] md:block" />
								)}

								{/* Image*/}
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
									<MainHeader text={item.header} textColor="text-[#052F45]" textSize="text-2xl lg:text-[28px]" />

									<p className="text-base font-bold text-[#1E1E1E] lg:text-lg">{item.heading}</p>

									<ParaGraph text={item.para} textColor="text-[#454545]" textSize="text-sm lg:text-base" />


									<Link
										href="#"
										className="inline-flex items-center gap-2 whitespace-nowrap text-primary underline"
									>
										Learn more <FaArrowRight className="shrink-0" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>

			</section>
			{/* ======================================= */}

			{/**Home Visits  */}

			{/* ======================================= */}

			<section id="HomeVisits" className="grid w-full grid-cols-1 lg:min-h-181.75 lg:grid-cols-2">

				{/* Left */}
				<div className="relative hidden lg:block">
					<Image
						src={HomeVisitJpg}
						alt="Audiologist on a home visit"
						fill
						quality={90}
						sizes="50vw"
						className="object-cover"
					/>
				</div>

				{/* Right */}
				<div className="flex flex-col items-start justify-center gap-4 bg-linear-[118.47deg,#0E4461_0%,#04293D_100%] px-4 py-12 sm:px-8 sm:py-16 lg:gap-5 lg:p-14 xl:p-20 xl:pr-32">

					<div className="flex items-center gap-5">
						<div className="h-0.5 w-13 bg-[#03B2E7]" />
						<HeaderPara text="HOME VISITS" textColor="text-[#03B2E7]" />
					</div>

					<MainHeader text="Can't visit us? We'll come to you." textColor="text-white" />

					<ParaGraph
						text="Many of our patients prefer the comfort of their own home. So if that suits you better, we'll simply bring the appointment to your front room."
						textColor="text-white/80"
					/>

					{/* Checklist: icon + text always on one line, items wrap as whole units */}
					<ul className="flex flex-col gap-3 font-sans text-base text-white/80 lg:text-xl">
						{["Comfortable", "Family can join", "Same expert every time"].map((label) => (
							<li key={label} className="flex items-center gap-2">
								<FaCheck className="shrink-0" />
								{label}
							</li>
						))}
					</ul>
				</div>

			</section>

			{/* ======================================= */}

			{/**Frequently asked Questions  */}

			{/* ======================================= */}

			<section className="w-full py-20 ">

				<div className=" z-10 mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full max-w-360 gap-10 px-4 sm:px-8 md:mb-12 lg:mb-16 lg:px-12">
					<div className="relative z-10 mx-auto mb-10 flex w-full flex-col gap-6 px-4 sm:px-8  lg:px-12">

						<div className="flex flex-col items-start gap-2">
							<div className="flex items-center gap-5">
								<div className="h-0.5 w-13 bg-[#03B2E7]" />
								<HeaderPara text="Questions" textColor="text-[#03B2E7]" />
							</div>
							<MainHeader text="Frequently asked questions" />
							<ParaGraph text="Still unsure about something? Give us a call and we'll talk it through." textSize="text-[20px]" />
						</div>

						<div className="bg-[#F1F8FC]  w-auto lg:w-md flex flex-col gap-5 items-center  py-8 rounded-3xl border border-[#0474BC1A] ">
							<h2 className="font-sans font-bold font-max(27px) ">Speak To The Directly</h2>
							<Link
								href="#"
								className="flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-primary bg-primary px-6 py-3 text-[16px] font-semibold text-[#F2FAFF] transition hover:bg-primary/80"
							>
								<TeleIcon /> Call us: 01274 862623
							</Link>
						</div>
					</div>
					{/**Accordion */}
					<div className=" flex flex-col ">

						{Accordion.map((item, index) => {

							const isOpen = openIndex === index;

							return (
								<div
									key={index}
									className={`flex flex-col px-2 transition-all duration-300 ease-in-out ${isOpen
										? "bg-[linear-gradient(90deg,rgba(3,178,231,0.1)_0%,rgba(3,178,231,0)_100%)]"
										: ""
										}`}
								>
									{/* Header */}
									<div
										className="flex cursor-pointer items-center justify-between border-t border-[#0474BC1A] px-2 py-5"
										onClick={() => handleAccordion(index)}
										aria-expanded={isOpen}
									>
										<MainHeader text={item.heading} textSize="text-[28px]" />
										<FaPlus
											className={`shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45" : "rotate-0"
												}`}
										/>
									</div>

									{/* Animated panel */}
									<div
										className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
											}`}
									>
										<div className="overflow-hidden">
											<ParaGraph
												text={item.para}
												textSize="text-[20px] leading-[30px]"
											/>
											<div className="h-5" />
										</div>
									</div>
								</div>
							)
						})}



					</div>
				</div>

			</section>


			{/* ======================================= */}

			{/**Team Visits  */}

			{/* ======================================= */}

			<section id="TeamsVisit" className="grid w-full grid-cols-1 lg:min-h-181.75 lg:grid-cols-2">

				{/* Left: image fills its half (desktop only) */}
				<div className="relative hidden lg:block">
					<Image
						src={TeamsImage}
						alt="speak to team"
						fill
						quality={90}
						sizes="50vw"
						className="object-cover"
					/>
				</div>

				{/* Right: text, vertically centered */}
				<div className="flex flex-col items-start justify-center gap-4 bg-primary px-4 py-12 sm:px-8 sm:py-16 lg:gap-5 lg:p-14 xl:p-20 xl:pr-32">

					<MainHeader text=" Speak to our team directly" textColor="text-white" textSize="text-[66px]" />

					<ParaGraph
						text="Book your free, no-obligation hearing assessment today and take the first step back to easy conversation."
						textColor="text-white/80" textSize="text-[26px]"
					/>

					<div className="flex flex-col justify-between gap-10">
						<Link
							href="#"
							className={`h-auto w-auto flex items-center gap-2 whitespace-nowrap rounded-2xl border border-primary px-4 py-3 text-[16px] font-semibold transition bg-white text-primary hover:bg-white/90`}
						>
							Book Your Assessment
						</Link>
						<Link
							href="#"
							className="flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-primary bg-primary px-6 py-3 text-[16px] font-semibold text-[#F2FAFF] transition hover:bg-primary/80"
						>
							<TeleIcon />{`${"  "} ${"01274 862623"}`}
						</Link>
					</div>

				</div>

			</section>

			{/* ======================================= */}

			{/**Testimonials */}

			{/* ======================================= */}

			<section id="testimonials" className="w-full overflow-hidden py-12 lg:py-14">

				<div className="mx-auto flex w-full max-w-360 flex-col items-center px-4 text-center sm:px-8 animate-fade-up">
					<MainHeader text="Testimonials" />
				</div>

				{/* Marquee window: py-4 leaves room so the hover lift and shadow aren't clipped */}
				<div className="mt-4 w-full overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] lg:mt-6">

					<div className="flex w-max animate-marquee [animation-duration:70s] hover:[animation-play-state:paused] motion-reduce:animate-none">
						{[0, 1].map((copy) => (
							<div key={copy} className="flex shrink-0 gap-6 pr-6" aria-hidden={copy === 1}>
								{Array.from({ length: CARD_COUNT }).map((_, i) => (
									<div
										key={`${copy}-${i}`}
										className="group relative flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-[#B7B9B9]/50 bg-white p-6 text-left shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15 sm:w-80 lg:w-[518px] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
									>
										{/* Soft glow on hover */}
										<div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


										{/* Content: 470px on lg (518px card minus 48px padding) */}
										<div className="relative z-10 flex w-full flex-col gap-4 pt-12 lg:w-[470px] ">
											<Image
												src={DoubleQuote}
												alt=""
												width={105}
												height={91}
												className="pointer-events-none absolute left-0 top-5 z-0 h-auto w-20 opacity-80 transition-transform duration-700 ease-out group-hover:-rotate-6 group-hover:scale-110 "
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


		</>
	);
}