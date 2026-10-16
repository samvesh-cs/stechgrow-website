
export default function GetStartedSection() {
    return (
        <section className="px-5 py-12">
            <div className="flex flex-col items-center mx-auto max-w-6xl rounded-2xl bg-[#6366F1] px-6 pt-12 pb-0 text-center md:px-12 md:pt-16 md:pb-0">
                <h2 className="text-4xl font-semibold md:text-5xl max-w-150">
                    Ready to turn data into strategy?
                </h2>

                <p className="mx-auto mt-5 max-w-100 text-indigo-100">
                    Join leading companies using StechGrow to make smarter,
                    faster decisions.
                </p>

                <button
                    type="button"
                    className="mt-5 text-xl rounded-lg bg-white px-8 py-2 font-medium text-black transition-all duration-200 hover:scale-[1.02] active:scale-98"
                >
                    Get Started <i className="ri-arrow-right-long-line"></i>
                </button>

                <img src="images\preview.png" alt="preview image" />
            </div>
        </section>
    )
}
