import React from 'react'

const Invoice = ({invoice}) => {
  return (
      <>
          <table>
              <thead>
                  <tr>
                      <th>name</th>
                      <th>email</th>
                      <th>date</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>{ invoice.name}</td>
                      <td>{ invoice.email}</td>
                      <td>{ invoice.date}</td>
                  </tr>
              </tbody>
          </table>
      </>
  )
}

export default Invoice