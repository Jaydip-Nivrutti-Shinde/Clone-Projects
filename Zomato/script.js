
import { arr } from "./DataSets/restaurents.js";
const btn1 = document.getElementById('bt1');
const btn2 = document.getElementById('bt2');
const btn3 = document.getElementById('bt3');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
console.log(arr);

btn1.addEventListener('click',()=>{
    img1.src = 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png';
    img2.src = 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png';
    img3.src = 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png';
});

btn2.addEventListener('click',()=>{
    img1.src = 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png';
    img2.src = 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png';
    img3.src = 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png';
});

btn3.addEventListener('click',()=>{
    img1.src = 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png';
    img2.src = 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png';
    img3.src = 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png';
}); 

const divmain = document.getElementById('items');
for(let i = 0; i < arr.length; i++){
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const img1 = document.createElement('img');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');
    const span5 = document.createElement('span');
    const span6 = document.createElement('span');

    div1.className = "fst-item";
    div2.className = "nam-rati";
    span1.className = "nam";
    span2.className = "rati";
    div3.className = "add-pri";
    span3.className = "add";
    span4.className = "pari";
    div4.className = "tim-dist";
    span5.className = "tim";
    span6.className = "dist";

    img1.src = arr[i].info.image.url;
    span1.textContent = arr[i].info.name;
    span2.textContent = arr[i].info.rating.aggregate_rating;
    span3.textContent = arr[i].info.locality.address;
    span4.textContent  = arr[i].info.cft.text;
    span5.textContent = arr[i].info.timing.text;
    span6.textContent = arr[i].distance;

    div2.appendChild(span1);
    div2.appendChild(span2);

    div3.appendChild(span3);
    div3.appendChild(span4);

    div4.appendChild(span5);
    div4.appendChild(span6);

    div1.appendChild(img1);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);

    divmain.appendChild(div1);
}






