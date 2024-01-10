//requirements and vars and stuff



var totalZealots = 0
var coins = 0
var coinsPerClick = 1
var scavengerLVL = 0
var coinsPerCrop = 1
var farmingFortune = 1
var playerHealth = 100
var playerMaxHealth = 100
var playerDefense = 1
var zealotLvl = 1
var bonusHealthRegen = 0
var hasScavengerTali = false
var hasHoeT5 = false
var harvestingLvl = 0
var wheatHarvested = 0
var wheatSilo = 0
var minionSlot1 = false
var wheatMinionLvl = 0



//upgrades:
//enchantments:


//gear:
function buyEnderArmorHelm() {
  if (coins >= 100) {
    coins -= 100
    playerDefense ++
    playerMaxHealth += 40
    document.getElementById("coinsCounter").innerHTML = coins
   document.getElementById('defenseBar').innerHTML = playerDefense
     document.getElementById('EnderArmorHelmButton').style.display = 'none'
    document.getElementById('zealotDamageCounter').innerHTML = ((zealotLvl * 10) / playerDefense) + "hp"
  }
}
function buyEnderArmorChest() {
  if (coins >= 100) {
    coins -= 100
    playerDefense += 1
    playerMaxHealth += 40
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById('defenseBar').innerHTML = playerDefense
    document.getElementById('EnderArmorChestButton').style.display = 'none'
    document.getElementById('zealotDamageCounter').innerHTML = ((zealotLvl * 10) / playerDefense) + "hp"
  }
}
function buyEnderArmorLegs() {
  if (coins >= 100) {
    coins -= 100
    playerDefense += 1
    playerMaxHealth += 40
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById('defenseBar').innerHTML = playerDefense
      document.getElementById('EnderArmorLegsButton').style.display = 'none'
    document.getElementById('zealotDamageCounter').innerHTML = ((zealotLvl * 10) / playerDefense) + "hp"
  }
}
function buyEnderArmorBoots() {
  if (coins >= 100) {
    coins -= 100
    playerDefense += 1
    playerMaxHealth += 40
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById('defenseBar').innerHTML = playerDefense
    document.getElementById('EnderArmorBootsButton').style.display = 'none'
    document.getElementById('zealotDamageCounter').innerHTML = ((zealotLvl * 10) / playerDefense) + "hp"
  }
}





//weapons:


//money making functions
function upgradeZealot() {
  if (zealotLvl < 32) {
    zealotLvl += 5
    document.getElementById('zealotLvlCounter').innerHTML = zealotLvl
    document.getElementById('zealotDamageCounter').innerHTML = ((zealotLvl * 10) / playerDefense) + "hp"
  }
}
function downgradeZealot() {
  if (zealotLvl > 1) {
    zealotLvl -= 5
    document.getElementById('zealotLvlCounter').innerHTML = zealotLvl
    document.getElementById('zealotDamageCounter').innerHTML = ((zealotLvl * 10) / playerDefense) + "hp"
  }
}


function bigZealotClick() {
  if (playerHealth > 0) {
  totalZealots += 1
  coins += coinsPerClick + (zealotLvl * scavengerLVL)
  playerHealth -= (zealotLvl * 10) / playerDefense
  document.getElementById("totalZealotsCounter").innerHTML = totalZealots
  document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("healthBar").innerHTML = playerHealth
  if (playerHealth <= 0) {
    document.getElementById("deathMessage").innerHTML = "you died and lost 50% of your coins"
    coins = coins / 2
    coins = math.round(coins)
    document.getElementById("coinsCounter").innerHTML = coins
}}}
function regenHealth() {
  if (playerHealth < playerMaxHealth) {
    if (playerHealth < 0) {
      playerHealth = 0
    } else {
  playerHealth += .05 * playerMaxHealth
  playerHealth += bonusHealthRegen
  document.getElementById("healthBar").innerHTML = playerHealth
  }} else {
    playerHealth = playerMaxHealth
    document.getElementById("healthBar").innerHTML = playerHealth
  }}

