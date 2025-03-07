import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-md border-b border-primary/10 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="ColorWare Logo" 
              width={28} 
              height={28}
              className="rounded-lg"
            />
            <h1 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Color</span>
              <span className="text-foreground">Ware</span>
            </h1>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#overview" className="hover:text-primary transition-colors duration-300">Overview</a>
            <a href="#features" className="hover:text-primary transition-colors duration-300">Features</a>
            <a href="#specs" className="hover:text-primary transition-colors duration-300">Specs</a>
          </div>
        </div>
      </nav>
      
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Arkaplan efektleri */}
        <div className="absolute inset-0 bg-grid-primary/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Next Gen
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Hardware Solutions
                </span>
              </h1>
              
              <p className="text-foreground/80 text-lg max-w-lg">
                Experience unprecedented precision with our cutting-edge hardware technology. 
                Engineered for excellence, designed for victory.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary">Active Development</span>
                </div>
                <div className="h-4 w-px bg-primary/20" />
                <div className="text-sm text-foreground/60">
                  Latest Update: v2.4.0
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://t.me/colorwarecheats"  
                  className="group relative px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-secondary transition-colors">
                  <div className="absolute inset-x-0 h-px bottom-0 bg-primary-foreground/30 rounded" />
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent lg:hidden" />
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="relative w-[400px] h-[400px]">
                  {/* Ana çember animasyonları */}
                  <div className="absolute inset-0 rounded-full animate-spin-slow opacity-20 bg-gradient-conic from-primary via-transparent to-primary" />
                  <div className="absolute inset-[2px] rounded-full animate-spin-reverse-slower opacity-20 bg-gradient-conic from-secondary via-transparent to-secondary" />
                  
                  {/* Hardware container */}
                  <div className="absolute inset-8 animate-float">
                    {/* Hardware görseli */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src="/hardware.png"
                        alt="Gaming Hardware"
                        width={300}
                        height={300}
                        className="object-contain drop-shadow-2xl animate-pulse-slow"
                      />
                      
                      {/* Teknik detay çizgileri */}
                      <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/2 h-16 w-px bg-gradient-to-b from-primary to-transparent" />
                        <div className="absolute bottom-0 left-1/2 h-16 w-px bg-gradient-to-t from-primary to-transparent" />
                        <div className="absolute left-0 top-1/2 w-16 h-px bg-gradient-to-r from-primary to-transparent" />
                        <div className="absolute right-0 top-1/2 w-16 h-px bg-gradient-to-l from-primary to-transparent" />
                      </div>
                      
                      {/* Dış çember detayları */}
                      <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow" />
                      <div className="absolute -inset-8 border border-primary/10 rounded-full animate-spin-reverse-slow" />
                    </div>
                  </div>

                  {/* Hareketli noktalar */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-primary animate-ping"
                      style={{
                        top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                        left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden" id="features">
        <div className="absolute inset-0 bg-grid-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Advanced
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Features</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Experience the next level of gaming with our cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Undetected */}
            <div className="group relative p-8 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Image 
                    src="/undetected.png"
                    alt="Undetected Icon"
                    width={32}
                    height={32}
                    className="brightness-0 dark:invert"
                  />
                </div>
                
                <h3 className="text-xl font-semibold">Undetected</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Hardware-based solution completely undetectable by Vanguard&apos;s security system. Our advanced circuitry ensures total invisibility at the physical level.
                </p>
                
                <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Modern Menu */}
            <div className="group relative p-8 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Image 
                    src="/menu.png"
                    alt="Menu Icon"
                    width={32}
                    height={32}
                    className="brightness-0 dark:invert"
                  />
                </div>
                
                <h3 className="text-xl font-semibold">Modern Menu</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Intuitive and customizable interface with real-time configuration. Seamlessly adjust settings while maintaining peak performance.
                </p>
                
                <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Support */}
            <div className="group relative p-8 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Image 
                    src="/support.png"
                    alt="Support Icon"
                    width={32}
                    height={32}
                    className="brightness-0 dark:invert"
                  />
                </div>
                
                <h3 className="text-xl font-semibold">Support</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  24/7 dedicated support team ensuring smooth operation. Quick response times and expert assistance for all your needs.
                </p>
                
                <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forums Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Available on
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Premium Forums</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Find us on the most trusted gaming communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ElitePVPers */}
            <a 
              href="https://www.elitepvpers.com/forum/valorant-trading/5248481-valorant-hardware-color-aimbot-colorware-aimbot.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex flex-col items-center space-y-4">
                <Image 
                  src="/elitepvpers.png" 
                  alt="ElitePVPers Logo" 
                  width={200} 
                  height={80}
                  className="object-contain transition-transform group-hover:scale-105"
                />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-primary font-medium">Verified Seller</span>
                </div>
              </div>
            </a>

            {/* CheatGlobal */}
            <a 
              href="https://cheatglobal.com/konu/valorant-hardware-color-aimbot-parlayan-yildizcolor-ware-aimbotparlayan-yildiz-kanatli-paralow-price-for-turkeykanatli-para.40761/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex flex-col items-center space-y-4">
                <Image 
                  src="/cheatglobal.png" 
                  alt="CheatGlobal Logo" 
                  width={200} 
                  height={80}
                  className="object-contain transition-transform group-hover:scale-105"
                />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-primary font-medium">Verified Seller</span>
                </div>
              </div>
            </a>

            {/* Memory Hackers */}
            <a 
              href="https://memoryhackers.org/konular/valorant-hardware-color-aimbot-undetected-color-ware-aimbot-low-price-for-turkey.277580/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex flex-col items-center space-y-4">
                <Image 
                  src="/memoryhackers.png" 
                  alt="Memory Hackers Logo" 
                  width={200} 
                  height={80}
                  className="object-contain transition-transform group-hover:scale-105"
                />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-primary font-medium">Verified Seller</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}