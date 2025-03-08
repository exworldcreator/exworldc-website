import './styles/About.css'

const About = () => {
    return (
        <div className="about">
            <p style={{ fontSize: '16px'}} className='about-header'>About</p>
            <div className='about-box'>
                <p style={{ fontSize: '14px'}}>
                    Main <br />
                    Hi, I'm Ian, a Web3 developer with over 2 years of experience in cryptocurrency 
                    and over 5 years of development experience in general. I first got into cryptocurrencies in 2022, 
                    and just a year later I decided to switch and focus on programming in my favorite field. <br /> <br />

                    Education <br />
                    Saint Petersburg Electrotechnical University "LETI" <br />
                    Bachelor's Degree in Information Systems and Technologies (2018–2022)
                </p>
            </div>
        </div>
    )
}

export default About;
