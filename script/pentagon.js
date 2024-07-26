const pentagonBtn=document.querySelector('#pentagonBtn');
const pentagonP=document.querySelector('#pentagon-p');
const pentagoBase=document.querySelector('#pentagon-base');
const pentagonArea=document.querySelector('#pentagon-area');
pentagonBtn.addEventListener('click',()=>{
    const Ptext=pentagonP.value;
    const P=parseFloat(Ptext);
    pentagonP.value=''

    const BaseText=pentagoBase.value;
    const Base=parseFloat(BaseText);
    pentagoBase.value=''
    // area
    const area=0.5*P*Base;
    
    if(isNaN(P) || isNaN(Base)){
        alert('please Provide a valid Number')
    }
    
    pentagonArea.innerHTML=area;
    addToCalculationEntry('Pentagon',area)
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