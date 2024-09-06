// UserProfile.jsx
import {React, useState, useEffect} from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  console.log(userId);
  console.log("userid");

  //form:
  const [formData, setFormData] = useState({
    link: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    card: ""
  })


  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  // var [data, setData] = useState(null);
  var [user, setUser] = useState({
    name: 'Name',
    email: 'email@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    profileImage: 'https://via.placeholder.com/150', 
  });

  fetch(`http://localhost:8080/users/get-user?id=${userId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
      const data = JSON.parse(result);
      setUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        profileImage: data.picture,
      });
      setOrderHistory([{id: data.orders.split(',')[0], date: data.orders.split(',')[1], totalAmount: data.orders.split(',')[2], status: data.orders.split(',')[3]},]);
      setFavorites([{id: 1, name: data.favorites.split(',')[0], details: data.favorites.split(',')[1], imageUrl: data.favorites.split(',')[2],}]);
      setPayementMethods([
        { id: 1, type: 'Credit Card', last4Digits: data.card }]);


    })
    .catch((error) => console.error(error));

    var [orderHistory, setOrderHistory] = useState([{id: 0, date: 'yyyy-mm-dd', totalAmount: 0.0, status: "Status"},]);

    var [favorites , setFavorites] = useState([{id: 0, name: 'Name', details: 'Details', imageUrl: 'https://via.placeholder.com/150'},])

    var [paymentMethods, setPayementMethods] = useState([
      { id: 1, type: 'Credit Card', last4Digits: '*********' },
    ])

var [isUpdate, setIsUpdate] = useState(false);
function updateUser() {




  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": userId,
  "name": formData.name,
  "email": formData.email,
  "phone": formData.phone,
  "address": formData.address,
  "picture": formData.link,
  "card": formData.card
});

const requestOptionsUpdate = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

  if(!isUpdate) {
    setIsUpdate(true);
  } else {
    setIsUpdate(false);
  }
  
  console.log("update user");
  
  fetch("http://localhost:8080/users/update-user", requestOptionsUpdate)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile">
        <div className="profile-image">
          {isUpdate? <p></p> : <img src={user.profileImage} alt="Profile" />}
        </div>
        <div className="profile-details">
          {isUpdate? (<label style={{ display: 'block' }}><input name='profile' type='text' placeholder="link to profile picture" onChange={(e) => setFormData({...formData, link: e.target.value})}/></label>): <p></p>}
          {isUpdate? (<label style={{ display: 'block' }}><input name='name' type='text' placeholder={user.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/></label>) :(<p><strong>Name:</strong> {user.name}</p>)}
          {isUpdate? (<label style={{ display: 'block' }}><input name='email' type='email' placeholder={user.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/></label>) :(<p><strong>Email:</strong> {user.email}</p>)}
          {isUpdate? (<label style={{ display: 'block' }}><input name='phone' type='phone' placeholder={user.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}/></label>) :(<p><strong>Phone:</strong> {user.phone}</p>)}
          {isUpdate? (<label style={{ display: 'block' }}><input name='address' type='text' placeholder={user.address} onChange={(e) => setFormData({...formData, address: e.target.value})}/></label>) :(<p><strong>Address:</strong> {user.address}</p>)}
          <button className="edit-button" onClick={updateUser}>{isUpdate? "Update" :"Edit Profile"}</button>
        </div>
      </div>
      <div className="section">
        <h3>Order History</h3>
        <ul className="order-history">
          {orderHistory.map(order => (
            <li key={order.id}>
              <span>Order ID: {order.id}</span>
              <span>Date: {order.date}</span>
              <span>Total Amount: ${order.totalAmount}</span>
              <span>Status: {order.status}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>Favorites</h3>
        <div className="favorites">
          {favorites.map(favorite => (
            <div key={favorite.id} className="favorite-item">
              <img src={favorite.imageUrl} alt={favorite.name} />
              <div className="favorite-details">
                <h4>{favorite.name}</h4>
                <p>{favorite.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h3>Payment Methods</h3>
        <ul className="payment-methods">
          {paymentMethods.map(method => (
            <li key={method.id}>
              <span>{method.type}</span>
              {isUpdate ? (<label style={{ display: 'block' }}><input name='method.type' type='text' placeholder={method.type} onChange={(e) => setFormData({...formData, card: e.target.value})}/></label>) : <span>{method.last4Digits || method.email}</span>}
              <button className="edit-button" onClick={updateUser}>{isUpdate ? "Update" : "Edit"}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default UserDashboard;
