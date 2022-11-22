let commons =document.getElementsByClassName('common');
for(i=0;i<commons.length;i++)
{
    let element=commons[i]
    element.addEventListener('click',(e)=>{
        document.getElementById('input').value+= e.target.innerText     
    })
}
document.getElementById('clear').addEventListener('click', e=>{
    document.getElementById('input').value=""
})
document.getElementById('equal').addEventListener('click', e=>{
   let ch = document.getElementById('input').value;
   ch= ch.replaceAll("x","*")
    console.log(ch)
    document.getElementById('input').value=eval(ch)
})
document.getElementById('ce').addEventListener('click', e=>{
    let ch =document.getElementById('input').value
    ch=ch.substring(0,ch.length-1)
    document.getElementById('input').value=ch
})
