function exercicio3(){
    const nacionalidade = prompt('Digite sua nacionalidade')

    const nacionalidadeMinuscula = nacionalidade.toLowerCase()
    console.log(nacionalidadeMinuscula)

    if (nacionalidadeMinuscula === 'brasileira'){
        console.log(`Nacionalidade ${nacionalidadeMinuscula}.`)
    } else if (nacionalidadeMinuscula === 'argentina'){
        console.log(`Nacionalidade ${nacionalidadeMinuscula}.`)
    } else if (nacionalidadeMinuscula === 'uruguaia'){
        console.log(`Nacionalidade ${nacionalidadeMinuscula}.`)
    } else if (nacionalidadeMinuscula === 'chilena'){
        console.log(`Nacionalidade ${nacionalidadeMinuscula}.`)
    } else if (nacionalidadeMinuscula === 'colombiana'){
        console.log(`Nacionalidade ${nacionalidadeMinuscula}.`)
    } else 
        console.log('Nacionalidade não encontrada.')

}
exercicio3()