import db from '@/db/db';
import ProjectItem from '../components/project-item';
import Section from '../ui/section';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';
import List from '../ui/list';
import Reveal from '../theme/animations/reveal';

export default async function Projects() {
    const projects = await db.projects.findMany({
        include: {
            technologies: true,
            description: true,
        },
    });

    return (
        <Section id='projects'>
            <Heading ariaLabel='projects heading'>Projects</Heading>
            <Paragraph ariaLabel='projects description'>
                Here are some of the projects I&apos;ve worked on
            </Paragraph>
            <List dataTestId='projects list'>
                {projects.reverse().map((project) => (
                    <ProjectItem
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        image={project.image}
                        live={project.live}
                        github={project.github}
                        technologies={project.technologies.map((tech) => tech.name)}
                        description={project.description.map((desc) => desc.name)}
                    />
                ))}
            </List>
            <Reveal>
                <Paragraph ariaLabel='projects github link'>
                    More you can find on my{' '}
                    <a
                        className='text-[var(--primary)] hover:underline font-bold'
                        href='https://github.com/Kris1027'
                        target='_blank'
                        rel='norefferer'
                    >
                        GitHub
                    </a>{' '}
                    profile!
                </Paragraph>
            </Reveal>
        </Section>
    );
}
