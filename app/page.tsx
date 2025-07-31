"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Shield, Heart, Zap } from "lucide-react"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [backgroundColor, setBackgroundColor] = useState("from-sky-300 to-sky-400")
  const [currentPage, setCurrentPage] = useState("home") // home, about, tokenomics

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const clouds = [
    { id: 1, top: "15%", left: "10%", size: "w-20 h-16", image: "/cloud1.png", duration: "25s", delay: "0s" },
    { id: 2, top: "8%", left: "75%", size: "w-24 h-18", image: "/cloud2.png", duration: "30s", delay: "3s" },
    { id: 3, top: "12%", left: "45%", size: "w-18 h-14", image: "/cloud3.png", duration: "20s", delay: "6s" },
    { id: 4, top: "18%", left: "85%", size: "w-22 h-16", image: "/cloud1.png", duration: "35s", delay: "9s" },
    { id: 5, top: "10%", left: "25%", size: "w-20 h-16", image: "/cloud2.png", duration: "28s", delay: "12s" },
    { id: 6, top: "75%", left: "60%", size: "w-16 h-12", image: "/cloud3.png", duration: "22s", delay: "15s" },
    { id: 7, top: "80%", left: "15%", size: "w-20 h-16", image: "/cloud1.png", duration: "32s", delay: "18s" },
    { id: 8, top: "85%", left: "90%", size: "w-18 h-14", image: "/cloud2.png", duration: "26s", delay: "21s" },
    { id: 9, top: "75%", left: "35%", size: "w-22 h-16", image: "/cloud3.png", duration: "24s", delay: "24s" },
    { id: 10, top: "45%", left: "5%", size: "w-24 h-18", image: "/cloud1.png", duration: "29s", delay: "27s" },
    { id: 11, top: "45%", left: "70%", size: "w-20 h-16", image: "/cloud2.png", duration: "27s", delay: "30s" },
    { id: 12, top: "85%", left: "50%", size: "w-16 h-12", image: "/cloud3.png", duration: "23s", delay: "33s" },
    { id: 13, top: "25%", left: "95%", size: "w-18 h-14", image: "/cloud1.png", duration: "31s", delay: "36s" },
    { id: 14, top: "65%", left: "20%", size: "w-20 h-16", image: "/cloud2.png", duration: "33s", delay: "39s" },
    { id: 15, top: "35%", left: "80%", size: "w-22 h-16", image: "/cloud3.png", duration: "21s", delay: "42s" },
    { id: 16, top: "55%", left: "40%", size: "w-18 h-14", image: "/cloud1.png", duration: "26s", delay: "45s" },
    { id: 17, top: "30%", left: "65%", size: "w-20 h-16", image: "/cloud2.png", duration: "28s", delay: "48s" },
    { id: 18, top: "70%", left: "10%", size: "w-16 h-12", image: "/cloud3.png", duration: "24s", delay: "51s" },
  ]

  const colorCircles = [
    {
      color: "bg-yellow-400",
      gradient: "from-yellow-300 to-yellow-500",
      name: "yellow",
    },
    {
      color: "bg-red-500",
      gradient: "from-red-400 to-red-600",
      name: "red",
    },
    {
      color: "bg-purple-500",
      gradient: "from-purple-400 to-purple-600",
      name: "purple",
    },
    {
      color: "bg-gray-400",
      gradient: "from-gray-300 to-gray-500",
      name: "gray",
    },
    {
      color: "bg-pink-400",
      gradient: "from-pink-300 to-pink-500",
      name: "pink",
    },
    {
      color: "bg-orange-500",
      gradient: "from-orange-400 to-orange-600",
      name: "orange",
    },
    {
      color: "bg-green-500",
      gradient: "from-green-400 to-green-600",
      name: "green",
    },
    {
      color: "bg-blue-500",
      gradient: "from-sky-300 to-sky-400",
      name: "blue",
    },
  ]

  const handleColorChange = (gradient: string) => {
    setBackgroundColor(gradient)
  }

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
  }

  const renderHomePage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
      {/* Logo */}
      <div className="text-center mb-8">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl text-white mb-4 tracking-wider drop-shadow-lg"
          style={{
            fontFamily: "Fredoka One, cursive",
            textShadow: "4px 4px 0px #1E40AF, 8px 8px 0px #1E3A8A",
          }}
        >
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">DOGCOIN</span>
        </h1>
        <p
          className="text-blue-600 text-xl md:text-2xl font-medium tracking-widest"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          THE SPIRIT OF LOYALTY
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          { label: "BUY", action: () => {} },
          { label: "TG", action: () => {} },
          { label: "X", action: () => {} },
          { label: "DEX", action: () => {} },
          { label: "ABOUT", action: () => handleNavigation("about") },
          { label: "TOKENOMIC", action: () => handleNavigation("tokenomics") },
        ].map((item) => (
          <Button
            key={item.label}
            onClick={item.action}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full text-lg border-4 border-black shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl cursor-pointer"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
            }}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Interactive Color Circles */}
      <div className="flex justify-center gap-3 mb-16">
        {colorCircles.map((circle, index) => (
          <div
            key={index}
            onClick={() => handleColorChange(circle.gradient)}
            className={`w-6 h-6 ${circle.color} rounded-full border-2 border-white shadow-lg cursor-pointer transform hover:scale-125 transition-all duration-200 hover:shadow-xl active:scale-110`}
            title={`Change to ${circle.name} theme`}
          />
        ))}
      </div>

      {/* Secondary Text */}
      <div className="text-center">
        <h2
          className="text-3xl md:text-4xl font-medium text-white/80 tracking-wider"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          THE SPIRIT WITHIN YOU
        </h2>
      </div>
    </div>
  )

  const renderAboutPage = () => (
    <div className="min-h-screen px-4 py-8 relative z-10">
      {/* Back Button */}
      <Button
        onClick={() => handleNavigation("home")}
        className="mb-8 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      <div className="max-w-4xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl md:text-7xl text-white mb-4 tracking-wider drop-shadow-lg"
            style={{
              fontFamily: "Fredoka One, cursive",
              textShadow: "4px 4px 0px #1E40AF, 8px 8px 0px #1E3A8A",
            }}
          >
            ABOUT DOGCOIN
          </h1>
          <p className="text-blue-600 text-xl md:text-2xl font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
            The Most Loyal Cryptocurrency
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle
                className="flex items-center text-white text-2xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Heart className="w-8 h-8 mr-3 text-red-400" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p className="text-lg leading-relaxed">
                DOGCOIN embodies the unwavering loyalty and unconditional love that dogs represent. We're building a
                community-driven cryptocurrency that celebrates the bond between humans and their faithful companions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle
                className="flex items-center text-white text-2xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Users className="w-8 h-8 mr-3 text-blue-400" />
                Community First
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p className="text-lg leading-relaxed">
                Just like dogs are pack animals, DOGCOIN thrives on community. Every holder is part of our loyal pack,
                working together to create a better future for cryptocurrency and animal welfare.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle
                className="flex items-center text-white text-2xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Shield className="w-8 h-8 mr-3 text-green-400" />
                Security & Trust
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p className="text-lg leading-relaxed">
                Built on proven blockchain technology with rigorous security audits. DOGCOIN provides the reliability
                and trustworthiness that our community deserves, just like a loyal companion.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle
                className="flex items-center text-white text-2xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                Innovation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p className="text-lg leading-relaxed">
                DOGCOIN isn't just another meme coin. We're developing real utility through NFT marketplaces, charity
                partnerships, and innovative DeFi solutions that benefit both our community and animal welfare
                organizations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision Statement */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-center text-white text-3xl mb-4" style={{ fontFamily: "Fredoka One, cursive" }}>
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-white/90 text-xl leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
              "To create a cryptocurrency that embodies the best qualities of man's best friend: loyalty, trust,
              companionship, and unconditional support. DOGCOIN aims to be the most beloved and trusted digital asset in
              the crypto space, fostering a community that mirrors the unwavering bond between humans and dogs."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderTokenomicsPage = () => (
    <div className="min-h-screen px-4 py-8 relative z-10">
      {/* Back Button */}
      <Button
        onClick={() => handleNavigation("home")}
        className="mb-8 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      <div className="max-w-6xl mx-auto">
        {/* Tokenomics Header */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl md:text-7xl text-white mb-4 tracking-wider drop-shadow-lg"
            style={{
              fontFamily: "Fredoka One, cursive",
              textShadow: "4px 4px 0px #1E40AF, 8px 8px 0px #1E3A8A",
            }}
          >
            TOKENOMICS
          </h1>
          <p className="text-blue-600 text-xl md:text-2xl font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
            Fair Distribution for a Loyal Community
          </p>
        </div>

        {/* Token Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardHeader>
              <CardTitle className="text-white text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                Total Supply
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-yellow-400 mb-2" style={{ fontFamily: "Fredoka One, cursive" }}>
                1,000,000,000
              </p>
              <p className="text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                DOGCOIN Tokens
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardHeader>
              <CardTitle className="text-white text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                Initial Price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-green-400 mb-2" style={{ fontFamily: "Fredoka One, cursive" }}>
                $0.001
              </p>
              <p className="text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                Per Token
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardHeader>
              <CardTitle className="text-white text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                Market Cap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-blue-400 mb-2" style={{ fontFamily: "Fredoka One, cursive" }}>
                $1M
              </p>
              <p className="text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                Initial Target
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Distribution Chart */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-center text-white text-3xl mb-8" style={{ fontFamily: "Fredoka One, cursive" }}>
              Token Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded mr-3"></div>
                    <span className="text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Public Sale
                    </span>
                  </div>
                  <span className="text-white font-bold">40%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
                    <span className="text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Liquidity Pool
                    </span>
                  </div>
                  <span className="text-white font-bold">25%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded mr-3"></div>
                    <span className="text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Community Rewards
                    </span>
                  </div>
                  <span className="text-white font-bold">15%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-400 rounded mr-3"></div>
                    <span className="text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Development
                    </span>
                  </div>
                  <span className="text-white font-bold">10%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-400 rounded mr-3"></div>
                    <span className="text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Animal Charity
                    </span>
                  </div>
                  <span className="text-white font-bold">5%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-400 rounded mr-3"></div>
                    <span className="text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Team & Advisors
                    </span>
                  </div>
                  <span className="text-white font-bold">5%</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-64 h-64 rounded-full border-8 border-white/20 flex items-center justify-center mb-4">
                    <img src="/new-blue-dog-mascot.png" alt="DOGCOIN" className="w-32 h-32" />
                  </div>
                  <p className="text-white/80 text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Fair & Transparent Distribution
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                🔒 Anti-Whale Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p>
                Maximum transaction limit of 1% of total supply to prevent market manipulation and ensure fair
                distribution among all community members.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                🎁 Holder Rewards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p>
                2% of every transaction is redistributed to existing holders, rewarding loyalty and encouraging
                long-term holding.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                🔥 Deflationary Mechanism
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p>
                1% of every transaction is permanently burned, reducing total supply over time and increasing scarcity
                for remaining tokens.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                🐕 Charity Contribution
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p>
                1% of every transaction goes directly to animal welfare organizations, making every trade contribute to
                helping dogs in need.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${backgroundColor} relative overflow-hidden custom-cursor transition-all duration-1000 ease-in-out`}
    >
      {/* Google Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600&family=Montserrat:wght@600;700&family=Nunito:wght@700;800&display=swap"
        rel="stylesheet"
      />

      {/* Dog Logo - Top Left Corner */}
      <div className="absolute top-6 left-6 z-20">
        <img
          src="/new-blue-dog-mascot.png"
          alt="DOGCOIN Mascot"
          className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300 cursor-pointer"
          style={{ filter: "drop-shadow(0 0 0 transparent)" }}
          onClick={() => handleNavigation("home")}
        />
      </div>

      {/* Floating Clouds - Only show on home page */}
      {currentPage === "home" &&
        clouds.map((cloud) => (
          <div
            key={cloud.id}
            className={`absolute ${cloud.size} opacity-90 animate-drift-left`}
            style={{
              top: cloud.top,
              left: cloud.left,
              animationDuration: cloud.duration,
              animationDelay: cloud.delay,
            }}
          >
            <img
              src={cloud.image || "/placeholder.svg"}
              alt="Cloud"
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
        ))}

      {/* Page Content */}
      <div className="transition-all duration-500 ease-in-out">
        {currentPage === "home" && renderHomePage()}
        {currentPage === "about" && renderAboutPage()}
        {currentPage === "tokenomics" && renderTokenomicsPage()}
      </div>

      {/* Custom Cursor Styles */}
      <style jsx>{`
        .custom-cursor {
          cursor: url('/dog-cursor.png') 16 16, auto;
        }
        
        .custom-cursor * {
          cursor: url('/dog-cursor.png') 16 16, auto;
        }
        
        .cursor-pointer {
          cursor: url('/dog-cursor.png') 16 16, pointer;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes drift-left {
          0% { 
            transform: translateX(calc(100vw + 200px)); 
            opacity: 0;
          }
          5% {
            opacity: 0.9;
          }
          95% {
            opacity: 0.9;
          }
          100% { 
            transform: translateX(-200px); 
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-drift-left {
          animation: drift-left linear infinite;
        }
      `}</style>
    </div>
  )
}
