import { SharedDotsAnimation } from "@/components/shared-dots-animation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DocumentationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#111111] text-gray-300">
      <section className="relative py-32 overflow-hidden">
        <SharedDotsAnimation />

        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-[#38B6FF] text-white hover:bg-[#38B6FF]/90 mb-4">Documentation</Badge>
            <h1 className="text-4xl font-semibold mb-6 text-white">Documentation</h1>
            <p className="text-lg text-gray-400 mb-8">
              Welcome to the Nexus documentation. Here you'll find comprehensive guides and documentation to help you
              start working with Nexus as quickly as possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#1a1a1a] border border-gray-700/50 rounded-lg p-6 hover:border-[#38B6FF]/50 transition-colors">
                <h2 className="text-xl font-medium mb-3 text-white">Getting Started</h2>
                <p className="text-gray-400 mb-4">Learn the basics of Nexus and get up and running quickly.</p>
                <Button variant="outline" className="w-full">
                  Read Guide
                </Button>
              </div>

              <div className="bg-[#1a1a1a] border border-gray-700/50 rounded-lg p-6 hover:border-[#38B6FF]/50 transition-colors">
                <h2 className="text-xl font-medium mb-3 text-white">API Reference</h2>
                <p className="text-gray-400 mb-4">Detailed information about the Nexus API endpoints and parameters.</p>
                <Button variant="outline" className="w-full">
                  Explore API
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-medium mb-4 text-white">Popular Topics</h2>
            <div className="space-y-4 mb-12">
              <div className="bg-[#1a1a1a] border border-gray-700/50 rounded-lg p-4 hover:border-[#38B6FF]/50 transition-colors">
                <h3 className="text-lg font-medium text-white">Authentication</h3>
                <p className="text-gray-400">Learn how to authenticate with the Nexus API and manage user sessions.</p>
              </div>

              <div className="bg-[#1a1a1a] border border-gray-700/50 rounded-lg p-4 hover:border-[#38B6FF]/50 transition-colors">
                <h3 className="text-lg font-medium text-white">Integrations</h3>
                <p className="text-gray-400">Connect Nexus with your favorite tools and services.</p>
              </div>

              <div className="bg-[#1a1a1a] border border-gray-700/50 rounded-lg p-4 hover:border-[#38B6FF]/50 transition-colors">
                <h3 className="text-lg font-medium text-white">Webhooks</h3>
                <p className="text-gray-400">Set up and manage webhooks to receive real-time updates.</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#38B6FF]/30 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-3 text-white">Need Help?</h2>
              <p className="text-gray-400 mb-4">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Button className="bg-[#38B6FF] text-[#111111] hover:bg-[#38B6FF]/90">Contact Support</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
