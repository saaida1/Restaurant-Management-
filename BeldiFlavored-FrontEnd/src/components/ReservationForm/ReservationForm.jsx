import React, { useState } from 'react';
import styles from './ReservationForm.module.css';
import axios from 'axios';
import {Navigate} from "react-router-dom";

const ReservationForm = ({ timecheckIn, setTimecheckIn, date, setDate, timecheckOut, setTimecheckOut, nbpersone, setNbpersone, setComplet, setSelectedIndexes }) => {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  };

  const handleNbPersoneChange = (event) => {
    setNbpersone(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };

  const handleTimeCheckOutChange = (event) => {
    setTimecheckOut(event.target.value);
  };

  const handleTimeCheckInChange = (event) => {
    setTimecheckIn(event.target.value);
  };

  const handleReserve = async () => {
    const formattedCheckIn = `${formatDate(date)} ${timecheckIn}`;
    const formattedCheckOut = `${formatDate(date)} ${timecheckOut}`;
    setTimecheckIn(formattedCheckIn);
    setTimecheckOut(formattedCheckOut);
    const requestBody = {
      check_in: formattedCheckIn,
      check_out: formattedCheckOut,
    };
      try {
      const response = await axios.post("http://localhost:8080/api/v1/table/AvailableTables", requestBody);
      setSelectedIndexes(response.data.map(table => table.id - 1));
      setComplet(true);
      console.log("Reservation request successful:", response.data.map(table => table.id - 1));
    } catch (error) {
      console.error("Error sending reservation request:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxBooking}>
        <div className={`${styles.rdForm} ${styles.rdMailform} ${styles.bookingForm}`}>
          <div>
            <p className={styles.bookingTitle}>Date</p>
            <div className={`${styles.formWrap} ${styles.formWrapIcon}`}>
              <input
                type="date"
                id="date"
                value={date.toISOString().slice(0, 10)}
                min={new Date().toISOString().slice(0, 10)}
                onChange={handleDateChange}
                required
                className={`${styles.formInput} ${styles.formControlHasValidation} ${styles.formControlLastChild}`}
              />
            </div>
          </div>
          <div>
            <p className={styles.bookingTitle}>Check in time</p>
            <div className={styles.formWrap}>
              <input
                type="time"
                id="time"
                value={timecheckIn}
                onChange={handleTimeCheckInChange}
                required
                className={`${styles.formInput} ${styles.formControlHasValidation}`}
              />
            </div>
          </div>
          <div>
            <p className={styles.bookingTitle}>Check out time</p>
            <div className={styles.formWrap}>
              <input
                type="time"
                id="time"
                value={timecheckOut}
                onChange={handleTimeCheckOutChange}
                required
                className={`${styles.formInput} ${styles.formControlHasValidation}`}
              />
            </div>
          </div>
          <div>
            <p className={styles.bookingTitle}>Number of People</p>
            <div className={styles.formWrap}>
              <select
                id="nbpersone"
                value={nbpersone}
                onChange={handleNbPersoneChange}
                className={`${styles.select2HiddenAccessible} ${styles.formInput}`}
                required
              >
                <option value='1'>1 person</option>
                <option value='2'>2 people</option>
                <option value='3'>3 people</option>
                <option value='4'>4 people</option>
                <option value='5'>5 people</option>
                <option value='6'>6 people</option>
                <option value='7'>7 people</option>
              </select>
            </div>
          </div>
          <div>
            <button
              className={`${styles.button} ${styles.buttonLg} ${styles.buttonGray600}`}
              type="submit"
              onClick={handleReserve}
            >
              Find table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
