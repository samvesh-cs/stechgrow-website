import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-[#101010] text-white">
            <div className="mx-auto md:flex max-w-7xl gap-8 px-6 py-12 justify-between border-b border-white/10">
                <div className="lg:col-span-2">
                    <h2 className="flex items-center gap-2 text-xl font-semibold">
                        <img src="images\logo1.png" className="size-14" alt="Stechgrow Logo" />
                        Stechgrow
                    </h2>

                    <p className="mt-6 max-w-75 text-lg leading-6 text-neutral-400">
                        AI-Powered Intelligence for Strategic Business Growth
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <img src="images\startupIndiaLogo.png" className="h-15" alt="Startup India Logo" />
                        <img src="images\IITRoparLogo.png" className="h-18" alt="IIT Ropar Logo" />

                    </div>
                </div>
                <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 md:pt-0">

                    <div>
                        <h3 className="mb-4 font-medium text-2xl">Links</h3>

                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/stechgrow.com/" aria-label="LinkedIn" className="text-neutral-300 transition-colors text-2xl hover:text-white"
                            >
                                <i className="ri-linkedin-fill"></i>
                            </a>

                            <a href="https://x.com/stechgrow" aria-label="X" className=" text-2xl text-neutral-300 transition-colors hover:text-white"
                            >
                                <i className="ri-twitter-x-line"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 font-medium  text-2xl">Product</h3>
                        <ul className="space-y-3 text-lg text-neutral-400 transition-all duration-200">
                            <li>
                                <Link to="/platform" className="hover:text-white">Platform</Link>
                            </li>
                            <li>
                                <Link to="/solution" className="hover:text-white">Solutions</Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="hover:text-white">Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-medium text-2xl">Company</h3>
                        <ul className="space-y-3 text-lg text-neutral-400 transition-all duration-200">
                            <li>
                                <Link to="/about" className="hover:text-white">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-medium text-2xl">Legal</h3>
                        <ul className="space-y-3 text-lg text-neutral-400">
                            <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="/" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="/" className="hover:text-white">Cookie Policy</a></li>
                            <li><a href="/" className="hover:text-white">Accessibility</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/10 px-6 py-5  text-center md:text-lg text-neutral-500">
                © 2026 StechGrow Intelligence AI. All rights reserved.
            </div>

            <div className="overflow-visible px-4">
                <p className="bg-linear-to-r from-indigo-950 from-25% via-indigo-400 via-50% to-indigo-950 to-100% bg-clip-text text-center text-[18vw] pt-4 pb-10 font-semibold leading-none tracking-tight text-transparent ">
                    Stechgrow

                </p>
            </div>
        </footer>
    );
}

