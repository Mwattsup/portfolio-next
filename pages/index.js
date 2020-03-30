import Link from 'next/link';
import Animate from './Animate';

export default function index() {
    return (
        <>
            <title>
                Matthew Watts - Portfolio
                    </title>
            <div className="container" id="top">
                <main>
                    <h1 className='title'><Animate /></h1>
                    <nav>
                        <Link href="/about"><a>About Me</a></Link> | <Link href="/portfolio"><a>Portfolio</a></Link> | <Link
                            href="/contact"><a>Contact</a></Link>
                    </nav>
                </main>
            </div>
            <footer>
            <p><a href='https://github.com/Mwattsup'>GitHub</a> | <a href='https://www.linkedin.com/in/moot/'>LinkedIn</a></p>
            </footer>
        </>
    )
}