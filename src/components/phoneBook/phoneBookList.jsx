import PropTypes from 'prop-types';
import { ContactsItem } from 'components/phoneBookItem/phoneBookItem' 
export const ContactsList = ({ contacts, onClick }) => {
    return (
        <section>
            
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                    <ContactsItem
                        item={contact}
                        onClick={onClick}
                    /></li>))}
            </ul>
        </section>
    )
}
ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
} 