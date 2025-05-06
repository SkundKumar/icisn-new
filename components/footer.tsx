export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tighter font-playfair">ICISN</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Copyright © 2026 ICISN, All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

