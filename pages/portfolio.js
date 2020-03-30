import Link from 'next/link';
import { Fade } from 'react-reveal';

export default function portfolio() {

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
                            href="/contact"><a>Contact</a></Link>
                </nav>
                <h2 className='subtitle'>Portfolio</h2>
                <div className="grid">
                    <div className="card">
                        <img className='portImg' src="/timeclock.png" />
                        <h3>Timeclock Application</h3>
                        <p>An application an employer can use to set up departments and add employees to those departments. The employees can then clock in and out to record their time worked.</p>
                        <a href='https://github.com/corbincad/timeclock'>GitHub Repo</a>
                        <a href='https://serene-tundra-35845.herokuapp.com/'>Deployed Application</a>
                    </div>
                    <div className="card">
                        <img className='portImg' src="/food_drink.png" />
                        <h3>Food and Drink Recipes</h3>
                        <p>Look up a random recipe to make or search with a term, same with drinks random drink recipes or search by term. I did the javascript and</p>
                        <a href='https://github.com/Mwattsup/groupProject1'>GitHub Repo</a>
                        <a href='https://mwattsup.github.io/groupProject1/'>Deployed Application</a>
                    </div>
                    <div className="card">
                        <img className='portImg' src="/daburger.png" />
                        <h3>Burger Naming Application</h3>
                        <p>This is an application that you come up with names for burgers and they appear in the list, once you hit the devour button that burger will move to the devoured side.</p>
                        <a href='https://github.com/Mwattsup/burger'>GitHub Repo</a>
                        <a href='https://fast-crag-29487.herokuapp.com/'>Deployed Application</a>
                    </div>
                    <div className='portImg' className="card">
                        <img src="/githubtoPDF.gif" style={{height: 230}}/>
                        <h3>GitHub profile to PDF</h3>
                        <p>This CLI application that lets you take a person github and turn their profile into a pdf with some basic information from their profile.</p>
                        <a href='https://github.com/Mwattsup/githubToPDF'>GitHub Repo</a>
                    </div>
                    <div className="card">
                        <img className='portImg' src="/notes.png" />
                        <h3>Note Taker</h3>
                        <p>This is a page that lets you take notes and save or delete them for when you return to the page. </p>
                        <a href='https://github.com/Mwattsup/noteTaker'>GitHub Repo</a>
                        <a href='https://young-waters-94912.herokuapp.com/'>Deployed Application</a>
                    </div>
                    <div className="card">
                        <img className='portImg' src="weather.png" />
                        <h3>Weather App</h3>
                        <p>This weather app accesses a weather api that gets all the information for the weather and forecast for the city you type in.</p>
                        <a href='https://github.com/Mwattsup/weather-app'>GitHub Repo</a>
                        <a href='https://mwattsup.github.io/weather-app/'>Deployed Application</a>
                    </div>
                </div>
                </Fade>
            </div>
            <footer>
            <p><a href='https://github.com/Mwattsup'>GitHub</a> | <a href='https://www.linkedin.com/in/moot/'>LinkedIn</a></p>
            </footer>
        </>
    )
}