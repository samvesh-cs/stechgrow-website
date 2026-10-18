import Footer from "../components/Footer";
import GetStartedSection from "../components/GetStartedSection";
import Preview from "../components/Preview";

const values = [
  {
    icon: <i className="ri-focus-2-line"></i>,
    title: "Our Story",
    description: " To empower every organization with AI-powered intelligence that turns data complexity into strategic clarity, enabling faster, smarter, and more confident decisions."
  },
  {
    icon: <i className="ri-eye-line"></i>,
    title: "Our Vision",
    description: " A world where every business decision is informed by intelligent insights, where data becomes a competitive advantage rather than a burden, and where AI serves as a trusted advisor to every team."
  }
]

const capabilities = [
  {
    icon: <i className="ri-lightbulb-fill"></i>,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with AI and data intelligence.",
  },
  {
    icon: <i className="ri-user-line"></i>,
    title: "Customer Success",
    description: "Your success is our success. We're obsessed with delivering value and exceeding expectations.",
  },
  {
    icon: <i className="ri-award-line"></i>,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we build and every relationship we nurture.",
  },
  {
    icon: <i className="ri-global-line"></i>,
    title: "Accessibility",
    description: "Powerful intelligence shouldn't be limited to enterprises. We make it available to everyone.",
  },
  {
    icon: <i className="ri-focus-2-line"></i>,
    title: "Impact Driven",
    description: "We measure our success by the tangible impact we create for our customers' businesses.",
  },
  {
    icon: <i className="ri-eye-line"></i>,
    title: "Transparency",
    description: "We believe in open communication, clear pricing, and honest relationships with our customers.",
  },
];

const leaders = [
  { name: "Pratik Sonawane", role: "Founder and CEO and Team Stechgrow" },
  { name: "Pratik Sonawane", role: "Founder and CEO and Team Stechgrow" },
  { name: "Pratik Sonawane", role: "Founder and CEO and Team Stechgrow" },
  { name: "Pratik Sonawane", role: "Founder and CEO and Team Stechgrow" },
];

function About() {
  return (
    <>

      <main className="bg-black text-white">

        {/* hero section */}
        <section className="bg-[url('/images/bg-grid.jpg')] bg-cover bg-center bg-no-repeat min-h-137 relative flex items-center justify-center flex-col text-center md:mx-40 mx-10 border-x border-gray-700/50  ">

          <div className="bg-black/90 absolute inset-0 "></div>
          <div className="relative z-10 ">

            <p className="text-white font-light text-2xl md:text-3xl mb-4" >
              Transforming Data Into
            </p>
            <h1 className="text-emerald-400  text-5xl md:text-6xl font-medium mb-6">
              Strategic Intelligence
            </h1>
            <p className="text-[#858585] text-lg md:text-xl font-normal mx-auto max-w-150 ">
              Choose a plan that fits your data scale and business goals. Start with a Free Trial or book a demo for Enterprise.
            </p>

          </div>
        </section>

        {/* preview section */}
        <section className="bg-white px-5 py-12">
          <div className="mx-auto max-w-6xl">
            <Preview />

            <div className="mx-auto max-w-4xl py-12 text-center text-black">
              <h1 className="md:text-5xl font-semibold text-indigo-700 text-4xl">
                Our Story
              </h1>

              <p className="mt-6 md:text-xl text-base leading-7 text-neutral-600">
                StechGrow was born from a simple observation: organizations
                are drowning in data but starving for insights. We watched
                countless teams struggle with fragmented tools, manual
                analysis, and the constant challenge of turning raw data
                into strategic decisions.
              </p>

              <p className="mt-4 md:text-xl text-base leading-7 text-neutral-600">
                Founded in 2023, StechGrow combines cutting-edge AI with
                enterprise-grade reliability to bridge the gap between
                data and action. Our platform doesn't just visualize data
                — it understands it, predicts outcomes, and provides
                actionable recommendations.
              </p>

              <p className="mt-4 md:text-xl text-base leading-7 text-neutral-600">
                Today, we serve thousands of organizations worldwide,
                from fast-growing startups to Fortune 500 enterprises.
                Our name reflects our purpose: Strategic + Technology = Growth.
              </p>

              {/* stats */}
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold">2025</h2>
                  <p className="mt-2 text-sm md:text-2xl text-neutral-500">Founded</p>
                </div>

                <div>
                  <h2 className="text-4xl md:text-6xl font-bold">50+</h2>
                  <p className="mt-2 text-sm md:text-2xl text-neutral-500">
                    Team Members
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl md:text-6xl font-bold">99.9%</h2>
                  <p className="mt-2 text-sm md:text-2xl text-neutral-500">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* story and vision */}
        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div className="rounded-xl bg-white p-7 text-black md:p-10 group hover:bg-indigo-500 hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex size-12 items-center justify-center rounded-full text-indigo-100 text-2xl  bg-indigo-600 group-hover:bg-white group-hover:text-indigo-500">
                  {value.icon}
                </div>

                <h2 className="mt-3 text-2xl md:text-4xl font-semibold">{value.title}</h2>

                <p className="mt-4 leading-7 md:text-xl text-neutral-700 group-hover:text-neutral-200 font-normal">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* capabilities */}
        <section className="px-5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-6xl font-medium ">
                Core Capabilities
              </h2>

              <p className="mt-4 text-neutral-400 md:text-xl w-95 font-normal">
                Six integrated modules working together seamlessly
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl bg-white p-6 text-black group hover:bg-indigo-500 hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-full text-indigo-100 text-2xl  bg-indigo-600 group-hover:bg-white group-hover:text-indigo-500">
                    {value.icon}
                  </div>

                  <h3 className="mt-5 md:text-2xl text-xl font-medium">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600 group-hover:text-neutral-200 font-normal">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* team */}
        <section className="px-5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className=" font-semibold text-3xl md:text-6xl">
                Leadership Team
              </h2>

              <p className="mx-auto mt-4 font-normal text-xl tracking-wider max-w-2xl text-neutral-400">
                Led by industry veterans with decades of combined
                experience in AI, data science, and enterprise software
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-md md:max-w-90 text-center">
              <div className="flex h-100 items-center justify-center rounded-xl bg-neutral-200 text-neutral-500 transition-all duration-300 hover:scale-102">

              </div>

              <h3 className="mt-4 text-2xl font-semibold">
                Pratik Sonawane
              </h3>

              <p className="mt-1 text-xl font-normal text-neutral-400">
                Founder and CEO and Team Stechgrow
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {leaders.map((leader, index) => (
                <div key={`${leader.name}-${index}`}>
                  <div className="flex h-60 items-center justify-center rounded-lg bg-neutral-200 text-sm text-neutral-500 md:h-70 transition-all duration-300 hover:scale-102">
                  </div>

                  <h3 className="mt-3 text-xl font-semibold">{leader.name}</h3>

                  <p className="mt-1 text-xs  font-normal leading-5 text-neutral-400">
                    {leader.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* get started */}
        <GetStartedSection />
      </main>
      <Footer />
    </>
  );
}

export default About;
