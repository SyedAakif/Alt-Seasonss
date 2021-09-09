import React, { lazy, useMemo, useState, useEffect } from "react";
import { CCard, CCardHeader, CCol, CRow, CCallout } from "@coreui/react";
import axios from "axios";
import CIcon from "@coreui/icons-react";

import MainChartExample from "../charts/MainChartExample.js";
import DashboardApi from "./DashboardApi.js";
import TheSidebar from "src/containers/TheSidebar.js";
import API from "../../BaseApi";
import Moment from "react-moment";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

function Dashboard() {
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
      DashboardApi.getAuthToken(body)
        .then((res) => {
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
    DashboardApi.getDashBoarData().then((res) => {
      ;
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

  const calculateTotalAmount = (item) => {
    let totalAmount = 0;
    item.followers.map((fol) => {
      fol.sessions.map((ses) => {
        ses.wallet.map((wal) => {
          totalAmount += wal.amount;
        });
      });
    })
    return totalAmount;
  }

  return (
    <>
      <div>
        <WidgetsDropdown />
      </div>
      <CRow>
        <CCol>
          <CCard>
            <table className="table table-hover table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center">id</th>
                  <th className="">Analyst</th>
                  <th className="">Register Date</th>
                  <th className="text-center">Number of Copies</th>
                  <th className="text-center">total Traded Volume</th>
                  <th className="text-center">Open trading volume</th>
                  <th className="text-center">Total Copiers Balance</th>
                  <th className="text-center">Profits</th>
                  <th className="text-center">Win Rate %</th>
                  <th className="text-center">Telegram</th>
                  <th className="text-center">Telegram Username</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="text-center">{item.id}</td>
                      <td>
                        <strong>
                          {item.telegramUser.firstName}{" "}
                          {item.telegramUser.lastName}{" "}
                        </strong>
                      </td>
                      <td className="text-center">
                        {" "}
                        <Moment format="DD/MM/YYYY">
                          {item.telegramUser.createdAt}
                        </Moment>{" "}
                      </td>
                      <td>
                        <div className="clearfix ">
                          <div className="text-center">
                            <strong> {item.followers.length} </strong>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">{item.totalTradedVolume}</td>
                      <td className="text-center">{item.openTradingVolume}</td>
                      <td>
                      {
                        calculateTotalAmount(item)
                      }
                      </td>

                      <td>
                        <div className="text-center">
                          {item.openTradingVolume}
                        </div>
                      </td>
                      <td className="text-center">{item.winrate * 100}%</td>
                      <td className="text-center">
                        {item.telegramUser.telegramId}
                      </td>
                      <td className="text-center">
                        <strong>{item.telegramUser.username}</strong>
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
    </>
  );
}

export default Dashboard;
