let a = 51;
let flaga = true;

function start(){
    if(flaga){
        pocz = Date.now();
        czasdrugi();
        flaga = !flaga;
    }else{
        clearTimeout(za);
    }
}

function czasdrugi() {
    const kon = Date.now();
    const uplynelo = kon - pocz;
    const minuty = Math.floor(uplynelo / 60000);
    const sekundy = Math.floor((uplynelo % 60000) / 1000);
    const setne = ((uplynelo % 1000) / 10).toFixed(0);
    const setneStr = setne < 10 ? "0" + setne : setne;
    const sekundyStr = sekundy < 10 ? "0" + sekundy : sekundy;
    const minutyStr = minuty < 10 ? "0" + minuty : minuty;

    document.getElementById("czas").innerHTML = minutyStr + ":" + sekundyStr + ":" + setneStr;

    za = setTimeout(czasdrugi, 10);
}

const x = document.querySelectorAll(".kolo");

x.forEach(function (element){
    element.addEventListener("click", function(){
        element.classList.add("znikaj");
        a--;
        if(a==50){
            start();
        }
        if(a==1){
            start();
            koniecgry = document.getElementById("czas").innerText;
            //alert("Brawo! Twój czas wynosi: " + koniecgry);
            koniec();
        }

    })
})


function koniec(){
    document.getElementById("wynik").innerHTML = "Brawo! Twój czas wynosi: " + koniecgry;
    document.getElementById("czas").style.display = "none";
}

