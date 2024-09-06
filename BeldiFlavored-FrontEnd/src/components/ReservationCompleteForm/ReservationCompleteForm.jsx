import React, { useState } from 'react';
import styles from './ReservationCompleteForm.module.css';
import TableDisplay from '../TableDisplay/TableDisplay';

const ReservationCompleteForm = ({ timecheckIn, date, nbpersone, setComplet, selectedIndexes, timecheckOut }) => {
  const handleExit = () => {
    setComplet(false);
  };

  const [category, setCategory] = useState("All");

  return (
    <div className={styles.container}>
      <div className={styles.boxBooking}>
        <button className={styles.close} onClick={handleExit}>X</button>
        <TableDisplay 
          category={category} 
          selectedIndexes={selectedIndexes} 
          timecheckIn={timecheckIn} 
          timecheckOut={timecheckOut} 
        />
      </div>
    </div>
  );
}

export default ReservationCompleteForm;
