"use client"

import React from "react"
import { motion } from "framer-motion"

const TransitUp = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{
        once: true
      }}
    >
      {children}
    </motion.div>
  )
}

export default TransitUp