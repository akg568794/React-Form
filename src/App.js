import './App.css';
import React,{useState} from 'react'

export default function App() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:" ",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postal:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""

  })
  function changeHandler(event){
    const {name,value,checked, type}=event.target;
    setFormData((prev)=>({...prev,[name]:type==="checkbox"? checked:value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className='w-full md:max-w-[50%] mx-auto shadow p-8'>
      <form className="space-y-2" onSubmit={submitHandler}>
      <label className="text-gray-900 leading-6 text-sm font-medium"  htmlFor='firstName'>First Name </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400  placeholder:font-normal"  onChange={changeHandler} type='text' name='firstName' id="firstName" placeholder="first name" value={formData.firstName}></input><br/>
      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='lastName'>Last Name </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='lastName' id="lastName" placeholder="last name" value={formData.lastName}></input><br/>
      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='email'>E-mail </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='email' name='email' id="email" placeholder="abc@xyz.com" value={formData.email}></input><br/>
      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='country'>Country</label><br/>
      <select onChange={changeHandler} className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" value={formData.country} name='country' id='country'>
      <option value='india'>India</option>
        <option value='usa'>USA</option>
        <option value='canada'>Canada</option>
        <option value='australia'>Australia</option>
        <option value='uk'>UK</option>
      </select><br/>
      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='streetAddress'>Street-Address </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='streetAddress' id="streetAddress" placeholder="B-25C" value={formData.streetAddress}></input><br/>
      <label htmlFor='city'>City </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='city' id="city" placeholder="Delhi" value={formData.city}></input><br/>
      <label htmlFor='state'>State </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='state' id="state" placeholder="Bihar" value={formData.state}></input><br/>
      <label htmlFor='postal'>Zip / Postal code </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='postal' id="postal" placeholder="843119" value={formData.postal}></input><br/>
      
      <fieldset className='mb-10'>
        <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
      <div className="mt-4 space-y-2" >
          <div className='flex'>
          <input className="h-4 w-4 mt-1 rounded" onChange={changeHandler} type='checkbox' name='comments' id='comments' value={formData.comments}></input><br/>
          <div  className="flex flex-col ml-3">
          <label className="text-sm font-semibold leading-6 text-gray-900" htmlFor='comments'>Comments</label>
            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
            
          </div>
        </div>
        
        
        <div className='flex'>
          <input className="h-4 w-4 mt-1 rounded" onChange={changeHandler} type='checkbox' name='Candidates' id='Candidates' value={formData.candidates}></input><br/>
          <div className="flex flex-col ml-3">
          <label className="text-sm font-semibold leading-6 text-gray-900" htmlFor='Candidates'>Candidates</label>
            <p className="text-gray-500">Get notified when a candidate apply for a job.</p>
            
          </div>
        </div>
        <div className='flex'>
          <input className="h-4 w-4 mt-1 rounded" onChange={changeHandler} type='checkbox' name='offers' id='offers' value={formData.offers  }></input><br/>
          <div className="flex flex-col ml-3">
          <label className="text-sm font-semibold leading-6 text-gray-900" htmlFor='Offers'>Offers</label>
            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>
      </div>
      </fieldset>
 
      <fieldset className='mt-10'>
        <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
        <p className="text-gray-500">These are delivered via SMS to your mobile phone.</p>
        <div className='mt-4 space-y-2'>
          <div className="flex gap-x-4">
          <input onChange={changeHandler} type='radio' id='pushEverything' name='pushNotifications' value="Everything" ></input>
          <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='pushEverything'>Everything</label><br/>
        </div>

        <div className="flex gap-x-4">
          <input onChange={changeHandler} type='radio' id='pushEmail' name='pushNotifications' value="same as email" ></input>
        <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='pushEmail'>Same as Email</label><br/>
        </div>
        
        <div className="flex gap-x-4">
          <input onChange={changeHandler} type='radio' id='pushNothing' name='pushNotifications' value="No push Notification" ></input>
        <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='pushNothing'>No Push Notification</label><br/>
        </div>
      </div>
      </fieldset>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
          
      </form>
    </div>
  )
}


