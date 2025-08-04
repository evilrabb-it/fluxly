import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight">
              Flow Better. <span className="text-[#4ABDAC]">Work Smarter.</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Fluxly keeps your processes moving effortlessly. Streamline workflows, gain insights, and empower your
              team with intelligent automation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#4ABDAC] hover:bg-[#4ABDAC]/90 text-white shadow-xl px-8 py-4 text-lg rounded-xl"
              >
                Try for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#4ABDAC] text-[#4ABDAC] hover:bg-[#4ABDAC]/10 px-8 py-4 text-lg rounded-xl bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch demo
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                No credit card required
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                {/* Data flow visualization */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4ABDAC]/20 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#4ABDAC] rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-[#4ABDAC]/30 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4ABDAC] rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-[#4ABDAC]/30 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4ABDAC] rounded-full w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#4ABDAC]/20 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#4ABDAC] rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4ABDAC]/20 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#4ABDAC] rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-[#4ABDAC]/30 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4ABDAC] rounded-full w-5/6 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#4ABDAC]/20 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#4ABDAC] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#4ABDAC] rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#4ABDAC]/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
