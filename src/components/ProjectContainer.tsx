"use client"

import React from 'react'
import ProjectCard from './ProjectCard'
import BG1 from "@/assets/bg1.jpg"
import BG2 from "@/assets/bg2.jpg"
import BG3 from "@/assets/bg3.jpg"
import UPCOMING from "@/assets/upcoming.jpg"
import { motion } from "framer-motion"

const projectData = [
    {
        background: BG1,
        imageAlt: "Dark Blue Mesh Graadient",
        title: "Likhavat - Centralized Form Management System (Under Development)",
        description: "Likhavat simplifies form management, freeing users from complex backend setups to focus on designing, managing, and analyzing forms effortlessly.",
        link: ""
    },
    {
        background: BG2,
        imageAlt: "Dark Red Mesh Graadient",
        title: "Ketu - Remote Control and Surveillance Tool",
        description: "Ketu is a tool designed to facilitate remote control and surveillance. It establishes a seamless connection between a server and a client, enabling the exchange of key logs, WIFI passwords, screenshots, clipboard content, and system information.",
        link: "https://github.com/ashokasec/ketu"
    },
    {
        background: BG3,
        imageAlt: "Blue Mesh Gradient",
        title: "The Cyber Avengers - Cybersecurity Community",
        description: "The Cyber Avenger is a growing community of over 500 people passionate about helping and empowering one another in the field of cybersecurity.  The lively network is ready to assist with troubleshooting issues or collaborating on projects.",
        link: "https://thecyberavenger.com"
    },
    {
        background: UPCOMING,
        imageAlt: "More Upcoming...",
        title: "More Upcoming...",
        description: "",
        link: "#"
    },
]

const fadeInAnimationV = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: (index: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 * index,
            },
        }
    }
}

const ProjectContainer = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-x-6 gap-y-12" id='work'>
            {
                projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInAnimationV}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
                        custom={index}
                    >
                        <ProjectCard
                            background={project.background}
                            imageAlt={project.imageAlt}
                            link={project.link}
                            title={project.title}
                            description={project.description}
                        />
                    </motion.div>
                ))
            }
        </div>
    )
}

export default ProjectContainer
