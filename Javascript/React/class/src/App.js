import './appstyle.css'
import data from '../src/users.json'

function App() {
  return (
    <table className="wrapper">
      {/* <!-- Row title --> */}
      <thead className="row title">
        <tr>
          <th width="4%">id</th>
          <th width="10%">Name</th>
          <th width="12%">username</th>
          <th width="16%">email</th>
          <th width="20%">address</th>
          <th width="12%">phone</th>
          <th width="12%">website</th>
          <th width="12%">company</th>
        </tr>
      </thead>

      {data.map(user => {
        return (
          <section className="row-fadeIn-wrapper">

            <table className="row fadeIn">
              <tr>
                <td width="4%">{user.id}</td>
                <td width="10%">  {user.name}  </td>
                <td width="12%">  {user.username} </td>
                <td width="18%">  {user.email}  </td>
                <td width="20%">{user.address.street + ', ' +user.address.suite +', ' +user.address.city }</td>
                <td width="12%">  {user.phone}  </td>
                <td width="12%">  {user.website} </td>
                <td width="12%">  {user.company.name} </td>
                <td className="more-content">
                  <td>
                    <span classNamemeta-info>Zipcode:</span>  {user.address.zipcode}
                    <span className='meta-info'>Latitude:</span> {user.address.geo.lat}
                    <span className='meta-info'>Longitude:</span> {user.address.geo.lng}
                  </td>
                </td>
              </tr>
            </table>

          </section>
        )
      })}
    </table>
  )
}

export default App;
