if(document.querySelector('.menu-toggler')){
    document.querySelector('.menu-toggler').addEventListener('click', function(){
        this.classList.toggle('active')
        if(this.classList.contains('active')){
            if(document.querySelector('.nav-menu')){
                document.querySelector('.nav-menu').classList.add('show')
            }
        }else{
            document.querySelector('.nav-menu').classList.remove('show')
        }
    })
}
if(document.querySelectorAll('.anim')){
    document.querySelectorAll('.anim').forEach(ele => {
        ele.addEventListener('click', function(){
            this.classList.add(this.dataset.anim)
        })
    })
}