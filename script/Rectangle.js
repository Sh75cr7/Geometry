
const rectangleBtn=document.querySelector('#rectangleBtn');
const rectanglewidth=document.querySelector('#rectangle-width');
const rectanglelength=document.querySelector('#rectangle-length');
const rectangleArea=document.querySelector('#rectangle-area');
rectangleBtn.addEventListener('click',()=>{
    const rectanglewidthText=rectanglewidth.value;
    const width=parseFloat(rectanglewidthText);
    rectanglewidth.value=''
    

    const rectangleBtnText=rectanglelength.value;
    const length=parseFloat(rectanglewidthText);
    rectanglelength.value='';

    const area=width*length;
    
    if(isNaN(width) || isNaN(length)){
        alert('please provide a number')
    }
   
// show area
    else
    rectangleArea.innerHTML=area;


    addToCalculationEntry('Rectangle',area)
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