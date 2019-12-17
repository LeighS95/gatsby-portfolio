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
            }
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
        }, () => console.log(this.state.user));
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state.user;
        const name = data.name;
        const company = data.company;
        const email = data.email;

        console.log(name)

        fetch('http://localhost:5000/v1/mailer',{
            method: "POST",
            mode: "no-cors",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                company,
                email
            })
        }).then(res => {
            res.json().then(data => console.log('success' + data))
        });

        this.setState({
            user: {
                name: '',
                company: '',
                email: ''
            }
        });

        console.log(this.state.user)
    }

    render() {
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
            </div>
        )
    }
}

export default CvRequestForm;