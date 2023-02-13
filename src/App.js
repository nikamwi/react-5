import { useState } from "react";
import './App.css';


// validacia ar mushaobs erori ar maqvs ubralod ver vigeb sad davwere shecdomit

const validate = (firstName, lastName, gmail, age) =>{
  const errors = {}
  if(!firstName){
    errors.firstName = "first name empty"
  }else if(firstName < 4){
    errors.firstName = "firs name is short"
  }
  if(!lastName){
    errors.lastName = "last name empty"
  }else if(lastName < 4){
    errors.lastName = "last name is short"
  }
  if(!gmail.includes("@gmail.com")){
    errors.gmail = "inccorrenct format"
  }
  if(age < 18){
    errors.age = "You are not of legal age"
  }
} 
const App = () => {

  const [firstName, setFirstName] = useState ("")
  const [lastName, setLastName] = useState ("")
  const [gmail, setGmail] = useState ("")
  const [age, setAge] = useState ("")

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const onLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  const onGmailChange = (e) => {
    setGmail(e.target.value)
  }
  const onAgeChange = (e) => {
    setAge(e.target.value)
  }


  const [users, setUsers] = useState([])
 
  const onFormSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, {firstName, lastName, gmail, age}])
    console.log("validacia", validate(firstName, lastName, gmail, age))
  }  


  return (
    <div className="App"> 
    <form onSubmit={onFormSubmit}>
      <label>first name</label>
      <input
      value={firstName}
      onChange={onFirstNameChange}
      name="firstName"
      />
      <label>last name</label>
      <input
      value={lastName}
      onChange={onLastNameChange}
      name="lastName"
      />
      <label>gmail</label>
      <input
      value={gmail}
      onChange={onGmailChange}
      name="gmail"
      />
      <label>age</label>
      <input
      value={age}
      onChange={onAgeChange}
      name="age"
      />
      {/* <div>
        <label>gender</label>
        <input
        type="checkbox"
        value="male"
        onChange={onGenderChange}
        checked={gender === "male"}
        />male
        <input
        type="checkbox"
        value="female"
        onChange={onGenderChange}
        checked={gender === "female"}
        />female
      </div> */}
      <button>save user</button>
    </form>
    {users.map((user) => {
      return <h1 key={user.firstName}>{user.firstName} {user.lastName} {user.gmail} {user.age}</h1>
    })}
    </div>
  );
}

export default App;
