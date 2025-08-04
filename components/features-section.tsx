import { Workflow, Shield, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Workflow,
      title: "Streamlined Workflows",
      description:
        "Visualize and optimize every step in real time. Create efficient processes that adapt to your team's needs.",
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Control who sees what with flexible permissions. Secure your data while enabling collaboration.",
    },
    {
      icon: BarChart3,
      title: "Instant Insights",
      description: "Custom dashboards powered by your data. Make informed decisions with real-time analytics.",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
            Everything you need to <span className="text-[#4ABDAC]">flow forward</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your workflow and boost productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-[#4ABDAC]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4ABDAC]/10 rounded-2xl mb-6 group-hover:bg-[#4ABDAC]/20 transition-colors">
                <feature.icon className="w-8 h-8 text-[#4ABDAC]" />
              </div>

              <h3 className="text-xl font-semibold text-[#333333] mb-4">{feature.title}</h3>

              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
