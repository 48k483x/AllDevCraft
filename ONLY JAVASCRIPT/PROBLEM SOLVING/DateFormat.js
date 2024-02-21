function date_format(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayformat  = day < 10 ? `0${day}` : day;
    let monthformat = month < 10 ? `0${month}` : month;

    return `${dayformat}/${monthformat}/${year}`
}


const formattedDate = date_format(1/1/2020);
console.log(formattedDate); 