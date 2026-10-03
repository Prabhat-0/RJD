import BookFreeTrialButton from "@/components/BookFreeTrialButton";
import vector from "../../public/Frame 68.png";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/heroImage.png";
import ParaGraph from "@/components/ParaGraph";
import HeroIcons from "@/components/HeroIcons";
import HeaderPara from "@/components/HeaderPara";
import { HolisticHearingMethod, HomeVisit, IndependentAdvice, LifeTimeSupport, MusicianSpecialist, RemoteCare, WhatsAppIcon } from "@/svg";

import { FaGift, FaStar, FaAward, FaUsers, FaCalendarCheck, FaArrowRight, FaCheck } from "react-icons/fa";
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

const Stars = ({ color }) => (
	<span className={`flex gap-0.5 text-[14px] ${color}`}>
		{[...Array(5)].map((_, i) => <FaStar key={i} />)}
	</span>
);

const heroIcons = [
	{ text: "Free Trial", icon: <FaGift className="text-primary" /> },
	{ text: "Google", icon: <Stars color="text-yellow-400" /> },
	{ text: "TrustPilot", icon: <Stars color="text-[#00B67A]" /> },
	{ text: "20+ Years Experience", icon: <FaAward className="text-primary" /> },
	{ text: "1000+ Happy Patients", icon: <FaUsers className="text-primary" /> },
	{ text: "Independent Audiologists", icon: <FaEarListen className="text-primary" /> },
	{ text: "30-Day Free Trial", icon: <FaCalendarCheck className="text-primary" /> },
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
	return (
		<>
			{/**Hero Section */}
			<main className="relative w-full bg-[#F2FAFF] xl:h-204.75" id="hero">

				{/* Background vector: own clipped layer, so the WhatsApp button can still overflow the section */}
				<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
					<Image
						src={vector}
						alt=""
						width={1058}
						height={806}
						quality={90}
						className="absolute bottom-0 left-0 h-full w-auto max-w-none object-contain object-left-bottom"
					/>
				</div>

				{/* Centered content container */}
				<div className="relative z-10 mx-auto flex w-full max-w-360 items-center gap-8 px-4 pt-10 pb-44 sm:px-8 lg:px-12 xl:h-full xl:pt-0 xl:pb-40">

					{/* Left column */}
					<div className="flex w-full flex-col gap-6 lg:w-1/2 lg:gap-8">
						<HeaderPara text="FREE, NO-OBLIGATION TRIAL" />

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
					<div className="relative hidden h-125 w-1/2 lg:block xl:h-full">
						<Image
							src={HeroImage}
							alt="Hearing specialist helping a patient"
							fill
							sizes={"100vw"}
							priority
							quality={90}
							className="pointer-events-none object-contain object-right-bottom"
						/>
					</div>
				</div>

				{/* Marquee */}
				<div className="absolute bottom-20 left-0 z-10 w-full overflow-hidden font-sans text-[18px]">
					<div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
						{[0, 1].map((copy) => (
							<div key={copy} className="flex shrink-0 gap-3 pr-3" aria-hidden={copy === 1}>
								{heroIcons.map((item) => (
									<HeroIcons key={`${copy}-${item.text}`} icon={item.icon} text={item.text} />
								))}
							</div>
						))}
					</div>
				</div>

				{/* WhatsApp button */}
				<div className="absolute -bottom-15 right-6 z-20 grid size-27.5 cursor-pointer place-items-center rounded-full bg-white shadow-md shadow-black/80 sm:right-25">
					<WhatsAppIcon className="size-14" />
				</div>
			</main>

			{/**Trusted Across cards  */}

			<section className="grid h-auto w-full place-items-center">
				<div className="flex w-full max-w-360 flex-col items-center justify-center pt-20 pb-20 gap-10">
					<div className="flex flex-col gap-3 items-center justify-center text-center">
						<HeaderPara text="Trusted Across Yorkshire" />
						<MainHeader text={"Why choose RJD Hearing Care"} />
						<ParaGraph textSize="text-[20px]" text={"Six reasons patients across Yorkshire trust us with their hearing, year after year."} />
					</div>
					<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
						{reasonCardItems.map((item) => (
							<ReasonCard key={item.headerText} element={item.element} headerText={item.headerText} paraText={item.paraText} />
						))}
					</div>
					<BookFreeTrialButton />
				</div>
			</section>

			<section className="relative w-full overflow-hidden bg-[#F2FAFF] py-16 lg:py-20">

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
				<div className="relative z-10 mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-12">

					{/* Heading */}
					<div className="mb-12 flex flex-col items-center justify-center gap-4 text-center lg:mb-16">
						<HeaderPara text="YOUR JOURNEY" />
						<MainHeader text="How We Help You" />
					</div>

					<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">

						{/* Left: image */}
						<div className="w-full hidden lg:block">
							<Image
								src={JourneyImage}
								alt="Journey Image"
								width={630}
								height={806}
								quality={90}
								className="mx-auto h-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
							/>
						</div>

						{/* Right: timeline */}
						<div className="flex w-full flex-col gap-10">
							<ol>
								{journeySteps.map((step, index) => (
									<li key={step.title} className="relative pb-10 pl-20 last:pb-0 sm:pl-24">

										{/* Number circle */}
										<div className="absolute left-0 top-0 z-10 grid size-15 place-items-center rounded-full bg-primary text-xl font-semibold text-white">
											{index + 1}
										</div>

										{/* Line to the next circle: never on the last step */}
										<div className="absolute left-7.5 top-15 bottom-0 w-px -translate-x-1/2 bg-primary last:hidden" />

										<MainHeader text={step.title} textColor="text-primary" textSize="text-2xl lg:text-[28px]" />
										<ParaGraph text={step.text} textSize="text-base lg:text-[18px]" />
									</li>
								))}
							</ol>

							<div className="w-full grid place-items-center">
								<BookFreeTrialButton
									background="bg-primary"
									textColor="text-[#F2FAFF]"
									hoverBg="hover:bg-[#F2FAFF]"
									hoverText="hover:text-primary"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/** Featured Section: paste this inside your page's JSX, where the old section was */}
			<section className="relative w-full overflow-hidden py-16 lg:py-20">

				{/* Background image: pinned bottom-right, full width */}
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

				{/* Header row: label + heading on the left, button at the end */}
				<div className="relative z-10 mx-auto mb-10 flex w-full max-w-360 flex-col gap-6 px-4 sm:px-8 md:mb-12 md:flex-row md:items-end md:justify-between lg:mb-16 lg:px-12">

					<div className="flex flex-col items-start gap-4">
						<div className="flex items-center gap-5">
							<div className="h-0.5 w-13 bg-[#03B2E7]" />
							<HeaderPara text="Featured Services" textColor="text-[#03B2E7]" />
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

					{/* Big card: image fills the card, gradient fades black 80% (bottom) to 0% (top) */}
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


			{/**Services Section  */}
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
						/>
					</div>
				</div>
			</section>

			{/**Best hearing aids section */}
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
								{/* Shorter divider: 60% of the card height, centered, hidden after the last card and on phones */}
								{index < hearingCards.length - 1 && (
									<div className="absolute right-0 top-1/2 hidden h-3/5 w-px -translate-y-1/2 bg-[#B7B9B9] md:block" />
								)}

								{/* Image: scales with the card, never overflows */}
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

									{/* One line at every width */}
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

			{/**Home Visits  */}
			<section id="HomeVisits" className="grid w-full grid-cols-1 lg:min-h-181.75 lg:grid-cols-2">

				{/* Left: image fills its half (desktop only) */}
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

				{/* Right: text, vertically centered */}
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

			<section id="HomeVisits" className="grid w-full grid-cols-1 lg:min-h-181.75 lg:grid-cols-2">

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
		</>
	);
}