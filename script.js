import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/yH6mwAPU9SM6FxCX/scene.splinecode');


// Mudança de Branco para Cinza
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

// ///Mudança de Branco para Cinza