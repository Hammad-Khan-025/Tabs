const btns = document.querySelectorAll(".btn");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content");

about.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    console.log(id)

    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove('active')
            e.target.classList.add('active')
        })

        contents.forEach((content)=>{
            content.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }
})



