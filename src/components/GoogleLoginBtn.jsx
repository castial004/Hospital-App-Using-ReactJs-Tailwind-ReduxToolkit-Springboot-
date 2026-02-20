import React from 'react'

const GoogleLoginBtn = ({text=""}) => {
    return (
        <div className="mx-40 mt-4">
            <button
                type="button"
                onClick={() => {
                    window.location.href = "http://localhost:8080/oauth2/authorization/google";
                }}
                className="bg-red-500 hover:bg-red-400 text-white rounded w-full py-4"
            >
                {text}
            </button>
        </div>
    )
}

export default GoogleLoginBtn
