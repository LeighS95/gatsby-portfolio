import React, { Component } from 'react';
import Button from '../Utils/Button';
import styles from './form.module.scss';

class CvRequestForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            user :{
                name: '',
                company: '',
                email: ''
            },
            msgSent: false
        }
    }

    handleChange = e => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState( prevState => {
            return {
                user : {
                    ...prevState.user, [name]: value
                }
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state.user;

        async function sendEmail(data) {
            await fetch('https://fathomless-springs-03812.herokuapp.com/v1/mailer',{
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "name": data.name,
                "company": data.company,
                "email": data.email
            })
        }).then(res => {
            res.json().then(data => console.log('success' + data))
        });
        }

        sendEmail(data);
        

        this.setState({
            user: {
                name: '',
                company: '',
                email: ''
            },
            msgSent: true
        });
    }

    render() {
        const { msgSent } = this.state;
        return (
            <div className={styles.Form__Container}>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" onChange={this.handleChange} required />
                    <label htmlFor="company">Company Name</label>
                    <input name="company" type="text" onChange={this.handleChange} required />
                    <label htmlFor="email">Email Address</label>
                    <input name="email" type="email" onChange={this.handleChange} required />
                    <Button text="Request CV" type="submit"></Button>
                </form>
                {msgSent ? (
                    <p style={{margin: '20px', color: 'green'}}>My CV should be sent to your email soon!</p>
                ) : null}
            </div>
        )
    }
}

export default CvRequestForm;