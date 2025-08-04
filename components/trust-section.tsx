export function TrustSection() {
  const clients = [
    { name: "Acme Corp", logo: "/placeholder.svg?height=40&width=120&text=ACME" },
    { name: "NovaCorp", logo: "/placeholder.svg?height=40&width=120&text=NOVA" },
    { name: "TechFlow", logo: "/placeholder.svg?height=40&width=120&text=TECHFLOW" },
    { name: "DataSync", logo: "/placeholder.svg?height=40&width=120&text=DATASYNC" },
    { name: "FlowTech", logo: "/placeholder.svg?height=40&width=120&text=FLOWTECH" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">Trusted by teams at</p>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-600">
            Trusted by teams at <span className="font-semibold">Acme</span>,{" "}
            <span className="font-semibold">NovaCorp</span>, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
