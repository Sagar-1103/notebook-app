import React from 'react'

export default function Alert(props) {
  const {alert,setAlert} = props;
  const alertOff = ()=>{
    setAlert(null);
  }
  return (
     <>
     {/* {alert && <div className={`${!alert.success?"bg-green-200 border-green-500":"bg-red-300 border-red-500"} relative border-t-2 rounded-b px-2 py-2 shadow-md`}>
  <div className="flex">
    <div className="py-1"><svg className={`fill-current h-6 w-6 ${!alert.success?"text-green-500":"text-red-500"} mr-4" xmlns="http://www.w3.org/2000/svg`} viewBox="0 0 20 20"><path d="M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm3-1a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4zm10-1a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0v-6z"/></svg></div>
    <div>
      <p className="font-bold">Alert!</p>
      <p className="text-sm">This is a sample alert message. You can customize it as needed.</p>
    </div>
      <i className="fa-solid absolute right-5 bottom-8 fa-xmark fa-2xl" onClick={alertOff}></i>
  </div>
</div>} */}
</>
  )
}
