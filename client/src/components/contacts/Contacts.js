import React, { useContext, Fragment } from 'react';
import { motion, AnimatePresence  } from "framer-motion";

import ContactContext from '../../context/contact/contactContext';

import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h4 className="text-center">You have no contacts...</h4>
    }

    return (
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
};

export default Contacts;
