import { Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormData(initialFormData);
  }

  return (
    <main className="bg-[#090909] text-white">
      {/* hero section */}
      <section className="bg-[url('/images/bg-grid.jpg')] bg-cover bg-center bg-no-repeat min-h-100 relative flex items-center justify-center flex-col text-center  lg:mx-20 px-5 lg:p-5 md:mx-10 md:p-2 border-x border-gray-700/50 ">

        <div className="bg-black/90 absolute inset-0 "></div>
        <div className="relative z-10">

          <h1 className="text-4xl font-medium md:text-6xl">
            Get in <span className="text-[#35D9A3]">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-400 font-normal md:text-lg leading-none">
            Have questions? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>

        </div>
      </section>


      {/* Contact Content */}
      <section className="bg-[url('/images/bg-grid.jpg')] bg-cover bg-center bg-no-repeat min-h-137 relative flex items-center justify-center flex-col text-center lg:mx-20 px-5 lg:p-5 md:mx-10 md:p-2 border-x border-gray-700/50 md:pb-30 pb-10">
        <div className="bg-black/90 absolute inset-0  "></div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-7 rounded-2xl bg-white px-4 py-6 text-black lg:grid-cols-2 lg:gap-8 md:grid-cols-1 md:gap-8 md:p-8">
          {/* Info */}
          <div className="bg-[url('/images/contactFormBG.png')] bg-cover bg-bottom bg-no-repeat relative flex  flex-col rounded-xl p-7 text-white md:min-h-165 md:p-12 ">
            <div className="bg-black/60 absolute inset-0 rounded-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <img src="images\logo2.svg" className="size-18" alt="Stechgrow Logo" />
                <h2 className="md:text-4xl text-2xl font-semibold">Stechgrow</h2>
              </div>

              <div className="mt-10 max-w-sm text-lg text-left leading-6 font-normal text-neutral-400">
                <p>
                  Empowering businesses with AI-driven analytics, predictive
                  insights, and intelligent risk monitoring.
                </p>
                <p>
                  Our platform
                  helps organizations transform complex data into clear,
                  strategic decisions.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-10">
              <div className="mb-5 border-t border-white/30" />
              <a
                href="mailto:info@stechgrow.com"
                className="mb-3 flex items-center gap-3 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                <span className="flex size-10 text-xl items-center justify-center rounded-full bg-white text-black">
                  <Mail />
                </span>
                info@stechgrow.com
              </a>

              <a
                href="tel:+919987238290"
                className="flex items-center gap-3 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                <span className="flex size-10 text-xl items-center justify-center rounded-full bg-white text-black">
                  <Phone />
                </span>
                +91 9987238290
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:py-6 py-2">
            <h2 className="text-3xl text-left font-medium text-[#625FF0] md:text-4xl">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name" className="mb-2 block text-base text-left font-normal text-neutral-600"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-[#EEEEEE] px-4 py-4 outline-none transition focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email" className="mb-2 block text-base text-left font-normal text-neutral-600"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-[#EEEEEE] px-4 py-4 outline-none transition focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject" className="mb-2 block text-base text-left font-normal text-neutral-600"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-[#EEEEEE] px-4 py-4 outline-none transition focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message" className="mb-2 block text-base text-left font-normal text-neutral-600"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y rounded-xl bg-[#EEEEEE] px-4 py-4 outline-none transition focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <button
                type="submit" className=" md:text-xl rounded-lg bg-indigo-500 w-full px-8 py-2 font-medium text-white transition-all duration-200 hover:bg-indigo-600 hover:scale-[1.02] active:scale-98"
              >Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}


