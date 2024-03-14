function validar() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let nascimento = document.getElementById("nascimento").value;
    let matutino = document.getElementById("matutino").value;
    let vespertino = document.getElementById("vespertino").value;
    let noturno = document.getElementById("noturno").value;


    if(nome == ""){
        document.getElementById("nome").focus();
        document.getElementById("avisos").innerHTML = "Campo nome não pode ficar em branco!";
        return false;
    }

    if(sobrenome == ""){
        document.getElementById("sobrenome").focus();
        document.getElementById("avisos").innerHTML = "Campo nome não pode ficar em branco!";
        return false;
    }

    if(nascimento == ""){
        document.getElementById("nascimento").focus();
        document.getElementById("avisos").innerHTML = "Campo nome não pode ficar em branco!";
        return false;
    }


    if( matutino == ""){
        document.getElementById("matutino").focus();
        document.getElementById("avisos").innerHTML = "Campo nome não pode ficar em branco!";
        return false;
    }

    if( vespertino == ""){
        document.getElementById("vespertino").focus();
        document.getElementById("avisos").innerHTML = "Campo nome não pode ficar em branco!";
        return false;
    }

    if( noturno == ""){
        document.getElementById("noturno").focus();
        document.getElementById("avisos").innerHTML = "Campo nome não pode ficar em branco!";
        return false;
    }
}