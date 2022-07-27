import xxx from './x.js';
import png from './assets/1.png';

const div = document.getElementById('study');
div.innerHTML = `
<img src='${png}'></img>
`
console.log('hi');

const button = document.createElement('button');
button.innerHTML = '懒加载';
button.onclick = ()=>{
    const promise = new Promise((resolve,reject)=>{
       const p = import('./lazy.js');
       resolve(p)
       reject('error')
    })
    promise.then((module)=>{
        module.default()
    })
    .catch((error)=>{
        console.log('太懒了没加载成功')
    })
}

div.appendChild(button);