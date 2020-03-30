import Link from 'next/link';
import { Fade } from 'react-reveal';

export default function about() {

    return (
        <>
            <title>
                Matthew Watts - Portfolio
                    </title>
            
            <div className="container">
            <Fade>
            <Link href='/'><a className='homeLink'><h1 className='title'>Matthew Watts</h1></a></Link>
                <nav>
                <Link href="/"><a>Home</a></Link> | <Link href="/about"><a>About</a></Link> | <Link
                            href="/portfolio"><a>Portfolio</a></Link>
                </nav>
            </Fade>
                <div className='formC'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLxq8XKIRGOhV6qU3pGGzo-NFuHqbYlz9AQC0jLVEK4c2w6w/viewform?embedded=true" width="640" height="760" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>

            <footer>
            <p><a href='https://github.com/Mwattsup'>GitHub</a> | <a href='https://www.linkedin.com/in/moot/'>LinkedIn</a></p>
            </footer>
            
        </>
    )
}