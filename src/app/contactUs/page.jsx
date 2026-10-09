"use client";

import {  useState } from "react";
import {  motion, MotionConfig } from "framer-motion";
import {  FaChevronDown } from "react-icons/fa6";
import HeaderPara from "@/components/HeaderPara";
import MainHeader from "@/components/MainHeader";
import ParaGraph from "@/components/ParaGraph";

const MAP_QUERY = "jaipur,India"; 
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

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
const viewport = { once: true, amount: 0.2 };

const inputClass =
	"w-full rounded-xl border border-[#0474BC1A] bg-[#F1F8FC] px-4 py-3 font-sans text-sm text-nav-items outline-none transition placeholder:text-nav-items/40 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 md:text-base";

const labelClass = "font-sans text-sm font-semibold text-nav-items md:text-base";

export default function ContactPage() {
    const [name,setName]=useState(null)
    const [error,setError]=useState(null);
    const [successMessage,setSuccessMessage]=useState(null);
	async function handleSubmit(e) {
		e.preventDefault();
        if(name===null){
            setError("Name is Required");
            return;
        };
        setSuccessMessage(`We will shortly connect with you ! ${name}`);
        setTimeout(()=>{
            setError(null);
            setSuccessMessage(null);
            setName(null);
        },3000)
		
	}

	return (
		<MotionConfig reducedMotion="user">
			<main className="w-full overflow-x-clip bg-[#F2FAFF] pt-(--nav-h)" id="contact">
				<div className="mx-auto w-full max-w-[1250px] 2xl:max-w-360 px-4 py-6 sm:px-8 sm:py-10 md:py-16 lg:px-0 lg:py-20">

					{/* Heading */}
					<motion.div
						variants={fadeUp}
						initial="hidden"
						animate="show"
						className="mb-6 flex flex-col items-center gap-2 text-center sm:mb-10 md:gap-4 lg:mb-14"
					>
						<MainHeader
							text="Get in touch with us"
							textSize="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[26px]"
							font="font-gelasio"
                            textColor="text-[#0474BC]"
						/>
						<ParaGraph
							text="Send us a message and our friendly Yorkshire team will get back to you, or give us a call on 01274 862623."
							textSize="text-base md:text-xl"
						/>
					</motion.div>

					<div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-10">

						{/* Form */}
						<motion.form
							variants={fadeLeft}
							initial="hidden"
							whileInView="show"
							viewport={viewport}
							onSubmit={handleSubmit}
							className="flex flex-col gap-4 rounded-2xl border border-primary/20 bg-white p-4 sm:gap-5 sm:p-8 lg:p-10"
						>
							<div className="flex flex-col gap-1.5">
								<label htmlFor="name" className={labelClass}>Name</label>
								<input id="name" onChange={(e)=>setName(e.target.value)} name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputClass} />
							</div>

							<div className="flex flex-col gap-1.5">
								<label htmlFor="email" className={labelClass}>Email</label>
								<input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
								<div className="flex flex-col gap-1.5">
									<label htmlFor="phone" className={labelClass}>Phone</label>
									<input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="07123 456789" className={inputClass} />
								</div>

								<div className="flex flex-col gap-1.5">
									<label htmlFor="gender" className={labelClass}>Gender</label>
									<div className="relative">
										<select id="gender" name="gender" required defaultValue="" className={`${inputClass} cursor-pointer appearance-none pr-10`}>
											<option value="" disabled defaultValue={"male"}>Select gender</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
                                            <option value="others">Others</option>
										</select>
										<FaChevronDown className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-primary" />
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-1.5">
								<label htmlFor="address" className={labelClass}>Address</label>
								<textarea id="address" name="address" rows={3} required autoComplete="street-address" placeholder="Street, city, postcode" className={`${inputClass} resize-none`} />
							</div>

							<button
								type="submit"
								className="mt-1 w-full cursor-pointer rounded-full border border-primary bg-primary px-6 py-3 font-sans text-sm font-semibold text-[#F2FAFF] transition hover:bg-[#F2FAFF] hover:text-primary disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
							>
								Send message
							</button>
                            {error && <span className="text-red-600 bg-transparent backdrop-blur-3xl rounded-3xl p-4">{error}</span>}
                            {successMessage && <span className="text-green-600  border-primary backdrop-blur-3xl rounded-3xl p-4">{successMessage}</span>}

						</motion.form>

						{/* Map */}
						<motion.div
							variants={fadeRight}
							initial="hidden"
							whileInView="show"
							viewport={viewport}
							className="h-72 overflow-hidden rounded-2xl border border-primary/20 bg-white sm:h-96 lg:h-auto lg:min-h-full"
						>
							<iframe
								title="Our location on Google Maps"
								src={MAP_SRC}
								className="size-full border-0"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								allowFullScreen
							/>
						</motion.div>
					</div>
				</div>
			</main>
		</MotionConfig>
	);
}