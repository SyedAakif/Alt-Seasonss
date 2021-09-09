import React, { useState, useEffect } from "react";
import { CCard, CCardHeader, CCol, CRow} from "@coreui/react";


import AnalystApi from "./AnalystApi.js";
import API from "../../BaseApi";
 
function Analyst() {
  const [items, setItems] = useState([]);

  function getData() {
    ;
    if (!localStorage.getItem(API.getTokenKey())) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      let body = {
        code: params["code"],
        redirectUri: window.location.href.split("?")[0],
      };
      AnalystApi.getAuthToken(body)
        .then((res) => {
          ;
          localStorage.setItem(API.getTokenKey(), res.data.access_token);
          getDashboardDetails();
        })
        .catch((err) => {
          if (!localStorage.getItem(API.getTokenKey()) || !params["code"]) {
            var base_url = window.location.origin;

            window.location =
              "https://auth.test.altseasons.com/auth/realms/altseasons/protocol/openid-connect/auth?client_id=account&response_type=code&scope=openid&redirect_uri=" +
              base_url +
              "/dashboard";
          }
        });
    } else {
      getDashboardDetails();
    }
  }
  function getDashboardDetails() {
    AnalystApi.getDashBoarData().then((res) => {
      setItems(res.data);
    });
  }

  AuthenticationRedirection();
  function AuthenticationRedirection() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CRow>
 
      <CCol>
        <CCard>
        <CCardHeader>New Analyst</CCardHeader>
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                
                <th>Analyst</th>
                <th>Telegram id</th>
                <th>Telegram Username</th>
                <th >Pair</th>
                <th>Approval</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                   
                    
                    <td>
                      <strong>
                        {item.telegramUser.firstName}{" "}
                        {item.telegramUser.lastName}{" "}
                      </strong>
                    </td>
                    
                    <td>{item.telegramUser.telegramId}</td>
                    <td>{ item.telegramUser.username }</td>
                     
                    <td >{item.telegramUser.base[0].coin} </td>
                    <td>
                      <button className="bg-success">Yes</button>
                      {" "}
                      {" "}
                      {" "}
                      <button className="bg-warning">No</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CCard>
 

        <br />
      </CCol>
    </CRow>
  );
}

export default Analyst;
