import React, { useContext, useEffect, Fragment } from 'react';
import { motion, AnimatePresence  } from "framer-motion";

import Spinner from '../layout/Spinner';
import ContactContext from '../../context/contact/contactContext';

import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4 className="text-center">You have no contacts...</h4>
    }

    let result = <Spinner />;

    if (contacts !== null && !loading) {
        result = (
            <Fragment>
                {filtered !== null 
                ? (
                    <AnimatePresence>
                        {filtered.map(contact => (
                            <motion.div 
                                key={contact._id}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{delay: 0.2}}>
                                    <ContactItem contact={contact}/>
                            </motion.div>
                        )
                        )}
                    </AnimatePresence>
                )
                : (
                    <AnimatePresence>
                        {contacts.map(contact => (
                            <motion.div 
                                key={contact._id}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{delay: 0.2}}>
                                    <ContactItem contact={contact}/>
                            </motion.div>
                        )
                        )}
                    </AnimatePresence>
                )}
            </Fragment>
        );
    }

    return (
        <div className="Contacts">
            {result}
        </div>
    );
};

export default Contacts;
