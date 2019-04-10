var directory = {"success": true,"serverName": "mamba.teztour.com","cities": [{"cityId": 5200,"name": "Актобе"},{"cityId": 2707,"name": "Алматы"},{"cityId": 18992,"name": "Астана"},{"cityId": 2527,"name": "Белгород"},{"cityId": 12384,"name": "Брест"},{"cityId": 9001185,"name": "Бухарест"},{"cityId": 4102819,"name": "Варна"},{"cityId": 4800,"name": "Вильнюс"},{"cityId": 2548,"name": "Витебск"},{"cityId": 2552,"name": "Волгоград"},{"cityId": 2591,"name": "Воронеж"},{"cityId": 293302,"name": "Гродно"},{"cityId": 6529,"name": "Днепропетровск"},{"cityId": 2729,"name": "Екатеринбург"},{"cityId": 2833,"name": "Иркутск"},{"cityId": 1107,"name": "Казань"},{"cityId": 30693,"name": "Караганды"},{"cityId": 2802,"name": "Кемерово"},{"cityId": 3667,"name": "Киев"},{"cityId": 1002131,"name": "Кишинёв"},{"cityId": 75189,"name": "Клуж-Напока"},{"cityId": 3008373,"name": "Костанай"},{"cityId": 2141,"name": "Краснодар"},{"cityId": 1697,"name": "Красноярск"},{"cityId": 17151,"name": "Львов"},{"cityId": 27272,"name": "Минеральные Воды"},{"cityId": 786,"name": "Минск"},{"cityId": 345,"name": "Москва"},{"cityId": 1190,"name": "Нижневартовск"},{"cityId": 392,"name": "Нижний Новгород"},{"cityId": 2190,"name": "Новосибирск"},{"cityId": 3669,"name": "Одесса"},{"cityId": 2672,"name": "Омск"},{"cityId": 10704,"name": "Павлодар"},{"cityId": 1392,"name": "Пермь"},{"cityId": 523,"name": "Рига"},{"cityId": 3711,"name": "Ростов-на-Дону"},{"cityId": 412,"name": "Самара"},{"cityId": 521,"name": "Санкт-Петербург"},{"cityId": 11870,"name": "София"},{"cityId": 2680,"name": "Сургут"},{"cityId": 3746,"name": "Таллин"},{"cityId": 9001187,"name": "Тимишоара"},{"cityId": 1717,"name": "Томск"},{"cityId": 1776,"name": "Тюмень"},{"cityId": 39792,"name": "Усть-Каменогорск"},{"cityId": 3429,"name": "Уфа"},{"cityId": 3434,"name": "Хабаровск"},{"cityId": 1421,"name": "Харьков"},{"cityId": 1754,"name": "Челябинск"},{"cityId": 50415,"name": "Шымкент"}]};7
function render(search) {
    var items = [];
    for (var i = 0; i< directory.cities.length; i++) {
        var city = directory.cities[i];
        console.log(city.name);
        if (city.name.toLowerCase().indexOf(search.toLowerCase()) > -1){
            items.push('<li>' + city.name + '</li>')
        }
    }

    var list = document.getElementById('list');
    list.innerHTML = items.join('');
}

render('');

function onSearch(target) {
    render(target.value)
}
