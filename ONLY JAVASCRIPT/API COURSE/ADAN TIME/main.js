function GetSalatName(city){
    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Morocco&method=8`)
        .then(response=>{
            const data = response.data.data;
            const timings = data.timings;
            console.log(timings);
            const content = `
            <div id="Day-Times">
                    <h1 class="font-black text-3xl mt-3">صلاه الفجر</h1>
                    <span>
                        <h1 class="font-black text-3xl mt-5">${timings.Fajr}</h1>
                    </span>
                </div>
                <div id="Day-Times">
                    <h1 class="font-black text-3xl mt-3">الشروق</h1>
                    <span>
                        <h1 class="font-black text-3xl mt-5">${timings.Sunrise}</h1>
                    </span>
                </div>
                <div id="Day-Times">
                    <h1 class="font-black text-3xl mt-3">صلاه الظهر</h1>
                    <span>
                        <h1 class="font-black text-3xl mt-5">${timings.Dhuhr}</h1>
                    </span>
                </div>

                <div id="Day-Times">
                    <h1 class="font-black text-3xl mt-3">صلاة العصر </h1>
                    <span>
                        <h1 class="font-black text-3xl mt-5">${timings.Asr}</h1>
                    </span>
                </div>
                <div id="Day-Times">
                    <h1 class="font-black text-3xl mt-3">صلاة المغرب</h1>
                    <span>
                        <h1 class="font-black text-3xl mt-5">${timings.Maghrib}</h1>
                    </span>
                </div>
                <div id="Day-Times">
                    <h1 class="font-black text-3xl mt-3">صلاة العشاء</h1>
                    <span>
                        <h1 class="font-black text-3xl mt-5">${timings.Isha}</h1>
                    </span>
                </div>
                `
            document.querySelector('.Times-day').innerHTML = content;
        })
}
document.getElementById('countries').onchange = (event) => {
    const selectedCity = event.target.value;
    GetSalatName(selectedCity);
  };
  
  GetSalatName('Casablanca');
