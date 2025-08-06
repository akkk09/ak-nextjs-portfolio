"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to wave parameters
  const waveOffset = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4])
  const waveAmplitude = useTransform(scrollYProgress, [0, 0.5, 1], [40, 80, 40])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWaves = (offset: number, amplitude: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set wave properties
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)"
      ctx.lineWidth = 3
      ctx.lineCap = "round"

      // Draw multiple wave layers
      const waves = [
        { frequency: 0.005, amplitude: amplitude * 0.8, phase: offset, opacity: 0.08 },
        { frequency: 0.008, amplitude: amplitude * 0.6, phase: offset * 1.5, opacity: 0.06 },
        { frequency: 0.012, amplitude: amplitude * 0.4, phase: offset * 2, opacity: 0.04 },
      ]

      waves.forEach((wave) => {
        ctx.strokeStyle = `rgba(255, 255, 255, ${wave.opacity})`
        ctx.beginPath()

        for (let x = 0; x <= canvas.width; x += 2) {
          const y = 
            canvas.height / 2 + 
            Math.sin(x * wave.frequency + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + wave.phase * 0.5) * (wave.amplitude * 0.3)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      // Add some floating particles
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      for (let i = 0; i < 30; i++) {
        const x = (offset * 50 + i * 100) % canvas.width
        const y = canvas.height / 2 + Math.sin(offset + i) * 100
        const size = 2 + Math.sin(offset + i * 0.5) * 1
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = () => {
      const currentOffset = waveOffset.get()
      const currentAmplitude = waveAmplitude.get()
      drawWaves(currentOffset, currentAmplitude)
      animationId = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate()

    // Handle resize
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [waveOffset, waveAmplitude])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
  )
}
