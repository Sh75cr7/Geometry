const parallelogramBtn=document.querySelector('#parallelogramBtn');
const parallelogrambase=document.querySelector('#parallelogram-base');
const parallelogramheight=document.querySelector('#parallelogram-height');
const parallelogramarea=document.querySelector('#parallelogram-area');

parallelogramBtn.addEventListener('click',function(){
    const baseText=parallelogrambase.value;
    const base=parseFloat(baseText);
    parallelogrambase.value=''
    

    const heightText=parallelogramheight.value;
    const height=parseFloat(heightText);
    parallelogramheight.value=''
    const area=base*height;

    if(isNaN(base) || isNaN(height)){
        alert('please Provide a valid Number')
    }
    // show area result
    else
    parallelogramarea.innerHTML=area;
    addToCalculationEntry('parallelogrm',area)
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