import React from 'react'

const Input = ({ name, label, placeholder, value, onChange, type = "text" }) => {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={name} className="mb-1">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border p-2 rounded"
      />
    </div>
  )
}

export default Input
