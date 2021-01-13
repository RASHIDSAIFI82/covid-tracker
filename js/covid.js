const APIURL = "https://disease.sh/v3/covid-19/countries/india";

async function getRecords(url) {
    const responce = await fetch(url);
    const resData = await responce.json();
    console.log(resData);
    showRecords(resData);

}
getRecords(APIURL);

function showRecords(record) {
    // console.log(record);
    document.getElementById("main").innerHTML =
        `
        <div class="container">
<hr>
    <h2>CASES</h2>
<div class="cases"> 
<div class="cases-item">
    <h3>Total Records</h3>
        <div>${record.cases}</div>
</div>
<div class="cases-item">
        <h3>Cases per Million</h3>
        <div>${record.casesPerOneMillion}</div>
</div> 
<div class="cases-item">
        <h3>Cases Reported Today</h3>
        <div>${record.todayCases}</div>
</div>
</div>
<hr>
        <h2>RECOVERED</h2>
<div class ="recovered">
    <div class="recovered-item">
        <h3>Total Recovered<h/3>
        <div>${record.recovered}</div>
    </div>
    
    <div class="recovered-item">
        <h3>Cases Recovered per Million<h/3>
        <div>${record.recoveredPerOneMillion}</div>
    </div>
    <div class="recovered-item">
        <h3>Recovered Cases Reported Today<h/3>
        <div>${record.todayRecovered}</div>
    </div>
</div>
<hr>
    <h2>ACTIVE</h2>
<div class="active">    
    <div class="active-item">
        <h3>Total Active<h/3>
        <div>${record.recovered}</div>
    </div>
    <div class="active-item">
        <h3>Cases Active per Million<h/3>
        <div>${record.activePerOneMillion}</div>
    </div>
</div>
<hr>
    <h2>DEATH</h2>
<div class="death">    
    <div class="death-item">
        <h3>Total Death<h/3>
        <div>${record.deaths}</div>
    </div>
    <div class="death-item">
        <h3>Deat Cases per Million<h/3>
        <div>${record.deathsPerOneMillion}</div>
    </div>
</div>    
    `
    document.getElementById("time").innerHTML = Date();
}