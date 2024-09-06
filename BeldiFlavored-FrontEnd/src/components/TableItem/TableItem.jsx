import React from 'react';
import './TableItem.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TableItem = ({ id, name, description, image, timecheckIn, timecheckOut }) => {
  const navigate = useNavigate();
  const handleClick = async (tableId) => {
    const requestBody = {
      table: {
        id: tableId
      },
      timesLot: {
        check_in: timecheckIn,
        check_out: timecheckOut,
      }
    };
    navigate('/reservation-confirmation', { state: { requestBody } });
  };

  return (
    <div>
      <button className='table-item' onClick={() => handleClick(name.slice(-1))} id={id}>
        <div className="table-item-img-container">
          <img className='table-item-image' src={image} alt={name} />
        </div>
        <div className="table-item-info">
          <div className="table-item-name-rating">
            <p>{name}</p>
          </div>
          <p className="table-item-desc">{description}</p>
          <button className="btnn">reserve</button>
        </div>
      </button>
    </div>
  );
}

export default TableItem;
