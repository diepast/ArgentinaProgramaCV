let menuVer = false;
//Función para ocultar o mostrar menu
function mostrarMenu(){
    if(menuVer){
        document.getElementById("nav").classList = "";
        menuVer = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVer = true;
    }
}

function seleccion(){
    //Se oculta el menu al seleccionar la opcion
    document.getElementById("nav").classList = "";
    menuVer = false;
}

// Obtiene el elemento span por su ID
var yearElement = document.getElementById("year");

// Obtiene el año actual
var currentYear = new Date().getFullYear();

// Inserta el año actual en el elemento span
yearElement.textContent = currentYear;


// Función Enviar emails
function sendMail(){
    var params = {
        name: document.getElementById("name").value , 
        email: document.getElementById("email").value , 
        telefono: document.getElementById("telefono").value ,
        mensaje: document.getElementById("mensaje").value,
    };

const serviceID = "service_t63as8j";
const templateID = "template_0wr1cpt"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("telefono").value ="";
        document.getElementById("mensaje").value ="";
        console.log(res);
        alert("Tu mensaje fué enviado con exito");
    })
}

