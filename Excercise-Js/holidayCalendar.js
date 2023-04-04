const Holidays = require('date-holidays')
let holidays = new Holidays();
holidays = new Holidays('VN');

function holidaysCalendar(year){
    let hds = holidays.getHolidays(year); 
    const filterHdLn = hds.filter(hd => hd.name == 'Tết Nguyên Đán')
    const dayHdLn = filterHdLn[0].date;
    dayHdLn
    let today = new Date();   
    let dayStart = today.getTime();
    let dayEnd = new Date(dayHdLn).getTime();
    
    return Math.ceil((dayEnd - dayStart) / (24*60*60*1000));
}

console.log(holidaysCalendar(2024));;

