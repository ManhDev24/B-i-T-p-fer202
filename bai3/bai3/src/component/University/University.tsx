import React, { useContext } from 'react'
import AppContext from '../../Provider/Context'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PATH } from '../../routes/path'

interface Student {
  id: number
  name: string
  age: number
  email: string
  universityId: number
  major: string
  gpa: number
  fullTime: boolean
}

interface University {
  id: number
  name: string
}

const UniversityComponent: React.FC = () => {
  const { uData } = useContext(AppContext)
  const { university, studenta } = uData
  console.log('studenta: ', studenta)

  return (
    <div className="mt-10 mx-auto">
      <div className="mb-2">
        <Breadcrumb
          items={[
            {
              title: <Link to={PATH.HOME}>Home</Link>,
            },
            {
              title: <Link to={PATH.UNIVERSITY}>University</Link>,
            },
          ]}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">University</th>
            <th scope="col">Major</th>
            <th scope="col">GPA</th>
            <th scope="col">Full Time</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {studenta.map((item: Student) => {
            const { name } = university.find((uni: University) => uni.id === item.universityId)
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{name}</td>
                <td>{item.major}</td>
                <td>{item.gpa}</td>
                <td className={item.fullTime ? 'text-danger' : 'text-success'}>{item.fullTime ? 'Full Time' : 'Part Time'}</td>
                <td>
                  <button className="btn btn-primary">Detail</button>
                  <button className="btn btn-danger">Delete</button>
                  <button className="btn btn-warning">Edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default UniversityComponent