function eraseDeathMessage() {
  if (document.getElementById("deathMessage").innerHTML == "you died and lost 10% of your coins") {
    document.getElementById("deathMessage").innerHTML = ""
  }
}

function harvestWheat() {
  if (hasHoeT5 == true) {
    coins += coinsPerCrop * farmingFortune * 2
    wheatHarvested += farmingFortune *2
    wheatSilo += farmingFortune  * 2
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo
    document.getElementById("coinsCounter").innerHTML = coins
  } else {
    coins += coinsPerCrop * farmingFortune
    wheatHarvested += farmingFortune 
    wheatSilo += farmingFortune 
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo
    document.getElementById("coinsCounter").innerHTML = coins
}}
//scavenger shop
function buyScavenger() {
  if (coins >= 100 && scavengerLVL == 0) {
    coins -= 100
    coinsPerClick += 1
    document.getElementById("coinsCounter").innerHTML = coins
    scavengerLVL += 1
    document.getElementById('scavengerCost').innerHTML = "10000"
  document.getElementById("scavengerCounter").innerHTML = scavengerLVL
    
  } else if (coins >= 10000 && scavengerLVL == 1) {
      coins -= 10000
      coinsPerClick += 9
      //10 cpc (scav1+scav2)
      document.getElementById("coinsCounter").innerHTML = coins    
      scavengerLVL += 1
    document.getElementById('scavengerCounter').innerHTML = scavengerLVL
    document.getElementById('scavengerCost').innerHTML = "100000"
      } else if (coins >= 100000 && scavengerLVL == 2) {
      coins -= 100000
      coinsPerClick += 90
          //100
          document.getElementById("coinsCounter").innerHTML = coins    
      scavengerLVL += 1
    document.getElementById('scavengerCost').innerHTML = "1000000"
       document.getElementById("scavengerCounter").innerHTML = scavengerLVL
          } else if (coins >= 1000000 && scavengerLVL == 3) {
      coins -= 1000000
      coinsPerClick += 400
          //500
          document.getElementById("coinsCounter").innerHTML = coins    
      scavengerLVL += 1
    document.getElementById('scavengerCost').innerHTML = "10000000";
       document.getElementById("scavengerCounter").innerHTML = scavengerLVL
          } else if (coins >= 10000000 && scavengerLVL == 4) {
      coins -= 10000000
      coinsPerClick += 500
          //1000
          document.getElementById("coinsCounter").innerHTML = coins    
      scavengerLVL += 1
    document.getElementById('scavengerCost').innerHTML = "50000000";
       document.getElementById("scavengerCounter").innerHTML = scavengerLVL
          } else if (coins >= 50000000 && scavengerLVL == 5) {
      coins -= 50000000
      coinsPerClick += 1000
          //2000
          document.getElementById("coinsCounter").innerHTML = coins    
      scavengerLVL += 1
            document.getElementById('scavengerCost').innerHTML = "100000000";
       document.getElementById("scavengerCounter").innerHTML = scavengerLVL
          } else if (coins >= 100000000 && scavengerLVL == 6) {
      coins -= 100000000
      coinsPerClick += 1000
          //3000
          document.getElementById("coinsCounter").innerHTML = coins    
      scavengerLVL += 1
    document.getElementById('scavengerCost').innerHTML = "1000000000"
       document.getElementById("scavengerCounter").innerHTML = scavengerLVL
          } else if (coins >= 1000000000 && scavengerLVL == 7) {
      coins -= 1000000000
      coinsPerClick += 2000
          //5000
          document.getElementById("coinsCounter").innerHTML = coins    
      scavengerLVL += 1
          document.getElementById("scavengerButton").style.display = "none";
       document.getElementById("scavengerCounter").innerHTML = scavengerLVL
          }}
function buyScavengerTali() {
  if (coins >= 10000000000) {
    coins -= 10000000000
    coinsPerClick += 5000
        //10000
        document.getElementById("coinsCounter").innerHTML = coins    
    scavengerLVL += 1
    hasScavengerTali = true
        document.getElementById("scavTaliButton").style.display = "none";
     document.getElementById("scavengerCounter").innerHTML = scavengerLVL
        }
    }
