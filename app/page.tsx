"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
    "bg-yellow-400",
    "bg-red-500",
    "bg-purple-500",
    "bg-gray-400",
    "bg-pink-400",
    "bg-orange-500",
    "bg-green-500",
    "bg-blue-500",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-400 relative overflow-hidden custom-cursor">
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
          src="/dog-logo.jpeg"
          alt="DOGCOIN Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>

      {/* Floating Clouds */}
      {clouds.map((cloud) => (
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

      {/* Animated Characters */}
      <div
        className="absolute top-20 right-32 w-12 h-16 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className="w-full h-full bg-yellow-400 relative">
          {/* Simple yellow character representation */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-yellow-400 rounded-lg"></div>
          <div className="absolute top-6 left-1 w-2 h-6 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-6 right-1 w-2 h-6 bg-yellow-400 rounded-full"></div>
        </div>
      </div>

      <div
        className="absolute bottom-32 right-20 w-16 h-20 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
        }}
      >
        <div className="w-full h-full bg-gray-700 relative">
          {/* Simple dark character representation */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-700 rounded-full"></div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-12 bg-gray-700 rounded-lg"></div>
          <div className="absolute top-8 left-0 w-3 h-8 bg-gray-700 rounded-full"></div>
          <div className="absolute top-8 right-0 w-3 h-8 bg-gray-700 rounded-full"></div>
          <div className="absolute bottom-0 left-2 w-3 h-6 bg-gray-700 rounded-full"></div>
          <div className="absolute bottom-0 right-2 w-3 h-6 bg-gray-700 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
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
          {["BUY", "TG", "X", "DEX", "ABOUT", "TOKENOMIC"].map((label) => (
            <Button
              key={label}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full text-lg border-4 border-black shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl cursor-pointer"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "600",
              }}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Color Circles */}
        <div className="flex justify-center gap-3 mb-16">
          {colorCircles.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 ${color} rounded-full border-2 border-white shadow-lg cursor-pointer transform hover:scale-125 transition-transform duration-200`}
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
