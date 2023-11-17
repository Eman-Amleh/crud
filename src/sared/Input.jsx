import React from 'react'

export default function ({type,id,name,title,changdata,errors,value}) {
  
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{title}</label>
    <input type={type}  className="form-control"  name={name} onChange={changdata}  value={value}/>
    {errors[name] && <p className='text-danger'>{errors[name]}</p>}
    </div>
  )
}
