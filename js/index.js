document.addEventListener('DOMContentLoaded', function () {


    console.log(localStorage.getItem("access_token"));
    if(localStorage.getItem("access_token")){

        const ul = document.getElementById("menuLista");
        const li = document.createElement('li');
        const button = document.createElement('button');
        li.classList.add('menu__item');
        button.setAttribute("id", "cerrarSesion")
        li.appendChild(button)
        button.appendChild(document.createTextNode("Cerrar sesión"));
        ul.appendChild(li);
    }

    const cerrarSesion = document.getElementById ("cerrarSesion");

    cerrarSesion.onclick = function (){
        localStorage.removeItem('access_token');
        alert("Has cerrado sesión");
        location.reload();
    }
})
