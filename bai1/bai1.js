import { data } from './data.js'

console.log('data: ', data)

let mapping = data.map((item) => {
  return `
    <tr>
      <th scope="row">${item.id}</th>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.email}</td>
      <td>${item.universityId}</td>
      <td>${item.major}</td>
      <td>${item.gpa}</td>
      <td>${item.fullTime ? '<span class="text-green-400">Full Time</span>' : '<span class="text-red-400">Part Time</span>'}</td>
      <td>
        <button class="btn btn-primary" onclick="handleDetail(${item.id})">Detail</button>
        <button class="btn btn-danger" onclick="handleDelete(${item.id})">Delete</button>
        <button class="btn btn-warning" onclick="handleEdit(${item.id})">Edit</button>
      </td>
    </tr>
  `
})

window.handleDetail = (id) => {
  alert(`Detail button clicked for ID: ${id}`)
}

window.handleDelete = (id) => {
  alert(`Delete button clicked for ID: ${id}`)
}

window.handleEdit = (id) => {
  alert(`Edit button clicked for ID: ${id}`)
}

document.querySelector('#student-table-body').innerHTML = mapping.join('')
