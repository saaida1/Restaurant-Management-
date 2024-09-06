import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ReservationConfirmation.module.css';
import {useNavigate} from "react-router-dom";

const ReservationConfirmation = () => {
  const navigate = useNavigate();

const location = useLocation();

  if (!location.state) {
    console.log("no state"); return <Navigate to="/" />;}
  const { requestBody } = location.state;

  const [userType, setUserType] = useState('guest'); // guest or account
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if( !userData.name && !userData.email && !userData.phone) {
    alert('Please fill in all fields');
    }else {    const fullRequestBody = {
      ...requestBody,
      //   user: userType === 'guest' ? userData : { id: 'user-account-id' }, // replace with actual user account data
    };
      try {
        const response = await axios.post("http://localhost:8080/api/v1/table/reservation", fullRequestBody);
        console.log(response.data);
                  if(response.data=='Reservation made successfully'){
                                navigate('/');

                       }
                       else{
                            navigate('/ReservationTable');
                       }
      } catch (error) {
        console.error("Error sending reservation request:", error);
      }}


  };

  return (
    <div className={styles.container}>
      <h1>Complete Your Reservation</h1>

        <div className={styles.guestForm}>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
        </div>
      <button onClick={handleSubmit}>Confirm Reservation</button>
    </div>
  );
};

export default ReservationConfirmation;
