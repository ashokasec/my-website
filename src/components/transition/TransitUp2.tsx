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
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default TransitUp