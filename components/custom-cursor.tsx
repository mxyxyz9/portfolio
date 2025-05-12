"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleMouseEnterLink = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setLinkHovered(true)
      }
    }

    const handleMouseLeaveLink = (e: MouseEvent) => {
      setLinkHovered(false)
    }

    const handleMouseLeave = () => {
      setHidden(true)
    }

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseenter", updatePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnterLink)
    document.addEventListener("mouseout", handleMouseLeaveLink)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnterLink)
      document.removeEventListener("mouseout", handleMouseLeaveLink)
    }
  }, [])

  // Don't render the custom cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`relative ${clicked ? "scale-75" : "scale-100"} ${
            linkHovered ? "w-16 h-16" : "w-8 h-8"
          } bg-mint rounded-full transition-all duration-200`}
        ></div>
      </div>
      <div
        className={`fixed pointer-events-none z-50 rounded-full border-2 border-mint ${
          hidden ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          width: linkHovered ? "48px" : "24px",
          height: linkHovered ? "48px" : "24px",
          transitionProperty: "width, height",
          transitionDuration: "0.2s",
        }}
      ></div>
    </>
  )
}
