export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className='w-full bg-[var(--bar-background)] text-[var(--secondary)] backdrop-blur-sm'>
            <div className='max-w-[1600px] mx-auto py-2 tablet:py-4 px-4'>
                <p className='text-center'>
                    ©{date} All rights reserved. Designed & crafted with love by{' '}
                    <a
                        href='https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-[var(--primary)] hover:underline font-bold'
                    >
                        Kris1027
                    </a>
                </p>
            </div>
        </footer>
    );
}
