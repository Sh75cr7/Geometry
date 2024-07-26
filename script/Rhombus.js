const rhombusBtn=document.querySelector('#rhombusBtn');
const rhombusd1=document.querySelector('#rhombus-d1');
const rhombusd2=document.querySelector('#rhombus-d2');
const rhombusarea=document.querySelector('#rhombus-area');

rhombusBtn.addEventListener('click',function(){
    const d1Text=rhombusd1.value;
    const d1=parseFloat(d1Text);
    rhombusd1.value=''

    const d2Text=rhombusd2.value;
    const d2=parseFloat(d2Text);
  rhombusd2.value=''

    const area=0.5*d1*d2;
    if(isNaN(d1) || isNaN(d2)){
        alert('please provide a number')
    }
   
    rhombusarea.innerHTML=area;
    addToCalculationEntry('Rhombus',area)
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