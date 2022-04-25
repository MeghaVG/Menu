
import './App.css';

function Block({Item}) {
  return (
    <section className='s1'>
              <section className='disp-head'><h4 ><u >Employee Description:</u></h4></section>
              <table className='desp'>
                <tbody>
                  <tr>
                    <td className='td1' >Employee-Id: </td>
                    <td className='td2'>{Item.id}</td>
                  </tr>
                  <tr>
                    <td className='td1'>First Name: </td>
                    <td className='td2'> {Item.name} </td>
                  </tr>
                  <tr>
                    <td className='td1'>Last Name:</td>
                    <td className='td2'>{Item.last_name}</td>
                  </tr>
                  <tr>
                    <td className='td1'>Department Id:</td>
                    <td className='td2'>{Item.deptId}</td>
                  </tr>
                  <tr>
                    <td className='td1'>Phone no:</td>
                    <td className='td2'>{Item.phone}</td>
                  </tr>
                  <tr>
                    <td className='td1'>E-mail: </td>
                    <td className='td2'>{Item.mail}</td>
                  </tr>
                  <tr>
                    <td className='td1'>Address:</td>
                    <td className='td2'>{Item.adress}</td>
                  </tr>
                  <tr>
                    <td className='td1'>Gender:</td>
                    <td className='td2'>{Item.gender}</td>
                  </tr>
                  <tr>
                    <td className='td1'>Hobbies:</td>
                    <td className='td2'>{Item.hobbies}</td>
                  </tr>
                </tbody>
              </table>
            </section>
  );
}

export default Block;



