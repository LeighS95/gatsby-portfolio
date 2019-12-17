import React from 'react';
import '../GlobalStyles/global.scss';
import Layout from '../layouts/MainLayout';
import MiniHero from '../components/Elements/MiniHero';
import FlexBlock from '../components/Elements/FlexBlock';
import CvRequestForm from '../components/Forms/CvRequestForm';
import Button from '../components/Utils/Button';

const CvPage = () => {
    return (
        <Layout>
            <MiniHero image="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <h1>How would you like to view my CV?</h1>
            <p>View in browser or have it sent to your email?</p>

            <FlexBlock>
                <CvRequestForm />
                <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center'
                }}>
                    <h2>OR view as a PDF?</h2>
                    <Button text="View CV" link="/view-cv" isLink />
                </div>
            </FlexBlock>
        </Layout>
    )
}

export default CvPage;