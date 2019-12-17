import React from 'react';
import '../GlobalStyles/global.scss';
import MiniHero from '../components/Elements/MiniHero';
import FlexBlock from '../components/Elements/FlexBlock';
import ContentBlock from '../components/Elements/ContentBlock';
import SocialLinksBlock from '../components/Elements/SocialLinksBlock';
import Layout from '../layouts/MainLayout';

const About = () => {
    return (
        <Layout>
            <MiniHero image="https://fi.co/system/posts/44299297_s.jpg" />
            <ContentBlock>
                <h1 className="Page__Heading">About Me</h1>
                <div>
                    <p>
                    Hello, I'm Stephen, a software engineer, although I do feel like an entomologist due to all those bugs I deal with.
                    </p>
                    <p>
                    Learning and getting beter at programming is my passion, which coupled with my hardworking attitude means a perfect fit. Although like anyone who is passionate about something also get annoyed with the same thing...like when you change one line of code and the whole thing breaks. 
                    </p>
                    <p>
                    Aside from writing code I also like reading it, and thinking about it.
                    </p>
                    <p>
                    As for my outside life, history and science are interests of mine that I enjoy reading about. 
                    </p>
                    <p>
                    If you are wondering about my biggest weakness, well that is Youtube...
                    </p>
                </div>

                <SocialLinksBlock size="3x" />
            </ContentBlock>

            <ContentBlock>
                    <h2>Skills</h2>
                    <FlexBlock>
                        <ul>
                            <li>Technical Skills</li>
                            <li>HTML5 / CSS3</li>
                            <li>Javascript (ES6)</li>
                            <li>NodeJs</li>
                            <li>Sass/Scss</li>
                            <li>JQuery</li>
                            <li>React</li>
                            <li>Redux / Mobx</li>
                            <li>graphql</li>
                            <li>C/C++</li>
                            <li>C#</li>
                            <li>.NET Core</li>
                            <li>Python</li>
                        </ul>
                        <ul>
                            <li className="title">Soft Skills</li>
                            <li>Organistation</li>
                            <li>Communication</li>
                            <li>General IT skills</li>
                            <li>Time Management</li>
                            <li>Team Work and Leadership</li>
                        </ul>
                    </FlexBlock>
                </ContentBlock>
        </Layout>
    )
}

export default About