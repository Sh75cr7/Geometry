// Triangle Calculate
const ellipseBtn=document.querySelector('#ellipseBtn');
const ellipseA=document.querySelector('#ellipse-a');
const ellipseBase=document.querySelector('#ellipse-base');
const ellipseArea=document.querySelector('#ellipse-area')
ellipseBtn.addEventListener('click',()=>{
    // geting Base
  
    const AText=ellipseA.value;
    const A=parseFloat(AText);
    console.log(A)
    ellipseA.value=''
    // geting height
    const BaseText=ellipseBase.value;
    const Base=parseFloat(BaseText);
    ellipseBase.value=''
    console.log(Base)
  const area=3.1416 * A * Base;
  
    // validate input: width and length
 
    if(isNaN(A) || isNaN(Base)){
      alert('Please insert a number');   
    }
//   show triangle area
else
ellipseArea.innerHTML=area;
addToCalculationEntry('ellipse',area)
      
})
function addToCalculationEntry(areaType, area){
    // console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}