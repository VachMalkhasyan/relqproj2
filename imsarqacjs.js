let a='';
let b='';
let sign='';
let finish= false ;
let havasar='=';

const digit=['0','1','2','3','4','5','6','7','8','9']
const action=['+','-','x','/']


const out=document.getElementById('screen')


function clearAll(){
a='';
b='';
sign='';
finish=false;
out.textContent=0;
}
//document.getElementById('clean').onclick=clearAll()

//knopkeqi sxmelu pah
document.getElementById('everything').onclick=(event) =>{
    const key =event.target.textContent
    
    if(digit.includes(key)){
        if(b === ''  && sign === ''){

        a+=key;
        out.textContent=a}
        else if(a!=='' && b =='' && finish){
            b=key
            finish=false
            out.textContent=b
            console.log(b)
        }    
        else {
            b+=key;
            out.textContent=b;
        }

    }
    
    if(action.includes(key)){
        sign += key;
        out.textContent=sign;
        console.log(sign)
        return
    }
}
if(key === 'havasar'){
    switch (sign) {
        case '+':
          out = a + b;
          break;
        case '-':
          out = a - b;
          break;
        case 'x':
          out = a * b;
          break;
        case '/':
          if (b) {
            out = a / b;
          } else {
            out= '0 mi gri';
          }
          break;
        
      
      }
}