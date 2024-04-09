import React, { useEffect, useState } from 'react'
import studentService from '../Routes/StudentSeviceRoutes'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();
    
    const [studentData, setStudentData] = useState([])

    useEffect(() => {
      
        studentService.getAllStudent().then((res) => {
            if (res.data.data){
                setStudentData(res.data.data)
            }
        }).catch((error) => {
            console.log(error);
          });

    }, [studentData])

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/AddStudent');
    }
    
    const handleDelete = (id) => {
        studentService.deleteRow(id).then((res) => {
            if(res.data.error){
                alert(res.data.message)
            } else {
                alert(res.data.message)
            }
        })
        .catch((error) =>{
            console.error(error);
        })
    }

    const handleUpdate = (student) => {
        navigate('/AddStudent', {state:{student}})
    }

  return (
    <div>

        <button
        onClick={handleNavigate}
        type="button"class=" absolute top-20 left-40 mt-8 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mr-2">
        Add Student
        </button>

       <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-40 mx-40" >
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                    <th scope="col" class="px-6 py-3">
                    Student Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                    email
                    </th>
                    <th scope="col" class="px-6 py-8  ">
                    Action
                    </th>
                </tr>
                </thead>

            <tbody>
            {studentData?.map((student, index) => (

                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {student.Name}
                </th>
                <td class="px-6 py-4">
                    {student.Email}
                </td>
                <td class="px-6 py-4">


                <button
                onClick={(e)=> handleUpdate(student)}
                type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mr-2">
                Update
                </button>

                <button
                onClick={(e)=> handleDelete(student.ID)}
                type="button"
                class="inline-block rounded bg-red-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Delete
                </button>
                </td>
            </tr>
            ))}
            
        </tbody>
    </table>
</div>

      
    </div>
  )
}
export default HomePage