//farming shop
function buyHoeT1() {
  if (coins >= 100) {
    coins -= 100
    farmingFortune += 1
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("hoeT1Button").style.display = "none";
}}
function buyHoeT2() {
  if (coins >= 1000) {
    coins -= 1000
    farmingFortune += 2
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("hoeT2Button").style.display = "none";
  }}
  function buyHoeT3() {
    if (coins >= 10000) {
      coins -= 10000
      farmingFortune += 3
      document.getElementById("coinsCounter").innerHTML = coins
      document.getElementById("hoeT3Button").style.display = "none"
  }}
function buyHoeT4() {
  if (coins >= 100000) { 
    coins -= 100000
    farmingFortune += 4
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("hoeT4Button").style.display = "none"
  }}
function buyHoeT5() {
  if (coins >= 1000000) {
    coins -= 1000000
    farmingFortune += 5
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("hoeT5Button").style.display = "none"
    hasHoeT5 = true
}}
//attempt at big if statement? if this works ill change the other ones.
//it works!
function buyHarvesting() {
  if (harvestingLvl == 0 && coins >= 500) {
    coins -= 500
    harvestingLvl += 1
    farmingFortune += 10
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("harvestingPrice").innerHTML = 5000
    document.getElementById("harvestingLvlCounter").innerHTML = harvestingLvl
    document.getElementById("farmingFortuneCounter").innerHTML = farmingFortune
  } else if (harvestingLvl == 1 && coins >= 5000) {
    coins -= 5000
    harvestingLvl += 1
    farmingFortune += 20
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("harvestingPrice").innerHTML = 50000
    document.getElementById("harvestingLvlCounter").innerHTML = harvestingLvl
    document.getElementById("farmingFortuneCounter").innerHTML = farmingFortune
  } else if (harvestingLvl == 2 && coins >= 50000) {
    coins -= 50000
    harvestingLvl += 1
    farmingFortune += 30
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("harvestingPrice").innerHTML = 500000
    document.getElementById("harvestingLvlCounter").innerHTML = harvestingLvl
    document.getElementById("farmingFortuneCounter").innerHTML = farmingFortune
  } else if (harvestingLvl == 3 && coins >= 500000) {
    coins -= 500000
    harvestingLvl += 1
    farmingFortune += 40
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("harvestingPrice").innerHTML = 5000000
    document.getElementById("harvestingLvlCounter").innerHTML = harvestingLvl
    document.getElementById("farmingFortuneCounter").innerHTML = farmingFortune
  } else if (harvestingLvl == 4 && coins >= 5000000) {
    coins -= 5000000
    harvestingLvl += 1
    farmingFortune += 50
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("harvestingPrice").innerHTML = 50000000
    document.getElementById("harvestingLvlCounter").innerHTML = harvestingLvl
    document.getElementById("farmingFortuneCounter").innerHTML = farmingFortune
  } else if (harvestingLvl == 5 && coins >= 50000000) {
    coins -= 50000000
    harvestingLvl += 1
    farmingFortune += 60
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("harvestingPrice").innerHTML = 500000000
    document.getElementById("harvestingLvlCounter").innerHTML = harvestingLvl
    document.getElementById("farmingFortuneCounter").innerHTML = farmingFortune
  } else if (harvestingLvl == 6 && coins >= 500000000) {
    coins -= 500000000
    harvestingLvl += 1
    farmingFortune += 70
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("harvestingPrice").innerHTML = 5000000000
    document.getElementById("harvestingLvlCounter").innerHTML = harvestingLvl
    document.getElementById("farmingFortuneCounter").innerHTML = farmingFortune
  } else if (harvestingLvl == 7 && coins >= 5000000000) {
    coins -= 5000000000
    harvestingLvl += 1
    farmingFortune += 80
    document.getElementById("coinsCounter").innerHTML = coins
    document.getElementById("harvestingPrice").innerHTML = 50000000000
    document.getElementById("harvestingLvlCounter").innerHTML = harvestingLvl
    document.getElementById("farmingFortuneCounter").innerHTML = farmingFortune
    document.getElementById("harvestingButton").style.display = "none"
  }}

