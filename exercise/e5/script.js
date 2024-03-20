//console.log("connected");
let plant = [
    {
        "description": "This is a description for the ZZ plant",
        "name": "ZZ Plant",
    },
    {
        "description": "This is a description for the cactus plant",
        "name": "ZZ Cactus",
    },
    {
        "description": "This is a description for the palm tree",
        "name": "Palm Tree",
    },

];

for (let i = 0; i <plants.legth; i++) {
    $('body').append(`
    <div>
    <h2>${plants[i].name}</h2>,`);
    $('body').append(`<h2>${plants[i].description}</h2>,
    </div>`);
}

fetch ("https://ghibliapi.vercel.app/species")
.then(function (response) {
return response.json ();
})
.then(function (data) { console. log(data);
data.forEach(dataPoint => {
$('body'). append*
<div>
<h2>$(dataPoint.name)</h2>
<p>$(dataPoint.eye_colors)</p>
</div>
console. log (dataPoint.eye_colors);
})
})
.catch(function (error) {
// Error message
$('body').append('<h1>ERROR!<h1> <p>Trv adain later</p>');
console.log(error);
})


