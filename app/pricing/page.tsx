"use client"

import { Check, Minus, MoveRight, PhoneCall } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#111111] text-gray-300">
      <div className="w-full py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge className="bg-[#38B6FF] text-white hover:bg-white/90">Pricing</Badge>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular text-white">
                Prices that make sense!
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Managing a small business today is already tough.
              </p>
            </div>

            <div className="grid text-left w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Startup Plan */}
              <div className="bg-[#1a1a1a] rounded-lg border border-gray-700/50 p-6">
                <div className="mb-8">
                  <p className="text-2xl text-white mb-2">Startup</p>
                  <p className="text-sm text-muted-foreground">
                    Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and
                    everywhere.
                  </p>
                </div>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mb-8 text-white">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground"> / month</span>
                </p>
                <Button variant="outline" className="gap-4 w-full">
                  Try it <MoveRight className="w-4 h-4" />
                </Button>

                <div className="mt-8 pt-8 border-t border-gray-700/50">
                  <p className="font-medium text-white mb-4">Features</p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>SSO</span>
                    </li>
                    <li className="flex items-center">
                      <Minus className="w-4 h-4 text-muted-foreground mr-2" />
                      <span>AI Assistant</span>
                    </li>
                    <li className="flex items-center">
                      <Minus className="w-4 h-4 text-muted-foreground mr-2" />
                      <span>Version Control</span>
                    </li>
                    <li className="flex items-center">
                      <span className="ml-6 text-muted-foreground text-sm">5 members</span>
                    </li>
                    <li className="flex items-center">
                      <Minus className="w-4 h-4 text-muted-foreground mr-2" />
                      <span>Multiplayer Mode</span>
                    </li>
                    <li className="flex items-center">
                      <Minus className="w-4 h-4 text-muted-foreground mr-2" />
                      <span>Orchestration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Growth Plan */}
              <div className="bg-[#1a1a1a] rounded-lg border border-[#38B6FF]/50 p-6">
                <div className="mb-8">
                  <p className="text-2xl text-white mb-2">Growth</p>
                  <p className="text-sm text-muted-foreground">
                    Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and
                    everywhere.
                  </p>
                </div>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mb-8 text-white">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground"> / month</span>
                </p>
                <Button className="gap-4 w-full bg-white text-[#111111] hover:bg-white/90">
                  Try it <MoveRight className="w-4 h-4" />
                </Button>

                <div className="mt-8 pt-8 border-t border-gray-700/50">
                  <p className="font-medium text-white mb-4">Features</p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>SSO</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>AI Assistant</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>Version Control</span>
                    </li>
                    <li className="flex items-center">
                      <span className="ml-6 text-muted-foreground text-sm">25 members</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>Multiplayer Mode</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>Orchestration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-[#1a1a1a] rounded-lg border border-gray-700/50 p-6">
                <div className="mb-8">
                  <p className="text-2xl text-white mb-2">Enterprise</p>
                  <p className="text-sm text-muted-foreground">
                    Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and
                    everywhere.
                  </p>
                </div>
                <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mb-8 text-white">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground"> / month</span>
                </p>
                <Button variant="outline" className="gap-4 w-full">
                  Contact us <PhoneCall className="w-4 h-4" />
                </Button>

                <div className="mt-8 pt-8 border-t border-gray-700/50">
                  <p className="font-medium text-white mb-4">Features</p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>SSO</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>AI Assistant</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>Version Control</span>
                    </li>
                    <li className="flex items-center">
                      <span className="ml-6 text-muted-foreground text-sm">Unlimited members</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>Multiplayer Mode</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-white mr-2" />
                      <span>Orchestration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
