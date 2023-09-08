function calculate() {
  let x = document.getElementById("Name1").value;
  let y = document.getElementById("Name2").value;
  let love_score = Math.floor(Math.random()*100);
  if (x != "" && y != ""){
    if(love_score >= 90 || love_score >= 80){
        document.getElementById("percentage").innerText = "Your love score is: " + love_score+"%";
        document.getElementById("result").innerText = "SANA OL, PAKASAL NA KAYO";
    }else if(love_score>=70 || love_score>=60){
        document.getElementById("percentage").innerText = "Your love score is: " +love_score+"%";
        document.getElementById("result").innerText = "MERON KAYONG CHEMISTRY, KAYA YAN GHORL";
    }else if(love_score>=50 || love_score>=40){
        document.getElementById("percentage").innerText = "Your love score is: " +love_score+"%";
        document.getElementById("result").innerText = "PUSH MO LANG TIH, KONTING PAPANSIN PA";
    }else if(love_score>=20 || love_score>=15){
        document.getElementById("percentage").innerText = "Your love score is: " +love_score+"%";
        document.getElementById("result").innerText = "FRIENDS LANG KAYO";
    }else{
        document.getElementById("percentage").innerText = "Your love score is: " +love_score+"%";
        document.getElementById("result").innerText = "MOVE ON NA TEH KAHIT FRIENDS DI KA PA DIN PASOK";
    }
}else{
    document.getElementById("result").innerText = "Please enter a name";
}
}