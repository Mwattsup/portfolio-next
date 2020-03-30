import Link from 'next/link';
import { Fade } from 'react-reveal';

export default function about() {
    return (
        <>
            <title>
                Matthew Watts - Portfolio
            </title>
            <div className="container" id="top">
                <Fade>
                    <main>

                        <Link href='/'><a className='homeLink'><h1 className='title'>Matthew Watts</h1></a></Link>
                        <nav>
                            <Link href="/"><a>Home</a></Link> | <Link href="/portfolio"><a>Portfolio</a></Link> | <Link
                                href="/contact"><a>Contact</a></Link>
                        </nav>
                        <h2 className='subtitle'>About Me</h2>

                            <img src="/IMG_3602.jpg" alt="a horrible photo of me" id="me"/>
                            <p className='description'>Welcome, my name is Matthew Watts and this is a collection of my work. I am 24 years old and have been
                            spending most of my adult life working in the medical field, which was a kinda crappy place to be,
                            figuratively and literally. About to start a new adventure at a sushi restaurant basically I am leaving
                            to make more money and have more time to work on the coding bootcamp that I am currently in. Should have
                            listened to my dad in the first place when he told me I should do something with math engineering or
                            computers because growing up he saw that in me. Could have avoided the entire medical field which would
                            have been nice.
                            I live in downtown Austin with two roommates that are my friends from high school and we have three
                            pets. Two cats aptly named Boy Cat and Girl Cat, they are my roommates childhood cats. The third animal
                            is my dog her name is Pasta Roni and she is a menace. I like to cook a lot and my favorite thing to make
                            is meatballs. I really like meatballs. I make them so often that my roommates hate them at this point so
                            I feed them to Pasta Roni. I am ready to take on the bootcamp I am in and learn more and more and
                            probably slowly update this portfolio site to work better and better as I learn more and more skills.
                            Hopefully it will start looking more and more professional.
                            </p>

                    </main>
                </Fade>
            </div>
            <footer>
                <p><a href='https://github.com/Mwattsup'>GitHub</a> | <a href='https://www.linkedin.com/in/moot/'>LinkedIn</a></p>
            </footer>
        </>
    );

};