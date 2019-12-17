import React from 'react';
import '../GlobalStyles/global.scss';
import MiniHero from '../components/Elements/MiniHero';
import MessageForm from '../components/Forms/MessageForm';
import Layout from '../layouts/MainLayout';

const Contact = () => {
    return (
        <Layout>
            <MiniHero image="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <h1 className="Page__Heading">Contact Me</h1>
            <p className="Page__Heading_Subtext">Send me a message! This will send you an email and notify me of your message as soon as you send it.</p>
            <MessageForm />
        </Layout>
    )
}

export default Contact;