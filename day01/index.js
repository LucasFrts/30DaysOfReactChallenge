const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]
// 1
const empty = Array()
const morethanfive = Array(6)
console.log(morethanfive.length)
// morethanfive[0] first
// morethanfive[morethanfive.length -1] last
// morethanfive[morethanfive.length // 2] middle
const mixedDataTypes = ['teste', 123, 0.6, 'teste', 123]
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'] 
console.log(itCompanies)
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length -1])

for(let i=0;i<itCompanies.length;i++){
    itCompanies[i] = itCompanies[i].toUpperCase()
    console.log(itCompanies[i])
}
let sentence = itCompanies.slice(0,itCompanies.length -2).join(', ')
const fullsentence = sentence.concat(` and ${itCompanies[itCompanies.length -1]} are big IT companies.`)
console.log(fullsentence)
if(itCompanies.includes('IBM')){
    console.log('IBM')
}else{
    console.log('company not found')
}
let arr_o = []
itCompanies.forEach((companies)=>{
    let letter_o = 0
    companies.split('').forEach((letter)=>{
        if(letter == 'o' || letter == 'O'){
            letter_o+=1
        }
    })
    if(letter_o > 1){
        arr_o.push(companies)
    }
})
console.log(arr_o)

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(itCompanies.length -4, itCompanies.length-1))
console.log(itCompanies.shift())
