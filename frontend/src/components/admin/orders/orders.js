import React, { useEffect, useState }  from 'react';
import axios from "axios";
import "../orders/orders.css";
// 
const Orders = () => {
    const[orders,setOrdes] = useState();
    const getAllOrder = () => {
        axios
        .get("http://localhost:5000/orders/search")
        .then((res) => {
          console.log(res.data);
          setOrdes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
        <div className='orderTable'>
            <button onClick={() => {getAllOrder()}}> check </button>
            {/* <table>
        <tr>
          <th>Image</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        {orders &&
          orders.map((order) => {
            return (
              <>
                <tr>
                  <td>
                    <img
                      className="userImg"
                      src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
                    />
                  </td>
                  <td>{`${user.firstName && user.firstName} ${
                    user.lastName && user.lastName
                  }`}</td>
                  <td>{user.email && user.email}</td>
                  <td>{user.country && user.country}</td>
                  <td><select className="updateSelect"><option>{user.role_id ===1? user.role_id +" .user ":user.role_id +" .admin "}</option><option>{user.role_id===1?"2.admin":"1.user"}</option></select>
                    
                    <BiEditAlt
                      className="editRole"
                      onClick={() => {
                          setId(user.id)
                          SetRole_id(user.role_id)
                        setUpdateStatus(true);
                      }}
                    />
                  </td>
                  <td>
                    <TiDelete
                      className="deleteIcons"
                      onClick={() => {
                        setId(user.id)
                        setDeleteStatus(true);
                      }}
                    />
                  </td>
                </tr>
              </>
            );
          })}
      </table> */}
        </div>
    );
}

export default Orders;
