'use strict'

{
  const btn = document.getElementById('btn');
  const click = document.getElementById('clickshitene');


  btn.addEventListener('click',() => {
    // const results = ['特等','1等','2等','3等','4等','5等']
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    document.getElementById('clickshitene').classList.add('none');
    const n = Math.random();
    if(n < 0.005){
      btn.textContent = '特等 100,000円'; // 特等：0.5%→0.005
    }else if(n < 0.015){
      btn.textContent = '1等 10,000円'; // 1等：1.5%→0.015
    }else if(n < 0.03){
      btn.textContent = '2等 5,000円'; // 2等：3.0%→0.03
    }else if(n < 0.05){
      btn.textContent = '3等 3,000円'; // 3等：5%→0.05
    }else if(n < 0.09){
      btn.textContent = '4等 1,000円'; // 4等：9%→0.09
    }else if(n < 0.2){
      btn.textContent = '5等 500円'; // 5等：20%→0.2
    }else{
      btn.textContent = 'ハズレ'; // ハズレ：61%→0.61
    }

  });

}