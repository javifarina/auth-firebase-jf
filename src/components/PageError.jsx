import React from 'react'
import { Link,  } from 'react-router-dom'


const PageError = () => {
  return (
    <div>
        <h1>No estas Logedo</h1>
        <Link to="/" className="underline">
            Sign Up
          </Link>
    </div>
  )
}

export default PageError