import React, { useState, useContext, useEffect } from 'react';

import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { current, addContact, updateContact, clearCurrent } = contactContext;
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    useEffect(() => {
        if (current != null) {
            setContact(current);
        }
        else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });        
        }
    }, [contactContext, current]);

    const onChangeHandler = (e) => {
        setContact({...contact, [e.target.name]: e.target.value});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (current === null) {
            addContact(contact);
        }
        else {
            updateContact(contact);
        }
        clearAllHandler();
    };

    const clearAllHandler = () => {
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmitHandler} className="form-container">
            <h2 className="text-primary">
                {current
                ? 'Update Contact'
                : 'Add Contact'}
            </h2>
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
                <input 
                    type="submit" 
                    value={current? 'Update Contact': 'Add Contact'} 
                    className="btn btn-primary btn-block"/>
            </div>
            {current && (
                <div style={{marginBottom: '1rem'}}>
                    <button 
                        className="btn btn-light btn-block"
                        onClick={clearAllHandler}>
                            Clear
                    </button>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
