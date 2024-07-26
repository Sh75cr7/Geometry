// Triangle Calculate
const TriangleBtn=document.querySelector('#TriangleBtn');
const trianglebase=document.querySelector('#triangle-base');
const triangleheight=document.querySelector('#triangle-height');
const triangleArea=document.querySelector('#triangle-area')
TriangleBtn.addEventListener('click',()=>{
    // geting Base
  
    const BaseText=trianglebase.value;
    const Base=parseFloat(BaseText);
    trianglebase.value=''
    // geting height
    const heightText=triangleheight.value;
    const Height=parseFloat(heightText);
    triangleheight.value=''
  const area=0.5 * Base * Height;
  
    // validate input: width and length
 
    if(isNaN(Base) || isNaN(Height)){
      alert('Please insert a number');   
    }
//   show addToCalculationEntry area
else
    triangleArea.innerHTML=area;
    addToCalculationEntry('Triangle',area)
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
