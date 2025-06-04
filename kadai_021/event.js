const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
   console.log('ボタンをクリックしてください');

   setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';  
    console.log('ボタンをクリックしました');
   }, 2000);
});