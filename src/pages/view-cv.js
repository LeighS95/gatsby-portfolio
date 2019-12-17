import React from 'react';
import '../GlobalStyles/global.scss';
import '../GlobalStyles/cv.scss';

const Cv = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1 className="name">Stephen Leigh</h1>
                </div>
                <div className="col">
                    <address>
                        <p>36 Whetstone Street</p>
                        <p>Redditch, B98 7WA</p>
                        <p>07850694359</p>
                        <p><strong>leigh.s95@outlook.com</strong></p>
                    </address>
                </div>
            </div>
            

            <div className="row">
                <div className="col">
                    <h2>Work Experience</h2>
                    <div className="para">
                        <h3>Verse LTD, Birmingham - Web Developer</h3>
                        <p><small>Sept 2019 - Present</small></p>
                        <p><small>Leaving due to redundancy</small></p>
                        <p>My role as a web developer is to utilise modern technology such as React, nodeJs and graphql while using best practises in order to create bespoke website for clients while using UI/UX principles.
My most notable achievements would be working on a large project for Resorts World Birmingham, and putting myself forward to work with the Head of Department to design and layout an internal component library and CI/CD pipelines.</p>
                    </div>

                    <div className="para">
                        <h3>Ocado LTD - Tamworth - CSTM</h3>
                        <p><small>Oct 2017 - Aug 2019</small></p>
                        <p>My role as a customer service team member was to delivery to customer in  time orientated manner while presenting great customer service.</p>
                    </div>

                    <div className="para">
                        <h3>Dreams Living LTD - Birmingham - Transport Coordinator</h3>
                        <p><small>Sept 2016 - Sept2017</small></p>
                        <p>My role as a transport coordinator involved managing and organising time critical deliveries within the UK. In addition I was responsible for managing the transport department and planning and overseeing improvements within the department as well as liaising with the warehouse and customer service department to improve overall efficiency and manage cost efficiency for my department.</p>
                    </div>

                    <div className="para">
                        <h3>Ocado LTD - Tamworth - CSTM</h3>
                        <p><small>Nov 2015 - Aug 2016</small></p>
                        <p>My role as a customer service team member was to delivery to customer in  time orientated manner while presenting great customer service.</p>
                    </div>
                </div>

                <div className="col">
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML5 / CSS3</li>
                        <li>Javascript</li>
                        <li>SASS/SCSS</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>MongoDB / NoSQL</li>
                        <li>MySQL / SQL</li>
                        <li>GraphQL</li>
                        <li>Redux / Mobx</li>
                        <li>NodeJs</li>
                        <li>RESTful API's</li>
                        <li>Gulp</li>
                        <li>Babel &amps; Webpack</li>
                        <li>Docker</li>
                        <li>Jest</li>
                        <li>C/C++</li>
                        <li>C# / .NET Core</li>
                    </ul>

                    <h2>Languages</h2>
                    <ul>
                        <li>English - Native</li>
                        <li>French - Basic</li>
                        <li>Japanese - Basic</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h2>Education</h2>
                    <div className="para">
                        <h3>Open University - BSc Mathematics and Physics</h3>
                        <p><small>Oct 2015 - Present</small></p>
                        <p>I am currently studying a BSc (Honours) in Mathematics and Physics via the open university</p>
                    </div>
                    <div className="para">
                        <h3>South &amps; City College - BTEC Level 3 in Appled Science</h3>
                        <p><small>Sept 2012 - July 2014</small></p>
                        <p>I have completed a BTEC level 3 extended diploma in biology, chemistry and physics with an overall grade of MMM (240Ucas points)</p>
                    </div>
                </div>

                <div className="col">
                    <h2>Projects</h2>
                    <ul>
                        <li>Github: https://github.com/LeighS95</li>
                        <li>Linkedin: https://www.linkedin.com/in/stephen-leigh-8a6519184</li>
                        <li>Codepen: https://codepen.io/SLeigh1995/</li>
                    </ul>
                </div>
            </div>

            <div className="row refs">
                <h2>Reference</h2>
                <div>
                    <h3>Eric Lee - Ops Manager - Dreams Living LTD</h3>
                    <p>Email: hr@dreamsliving.co.uk</p>
                </div>

                <div>
                    <h3>Waqar Bhatti - Head of Department - Verse LTD</h3>
                    <p>Email: waqar.bhatti@verse.co.uk</p>
                </div>

                <div>
                    <h3>Alex Myres - Head of HR</h3>
                    <p>Email: alex.myres@verse.co.uk</p>
                </div>
            </div>
        </div>
    )
}

export default Cv;