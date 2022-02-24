
for (let linha = 1; linha <= 10 ; linha++) {
    for (let coluna = 10; coluna >= 10 - linha; coluna--) {
        document.write("=");
    }

    if (linha < 10){
        for (i = 0; i <= 0; i++){
            document.write("*",);
        }
    } else {
        for (i = 0; i <= 0; i++){
            document.write("",);
        }
    }
    
    for (coluna = 10; coluna >= linha + 2; coluna--){
        document.write("=",);
    }

    for (coluna = 10; coluna >= linha + 1; coluna--){
        document.write("=",);
    }

    for (i = 0; i <= 0; i++){
        document.write("*",);
    }

    document.write("<br>");
}



// TESTES

document.write("<hr>");


    for (let linha =  1; linha <= 10 ; linha++) {
    
    
        for (let coluna = 10; coluna <= linha; coluna++) {
            document.write("=");
        }
    
        document.write("*", "<br>");
    }

    document.write("<hr>");

    for (let linha = 1; linha <= 10; linha++) {
        for (let coluna = 1; coluna <= linha; coluna++) {
            document.write("=");

        
        }
        for (i = 0; i < 1; i++){
            document.write("*",);
        }
        document.write("<br>");
    }

    document.write("<hr>");

    for (let linha = 1; linha <= 10; linha++) {
        for (coluna = 10; coluna >= linha; coluna--){
        document.write("=",);

        
    }
    for (i = 0; i < 1; i++){
            document.write("*",);
        }

    
    document.write("<br>");
}

