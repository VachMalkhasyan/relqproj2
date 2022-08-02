let first =''
let second=''
let sign=''
const numbers=['0','1','2','3','4','5','6','7','8','9']
const action=['+','-','*','/']
const out=document.getElementById('screen')
function clearAll(){
out.textContent=0
}
document.getElementById('everything').onclick=(event) =>{
    const key =event.target.textContent
    if(numbers.includes(key)){
        first+=key;
        out.textContent=first
    }

    if(action.includes(key)){
        sign+=key;
        out.textContent=sign;
        return
    }
}