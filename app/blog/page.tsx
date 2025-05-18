import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Post {
  id: string
  title: string
  summary: string
  label: string
  author: string
  published: string
  url: string
  image: string
  tags?: string[]
}

export default function BlogPage() {
  const heading = "Blog Posts"
  const description =
    "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture."
  const posts = [
    {
      id: "post-1",
      title: "Building Modern UIs: A Deep Dive into Shadcn and React Components",
      summary:
        "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
      label: "Web Design",
      author: "Sarah Chen",
      published: "15 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Web Design", "UI Development"],
    },
    {
      id: "post-2",
      title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
      summary:
        "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
      label: "Web Design",
      author: "Michael Park",
      published: "22 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Web Design", "CSS"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#111111] text-gray-300">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#38B6FF] text-white hover:bg-white/90 mb-4">Platform</Badge>
            <h2 className="mx-auto mb-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl text-white">
              {heading}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">{description}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {posts.map((post) => (
              <Card key={post.id} className="mb-12 border-0 bg-transparent shadow-none">
                <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                  <div className="sm:col-span-5">
                    <div className="mb-4 md:mb-6">
                      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                        {post.tags?.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl text-white">
                      <a href={post.url} target="_blank" className="hover:underline" rel="noreferrer">
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-4 text-muted-foreground md:mt-5">{post.summary}</p>
                    <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                      <span className="text-muted-foreground">{post.author}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{post.published}</span>
                    </div>
                    <div className="mt-6 flex items-center space-x-2 md:mt-8">
                      <a
                        href={post.url}
                        target="_blank"
                        className="inline-flex items-center font-semibold hover:underline md:text-base text-white"
                        rel="noreferrer"
                      >
                        <span>Read more</span>
                        <ArrowRight className="ml-2 size-4 transition-transform" />
                      </a>
                    </div>
                  </div>
                  <div className="order-first sm:order-last sm:col-span-5">
                    <a href={post.url} target="_blank" className="block" rel="noreferrer">
                      <div className="aspect-[16/9] overflow-clip rounded-lg border border-gray-700/50">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
