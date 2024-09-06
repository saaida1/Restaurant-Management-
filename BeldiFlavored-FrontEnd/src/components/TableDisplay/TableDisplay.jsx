import React from 'react';
import './TableDisplay.css';
import TableItem from '../TableItem/TableItem';
import {table_list} from "../../assets/assets";

const TableDisplay = ({ category, selectedIndexes = [], timecheckIn, timecheckOut }) => {
  return (
    <div className='table-display' id='table-display'>
      <h1>Select Table</h1>
      <div className="table-display-list">
        {selectedIndexes.length === 0
          ? table_list.map((item, index) => (
              <TableItem key={index} id={item.id} name={item.name} description={item.description} image={item.image} timecheckIn={timecheckIn} timecheckOut={timecheckOut} />
            ))
          : table_list.filter((item, index) => selectedIndexes.includes(index))
              .map((item, index) => (
                <TableItem key={index} id={item.id} name={item.name} description={item.description} image={item.image} timecheckIn={timecheckIn} timecheckOut={timecheckOut} />
              ))}
      </div>
    </div>
  );
};

export default TableDisplay;
