'use client';
import { GoLinkExternal } from 'react-icons/go';
import ListItem from '../ui/list-item';
import { sideAnimation } from '../theme/animations/side-animation';

type ProjectProps = {
    id: number;
    title: string;
    live: string;
    github: string;
    technologies: string[];
    description: string[];
};

export default function ProjectItem({
    id,
    title,
    live,
    github,
    technologies,
    description,
}: ProjectProps) {
    return (
        <ListItem id={id} variants={sideAnimation}>
            <div className='flex flex-col justify-between h-full p-6 rounded-lg transition-shadow duration-300'>
                <h3 className='text-xl tablet:text-2xl font-bold hover:text-[var(--primary)] transition-colors mb-4'>
                    {title}
                </h3>
                <ul className='list-disc pl-5 space-y-1 text-sm tablet:text-base text-gray-600 mb-4'>
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
                <ul className='flex items-center justify-center flex-wrap gap-2 mb-4'>
                    {technologies.map((tech, index) => (
                        <li
                            className='border border-[var(--secondary)] rounded-full py-1 px-4 text-xs hover:bg-[var(--primary)] hover:text-white transition-colors'
                            key={index}
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
                <div className='flex justify-between text-xs tablet:text-base mt-2'>
                    <a
                        className='flex items-center gap-2 border border-[var(--secondary)] py-2 px-4 rounded-lg hover:bg-[var(--link)] hover:text-white transition-colors'
                        href={live}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Check Live
                        <GoLinkExternal />
                    </a>
                    <a
                        className='flex items-center gap-2 border border-[var(--secondary)] py-2 px-4 rounded-lg hover:bg-[var(--link)] hover:text-white transition-colors'
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        See Code
                        <GoLinkExternal />
                    </a>
                </div>
            </div>
        </ListItem>
    );
}
