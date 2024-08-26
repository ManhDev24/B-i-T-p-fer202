import React from 'react'
import { Link } from 'react-router-dom'
import { PATH } from '../../routes/path'

const Homepage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-red-600">Day 3 🔥</h1>
      <ul className="mt-10">
        <li className="text-3xl text-red-500 text-center">
          <Link to={PATH.TIMER}>Bài 1</Link>
        </li>
        <li className="text-3xl text-red-500 text-center">
          <Link to={PATH.CURRENCY}>Bài 2</Link>
        </li>
        <li className="text-3xl text-red-500 text-center">
          <Link to={PATH.UNIVERSITY}>Bài 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Homepage
