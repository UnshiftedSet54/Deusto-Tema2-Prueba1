class Alumno{
  name
  lastname
  birthdate

  constructor(name, lastname, birthdate){
    this.name = name
    this.lastname = lastname
    this.birthdate = birthdate
  }
}

let getAlumno = () => {
  return new Promise((resolve, reject) => {
    let studentName = document.querySelector('#name').value
    let studentLastName = document.querySelector('#lastname').value
    let studentBirthdate = document.querySelector('#birthdate').value
    let alumno1 = new Alumno(studentName, studentLastName, studentBirthdate)
    if(!studentName || !studentLastName || !studentBirthdate) reject('Invalid student information.')
    resolve({name: alumno1.name, lastname: alumno1.lastname, birthdate: alumno1.birthdate})
  })
}

let getAlumnoHandler = async () => {
  try {
    let alumno = await getAlumno().then(data => data)
    console.table(alumno)
  } catch (error) {
    console.log(error)
  }
}

document.querySelector('button').onclick = e => {
  e.preventDefault()
  getAlumnoHandler()
}

