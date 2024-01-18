import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getContractors } from '../../services/api';

const ContractorList = ({}) => {
  const [contractors, setContractors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getContractors()
      .then((data) => {
        setContractors(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error retrieving contractors.');
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading contractors...</p>
      ) : error ? (
        <p>{error}</p>
      ) : contractors.length === 0 ? (
        <p>No contractors found.</p>
      ) : (
        <ul>
          {contractors.map((contractor) => (
            <li key={contractor.id}>{contractor.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContractorList.propTypes = {};

export default ContractorList;