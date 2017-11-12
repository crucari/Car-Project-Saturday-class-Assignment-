  var enterprise = {
  name: "enterprise",
  type1: "economy",
  ecarsAvaliable: 90,
  type2: "midsize",
  mcarsAvaliable: 180,
  carsrented: 170,
  
    }
  


function infoFunction() {
    document.getElementById("name").innerHTML = enterprise.name;
     document.getElementById("type1").innerHTML = enterprise.type1;
     document.getElementById("mcarsAvaliable").innerHTML = enterprise.mcarsAvaliable;
     document.getElementById("type2").innerHTML = enterprise.type2;
     document.getElementById("ecarsAvaliable").innerHTML = enterprise.ecarsAvaliable;

}

function getEco() {
     document.getElementById("ecarsAvaliable").innerHTML = enterprise.ecarsAvaliable--;
}

function getmid() {
     document.getElementById("mcarsAvaliable").innerHTML = enterprise.mcarsAvaliable--;
}

        
        
        
    