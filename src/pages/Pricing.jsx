import FAQ from "../components/FAQ";
import GetStartedSection from "../components/GetStartedSection";
import PricingCards from "../components/PricingCards";

export default function Pricing() {
  return (
    <main className="bg-black text-white">

      {/* hero section */}
      <section className="bg-[url('/images/bg-grid.jpg')] bg-cover bg-center bg-no-repeat min-h-137 relative flex items-center justify-center flex-col text-center lg:mx-20 px-5 lg:p-5 md:mx-10 md:p-2 border-x border-gray-700/50 ">

        <div className="bg-black/90 absolute inset-0 "></div>
        <div className="relative z-10">

          <h1 className="text-white text-5xl md:text-6xl font-medium mb-2">Choose the Plan That Fits</h1>
          <h1 className="text-emerald-400 text-5xl md:text-6xl font-medium mb-6">Your Growth</h1>
          <p className="text-[#858585] text-lg md:text-xl font-normal mx-auto max-w-150 ">
            Choose a plan that fits your data scale and business goals. Start with a Free Trial or book a demo for Enterprise.
          </p>

        </div>
      </section>

      {/* offers */}
      <section className="bg-[url('/images/bg-grid.jpg')] bg-cover bg-center bg-no-repeat min-h-137 relative  flex items-center justify-center flex-col text-center lg:mx-20 px-5 lg:p-5 md:mx-10 md:p-2 pb-8 border-x border-gray-700/50 ">
        <div className="bg-black/90 absolute inset-0 "></div>

        <PricingCards />

      </section>

      {/* FAQ */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-medium ">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-neutral-400 md:text-lg  font-normal">
              Everything you need to know about our pricing
            </p>
          </div>

          <FAQ />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          </div>
        </div>
      </section>

      {/* get started */}
      <GetStartedSection />
    </main>
  )
}
