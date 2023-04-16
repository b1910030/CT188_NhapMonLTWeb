let anhnhos = document.getElementsByClassName('anhnho')
let hienthianhnho = document.getElementsByClassName('hienthi')
for(var i=0; i< anhnhos.length; i++){
    anhnhos[i].addEventListener('click', function(){
        this.classList.add('active')
        document.getElementById('anhlon').src = this.src
    })
}
