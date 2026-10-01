import BookFreeTrialButton from "@/components/BookFreeTrialButton";
import vector from "../../public/Frame 68.png"
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/heroImage.png"
import ParaGraph from "@/components/ParaGraph";
import { FaGift, FaStar } from "react-icons/fa";
import HeroIcons from "@/components/HeroIcons";

// const heroIcons = [{ icons: <FaGift />, text: "Free Trial" }, { icons: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>, text: "Google" }, { icons: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>, text: "TrustPilot" }, { icons: "20+", text: "Years Experience" }, { icons: "1000+", text: "Happy Patients" }, { icons: "", text: "Independent Audiologists" }, { icons: "30-", text: "Day Free Trial" },]

const heroIcons = [
	{ icons: <FaGift />, text: "Free Trial" }, 
	{ icons: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>, text: "Google" }, 
	{ icons: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>, text: "TrustPilot" }, 
	{ icons: "20+", text: "Years Experience" }, 
	{ icons: "1000+", text: "Happy Patients" }, 
	{ icons: "", text: "Independent Audiologists" }, 
	{ icons: "30-", text: "Day Free Trial" },]

const TeleIcon = () => {
	return (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="white" />
	</svg>
	)
}
const paraText = "Try any leading hearing aid free for one month, in your own home, with no pressure to buy. Our friendly Yorkshire team makes it simple, from your very first phone call."

export default function Home() {
	return (
		<section className="relative w-full h-[90vh] bg-[#F2FAFF] overflow-auto">

			<Image
				src={vector}
				alt="vector"
				width={1058}
				height={806}
				className="absolute bottom-0 left-0 z-0 h-full object-cover pointer-events-none"
			/>

			{/* Centered content container */}
			<div className="relative z-10 mx-auto h-full w-360 px-4 sm:px-8 lg:px-12 flex items-center gap-8">
				<div className="flex flex-col gap-8 w-[50%]">
					<p className="font-sans text-[18px] text-[#7B7B7B]">FREE, NO-OBLIGATION TRIAL</p>
					<h1 className="font-fraunces font-bold text-primary text-[4rem] leading-tight tracking-tight">
						<span className="block">Hear every</span>
						<span className="block">conversation clearly</span>
						<span className="block">again, right now</span>
					</h1>
					<ParaGraph text={paraText} />

					<div className="flex gap-5 ">
						<Link href="#" className='flex items-center gap-2 whitespace-nowrap rounded-full hover:bg-[#F2FAFF] px-6 py-3 text-[16px] font-semibold  hover:text-primary transition bg-primary text-[#F2FAFF] border-2 border-[primary]'>
							<TeleIcon className="hover:text-primary hover:bg-primary " /> Call us: 01274 862623
						</Link>
						<BookFreeTrialButton
							background="bg-[#F2FAFF]"
							textColor="text-primary"
							hoverBg="hover:bg-primary"
							hoverText="hover:text-[#F2FAFF]"
						/>
					</div>
				</div>
				<div className="hidden lg:block relative h-full w-1/2 mt-5">
					<Image
						src={HeroImage}
						alt="heroImage"
						fill
						priority
						className="object-contain  object-right pointer-events-none"
					/>
				</div>
			</div>
			{/* <div className="absolute bottom-10 left-0 flex gap-3 z-10 overflow-auto font-sans text-[18px]">
			{heroIcons.map((item)=>{return (<HeroIcons key={item.text} text={item.text} icons={item.icons}/>)})}
	  </div> */}

			<div className="absolute bottom-10 left-0 flex gap-3 z-10 font-sans text-[18px]">
				{heroIcons.map((item) => { return (<HeroIcons key={item.text} text={item.text} icons={item.icons} />) })}
			</div>

		</section>
	);
}
