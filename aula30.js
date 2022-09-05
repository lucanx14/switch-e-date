const data = new Date()
const dayWeek = data.getDay()
const month = data.getMonth()
function getDayWeekText(dayWeek){
    let dayWeekText;
    switch(dayWeek){
        case 0:
            dayWeekText = 'domingo'
        return dayWeekText;
        case 1:
            dayWeekText = 'segunda-feira'
        return dayWeekText;
        case 2:
            dayWeekText = 'terça-feira'
        return dayWeekText;
        case 3:
            dayWeekText = 'quarta-feira'
        return dayWeekText;
        case 4:
            dayWeekText = 'quinta-feira'
        return dayWeekText;
        case 5:
            dayWeekText = 'sexta-feira'
        return dayWeekText;
        case 6:
            dayWeekText = 'sabado'
        return dayWeekText;
    }
}
function getMonth(month){
    let monthText;
    switch(month){
        case 0: 
            monthText = 'janeiro'
        return monthText;
        case 1: 
            monthText = 'fevereiro'
        return monthText;
        case 2: 
            monthText = 'março'
        return monthText;
        case 3: 
            monthText = 'abril'
        return monthText;
        case 4: 
            monthText = 'maio'
        return monthText;
        case 5: 
            monthText = 'junho'
        return monthText;
        case 6: 
            monthText = 'julho'
        return monthText;
        case 7: 
            monthText = 'agosto'
        return monthText;
        case 8: 
            monthText = 'setembro'
        return monthText;
        case 9: 
            monthText = 'outubro'
        return monthText;
        case 10: 
            monthText = 'novembro'
        return monthText;
        case 11: 
            monthText = 'dezembro'
        return monthText;
    }
}
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = getMonth(month);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const semana = getDayWeekText(dayWeek)
    return `${semana}, ${dia} ${mes} ${ano} ${hora}:${minuto}`
}
function criaH1(){
    const criaH1 = document.createElement('h1')
    criaH1.innerHTML += formataData(data)
    return criaH1
}
function resultado(){
    const resultado = document.querySelector('.container')
    resultado.innerHTML = ''
    resultado.appendChild(criaH1(getDayWeekText(dayWeek)))
    
}
resultado()

/*
const h1 = document.querySelector('.container h1')
const data = new Date()
const opçoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opçoes)
*/