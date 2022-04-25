import React, { useState, useEffect } from 'react';
import Form from './App_Form';
import './List.css';
import Menu from './Menu';
import Tabledata from './Tabledata';
import App_Form from './App_Form';
import Block from './Block';

const getLocalitems = () => {
  let list = localStorage.getItem('list');
  //console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

function Listitem() {
  const [data, setData] = useState([
    { id: 1, name: 'Gob', last_name: 'Putin', deptId: '1', dept_name: 'Development', phone: '9901119473', mail: 'gob@gmail.com', adress: 'Bangalore', gender: 'Male', hobbies: 'Playing Cricket' },
    { id: 2, name: 'Jhon', last_name: 'Washington', deptId: '1', dept_name: 'Development', phone: '9901119563', mail: 'john@gmail.com', adress: 'Chennai', gender: 'Male', hobbies: 'Playing Football' },
    { id: 3, name: 'Jack', last_name: 'Angle', deptId: '1', dept_name: 'Development', phone: '9923119473', mail: 'jack@gmail.com', adress: 'Sikkim', gender: 'Male', hobbies: 'Playing Badminton' },
    { id: 1, name: 'Dev', last_name: 'Singh', deptId: '2', dept_name: 'Accounts', phone: '9851119473', mail: 'dev@gmail.com', adress: 'Hydrabad', gender: 'Male', hobbies: 'Readind books' },
    { id: 2, name: 'Radhi', last_name: 'Shetty', deptId: '2', dept_name: 'Accounts', phone: '9906719473', mail: 'rose@gmail.com', adress: 'Noida', gender: 'Female', hobbies: 'Sketching' },
    { id: 3, name: 'Jay', last_name: 'Shetty', deptId: '2', dept_name: 'Accounts', phone: '9904519473', mail: 'jay@gmail.com', adress: 'Delhi', gender: 'Male', hobbies: 'Dancing' },
    { id: 1, name: 'Sham', last_name: 'Sunadaram', deptId: '3', dept_name: 'Production', phone: '920111773', mail: 'sham@gmail.com', adress: 'Mangalore', gender: 'Male', hobbies: 'Playing Tennis' },
    { id: 2, name: 'Raj', last_name: 'Chopra', deptId: '3', dept_name: 'Production', phone: '8701119473', mail: 'raj@gmail.com', adress: 'Mysore', gender: 'Male', hobbies: 'Playing Guitar' },
    { id: 3, name: 'Mouna', last_name: 'Dsouza', deptId: '3', dept_name: 'Production ', phone: '8801119473', mail: 'mouna@gmail.com', adress: 'Mumbai', gender: 'Female', hobbies: 'Singing' },
  ]);

  const [input, setInput] = useState([
    { id: '1', name: 'Development' },
    { id: '2', name: 'Account' },
    { id: '3', name: 'production' }
  ]);

  // [data,setData]=useState(dataset)

  const [Items, setItems] = useState(getLocalitems());
  const [edit, setEdit] = useState(true);
  const [isEdit, setIsedit] = useState(null);
  const [edit1, setEdit1] = useState(true);
  const [data1, setData1] = useState([]);
  const [dept_id, setValue] = useState("");
  const [itemvalue, setItemvalue] = useState("");

  //adding new row to table
  const [adddata, setAdddata] = useState({
    id: null,
    name: "",
    last_name: "",
    deptId: "",
    dept_name: "",
    phone: "",
    mail: "",
    adress: "",
    gender: "",
    hobbies: "",
  });

  const addFormdata = (event) => {
    //event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    //console.log(fieldName);
    const fieldvalue = event.target.value;
    const newFormdata = { ...adddata };
    newFormdata[fieldName] = fieldvalue;//assigning value
    console.log(newFormdata);
    setAdddata(newFormdata);
  };

  const FormSubmit = (event) => {
    // event.preventDefault();
    const newContact = {
      id: adddata.id,
      name: adddata.name,
      last_name: adddata.last_name,
      deptId: adddata.deptId,
      dept_name: adddata.dept_name,
      phone: adddata.phone,
      mail: adddata.mail,
      adress: adddata.adress,
      gender: adddata.gender,
      hobbies: adddata.hobbies,
    };

    const newContacts = [...data, newContact];
    //console.log(newContacts)
    setData(newContacts);
    const newContacts1 = [...data1, newContact];
    setData1(newContacts1);
    console.log(data);
    setItemvalue(newContact);
    // setData1(newContact);
    // display(dept_id.deptId)
    setEdit(true)

  };

  //storing data in local storage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(Items))
  }, [Items]
  );

  //display table data
  const display = (id) => {

    //setting deptid
    let selectedId = id;
    const dept_id = {
      deptId: selectedId
    }

    let dept = data.filter((item) => {
      return item.deptId == selectedId;
    });

    let item2 = dept[0] || {};
    //console.log(dept);
    setData1(dept);
    setItemvalue(item2);
    setValue(dept_id);

    //setEdit(false);
    //console.log(dept_id)  ;
  }

  //default display
  useEffect(() => {
    let default_data = data.filter((item) => {
      return item.deptId == '1';
    });

    let default_item = data.filter((item) => {
      return item.deptId == '1';
    })[0];

    //console.log(default_data);
    //console.log(default_item);
    setData1(default_data);
    setItemvalue(default_item);
    setInput("");
  }, [setValue]);


  //description box display
  const show = (e, item) => {
    // console.log(item);
    setItemvalue(item);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  //adding menu item
  const addItem = () => {
    const inputData = { id: Items.length + 1, name: input };
    //const inputdata1=inputData.toString()
    setItems(Items => [...Items, inputData]);
    //  console.log(inputData);
    setInput("");
  };

  //update menu item
  function updateItem(id) {
    const newItem = Items.map((elem) => {
      if (elem.id === isEdit) {
        return { ...elem, name: input }
      }
      return elem;
    })

    // console.log(newItem);
    setItems(newItem);
    setEdit1(true);
    setInput('');
    setIsedit(null);
  }

  //edit menu item
  const editItem = (id) => {
    let newItem = Items.find((elem) => {
      return elem.id === id
    });

    // console.log(newItem);
    setEdit1(false);
    setInput(newItem.name)
    setIsedit(id);
  }

  const edit_item = () => {

    setAdddata(dept_id);
    setEdit(false);

  }

  return (

    <div>
      <nav>
        <section className='menu_head'>
          <h2><u>Menu</u></h2>
        </section>
        <section className='input1'>
          <section className='menu'>
            <section>
              <input type="text" name="item" value={input} className="item" onChange={handleChange} />
            </section>
            <section>
              {
                edit1 ?

                  <button className="btn-add-item" onClick={addItem} >Add</button> :
                  <button className="update-add-item" onClick={updateItem}  >Update</button>
              }
            </section>
          </section>
          <section >
            {
              Items.map((elem) => {

                return <Menu value={elem} ondisplay={display} oneditItem={editItem} />

              })
            }
          </section>
        </section>
      </nav>
      <article>

        <div >
          {
            edit ?
              <div>
                <section>
                  <p>
                    <h2><u>Employee details</u>  <button className="Editbtn1" onClick={edit_item} >Add</button></h2>

                  </p>
                </section>
                <section className='table1_sec'>

                  <table className='table1'  >
                    <thead>
                      <tr className='table1_head'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data1.map((item, index) => {
                          return <Tabledata value={item} indexval={index} tableshow={show} />

                        }

                        )
                      }
                    </tbody>
                  </table>
                </section>
              </div>
              :
              <div>
                <form onSubmit={FormSubmit} className="emp-form">

                  <App_Form data_item={addFormdata} />
                </form>
              </div>
          }
        </div>

      </article>

      <section className='section1'>
        {
          edit ?
            <Block Item={itemvalue} />
            :
            ""
        }
      </section>

    </div>

  );
}


export default Listitem;