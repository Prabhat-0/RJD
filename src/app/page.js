import BookFreeTrialButton from "@/components/BookFreeTrialButton";
import vector from "../../public/Frame 68.png";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/heroImage.png";
import ParaGraph from "@/components/ParaGraph";
import HeroIcons from "@/components/HeroIcons";
import HeaderPara from "@/components/HeaderPara";
import { HolisticHearingMethod, HomeVisit, IndependentAdvice, LifeTimeSupport, MusicianSpecialist, RemoteCare, WhatsAppIcon } from "@/svg";

import { FaGift, FaStar, FaAward, FaUsers, FaCalendarCheck } from "react-icons/fa";
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

		</>
	);
}