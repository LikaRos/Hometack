import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactsList = ({ contactsList, onDelete }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <div className="textWrap">
              <p>Name: {name}</p>
              <p>Phone: {phone}</p>
            </div>

            <div className="btn-wrap">
              <button
                type="button"
                className="btn btn-link card-link"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
