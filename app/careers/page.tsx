"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
  const openPositions = [
    {
      id: "fe-dev",
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "We're looking for a Frontend Developer to join our team and help build beautiful, responsive user interfaces using React and Next.js.",
    },
    {
      id: "be-dev",
      title: "Backend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Join our backend team to build scalable, high-performance APIs and services that power our platform.",
    },
    {
      id: "pm",
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description:
        "We're seeking an experienced Product Manager to help define our product roadmap and work closely with engineering and design teams.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#111111] text-gray-300">
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#38B6FF] text-white hover:bg-white/90 mb-4">We're Hiring</Badge>
              <h1 className="text-4xl font-semibold mb-6 text-white">Join Our Team</h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We're on a mission to transform how teams collaborate. Join us and work on challenging problems with
                talented people who care about building great products.
              </p>
            </div>

            <h2 className="text-2xl font-medium mb-6 text-white">Open Positions</h2>
            <div className="space-y-6 mb-12">
              {openPositions.map((position) => (
                <Card
                  key={position.id}
                  className="bg-[#1a1a1a] border-gray-700/50 hover:border-white/50 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-medium text-white">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        <Badge variant="outline" className="text-gray-400">
                          {position.department}
                        </Badge>
                        <Badge variant="outline" className="text-gray-400">
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="text-gray-400">
                          {position.type}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{position.description}</p>
                    <Button className="bg-white text-[#111111] hover:bg-white/90">Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-[#1a1a1a] border border-white/30 rounded-lg p-6 text-center">
              <h2 className="text-xl font-medium mb-3 text-white">Don't see a role that fits?</h2>
              <p className="text-gray-400 mb-4">
                We're always looking for talented people to join our team. Send us your resume and we'll keep you in
                mind for future opportunities.
              </p>
              <Button variant="outline" className="bg-white text-[#111111] hover:bg-white/90">
                Send Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
