"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <p className="meta-text text-foreground-secondary flex items-center gap-2">
            Built with love and music by{" "}
            <a
              href="https://open.spotify.com/user/z56x9sjg6xgu7lvzwvoh8d0fa?si=ea1df455d2814d6b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
            Anantha
            </a>{" "}
            <a
              href="https://open.spotify.com/playlist/7L6BujvEdt9xMT42MGTI3t?si=bbe521a92a054684"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-foreground/80 transition-colors"
              aria-label="Spotify Playlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
