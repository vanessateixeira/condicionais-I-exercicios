function exercicio2(booleano1, booleano2, booleano3){
    const maioridade = confirm('Você tem mais de 18 anos?')
    const ensino = confirm('Você terminou o ensino médio?')
    const faculdade = confirm('Está cursando alguma faculdade?')

    if (maioridade === true){
        console.log('A pessoa tem maioridade')
    } else
        console.log('A pessoa é menor de idade')

    if (ensino === true ){
        console.log('A pessoa terminou o ensino médio')
    } else
        console.log('A pessoa não terminou o ensino médio')

    if (faculdade === true){
        console.log('A pessoa está cursando faculdade')
    } else 
        console.log('A pessoa não está cursando faculdade')

    }
exercicio2()




