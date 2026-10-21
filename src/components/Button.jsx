import { ArrowRight } from "lucide-react";

export default function Button({
    text = "Get Started",
    color = "bg-indigo-500",
    textColor = "text-white",
    href = "#",
}) {
    return (
        <a
            href={href}
            className={`group inline-flex items-center gap-2 text-xl md:text-2xl rounded-lg  px-8 py-2 font-medium transition-colors duration-300 ${color} ${textColor} active:scale-98`}
        >
            <span>{text}</span>
            <ArrowRight
                size={22}
                className="w-0 opacity-0 -translate-x-2 overflow-hidden transition-all duration-300 group-hover:w-4.5 group-hover:opacity-100 group-hover:translate-x-0" />
        </a>
    );
}

