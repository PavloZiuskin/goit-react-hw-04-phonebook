import PropTypes from 'prop-types'; 
import { Container } from "components/phoneBookItem/phoneItem.styled"
export const ContactsItem = ({ item, onClick }) => {
    return (<Container>
        <span>{item.name}: {item.number}</span>
                <button type="button" onClick={()=>{onClick(item.id)}}>delete</button>
    </Container>)
}

ContactsItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,}
    ),
    onClick: PropTypes.func.isRequired
} 