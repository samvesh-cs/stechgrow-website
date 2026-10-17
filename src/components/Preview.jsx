export default function Preview() {
    return (
        <div className="flex min-h-64 items-center justify-center flex-col md:gap-10 gap-5 rounded-4xl bg-neutral-100 md:px-15 px-9 md:py-10 py-5 text-center text-neutral-600 md:min-h-96">

            <img src="images\previewVideo.png" alt="preview image" className="shadow-md rounded-2xl" />

            <button
                type="button"
                className="text-xl md:text-2xl rounded-lg bg-indigo-500 px-8 py-2 font-medium text-white transition-all duration-200 hover:bg-indigo-600 hover:scale-[1.02] active:scale-98"
            >
                Get Started <i className="ri-arrow-right-long-line"></i>
            </button>

        </div>
    )
}
