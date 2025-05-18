"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon } from "lucide-react"
import { Mockup, MockupFrame } from "@/components/ui/mockup"
import { Glow } from "@/components/ui/glow"
import { cn } from "@/lib/utils"

interface HeroAction {
  text: string
  href: string
  icon?: React.ReactNode
  variant?: "default" | "glow"
}

interface HeroProps {
  badge?: {
    text: string
    action: {
      text: string
      href: string
    }
  }
  title: string
  description: string
  actions: HeroAction[]
  video?: {
    src: string
    poster?: string
    alt: string
  }
}

export function HeroSectionNew({ badge, title, description, actions, video }: HeroProps) {
  // Split the title into two parts for two rows
  const titleParts = title.split(" ").reduce(
    (result, word, index, array) => {
      const halfway = Math.ceil(array.length / 2)
      if (index < halfway) {
        result[0] += (index > 0 ? " " : "") + word
      } else {
        result[1] += (index > halfway ? " " : "") + word
      }
      return result
    },
    ["", ""],
  )

  return (
    <section
      className={cn("bg-[#111111] text-gray-300", "py-10 sm:py-16 md:py-20 px-4", "fade-bottom overflow-hidden pb-0")}
    >
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-10 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2 border-gray-700/50">
              <span className="text-gray-400">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1 text-white">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title - Now larger and on two rows */}
          <div className="relative z-10 inline-block animate-appear">
            <h1 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-5xl font-bold leading-none text-transparent drop-shadow-2xl sm:text-7xl sm:leading-none md:text-8xl md:leading-none">
              {titleParts[0]}
              <br />
              {titleParts[1]}
            </h1>
          </div>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[800px] animate-appear font-medium text-gray-400 opacity-0 delay-100 sm:text-xl text-center leading-relaxed">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant === "glow" ? "outline" : "default"}
                size="lg"
                asChild
                className={
                  action.variant === "glow"
                    ? "border-gray-700/50 hover:border-white/50 bg-white text-[#111111]"
                    : "bg-white text-[#111111] hover:bg-white/90"
                }
              >
                <a href={action.href} className="flex items-center gap-2 text-[#111111]">
                  {action.text}
                </a>
              </Button>
            ))}
          </div>

          {/* Video with Glow */}
          <div className="relative pt-12 w-full">
            {/* Background glow effects */}
            <div className="absolute inset-0 overflow-visible">
              <Glow
                variant="default"
                className="animate-pulse-glow opacity-70 bg-[#38B6FF]/30 h-[600px] w-[600px] top-1/2 -translate-y-3/4 blur-[150px]"
              />
            </div>

            {/* Video mockup */}
            <MockupFrame className="animate-appear opacity-0 delay-700 max-w-6xl relative z-10" size="large">
              <Mockup type="responsive">
                {video && (
                  <video
                    src={video.src}
                    poster={video.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                    aria-label={video.alt}
                  />
                )}
              </Mockup>
            </MockupFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
