

const values = [
  {
    icon: <i className="ri-lightbulb-fill"></i>,
    title: "Innovation First",
    description:
      "We constantly push the boundaries of what's possible with AI and data intelligence.",
  },
  {
    icon: <i className="ri-user-line"></i>,
    title: "Customer Success",
    description:
      "Your success is our success. We're obsessed with delivering value and exceeding expectations.",
  },
  {
    icon: <i className="ri-user-line"></i>,

    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we build and every relationship we nurture.",
  },
  {
    icon: <i className="ri-user-line"></i>,

    title: "Accessibility",
    description:
      "Powerful intelligence shouldn't be limited to enterprises. We make it available to everyone.",
  },
  {
    icon: <i className="ri-user-line"></i>,

    title: "Impact Driven",
    description:
      "We measure our success by the tangible impact we create for our customers' businesses.",
  },
  {
    icon: <i className="ri-user-line"></i>,
    title: "Transparency",
    description:
      "We believe in open communication, clear pricing, and honest relationships with our customers.",
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
        <section className="bg-[url('/images/bg-grid.jpg')] bg-cover bg-center bg-no-repeat min-h-[550px] relative flex items-center justify-center flex-col text-center md:mx-40 mx-10 border-x border-gray-700/50 ">

          <div className="bg-black/90 absolute inset-0 "></div>
          <div className="relative z-10">

            <p className="text-white font-light text-3xl md:text-4xl mb-4">Transforming Data Into
            </p>
            <h1 className="text-[#54F4A7] text-6xl md:text-7xl font-medium mb-6">Strategic Intelligence</h1>
            <p className="text-[#858585] text-xl md:text-2xl font-normal max-w-170 ">Choose a plan that fits your data scale and business goals. Start with a Free Trial or book a demo for Enterprise.</p>
          </div>
        </section>


        {/* preview section */}
        <section className="bg-white px-5 py-12">
          <div className="mx-auto max-w-6xl">

            <div className="flex min-h-64 items-center justify-center flex-col md:gap-10 gap-5 rounded-4xl bg-neutral-200 md:px-15 px-9 md:py-10 py-5 text-center text-neutral-600 md:min-h-96">

              <img src="images\preview.png" alt="preview image" />

              <button
                type="button"
                className=" text-xl md:text-2xl rounded-lg bg-indigo-500 px-8 py-2 font-medium text-white "
              >
                Get Started <i className="ri-arrow-right-long-line"></i>
              </button>


            </div>

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
            <article className="rounded-xl bg-white p-7 text-black md:p-10">
              <div className="flex size-12 items-center justify-center rounded-full text-indigo-100 text-2xl font-bold bg-indigo-600">
                <i className="ri-focus-2-line"></i>
              </div>


              <h2 className="mt-3 text-2xl md:text-4xl font-semibold">Our Story</h2>

              <p className="mt-4 leading-7 md:text-xl text-[#5C5555] font-normal">
                To empower every organization with AI-powered intelligence
                that turns data complexity into strategic clarity, enabling
                faster, smarter, and more confident decisions.
              </p>
            </article>

            <article className="rounded-xl bg-white p-7 text-black md:p-10">
              <div className="flex size-12 items-center justify-center rounded-full text-indigo-100 text-2xl font-bold bg-indigo-600">
                <i className="ri-eye-line"></i>
              </div>

              <h2 className="mt-3 text-2xl md:text-4xl font-semibold">Our Vision</h2>

              <p className="mt-4 leading-7 md:text-xl text-[#5C5555] font-normal">
                A world where every business decision is informed by
                intelligent insights, where data becomes a competitive
                advantage rather than a burden, and where AI serves as
                a trusted advisor to every team.
              </p>
            </article>
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
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl bg-white p-6 text-black"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                    S
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* getStarted */}
        <section className="px-5 py-12">
          <div className="flex flex-col items-center mx-auto max-w-6xl rounded-2xl bg-[#6366F1] px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="text-4xl font-semibold md:text-5xl max-w-150">
              Ready to turn data into strategy?
            </h2>

            <p className="mx-auto mt-5 max-w-100 text-indigo-100">
              Join leading companies using StechGrow to make smarter,
              faster decisions.
            </p>

            <button
              type="button"
              className="mt-5 text-xl rounded-lg bg-white px-8 py-2 font-medium text-black transition hover:bg-neutral-100"
            >
              Get Started <i className="ri-arrow-right-long-line"></i>
            </button>

            {/* Add the dashboard preview image below the CTA if required */}
          </div>
        </section>
      </main>

    </>
  );
}

export default About;
