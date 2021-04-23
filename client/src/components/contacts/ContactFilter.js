import React, { useContext } from 'react';

import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const { filterContacts, clearFilter } = useContext(ContactContext);

    const onChangeHandler = e => {
        let inputFiltering = e.target.value;
        if( inputFiltering !== '' ) {    //if there is filtering contact
            filterContacts(inputFiltering)
        } else {
            clearFilter();
        }
    };

    return (
      <form >
        <div>
          <input
            type="text"
            name="form filter"
            placeholder="Filter Contacts..."
            onChange={onChangeHandler}/>
        </div>
      </form>
    );
};

export default ContactFilter;
