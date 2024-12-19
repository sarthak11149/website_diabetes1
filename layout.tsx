import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div 
      className={cn(
        "min-h-screen bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-health.jpg-bZY6oqOw3jHqiWTCG2Lqw4G4mqbUVw.jpeg')"
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-[#87CEEB]/10 to-[#87CEEB]/30 backdrop-blur-[1px]">
        <div className="container mx-auto px-4 py-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </div>
    </div>
  )
}

