document.querySelector('#botonJson').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','catalogo.json', true);
    xhttp.send();
    xhttp.onreadystatechange=function(){

        if(this.readyState == 4 && this.status == 200){

            let datos =JSON.parse(this.responseText);

            let lista = document.querySelector('#lista');
            lista.innerHTML='';

            for(let item of datos){

                lista.innerHTML+= `
                
                <tr>
                    
                    <td>${item.title}</td>
                    <td>${item.body}</td>
                </tr>
                `

            }
        }

    }
}