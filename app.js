
const prices = {design:500, model3d:1250};
function q(id){return document.getElementById(id)}
function updateCalc(){
  const area=Math.max(0,Number(q('area')?.value||0));
  const design=q('service-design')?.classList.contains('active');
  const model=q('service-3d')?.classList.contains('active');
  let total=0, rows=[];
  if(design){const v=area*prices.design; total+=v; rows.push(['Дизайн-проект','от '+v.toLocaleString('ru-RU')+' ₽']);}
  if(model){const v=area*prices.model3d; total+=v; rows.push(['3D-моделирование','от '+v.toLocaleString('ru-RU')+' ₽']);}
  if(q('total')) q('total').textContent = area && rows.length ? 'от '+total.toLocaleString('ru-RU')+' ₽' : '—';
  if(q('breakdown')) q('breakdown').innerHTML = rows.length ? rows.map(r=>`<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join('') : '<div><span class="mini">Выберите услуги и укажите площадь</span><b>—</b></div>';
  if(q('area-hidden')) q('area-hidden').value=area||'';
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{c.classList.toggle('active');updateCalc()}));
  q('area')?.addEventListener('input',updateCalc);
  updateCalc();
  document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
});
