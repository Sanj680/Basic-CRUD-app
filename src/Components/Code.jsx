import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
return (
	<div className="Page">
	

	<div className="courses-nav">
		<Link to="/dashboard">Dashboard</Link>
		<Link to="/list">List</Link>
	</div>

	<Outlet />
	</div>
)
}

export default Courses
