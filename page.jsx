const numeros = [
  {id: 1, name: "natã", idade: 25,},
  {id: 2, name: "marcela", idade: 22,},
  {id: 3, name: "nadia", idade: 35,},
  {id: 4, name: "fulana", idade: 45,},
]

const dobro = numeros.map(e => {
  return {...numeros}
})

console.log(dobro)