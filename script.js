const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const btn = document.querySelector('#btn_copiar');
const btn2 = document.querySelector('#btn_voltar');
const cursos = [...document.querySelectorAll('.curso')];

cursos.map((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        const curso = evento.target;
        curso.classList.toggle("destaque");
    })
});

btn.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.destaque')];
    //console.log(cursosSelecionados);
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el);
    }) 
})

btn2.addEventListener("click", ()=>{
    const cursosRetorna = [...document.querySelectorAll('.curso')];
    cursosRetorna.map((el)=>{
        if(!el.classList.contains("destaque")){
            caixa1.appendChild(el);
        }
    })
});

