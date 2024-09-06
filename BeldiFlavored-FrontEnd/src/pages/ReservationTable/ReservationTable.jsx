import React, { useState } from 'react';
import './ReservationTable.css';
import styles from './ReservationTable.module.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import ReservationCompleteForm from '../../components/ReservationCompleteForm/ReservationCompleteForm';

const ReservationTable = () => {
  const [category, setCategory] = useState("All");
  const [timecheckIn, setTimecheckIn] = useState('');
  const [nbpersone, setNbpersone] = useState("1 person");
  const [timecheckOut, setTimecheckOut] = useState('');
  const [date, setDate] = useState(new Date());
  const [complet, setComplet] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  return (
    <div className="base">
      <div className="box">

        {/* <div className="Maincontainer"> */}
        {/*
          <section className="section-main-bunner">
            <div className="main-bunner-inner">
              <div className="container">
                <div className="box-default">
                  <h1 className="box-default-title">Welcome</h1>
                  <div className="box-default-decor"></div>
                  <p className="big box-default-text">
                    Our restaurant offers full-service dining with breathtaking views seen from our indoor covered patio and our outdoor sundeck.
                  </p>
                </div>
              </div>
            </div>
          </section>
          */}
        {/* </div>  */}

        <section className="section-transform-top">
          {!complet && 
            <ReservationForm 
              timecheckIn={timecheckIn} 
              setTimecheckIn={setTimecheckIn} 
              timecheckOut={timecheckOut} 
              setTimecheckOut={setTimecheckOut} 
              date={date}
              setDate={setDate}
              nbpersone={nbpersone}
              setNbpersone={setNbpersone}
              setComplet={setComplet}
              setSelectedIndexes={setSelectedIndexes}
              selectedIndexes={selectedIndexes}
            />
          }
        </section>
        {/* <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/> */}
      </div>

      <div className="Backg">
        <div className="bo">
          <div className="box_div"></div>
        </div>
      </div>
      {complet && 
        <div className={styles.pop}>
          <ReservationCompleteForm 
            timecheckIn={timecheckIn} 
            timecheckOut={timecheckOut}
            date={date}
            nbpersone={nbpersone}
            setComplet={setComplet}
            selectedIndexes={selectedIndexes}
          />
        </div>
      }
    </div>
  );
}

export default ReservationTable;
