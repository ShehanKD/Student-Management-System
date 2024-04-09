import React, { useState, useEffect } from 'react'
import studentService from '../Routes/StudentSeviceRoutes';
import { useLocation, useNavigate } from 'react-router-dom';

const AddStudent = () => {

const location = useLocation();
const navigate = useNavigate();
const [name, setName] = useState(''); 
// here name is the variable to be assgined and setName is the function to be assigned.
const [email, setEmail] = useState('');

useEffect(() => {
  if(location.state?.student){
    setName(location?.state?.student.Name);
    setEmail(location?.state?.student.Email);
  }
}, [location]);


const handleSubmit = (e) =>{
    e.preventDefault();

    const data = {
        name : name,
        email : email
    }

    studentService.postStudent(data).then((res) => {
        if(res.error){
            console.error(res);
        } else {
            navigate('/Homepage')
        }
    })
    
}

const handleUpdate = (e) =>{
    e.preventDefault();

    const data = {
        name : name,
        email : email,
        id : location.state.student.ID
    }

    studentService.updateRow(data).then((res) => {
        if(res.error){
            console.error(res);
        } else {
            navigate('/Homepage')
        }
    })
    
}


  return (

    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
     <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Add a student
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Name</label>


                      {/* here we have an onchange value.  */}
                      <input 
                      type="text" value={name} onChange={(e) => setName(e.target.value)}
                      name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input 
                      type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                      name="email" id="email"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 {location?.state?.student ?
                     <div>
                     <button type="submit" onClick={handleUpdate} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
                     </div> :

                    <div>
                    <button type="submit" onClick={handleSubmit} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                    </div>
                } 
                 

              </form>
          </div>
      </div>
  </div>
</section>
      
    </div>
  )
}

export default AddStudent
