import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import routes from '../../../routes'


const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                <th className="text-center">User id</th>
                <th>Name</th>
                <th className="text-center">Date</th>
                <th className="text-center">Pair</th>
                <th className="text-center">Type</th>
                <th>Price</th>
                <th className="text-center">Amount</th>
                <th className="text-center">Execution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">#897656</td>
                <td>
                  <strong>Yiorgos Avraamu</strong>
                </td>
                <td className="text-center">01/01/2016 00:00:00</td>
                <td>
                  <div className="clearfix ">
                    <div className="text-center">
                      <strong>USDT</strong>
                    </div>
                  </div>
                </td>
                <td className="text-center">Limit</td>
                <td>
                  <div className="small text-muted">$64.00</div>
                </td>
                <td className="text-center">500</td>
                <td className="text-center">Cancelled </td>
              </tr>
              <tr>
                <td className="text-center">#987549</td>
                <td>
                  <strong>Avram Tarasios</strong>
                  {/* <div className="small text-muted">
                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div> */}
                </td>
                <td className="text-center">01/02/2016 00:00:00</td>
                <td>
                  <div className="clearfix">
                    <div className="text-center">
                      <strong>BTC</strong>
                    </div>
                  </div>
                </td>
                <td className="text-center">Market</td>
                <td>
                  <div className="small text-muted">$45.00</div>
                </td>
                <td className="text-center">600</td>
                <td className="text-center" color="danger">Error</td>
              </tr>
            </tbody>
          </table>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
