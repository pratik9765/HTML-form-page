import './App.css';
import React, { useState } from 'react';


function App() {

  const [formData,setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", comments:false, candidates:false, offers:false, pushNotifications:"",
  })

  function changeHandler(event){
    const {name,value,checked,type} =event.target;
    setFormData((prev) => ({...prev, [name]:type === "checkbox" ? checked : value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the data ");
    console.log(formData)   

  }


  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={submitHandler}  className='flex flex-col mt-2 gap-2'>
      <div>
      <label htmlFor='firstName'>First Name</label> <br></br>
        <input type="text" name="firstName" id="firstName" placeholder="Pratik"  value={formData.firstName} 
          onChange={changeHandler} className="outline"></input>
      </div>
       
      <div>
      <label htmlFor='lastName'>Last Name</label> <br></br>
        <input type="text" name="lastName" id="lastName" placeholder="Bokde"  value={formData.lastName} 
          onChange={changeHandler} className="outline"></input>
      </div>
       
      <div>
      <label htmlFor='email'>Email Address</label> <br></br>
        <input type="email" name="email" id="email" placeholder="pratikbokde9765@gmail.com"  value={formData.email} 
          onChange={changeHandler} className="outline"></input>
      </div>

      <div>
        <label htmlFor='country'>Country</label> <br></br>
        <select  id='country' name='country' value={formData.country} onChange={changeHandler} className='outline'>
          <option>India</option>
          <option>United States</option>
          <option>France</option>
          <option>Brazil</option>

        </select>
      </div>

             
      <div>
      <label htmlFor='streetAddress'>Street Address</label> <br></br>
        <input type="streetAddress" name="streetAddress" id="streetAddress" placeholder="1234 Main St"  value={formData.streetAddress} 
          onChange={changeHandler} className="outline"></input>
      </div>

             
      <div>
      <label htmlFor='city'>City</label> <br></br>
        <input type="city" name="city" id="city" placeholder="Mumbai"  value={formData.city} 
          onChange={changeHandler} className="outline"></input>
      </div>

             
      <div>
      <label htmlFor='state'>State</label> <br></br>
        <input type="state" name="state" id="state" placeholder="Maharashtra"  value={formData.state} 
          onChange={changeHandler} className="outline"></input>
      </div>

             
      <div>
      <label htmlFor='postalCode'>Postal Code</label> <br></br>
        <input type="postalCode" name="postalCode" id="postalCode" placeholder="444001"  value={formData.postalCode} 
          onChange={changeHandler} className="outline"></input>
      </div>
      <br></br>

      <fieldset className='flex flex-col gap-4'>
        <legend>By Email </legend>

        <div className='flex flex-row'>
          <input id='comments' name='comments' type="checkbox" value={formData.comments} onChange={changeHandler}></input>

          <div>
          <label htmlFor='comments'>Comments</label>
          <p>Get notified when someone post a comment on a posting.</p>
          </div>
        </div>



        <div  className='flex flex-row'>
          <input id='candidates' name='candidates' type="checkbox" value={formData.candidates} onChange={changeHandler}></input>

          <div>
          <label htmlFor='candidates'>candidates</label>
          <p>Get notified when a candidate applies for a job.</p>
          </div>
        </div>

        
        <div  className='flex flex-row'>
          <input id='offers' name='offers' type="checkbox" value={formData.offers} onChange={changeHandler}></input>
          <div>
          <label htmlFor='offers'>Offers</label>
          <p>Get notified when a candidate accepts or rejects as offer.</p>
          </div>
        </div>
      </fieldset>

      <br></br>


      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile phone.</p>

        <input type='radio' id='pushEverything' name='pushNotifications' value="Everything" onChange={changeHandler}></input>
        <label htmlFor='pushEverything'>Everything</label> <br></br>

        <input type='radio' id='pushEmail' name='pushNotifications' value="Same as email" onChange={changeHandler}></input>
        <label htmlFor='pushEmail'>Same as email</label> <br></br>

        <input type='radio' id='pushNothing' name='pushNotifications' value="No Push Notifications" onChange={changeHandler}></input>
        <label htmlFor='pushNothing'>No Push Notifications</label> <br></br>


      </fieldset>
        
        <button className='bg-blue-500 flex text-white font-bold rounded-md py-1 px-4'>Save</button>






      </form>
    </div>
  );
}

export default App;
