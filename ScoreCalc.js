var ActiveSkillRate = [0,0,0,0,0,0,0];
var FirstSkill = ["",0,0,0,0,0,0,0,0];
var SecondSkill = ["",0,0,0,0,0,0,0,0];
var ThirdSkill = ["",0,0,0,0,0,0,0,0];
var FourthSkill = ["",0,0,0,0,0,0,0,0];
var FifthSkill = ["",0,0,0,0,0,0,0,0];

var MusicLevel ={
    5:"1",
    6:"1.025",
    7:"1.05",
    8:"1.075",
    9:"1.1",
    10:"1.2",
    11:"1.225",
    12:"1.25",
    13:"1.275",
    14:"1.3",
    15:"1.4",
    16:"1.425",
    17:"1.45",
    18:"1.475",
    19:"1.5",
    20:"1.6",
    21:"1.65",
    22:"1.7",
    23:"1.75",
    24:"1.8",
    25:"1.85",
    26:"1.9",
    27:"1.95",
    28:"2",
    29:"2.1",
    30:"2.2",
    31:"2.2"    
};

var ComboRate = {
    0:"1.0",
    5:"1.1",
    10:"1.2",
    25:"1.3",
    50:"1.4",
    70:"1.5",
    80:"1.7",
    90:"2.0"
};

var Motif ={
    10:"1",
    3000:"2",
    6000:"3",
    9000:"4",
    12000:"5",
    15000:"6",
    17000:"7",
    19000:"8",
    21000:"9",
    22000:"10",
    23000:"11",
    24000:"12",
    26000:"13",
    27000:"15",
    29000:"16",
    32000:"17",
    36000:"18",
    40000:"19",
    42000:"20",
    43000:"21",
    45000:"23",
    47000:"25",
    49000:"26",
    52000:"27"
};

var SparkleEffect ={
    0:"9",
    50:"10",
    110:"11",
    160:"12",
    200:"13",
    250:"14",
    300:"15",
    330:"16",
    380:"17",
    410:"18",
    440:"19",
    480:"20",
    500:"21",
    540:"22",
    580:"23",
    610:"24",
    810:"25",
    860:"26",
    910:"27",
    950:"28",
    1000:"29",
    1050:"30",
    1100:"31",
    1140:"32",
    1190:"33",
    1240:"34",
    1290:"35",
    1330:"36",
    1380:"37",
    1430:"38",
    1480:"39",
    1520:"40",
    1570:"41"
};

var SkillEffect = {
    ScoreUp:["ScoreUp",17,17,17,17,0,0,0,0],
    OverLoad:["OverLoad",18,18,18,18,0,0,0,0],
    Concentlation:["Concentlation",22,22,22,22,0,0,0,0],
    LongAct:["LongAct",10,30,10,10,0,0,0,0],
    FrickAct:["FrickAct",10,10,30,10,0,0,0,0],
    SlideAct:["SlideAct",10,10,10,40,0,0,0,0],
    ComboBonus:["ComboBonus",0,0,0,0,18,0.0,0],
    Alround:["Alround",0,0,0,0,13,0,0,0],
    LifeSparkle:["LifeSparkle",0,0,0,0,0,0,0,0],
    Tuning:["Tuning",0,0,0,0,13,0,0,0],
    Focus:["Focus",16,16,16,16,14,0,0,0],
    Synergy:["Synergy",16,16,16,16,15,0,0,0],
    LifeUp:["LifeUp",0,0,0,0,0,0,3,0],
    Alternate:["Alternate",0,0,0,0,-20,0,0,0],
    Cordinate:["Cordinate",10,10,10,10,15,0,0,0],
    SkillBoost:["SkillBoost",0,0,0,0,0,20,0,1],
    Unsamble:["Unsamble",0,0,0,0,0,50,0,0],
    Symphony:["Symphony",0,0,0,0,0,50,0,1]
};

function calcCover(){
    var BaseRate = document.getElementById("MusicSec").value * document.getElementById("PerFrame").value;
    FirstSkill = EffectSetting(document.getElementById("FirstSkill").value,SkillEffect);
    SecondSkill = EffectSetting(document.getElementById("SecondSkill").value,SkillEffect);
    ThirdSkill = EffectSetting(document.getElementById("ThirdSkill").value,SkillEffect);
    FourthSkill = EffectSetting(document.getElementById("FourthSkill").value,SkillEffect);
    FifthSkill = EffectSetting(document.getElementById("FifthSkill").value,SkillEffect);
    
    $(function() {
       $.getJSON("data/test.json" , function(data) {
        });
      });

    var FirstSec = document.getElementById("FirstSec").value;
    var SecondSec = document.getElementById("SecondSec").value;
    var ThirdSec = document.getElementById("ThirdSec").value;
    var FourthSec = document.getElementById("FourthSec").value;
    var FifthSec = document.getElementById("FifthSec").value;

    var InnerHTML = "<table><th style=\"width:50px;\">秒</th><th style=\"width:50px;\">Vi</th><th style=\"width:50px;\">Vo</th><th style=\"width:50px;\">Ce</th><th style=\"width:50px;\">Da</th><th style=\"width:50px;\">Le</th></table>";
    InnerHTML += "<div style=\"overflow-y:scroll;width:350px;height:500px;\"><table><tbody>";
    
    var TmpTag,TmpSec;
    var CoverCount = [0,0,0,0,0];

    /*for(count =0;count <= TotalFlame;count++){
        TmpSec = (count/document.getElementById("PerFrame").value).toFixed(2);
        TmpTag = "<tr>";
        TmpTag += "<td>" + TmpSec +"</td>";
        TmpTag += calcSingle(TmpSec,VisualSec,VisualCov,"#FFFF00");

        if(TmpTag.indexOf("#") < 0){
            TmpTag += "<td style=\"width:50px;\" @color@>&nbsp;</td><td style=\"width:50px;\" @color@>&nbsp;</td><td style=\"width:50px;\" @color@>&nbsp;</td><td style=\"width:50px;\" @color@>&nbsp;</td>";
        }else{
            TmpTag += calcSingle(TmpSec,CenterSec,CenterCov,"#FFFF00");
            TmpTag += calcSingle(TmpSec,DanceSec,DanceCov,"#FFFF00");
            TmpTag += calcSingle(TmpSec,LeaderSec,LeaderCov,"#FFFF00");
            TmpTag += calcSingle(TmpSec,VocalSec,VocalCov,"#FFFF00");
        }
        TmpTag += "</tr>";
        CoverCount[TmpTag.split("#").length-1]++;
        InnerHTML += TmpTag;
    }
    InnerHTML += "</tbody></table></div>";

    InnerHTML = "<table><th>0人</th><th>1人</th><th>2人</th><th>3人</th><th>4人</th><th>5人</th><tbody><tr>";

    InnerHTML += "<td>" + (CoverCount[0]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[1]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[2]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[3]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[4]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[5]/(TotalFlame+1)*100).toFixed(2) +"%</td>";

    InnerHTML += "</tr></tbody></table>";

    document.getElementById("CoverTable").innerHTML = InnerHTML;*/
}

function EffectSetting(keyName,effectList){
    var effect = ["",0,0,0,0,0,0,0,0];
    if(keyName != ''){
        for(var key in effectList){
            if(key == keyName){effect = effectList[key];break;}
        }
    }
    return effect;
}