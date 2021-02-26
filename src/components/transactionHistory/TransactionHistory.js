import React from 'react';
import styles from '../transactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead className={styles.title}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
          <tbody className={styles.items} key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
