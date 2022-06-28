
const elementoVersiculos = document.querySelector("#versiculo")
const inputPergunta = document.querySelector ("#inputPergunta")

const versiculos = ['porque sou eu que conheço os planos que tenho para vocês", diz o Senhor, "planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro.',

'Eu sou a ressurreição e a vida. Aquele que crê em mim, ainda que morra, viverá e quem vive e crê em mim, não morrerá eternamente. Você crê nisso',

'Aquele que os chama é fiel, e fará isso',

'O exercício físico é de pouco proveito; a piedade, porém, para tudo é proveitosa, porque tem promessa da vida presente e da futura.',

'O vencedor será igualmente vestido de branco. Jamais apagarei o seu nome do livro da vida, mas o reconhecerei diante do meu Pai e dos seus anjos.',

'Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.',

'Porque sou eu que conheço os planos que tenho para vocês diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.',

'O ladrão vem apenas para roubar, matar e destruir; eu vim para que tenham vida e a tenham plenamente.',

'O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus.',

'De fato, a piedade com contentamento é grande fonte de lucro, pois nada trouxemos para este mundo e dele nada podemos levar; por isso, tendo o que comer e com que vestir-nos, estejamos com isso satisfeitos.',

'Não acumulem para vocês tesouros na terra, onde a traça e a ferrugem destroem e onde os ladrões arrombam e furtam. Mas acumulem para vocês tesouros nos céus, onde a traça e a ferrugem não destroem e onde os ladrões não arrombam nem furtam. Pois onde estiver o seu tesouro, aí também estará o seu coração.',

'O ganancioso provoca brigas,mas quem confia no Senhor prosperará.',

'O Senhor é a minha força e o meu escudo; nele o meu coração confia, e dele recebo ajuda. Meu coração exulta de alegria, e com o meu cântico lhe darei graças.',

'Tu me mostras o caminho que leva à vida. A tua presença me enche de alegria e me traz felicidade para sempre.'

]

function fazerPergunta()
{

    if(inputPergunta.value == ""){
        alert("digite sua pergunta")
        return
    }

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalVersiculos = versiculos.length
    const versiculosAleatorio = Math.floor ( Math.random () * totalVersiculos)
   
    console.log(versiculos[versiculosAleatorio])

    elementoVersiculos.innerHTML = pergunta + versiculos[versiculosAleatorio]

}
