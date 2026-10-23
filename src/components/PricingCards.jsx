import {BadgePercent,Check} from "lucide-react"

const pricingPlans = [
    {
        name: "Spark",
        description: "Explore AI-Powered Decision Intelligence",
        price: "Free Trial",
        subtitle: "- 14 Days",
        buttonText: "Start Free Trial",
        theme: "spark",
        features: [
            "Interactive Dashboards",
            "Basic Analytics & KPI Tracking",
            "Business Health Score",
            "Excel & CSV Data Upload",
            "AI Insight Summaries",
            "Limited Recommendations",
            "Email Support",
        ],
    },
    {
        name: "Growth",
        description: "Transform Data into Business Intelligence",
        oldPrice: "₹44,999",
        price: "₹27,999 +",
        subtitle: "GST / Year",
        buttonText: "Get Started",
        theme: "growth",
        badge: "First 25 Users",
        features: [
            "Everything in Spark",
            "Multi-Source Data Integration",
            "Business Health Monitoring",
            "AI-Driven Recommendations",
            "Anomaly Detection",
            "Performance & Trend Analysis",
            "Up to 5 Users",
            "Priority Support",
        ],
    },
    {
        name: "Elite",
        description: "Move Beyond Analytics to Intelligent Decision",
        oldPrice: "₹74,999",
        price: "₹59,999 +",
        subtitle: "GST / Year",
        buttonText: "Get Started",
        theme: "elite",
        badge: "First 25 Users",
        features: [
            "Everything in Growth",
            "AI Decision Engine",
            "Advanced Forecasting",
            "Advisory Layer (AI Co-Pilot)",
            "Strategic Business Recommendations",
            "Advanced Anomaly Detection",
            "Executive Intelligence Reports",
            "Business Performance Benchmarking",
            "Advanced Trend & Opportunity Analysis",
            "Up to 20 Users",
            "Premium Support",
            "Early Access to New Features",
        ],
    },
    {
        name: "Enterprise",
        description:
            "A Complete Decision Intelligence Ecosystem",
        price: "Customized",
        subtitle: "Pricing",
        buttonText: "Start Free Trial",
        theme: "enterprise",
        features: [
            "Everything in Elite",
            "Unlimited Users",
            "Custom Integrations",
            "Dedicated AI Models",
            "Dedicated Account Manager",
            "SLA-Based Support",
            "Custom Onboarding & Training",
        ],
    },
];

export default function PricingCards() {
    return (
        <div className=" z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:px-4">

            {pricingPlans.map((plan) => (
                <div key={plan.theme} className={`${plan.theme} py-8 px-6 rounded-lg relative transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl`}>
                    {plan.badge && (
                        <div className="absolute -top-6 -right-2 rotate-16 flex items-center justify-center gap-2 rounded bg-white text-black px-3 py-3 border border-gray-100 shadow-xl">
                            <BadgePercent className="shrink-0 text-xl font-medium"/>
                            <p className="text-xl font-medium tracking-tight text-black ">
                                {plan.badge}

                            </p>
                        </div>
                    )}

                    <h2 className="text-xl font-[Geist_Mono] font-medium text-left">{plan.name}</h2>

                    <div className="mx-auto my-3 border-t border-gray-900/20" />

                    <p className="text-sm text-left mt-5 truncate  font-light">{plan.description}</p>

                    <div className="relative mt-12 ">
                        {
                            plan.oldPrice &&
                            <span className="flex absolute -top-8 left-0 text-xl text-gray-700 font-normal line-through ">{plan.oldPrice}</span>
                        }
                    </div>

                    <h3 className="text-5xl font-medium  text-left">{plan.price}</h3>
                    <p className="ml-2 mt-1 text-left font-normal text-base">{plan.subtitle}</p>

                    <button
                        type="button"
                        className={`btn-${plan.theme} font-[Geist_Mono] font-medium mt-8 mb-4 text-sm w-full rounded-lg px-8 py-2  transition-all duration-200 hover:scale-[1.02] active:scale-98`}
                    >
                        {plan.buttonText}
                    </button>

                    <ul>
                        {plan.features.map((feature) => (
                            <li key={feature} className="flex gap-3 mb-2 items-center ">
                                <span className="flex size-6 items-center p-0.5 justify-center rounded-full text-black text-base border border-black bg-white shrink-0" >
                                    <Check className="font-semibold" />
                                </span>
                                <span className="font-normal text-sm text-left">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
