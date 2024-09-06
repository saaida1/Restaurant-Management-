import React, { useState } from 'react'
import styles from './ReservationCompleteForm.module.css'


const ReservationCompleteForm = ({time ,date ,name,nbpersone ,complet , setComplet}) => {
    const handleExit = ()=> {
      setComplet(false)
    }

  return (
    <div>

      <div className={styles.container}>
        <div className={styles.boxBooking}>
              <button className={styles.close} onClick={handleExit}>
</button>

          <div
            className={`${styles.rdForm} ${styles.rdMailform} ${styles.bookingForm}`}
          >
                      <h1>Complete your reservation</h1>

          <div className={styles.info}>
            <div>
              <p className={styles.bookingTitle}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 4a1 1 0 0 1 2 0v1h6V4a1 1 0 1 1 2 0v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4ZM5 7v2h14V7H5Zm0 4v8h14v-8H5Z" fill="#2D333F"></path></svg></p>
              <div className={styles.formWrap}>
                <p>{date.toString().slice(0,10)}</p>
              </div>
            </div>

            <div>
              <p className={styles.bookingTitle}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5Z" fill="#2D333F"></path><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-2 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z" fill="#2D333F"></path></svg></p>
              <div className={`${styles.formWrap} ${styles.formWrapIcon}`}>
               <p>{time}</p>
              </div>
            </div>


            <div>
              <p className={styles.bookingTitle}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.002 8a5 5 0 1 1 7.572 4.288c2.43.594 4.162 2.108 5.192 4.543A3 3 0 0 1 17.004 21H7a3 3 0 0 1-2.763-4.169c1.03-2.435 2.759-3.949 5.19-4.543A4.995 4.995 0 0 1 7.002 8Zm2 0A2.999 2.999 0 1 0 15 8a3 3 0 1 0-6 0Zm-2.31 10.949a.994.994 0 0 0 .316.051h9.987a1 1 0 0 0 .95-1.314C17.13 15.229 15.15 14 12.002 14c-3.15 0-5.13 1.229-5.943 3.686a.999.999 0 0 0 .634 1.263Z" fill="#2D333F"></path></svg></p>
              <div className={styles.formWrap}>
                 <p>{nbpersone}</p>
              </div>
            </div>
            </div>
            <div>
            <h3>Add your reservation details</h3>
            <span class="MuiTypography-root css-1f0nugy">Already a Tock user? <a class="u-activeColor u-link Anchor" href="/rooftopbrasserie/login?continue=%2Frooftopbrasserie%2Fcheckout%2Fcomplete-profile">Log in</a> to skip this step, or <a class="u-activeColor u-link Anchor" href="/rooftopbrasserie/signup?continue=%2Frooftopbrasserie%2Fcheckout%2Fcomplete-profile">Sign up</a> to create an account. </span>
            


            <div>
              <p className={styles.bookingTitle}>Fullname</p>
              <div className={styles.formWrap}>
                <input
                  name="name"
                  type="text"
                  value={name}
                  placeholder="Your Name"
                  required
                  className={`${styles.formInput} ${styles.formControlHasValidation}`}
                />
              </div>
            </div>


                        <div>
              <p className={styles.bookingTitle}>Phone Number</p>
              <div className={styles.formWrap}>
                <input
                  name="name"
                  type="tel"
                  placeholder="+212600000000"
                  required
                  className={`${styles.formInput} ${styles.formControlHasValidation}`}
                />
              </div>
            </div>


                        <div>
              <p className={styles.bookingTitle}>Email</p>
              <div className={styles.formWrap}>
                <input
                  name="mail"
                  type="email"
                  placeholder="Your Email"
                  required
                  className={`${styles.formInput} ${styles.formControlHasValidation}`}
                />
              </div>
            </div>



             <div>
              <p className={styles.bookingTitle}>Occasion</p>
              <div className={styles.formWrap}>
                <select
                  id="occasion"
                  className={`${styles.select2HiddenAccessible} ${styles.formInput} `}
                  placeholder="Select an occasion (optional)"
                >
                 <option value="default">Select an occasion (optional)</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date">Date night</option>
                  <option value="business_meal">Business Meal</option>
                  <option value="special_occasion">Celebration</option>   
                </select>
              </div>
            </div>

            <div>
                
              <div className={styles.formWrap}>
               <textarea
              placeholder="Add a special request (optional)"

               >
                 
               </textarea>
              </div>

            </div>




              <button

              >
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ReservationCompleteForm
