import React, { useState, useEffect } from "react";
import { CCard } from "@coreui/react";
import UsersApi from "./UsersApi.js";
import Moment from "react-moment";

const Users = () => {
  const [users, setUsers] = useState([]);

  function getUsersDetails() {
    UsersApi.getUsersData().then((res) => {
      setUsers(res.data);
    });
  }

  useEffect(() => {
    getUsersDetails();
  }, []);

  return (
    <>
      <CCard>
        <table className="table table-hover table-outline mb-0 d-none d-sm-table">
          <thead className="thead-light">
            <tr>
              <th className="text-center">id</th>
              <th>Copier</th>
              <th>Register Date</th>
              <th className="text-center">Starting Balance</th>
              <th className="text-center">Balance now</th>
              <th className="text-center">Total Profits</th>
              <th className="text-center">Total Traded Volume</th>
              <th className="text-center">Profit percentage Now</th>
              <th className="text-center">open Trading Volume</th>
              <th className="text-center">Following Analyst</th>
              <th className="text-center">Paid/not paid</th>
              <th className="text-center">Telegram</th>
              <th classclassName="text-center"Name="text-center">Delete/Stop</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              if (user != null) {
                return (
                  <tr key={user.id}>
                    <td className="text-center">{user.id}</td>
                    <td>
                      <strong>
                        {user.telegram.firstName} {user.telegram.lastName}{" "}
                      </strong>
                    </td>
                    <td className="text-center">
                      {" "}
                      <Moment format="DD/MM/YYYY">
                        {user.telegram.createdAt}
                      </Moment>{" "}
                    </td>
                    <td>
                      <div className="clearfix ">
                        <div className="text-center">
                          <strong> {user.openTradingVolume.length} </strong>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{user.totalTradedVolume}</td>
                    <td>
                      <div className="text-center">{user.totalProfits}</div>
                    </td>
                    <td className="text-center">{user.totalTradedVolume}</td>
                    <td className="text-center">{user.totalProfits * 100}%</td>
                    
                    <td>{ user.openTradingVolume.length }

                    
                    </td>
                    <td>{
                      user.follows.map((fol) => {
                        return (
                          <>{fol.analyst.telegramUser.firstName} {fol.analyst.telegramUser.lastName}</>
                        );
                      }
                    
                    )}</td>

                    <td className="text-center">Pending</td>

                    <td className="text-center">{user.telegram.telegramId}</td>
                    <td className="text-center">
                      <button>Delete</button>/{" "}
                      <button disabled="disabled">Stop</button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </CCard>
      {/* <CRow>
        <CCol xs="12" md="6" xl="4">
          <CCard>
            <CCardHeader>
              Account Balance:
              <button disabled="disabled" className="float-right">
                Hide
              </button>
            </CCardHeader>
            <h1 className="text-center">
              0.000015 <span className="h4">BTC</span>
            </h1>
            <small className="text-muted text-center"> Estimated Value </small>
            <strong className="h4 text-center">$79.9</strong>
          </CCard>
        </CCol>
        <CCol xs="12" md="6" xl="4">
          <CCard>
            <CCardHeader>Doughnut Chart</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                datasets={[
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 20, 80, 10, 5, 15],
                  },
                ]}
                labels={[
                  "VueJs",
                  "EmberJs",
                  "ReactJs",
                  "AngularJs",
                  "ExpressJs",
                  "Java",
                ]}
                options={{
                  tooltips: {
                    enabled: true,
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> /}
      {/ <CCard>
        <CCardHeader>Description list alignment</CCardHeader>
        <CCardBody>
          <p>
            Align terms and descriptions horizontally by using our grid system’s
            predefined classes (or semantic mixins). For longer terms, you can
            optionally add a{" "}
            <code className="highlighter-rouge">.text-truncate</code> class to
            truncate the text with an ellipsis.
          </p>
          <div className="bd-example">
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">
                A description list is perfect for defining terms.
              </dd>

              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia
                  odio sem nec elit.
                </p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>

              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>

              <dt className="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>

              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
        </CCardBody>
      </CCard> */}
    </>
  );
};

export default Users;
