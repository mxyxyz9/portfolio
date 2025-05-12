"use client"

import * as React from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { useEffect } from "react"

export default function Loading() {
  const controls = useAnimation()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Add state to track client-side mounting
  const [isMounted, setIsMounted] = React.useState(false)

  useEffect(() => {
    // Mark component as mounted on client
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-darker-bg overflow-hidden"
      onMouseMove={(e) => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Particle system - only rendered client-side */}
        {isMounted && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-mint rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
            style={{
              // Use fixed positions instead of random values
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
          />
        ))}

        {/* Neo-brutalist shapes with enhanced animations - only rendered client-side */}
        {isMounted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: 360,
                scale: [1, 1.2, 0.8, 1],
                borderRadius: ["0%", "50%", "0%"],
              }}
              transition={{
                opacity: { duration: 0.3 },
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 border-8 border-mint transform"
              style={{
                background: "linear-gradient(45deg, #4EEBC0, #8A7CFF)",
              }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.5, 1],
                rotate: [-45, 45, -45],
                borderRadius: ["0%", "25%", "0%"],
              }}
              transition={{
                opacity: { duration: 0.3 },
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 bg-purple/30 backdrop-blur-sm transform"
            />
          </>
        )}

        {/* Glitch effect loading text - only rendered client-side */}
        {isMounted && (
          <motion.div
            className="absolute left-1/2 top-[60%] -translate-x-1/2 text-display"
            initial={{ opacity: 0 }}
            animate={[
              { opacity: 1, x: -2, textShadow: "2px 2px #4EEBC0, -2px -2px #8A7CFF" },
              { opacity: 1, x: 2, textShadow: "-2px 2px #8A7CFF, 2px -2px #4EEBC0" },
              { opacity: 1, x: -2, textShadow: "2px -2px #4EEBC0, -2px 2px #8A7CFF" }
            ]}
            transition={{
              opacity: { duration: 0.3 },
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          >
            <span className="text-4xl font-black tracking-wider text-light-gray">
              LOADING
            </span>
          </motion.div>
        )}

        {/* Progress bar - only rendered client-side */}
        {isMounted && (
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-2 bg-dark-bg overflow-hidden"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ opacity: { duration: 0.3 }, width: { duration: 2, repeat: Infinity } }}
          >
            <motion.div
              className="h-full bg-mint"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}