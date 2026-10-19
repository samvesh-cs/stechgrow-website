import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-center text-white">
            <p className="mb-3 text-lg font-semibold uppercase tracking-[0.3em] text-[#35D9A3]">
                Error 404
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
                Page not found
            </h1>

            <p className="mt-4 max-w-md text-neutral-400">
                Sorry, the page you're looking for doesn't exist
                or may have been moved.
            </p>

            <Link
                to="/"
                className="text-xl mt-5 md:text-2xl rounded-lg bg-indigo-500 px-8 py-2 font-medium text-white transition-all duration-200 hover:bg-indigo-600 hover:scale-[1.02] active:scale-98"
            >
                Back to Home
            </Link>
        </div>
    );
}