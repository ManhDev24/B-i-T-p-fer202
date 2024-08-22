import { movies } from './data.js'
import { customer } from './data.js'
import { dataUniversity } from './data.js'
// -------------------- bài 1
// Trải mảng bằng reducer
console.log('movies: ', movies)

const Arr = movies.reduce((total, item) => {
  return [...total, ...item.genres]
}, [])

const Arr2 = movies.flatMap((item) => item.genres)
console.log('Arr: ', Arr)
console.log('Arr2: ', Arr2)

// ----------------bài 2

console.log('customer: ', customer)
const sortByLastName = (name) => {
  return name.sort((a, b) => {
    const lastNameA = a.split(' ').slice(-1)[0]
    const lastNameB = b.split(' ').slice(-1)[0]
    return lastNameA.localeCompare(lastNameB)
  })
}
const sortedCustomers = sortByLastName(customer)
console.log('sortedCustomers: ', sortedCustomers)

// test ko rõ đúng hay sai

let Arr3 = customer.sort((a, b) => {
  a.length - b.length
})
console.log('Arr3: ', Arr3)

// ----------------bài 3
console.log('dataUniversity: ', dataUniversity)

const tableMapping = dataUniversity.studenta.map((student) => {
  const [university] = dataUniversity.university.filter((university) => university.id === student.universityId)
  return `
    <tr>
      <th scope="row">${student.id}</th>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.email}</td>
      <td>${university.name}</td>
      <td>${student.major}</td>
      <td>${student.gpa}</td>
      <td>${student.fullTime ? '<span class="text-green-400">Full Time</span>' : '<span class="text-red-400">Part Time</span>'}</td>
      <td>
        <button class="btn btn-primary" onclick="handleDetail(${student.id})">Detail</button>
        <button class="btn btn-danger" onclick="handleDelete(${student.id})">Delete</button>
        <button class="btn btn-warning" onclick="handleEdit(${student.id})">Edit</button>
      </td>
    </tr>`
})

document.querySelector('#student-table-body').innerHTML = tableMapping.join('')

// -------------------- bài 4
let arrayTestReduce = [1, 2, 3, 4, 5]
Array.prototype.reduce2 = function (callback, preValue) {
  let arrLength = this.length
  let accumulator = preValue !== undefined ? preValue : this[0]
  let startIndex = preValue !== undefined ? 0 : 1
  for (let i = startIndex; i < arrLength; i++) {
    accumulator = callback(accumulator, this[i], i, this)
  }

  return accumulator
}
let total = arrayTestReduce.reduce2((total, item) => {
  return total + item
}, 0)
console.log('total: ', total)
