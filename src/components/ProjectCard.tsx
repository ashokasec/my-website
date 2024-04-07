import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProjectCardProps {
    background: StaticImageData;
    imageAlt: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ background, imageAlt, title, description, link }) => {
    return <div>
        <Link href={link} target='_blank'>
            <figure>
                <Image src={background} alt={imageAlt} className="rounded-3xl" />
            </figure>
        </Link>
        <Link href={link} target='_blank' className='w-fit block'>
            <h2 className="font-spaceGrotesk mt-4 text-2xl font-semibold pl-1 text-primary w-fit">{title}</h2>
        </Link>
        <p className="mt-2 pl-1 font-inter text-lg">{description}</p>
    </div>
}

export default ProjectCard