function testUpdateCoins() {
  document.getElementById("coinsCounter").innerHTML = coins
  document.getElementById("testcoins").innerHTML = coins
}



//MINIONS!!!
function buyMinionSlot1() {
 if(coins >= 100 && minionSlot1 == false) {
   coins -= 100
   minionSlot1 = true 
   document.getElementById("coinsCounter").innerHTML = coins
   document.getElementById("minionSlot1Button").style.display = "none"
 
}}
//wheat minion

function wheatMinion1() {
  if (wheatSilo >= 200 && wheatMinionLvl == 0 && minionSlot1 == true) {
    //lvl 1
    wheatSilo -= 200;
    wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 500;
    document.getElementById('wheat1Buy/Up').innerHTML = "upgrade";
  } else if (wheatSilo >= 500 && wheatMinionLvl ==1) {
    //lvl 2
    wheatSilo -= 500;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 1000;
  } else if (wheatSilo >= 1000 && wheatMinionLvl == 2) {
    //lvl 3
    wheatSilo -= 1000;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 5000;
} else if (wheatSilo >= 5000 && wheatMinionLvl == 3) {
    //lvl 4
    wheatSilo -= 5000;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 10000;
  } else if (wheatSilo >= 10000 && wheatMinionLvl == 4) {
    //lvl 5
    wheatSilo -= 10000;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 50000;
  } else if (wheatSilo >= 100000 && wheatMinionLvl == 5) {
    //lvl 6
    wheatSilo -= 100000;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 500000;
  } else if (wheatSilo >= 500000 && wheatMinionLvl == 6) {
    //lvl 7
    wheatSilo -= 500000;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 1000000;
  } else if (wheatSilo >= 1000000 && wheatMinionLvl == 7) {
    //lvl 8
    wheatSilo -= 1000000;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 5000000;
  } else if (wheatSilo >= 5000000 && wheatMinionLvl == 8) {
    //lvl 9
    wheatSilo -= 5000000;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 10000000;
  } else if (wheatSilo >= 10000000 && wheatMinionLvl == 9) {
    //lvl 10 10,000,000=>50,000,000
    wheatSilo -= 10000000;
      wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 50000000;
  } else if (wheatSilo >= 50000000 && wheatMinionLvl == 10) {
    //lvl 11
    wheatSilo -= 50000000;
    wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById("wheatMinion1Price").innerHTML = 100000000;
  } else if (wheatSilo >= 100000000 && wheatMinionLvl == 11) {
    //lvl 12
    wheatSilo -= 100000000;
    wheatMinionLvl += 1;
    document.getElementById("wheatSiloCounter").innerHTML = wheatSilo;
    document.getElementById('wheatMinionButton1').style.display = "none"
  } else {}}
             
  

function wheatMinion() {
  if (wheatMinionLvl == 1) {
    coins += 1;
    wheatSilo += 1;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
    document.getElementById("coinsCounter").innerHTML = coins;
  } else if (wheatMinionLvl == 2) {
    coins += 2;
     wheatSilo += 2;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 3) {
    coins += 4;
     wheatSilo += 4;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 4) {
    coins += 8;
     wheatSilo += 8;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 5) {
    coins += 16;
    wheatSilo += 16;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 6) {
    coins += 32;
    wheatSilo += 32;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl ==7) {
    coins += 64;
    wheatSilo += 64;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 8) {
    coins += 128;
    wheatSilo += 128;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 9) {
    coins += 256;
    wheatSilo += 128;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 10) {
    coins += 512;
    wheatSilo += 512;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 11) {
    coins += 1024;
    wheatSilo += 1024;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else if (wheatMinionLvl == 12) {
    coins += 2048;
    wheatSilo += 2048;
    document.getElementById("coinsCounter").innerHTML = coins;
    document.getElementById('wheatSiloCounter').innerHTML = wheatSilo;
  } else {}}






setInterval(regenHealth, 1000);
setInterval(eraseDeathMessage, 5000);
setInterval(wheatMinion, 1000);
