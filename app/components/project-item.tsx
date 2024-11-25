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
            <div className='flex flex-col justify-between h-full p-4'>
                <h3 className='text-xl tablet:text-2xl font-semibold hover:text-[var(--primary)] transition-colors'>
                    {title}
                </h3>
                <ul className='list-disc pl-4 space-y-1 text-xs tablet:text-sm'>
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
                <ul className='flex items-center justify-center flex-wrap gap-1 mb-2'>
                    {technologies.map((tech, index) => (
                        <li
                            className={`border border-[var(--secondary)] rounded-2xl py-1 px-3 hover:text-[var(--primary)] hover:border-[var(--primary)] text-xs`}
                            key={index}
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
                <div className='flex justify-between text-xs tablet:text-base mt-2'>
                    <a
                        className='flex items-center gap-2 border border-[var(--secondary)] py-1 px-3 cursor-pointer hover:text-[var(--link)] hover:border-[var(--link)]'
                        href={live}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Check Live
                        <GoLinkExternal />
                    </a>
                    <a
                        className='flex items-center gap-2 border border-[var(--secondary)] py-1 px-3 cursor-pointer hover:text-[var(--link)] hover:border-[var(--link)]'
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
