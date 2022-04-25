import { useEffect } from 'react';
import './App.css';

function Form({data_item}) {
  return (
   
                  <table className='form_table'>
                    <thead className='t_head'>
                      <td colSpan="2" ><h2 >Employee Form</h2>
                      </td> </thead>
                    <tbody>
                      <tr>
                        <td className='form_td'>Employee Id:</td>
                        <td> <input type="text" name="id" onChange={data_item} /></td>
                      </tr>
                      <tr>
                        <td className='form_td'>Employee First Name:</td>
                        <td> <input type="text" name="name" onChange={data_item} /></td>
                      </tr>
                      <tr>
                        <td className='form_td'>Employee Last Name:</td>
                        <td> <input type="text" name="last_name" onChange={data_item} /></td>
                      </tr>
                      {/*<tr>
                        <td>Department Id:</td>
                        <td> <input type="text" name="deptId" value={Object.values(dept_id)}  readOnly/></td>
                      </tr>*/}
                      <tr>
                        <td className='form_td'>Department Name:</td>
                        <td> <input type="text" name="dept_name" onChange={data_item} /></td>
                      </tr>
                      <tr>
                        <td className='form_td'>Phone Number:</td>
                        <td> <input type="text" name="phone" onChange={data_item} /></td>
                      </tr>
                      <tr>
                        <td className='form_td'>E-mail :</td>
                        <td> <input type="text" name="mail" onChange={data_item} /></td>
                      </tr>
                      <tr>
                        <td className='form_td'>Address :</td>
                        <td> <input type="text" name="adress" onChange={data_item} /></td>
                      </tr>
                      <tr>
                        <td className='form_td'>Gender :</td>
                        <td> <input type="text" name="gender" onChange={data_item} /></td>
                      </tr>
                      <tr>
                        <td className='form_td'>Hobbies :</td>
                        <td> <input type="text" name="hobbies" onChange={data_item} /></td>
                      </tr>
                      <tr >
                        <td colSpan="2">  <button className="submit_btn" type='submit'  >Submit</button></td>
                      </tr>
                    </tbody>

      </table>

   
  );
}

export default Form;
