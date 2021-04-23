import React, { useState, useContext } from 'react';

import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChangeHandler = (e) => {
        setContact({...contact, [e.target.name]: e.target.value});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        contactContext.addContact(contact);

        // reset form
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    };

    return (
        <form onSubmit={onSubmitHandler} className="form-container">
            <h2 className="text-primary">Add Contact</h2>
            <input 
                type="text" 
                placeholder="Full Name" 
                name="name" 
                value={name}
                onChange={onChangeHandler}/>
            <input 
                type="email" 
                placeholder="Email Address" 
                name="email" 
                value={email}
                onChange={onChangeHandler}/>
            <input 
                type="tel" 
                placeholder="Phone Number" 
                name="phone" 
                value={phone}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}"
                onChange={onChangeHandler}/>

            <div className="buttons">
                <h4>Contact Type</h4>
                <input 
                    type="radio" 
                    name="type" 
                    value="personal" 
                    checked={type === 'personal'}
                    onChange={onChangeHandler}/>
                    &nbsp; Personal &nbsp;
                <input 
                    type="radio" 
                    name="type" 
                    value="professional" 
                    checked={type === 'professional'}
                    onChange={onChangeHandler}/>
                    &nbsp;Professional &nbsp;
            </div>

            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
            </div>
        </form>
    );
};

export default ContactForm;
