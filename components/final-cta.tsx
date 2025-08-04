import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-[#4ABDAC] to-[#4ABDAC]/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to go with the flow?</h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of teams who have transformed their workflows with Fluxly. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-[#4ABDAC] hover:bg-gray-100 shadow-xl px-8 py-4 text-lg rounded-xl font-semibold"
            >
              Create your account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-white/80 text-sm">Free 14-day trial • No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  )
}
