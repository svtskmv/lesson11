let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


    
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '') {
        console.log('done');

        appData.expenses[a] = b;

    } else {

    }
    
};

appData.moneyPerday = appData.budget/30;

alert("Ваш ежедневывный бюджет " + appData.budget);

if(appData.budget < 100 ){
    console.log('Минимальный бюджет!');
} else if (appData.budget > 100 && appData.budget < 2000 ){
    console.log('Нормальнаый бюджет!');
} else if (appData.budget > 2000)  {
    console.log('Высокий бюджет!');
} else {
    console.log('Ошибка!');
} 

