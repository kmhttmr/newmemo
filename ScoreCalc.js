var SkillActivate = [0,0,0,0,0,0,0];
var FirstSkill = ["",0,0,0,0,0,0,0,0];
var SecondSkill = ["",0,0,0,0,0,0,0,0];
var ThirdSkill = ["",0,0,0,0,0,0,0,0];
var FourthSkill = ["",0,0,0,0,0,0,0,0];
var FifthSkill = ["",0,0,0,0,0,0,0,0];
var TmpSocreRate = [0,0,0,0,0,0,0];
var TmpSec=0,TotalLife=0,MaxLife=0;
var TotalScore=0;
var ActiveSkillHtml,InnerHTML;
var MaxScore;
    
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

var OverLoadRate = {
    6:"9",
    7:"11",
    9:"15"
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
    var beforeTime = 0;
    var apeal = document.getElementById("Apeal").value;
    var music = document.getElementById("Master").value;
    if(document.getElementById("MasterPlus").value != ""){music = document.getElementById("MasterPlus").value;};
    FirstSkill = EffectSetting(document.getElementById("FirstSkill").value,SkillEffect);
    SecondSkill = EffectSetting(document.getElementById("SecondSkill").value,SkillEffect);
    ThirdSkill = EffectSetting(document.getElementById("ThirdSkill").value,SkillEffect);
    FourthSkill = EffectSetting(document.getElementById("FourthSkill").value,SkillEffect);
    FifthSkill = EffectSetting(document.getElementById("FifthSkill").value,SkillEffect);
    var FirstSec = document.getElementById("FirstSec").value;
    var SecondSec = document.getElementById("SecondSec").value;
    var ThirdSec = document.getElementById("ThirdSec").value;
    var FourthSec = document.getElementById("FourthSec").value;
    var FifthSec = document.getElementById("FifthSec").value;
    var FirstInterval = document.getElementById("FirstType").value;
    var SecondInterval = document.getElementById("SecondType").value;
    var ThirdInterval = document.getElementById("ThirdType").value;
    var FourthInterval = document.getElementById("FourthType").value;
    var FifthInterval = document.getElementById("FifthType").value;
   
    SkillActivate = [0,0,0,0,0,0,0];
    TotalLife = document.getElementById("StartLife").value;
    MaxLife = TotalLife *2;
    if(document.getElementById("DoubleLife").value){
        TotalLife = MaxLife;
    }
    TotalScore = 0;
    SetMotif(apeal);
    MaxScore = "<table><tr><td>理論値</td><td>Score</td></tr></table>";
    ActiveSkillHtml="<tr><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
    InnerHTML = "<table><th style=\"width:50px;\">秒</th><th style=\"width:50px;\">1</th><th style=\"width:50px;\">2</th><th style=\"width:50px;\">3</th><th style=\"width:50px;\">4</th><th style=\"width:50px;\">5</th><th style=\"width:50px;\">ScoreUp</th><th style=\"width:50px;\">ComboUP</th>";
    $.ajaxSetup({ async: false }); 
    $.getJSON(music , function(data) {
        var baseScore = apeal * SkillRateSetting(document.getElementById("Level").value,MusicLevel) /(data.length);
        for(var i = 0;i < data.length; i++){
            beforeTime = TmpSec;
            if(TmpSec != data[i]["sec"]){
                ActiveSkillHtml = ActiveSkillHtml.replace("first","").replace("second","").replace("third","").replace("fourth","").replace("fifth","");
                ActiveSkillHtml = ActiveSkillHtml + "<tr><td>sec</td><td bgcolor=\"first\">&nbsp;</td><td bgcolor=\"second\">&nbsp;</td><td bgcolor=\"third\">&nbsp;</td><td bgcolor=\"fourth\">&nbsp;</td><td bgcolor=\"fifth\">&nbsp;</td><td>score</td><td>combo</td></tr>";
                TmpSec = data[i]["sec"];
                ActiveSkillHtml = ActiveSkillHtml.replace("sec",TmpSec);
            }
            SkillActivate = [SkillActivate[0],0,0,0,0,0,0];
            //発動をチェック
            if(FirstSec != "" && TmpSec >= FirstSec && Math.floor(TmpSec/FirstSec)*FirstSec <= TmpSec && Math.floor(TmpSec/FirstSec)*FirstSec+parseFloat(FirstInterval) >= TmpSec){
                if(FirstSkill[0] != "Alternate"){SkillActivate[1] = 1;}
                if(SkillActivate[0] == 0 && FirstSkill[0] == "Alternate") {
                    CheckAlternateActivate(FirstSec,FirstInterval,SecondSec,TmpSec,SecondSkill[0]);
                    CheckAlternateActivate(FirstSec,FirstInterval,ThirdSec,TmpSec,ThirdSkill[0]);
                    CheckAlternateActivate(FirstSec,FirstInterval,FourthSec,TmpSec,FourthSkill[0]);
                    CheckAlternateActivate(FirstSec,FirstInterval,FifthSec,TmpSec,FifthSkill[0]);
                }
                if(SkillActivate[0]==1){SkillActivate[1] = 1;}
            }
            if(SecondSec != "" && TmpSec >= SecondSec && Math.floor(TmpSec/SecondSec)*SecondSec <= TmpSec && Math.floor(TmpSec/SecondSec)*SecondSec+parseFloat(SecondInterval) >= TmpSec){
                if(SecondSkill[0] != "Alternate"){SkillActivate[2] = 1;}
                if(SkillActivate[0] == 0 && SecondSkill[0] == "Alternate") {
                    CheckAlternateActivate(SecondSec,SecondInterval,FirstSec,TmpSec,FirstSkill[0]);
                    CheckAlternateActivate(SecondSec,SecondInterval,ThirdSec,TmpSec,ThirdSkill[0]);
                    CheckAlternateActivate(SecondSec,SecondInterval,FourthSec,TmpSec,FourthSkill[0]);
                    CheckAlternateActivate(SecondSec,SecondInterval,FifthSec,TmpSec,FifthSkill[0]);
                }
                if(SkillActivate[0]==1){SkillActivate[2] = 1;}
            }
            if(ThirdSec != "" && TmpSec >= ThirdSec && Math.floor(TmpSec/ThirdSec)*ThirdSec <= TmpSec && Math.floor(TmpSec/ThirdSec)*ThirdSec+parseFloat(ThirdInterval) >= TmpSec){
                if(ThirdSkill[0] != "Alternate"){SkillActivate[3] = 1;}
                if(SkillActivate[0] == 0 && ThirdSkill[0] == "Alternate") {
                    CheckAlternateActivate(ThirdSec,ThirdInterval,FirstSec,TmpSec,FirstSkill[0]);
                    CheckAlternateActivate(ThirdSec,ThirdInterval,SecondSec,TmpSec,SecondSkill[0]);
                    CheckAlternateActivate(ThirdSec,ThirdInterval,FourthSec,TmpSec,FourthSkill[0]);
                    CheckAlternateActivate(ThirdSec,ThirdInterval,FifthSec,TmpSec,FifthSkill[0]);
                }
                if(SkillActivate[0]==1){SkillActivate[3] = 1;}
            }
            if(FourthSec != "" && TmpSec >= FourthSec && Math.floor(TmpSec/FourthSec)*FourthSec <= TmpSec && Math.floor(TmpSec/FourthSec)*FourthSec+parseFloat(FourthInterval) >= TmpSec){
                if(FourthSkill[0] != "Alternate"){SkillActivate[4] = 1;}
                if(SkillActivate[0] == 0 && FourthSkill[0] == "Alternate") {
                    CheckAlternateActivate(FourthSec,FourthInterval,FirstSec,TmpSec,FirstSkill[0]);
                    CheckAlternateActivate(FourthSec,FourthInterval,SecondSec,TmpSec,SecondSkill[0]);
                    CheckAlternateActivate(FourthSec,FourthInterval,ThirdSec,TmpSec,ThirdSkill[0]);
                    CheckAlternateActivate(FourthSec,FourthInterval,FifthSec,TmpSec,FifthSkill[0]);
                }
                if(SkillActivate[0]==1){SkillActivate[4] = 1;}
            }
            if(FifthSec != "" && TmpSec >= FifthSec && Math.floor(TmpSec/FifthSec)*FifthSec <= TmpSec && Math.floor(TmpSec/FifthSec)*FifthSec+parseFloat(FifthInterval) >= TmpSec){
                if(SkillActivate[0] == 1 ||FifthSkill[0] != "Alternate"){SkillActivate[5] = 1;}
                if(SkillActivate[0] == 0 && FifthSkill[0] == "Alternate") {
                    CheckAlternateActivate(FifthSec,FifthInterval,FirstSec,TmpSec,FirstSkill[0]);
                    CheckAlternateActivate(FifthSec,FifthInterval,SecondSec,TmpSec,SecondSkill[0]);
                    CheckAlternateActivate(FifthSec,FifthInterval,ThirdSec,TmpSec,ThirdSkill[0]);
                    CheckAlternateActivate(FifthSec,FifthInterval,FourthSec,TmpSec,FourthSkill[0]);
                }
                if(SkillActivate[0]==1){SkillActivate[5] = 1;}
            }
            SetAlternate();
            CheckOverLoad(TmpSec,beforeTime,FirstSec,SecondSec,ThirdSec,FourthSec,FifthSec);
            SetSparkle();
            if(document.getElementById("Resonance").checked){
                SetResonanceRate();
            }else{
                SetNormalRate();
            }
            TotalLife = TotalLife + TmpSocreRate[7] + TmpSocreRate[8];
            if(TotalLife > MaxLife){TotalLife = MaxLife;}
            ComboRate_now = MSRateSetting(parseInt((i+1)/(data.length)*100),ComboRate);
            var ScoreUpRate = 1+(TmpSocreRate[data[i]["type"]] * (1+TmpSocreRate[6]/100))/100;
            var ComboUpRate = ComboUpRateSet();
            TotalScore = TotalScore + Math.round(baseScore*ComboRate_now*ScoreUpRate * ComboUpRate);
            

            if(SkillActivate[1] ==1){
                ActiveSkillHtml = ActiveSkillHtml.replace("first","#FF0000");
            }
            if(SkillActivate[2] ==1){
                ActiveSkillHtml = ActiveSkillHtml.replace("second","#00FF00");
            }
            if(SkillActivate[3] ==1){
                ActiveSkillHtml = ActiveSkillHtml.replace("third","#0000FF");
            }
            if(SkillActivate[4] ==1){
                ActiveSkillHtml = ActiveSkillHtml.replace("fourth","#FF00FF");
            }
            if(SkillActivate[5] ==1){
                ActiveSkillHtml = ActiveSkillHtml.replace("fifth","#00FFFF");
            }
            ActiveSkillHtml = ActiveSkillHtml.replace("score",TmpSocreRate[data[i]["type"]] * (1+TmpSocreRate[6]/100)).replace("combo",TmpSocreRate[5] * (1+TmpSocreRate[6]/100));
        }
    });
        
    $.ajaxSetup({ async: true }); 
    InnerHTML = InnerHTML + ActiveSkillHtml + "</table>";

    document.getElementById("ResultTable").innerHTML = InnerHTML;
    document.getElementById("CoverTable").innerHTML = MaxScore.replace("Score",TotalScore);
    
}

function ComboUpRateSet(){
    var rate = 1;
    if(TmpSocreRate[5]<0){
        rate =rate + Math.round(TmpSocreRate[5]/100);
    }else {
        rate =(rate + Math.round(TmpSocreRate[5]/100)*(1+TmpSocreRate[6]/100));
    }
    return rate;
}


function SetResonanceRate(){}

function SetNormalRate(){
    TmpSocreRate = [0,0,0,0,0,0,0,0,0];
    if(SkillActivate[1]==1){
        if(TmpSocreRate[1] < FirstSkill[1]){TmpSocreRate[1] = FirstSkill[1];}
        if(TmpSocreRate[2] < FirstSkill[2]){TmpSocreRate[2] = FirstSkill[2];}
        if(TmpSocreRate[3] < FirstSkill[3]){TmpSocreRate[3] = FirstSkill[3];}
        if(TmpSocreRate[4] < FirstSkill[4]){TmpSocreRate[4] = FirstSkill[4];}
        if(TmpSocreRate[6] < FirstSkill[6]){TmpSocreRate[6] = FirstSkill[6];}
        if(TmpSocreRate[7] < FirstSkill[7]){TmpSocreRate[7] = FirstSkill[7];}
        if(TmpSocreRate[8] < FirstSkill[8]){TmpSocreRate[8] = FirstSkill[8];}
        if(SkillActivate[0] == 1 && TmpSocreRate[5] == 0 && FirstSkill[0]== "Alternate"){TmpSocreRate[5] = FirstSkill[5];}
        else if(FirstSkill[5] > 0){TmpSocreRate[5] = FirstSkill[5];}
    }

    if(SkillActivate[2]==1){
        if(TmpSocreRate[1] < SecondSkill[1]){TmpSocreRate[1] = SecondSkill[1];}
        if(TmpSocreRate[2] < SecondSkill[2]){TmpSocreRate[2] = SecondSkill[2];}
        if(TmpSocreRate[3] < SecondSkill[3]){TmpSocreRate[3] = SecondSkill[3];}
        if(TmpSocreRate[4] < SecondSkill[4]){TmpSocreRate[4] = SecondSkill[4];}
        if(TmpSocreRate[6] < SecondSkill[6]){TmpSocreRate[6] = SecondSkill[6];}
        if(TmpSocreRate[7] < SecondSkill[7]){TmpSocreRate[7] = SecondSkill[7];}
        if(TmpSocreRate[8] < SecondSkill[8]){TmpSocreRate[8] = SecondSkill[8];}
        if(SkillActivate[0] == 1 && TmpSocreRate[5] == 0 && SecondSkill[0]== "Alternate"){TmpSocreRate[5] = SecondSkill[5];}
        else if(SecondSkill[5] > 0){TmpSocreRate[5] = SecondSkill[5];}
    }
    if(SkillActivate[3]==1){
        if(TmpSocreRate[1] < ThirdSkill[1]){TmpSocreRate[1] = ThirdSkill[1];}
        if(TmpSocreRate[2] < ThirdSkill[2]){TmpSocreRate[2] = ThirdSkill[2];}
        if(TmpSocreRate[3] < ThirdSkill[3]){TmpSocreRate[3] = ThirdSkill[3];}
        if(TmpSocreRate[4] < ThirdSkill[4]){TmpSocreRate[4] = ThirdSkill[4];}
        if(TmpSocreRate[6] < ThirdSkill[6]){TmpSocreRate[6] = ThirdSkill[6];}
        if(TmpSocreRate[7] < ThirdSkill[7]){TmpSocreRate[7] = ThirdSkill[7];}
        if(TmpSocreRate[8] < ThirdSkill[8]){TmpSocreRate[8] = ThirdSkill[8];}
        if(SkillActivate[0] == 1 && TmpSocreRate[5] == 0 && ThirdSkill[0]== "Alternate"){TmpSocreRate[5] = ThirdSkill[5];}
        else if(ThirdSkill[5] > 0){TmpSocreRate[5] = ThirdSkill[5];}
    }
    if(SkillActivate[4]==1){
        if(TmpSocreRate[1] < FourthSkill[1]){TmpSocreRate[1] = FourthSkill[1];}
        if(TmpSocreRate[2] < FourthSkill[2]){TmpSocreRate[2] = FourthSkill[2];}
        if(TmpSocreRate[3] < FourthSkill[3]){TmpSocreRate[3] = FourthSkill[3];}
        if(TmpSocreRate[4] < FourthSkill[4]){TmpSocreRate[4] = FourthSkill[4];}
        if(TmpSocreRate[6] < FourthSkill[6]){TmpSocreRate[6] = FourthSkill[6];}
        if(TmpSocreRate[7] < FourthSkill[7]){TmpSocreRate[7] = FourthSkill[7];}
        if(TmpSocreRate[8] < FourthSkill[8]){TmpSocreRate[8] = FourthSkill[8];}
        if(SkillActivate[0] == 1 && TmpSocreRate[5] == 0 && FourthSkill[0]== "Alternate"){TmpSocreRate[5] = FourthSkill[5];}
        else if(FourthSkill[5] > 0){TmpSocreRate[5] = FourthSkill[5];}
    }
    if(SkillActivate[5]==1){
        if(TmpSocreRate[1] < FifthSkill[1]){TmpSocreRate[1] = FifthSkill[1];}
        if(TmpSocreRate[2] < FifthSkill[2]){TmpSocreRate[2] = FifthSkill[2];}
        if(TmpSocreRate[3] < FifthSkill[3]){TmpSocreRate[3] = FifthSkill[3];}
        if(TmpSocreRate[4] < FifthSkill[4]){TmpSocreRate[4] = FifthSkill[4];}
        if(TmpSocreRate[6] < FifthSkill[6]){TmpSocreRate[6] = FifthSkill[6];}
        if(TmpSocreRate[7] < FifthSkill[7]){TmpSocreRate[7] = FifthSkill[7];}
        if(TmpSocreRate[8] < FifthSkill[8]){TmpSocreRate[8] = FifthSkill[8];}
        if(SkillActivate[0] == 1 && TmpSocreRate[5] == 0 && FifthSkill[0]== "Alternate"){TmpSocreRate[5] = FifthSkill[5];}
        else if(FifthSkill[5] > 0){TmpSocreRate[5] = FifthSkill[5];}
    }
    
}

function SetMotif(apeal){
    var rate =MSRateSetting(apeal,Motif);
    if(FirstSkill[0]=="Motif"){
        FirstSkill[1] = rate;
        FirstSkill[2] = rate;
        FirstSkill[3] = rate;
        FirstSkill[4] = rate;
    }
    if(SecondSkill[0]=="Motif"){
        SecondSkill[1] =rate;
        SecondSkill[2] =rate;
        SecondSkill[3] =rate;
        SecondSkill[4] =rate;
    }
    if(ThirdSkill[0]=="Motif"){
        ThirdSkill[1] =rate;
        ThirdSkill[2] =rate;
        ThirdSkill[3] =rate;
        ThirdSkill[4] =rate;
    }
    if(FourthSkill[0]=="Motif"){
        FourthSkill[1] =rate;
        FourthSkill[2] =rate;
        FourthSkill[3] =rate;
        FourthSkill[4] =rate;
    }
    if(FifthSkill[0]=="Motif"){
        FifthSkill[5] =rate;
        FifthSkill[5] =rate;
        FifthSkill[5] =rate;
        FifthSkill[5] =rate;
    }
}

function SetSparkle(){
    if(FirstSkill[0]=="LifeSparkle"){
        FirstSkill[5] = MSRateSetting(TotalLife,SparkleEffect);
    }
    if(SecondSkill[0]=="LifeSparkle"){
        SecondSkill[5] = MSRateSetting(TotalLife,SparkleEffect);
    }
    if(ThirdSkill[0]=="LifeSparkle"){
        ThirdSkill[5] = MSRateSetting(TotalLife,SparkleEffect);
    }
    if(FourthSkill[0]=="LifeSparkle"){
        FourthSkill[5] = MSRateSetting(TotalLife,SparkleEffect);
    }
    if(FifthSkill[0]=="LifeSparkle"){
        FifthSkill[5] = MSRateSetting(TotalLife,SparkleEffect);
    }
}

function CheckOverLoad(sec,beforeTime,firstsec,secondsec,thirdsec,fourthsec,fifthsec){
    if(sec == beforeTime){return;}
    if(SkillActivate[1] == 1 && FirstSkill[0]== "OverLoad"){
        if(beforeTime <= parseInt(sec/firstsec)*firstsec && parseInt(sec/firstsec)*firstsec <= sec){
            TotalLife = TotalLife - SkillRateSetting(firstsec,OverLoadRate);
        }
    }
    if(SkillActivate[1] == 1 && SecondSkill[0]== "OverLoad"){
        if(beforeTime <= parseInt(sec/secondsec)*secondsec && parseInt(sec/secondsec)*secondsec <= sec){
            TotalLife = TotalLife - SkillRateSetting(secondsec,OverLoadRate);
        }
    }
    if(SkillActivate[1] == 1 && ThirdSkill[0]== "OverLoad"){
        if(beforeTime <= parseInt(sec/thirdsec)*thirdsec && parseInt(sec/thirdsec)*thirdsec <= sec){
            TotalLife = TotalLife - SkillRateSetting(thirdsec,OverLoadRate);
        }
    }
    if(SkillActivate[1] == 1 && FourthSkill[0]== "OverLoad"){
        if(beforeTime <= parseInt(sec/fourthsec)*fourthsec && parseInt(sec/fourthsec)*fourthsec <= sec){
            TotalLife = TotalLife - SkillRateSetting(fourthsec,OverLoadRate);
        }
    }
    if(SkillActivate[1] == 1 && FifthSkill[0]== "OverLoad"){
        if(beforeTime <= parseInt(sec/fifthsec)*fifthsec && parseInt(sec/fifthsec)*fifthsec <= sec){
            TotalLife = TotalLife - SkillRateSetting(fifthsec,OverLoadRate);
        }
    }
}

function CheckAlternateActivate(TargetSec,TargetInterval,sec,now,skillname){
    if(sec == TargetSec && "ScoreUp,OverLoad,Concentlation,LongAct,FrickAct,SlideAct,Focus,Synergy,Cordinate".indexOf(skillname)>=0){SkillActivate[0] = 1;}
    if(sec <= now && now >= (parseFloat(TargetSec) + parseFloat(TargetInterval)) && "ScoreUp,OverLoad,Concentlation,LongAct,FrickAct,SlideAct,Focus,Synergy,Cordinate".indexOf(skillname)>=0){SkillActivate[0]=1;}
}

function SetAlternate(){
    if(FirstSkill[0] != "Alternate" && SecondSkill[0] != "Alternate" && ThirdSkill[0] != "Alternate" && FourthSkill[0] != "Alternate" && FifthSkill[0] != "Alternate" ){return;}
    if(SkillActivate[1]== 1 && "ScoreUp,OverLoad,Concentlation,LongAct,FrickAct,SlideAct,Focus,Synergy,Cordinate".indexOf(FirstSkill[0])>=0){

        if(SecondSkill[0]== "Aleternate"){
            if(SecondSkill[1] < FirstSkill[1]*1.5){
                SecondSkill[1] = FirstSkill[1]*1.5;
            }
            if(SecondSkill[2] < FirstSkill[2]*1.5){
                SecondSkill[2] = FirstSkill[2]*1.5;
            }
            if(SecondSkill[3] < FirstSkill[3]*1.5){
                SecondSkill[3] = FirstSkill[3]*1.5;
            }
            if(SecondSkill[4] < FirstSkill[4]*1.5){
                SecondSkill[4] = FirstSkill[4]*1.5;
            }
        }
        if(ThirdSkill[0]== "Aleternate"){
            if(ThirdSkill[1] < FirstSkill[1]*1.5){
                ThirdSkill[1] = FirstSkill[1]*1.5;
            }
            if(ThirdSkill[2] < FirstSkill[2]*1.5){
                ThirdSkill[2] = FirstSkill[2]*1.5;
            }
            if(ThirdSkill[3] < FirstSkill[3]*1.5){
                ThirdSkill[3] = FirstSkill[3]*1.5;
            }
            if(ThirdSkill[4] < FirstSkill[4]*1.5){
                ThirdSkill[4] = FirstSkill[4]*1.5;
            }
        }
        if(FourthSkill[0]== "Aleternate"){
            if(FourthSkill[1] < FirstSkill[1]*1.5){
                FourthSkill[1] = FirstSkill[1]*1.5;
            }
            if(FourthSkill[2] < FirstSkill[2]*1.5){
                FourthSkill[2] = FirstSkill[2]*1.5;
            }
            if(FourthSkill[3] < FirstSkill[3]*1.5){
                FourthSkill[3] = FirstSkill[3]*1.5;
            }
            if(FourthSkill[4] < FirstSkill[4]*1.5){
                FourthSkill[4] = FirstSkill[4]*1.5;
            }
        }
        if(FifthSkill[0]== "Aleternate"){
            if(FifthSkill[1] < FirstSkill[1]*1.5){
                FifthSkill[1] = FirstSkill[1]*1.5;
            }
            if(FifthSkill[2] < FirstSkill[2]*1.5){
                FifthSkill[2] = FirstSkill[2]*1.5;
            }
            if(FifthSkill[3] < FirstSkill[3]*1.5){
                FifthSkill[3] = FirstSkill[3]*1.5;
            }
            if(FifthSkill[4] < FirstSkill[4]*1.5){
                FifthSkill[4] = FirstSkill[4]*1.5;
            }
        }
    }
    if(SkillActivate[2]== 1 && "ScoreUp,OverLoad,Concentlation,LongAct,FrickAct,SlideAct,Focus,Synergy,Cordinate".indexOf(SecondSkill[0])>=0){
        SkillActivate[0]=1;
        if(FirstSkill[0]== "Aleternate"){
            if(FirstSkill[1] < SecondSkill[1]*1.5){
                FirstSkill[1] = SecondSkill[1]*1.5;
            }
            if(FirstSkill[2] < SecondSkill[2]*1.5){
                FirstSkill[2] = SecondSkill[2]*1.5;
            }
            if(FirstSkill[3] < SecondSkill[3]*1.5){
                FirstSkill[3] = SecondSkill[3]*1.5;
            }
            if(FirstSkill[4] < SecondSkill[4]*1.5){
                FirstSkill[4] = SecondSkill[4]*1.5;
            }
        }
        if(ThirdSkill[0]== "Aleternate"){
            if(ThirdSkill[1] < SecondSkill[1]*1.5){
                ThirdSkill[1] = SecondSkill[1]*1.5;
            }
            if(ThirdSkill[2] < SecondSkill[2]*1.5){
                ThirdSkill[2] = SecondSkill[2]*1.5;
            }
            if(ThirdSkill[3] < SecondSkill[3]*1.5){
                ThirdSkill[3] = SecondSkill[3]*1.5;
            }
            if(ThirdSkill[4] < SecondSkill[4]*1.5){
                ThirdSkill[4] = SecondSkill[4]*1.5;
            }
        }
        if(FourthSkill[0]== "Aleternate"){
            if(FourthSkill[1] < SecondSkill[1]*1.5){
                FourthSkill[1] = SecondSkill[1]*1.5;
            }
            if(FourthSkill[2] < SecondSkill[2]*1.5){
                FourthSkill[2] = SecondSkill[2]*1.5;
            }
            if(FourthSkill[3] < SecondSkill[3]*1.5){
                FourthSkill[3] = SecondSkill[3]*1.5;
            }
            if(FourthSkill[4] < SecondSkill[4]*1.5){
                FourthSkill[4] = SecondSkill[4]*1.5;
            }
        }
        if(FifthSkill[0]== "Aleternate"){
            if(FifthSkill[1] < SecondSkill[1]*1.5){
                FifthSkill[1] = SecondSkill[1]*1.5;
            }
            if(FifthSkill[2] < SecondSkill[2]*1.5){
                FifthSkill[2] = SecondSkill[2]*1.5;
            }
            if(FifthSkill[3] < SecondSkill[3]*1.5){
                FifthSkill[3] = SecondSkill[3]*1.5;
            }
            if(FifthSkill[4] < SecondSkill[4]*1.5){
                FifthSkill[4] = SecondSkill[4]*1.5;
            }
        }
    }
    if(SkillActivate[3]== 1 && "ScoreUp,OverLoad,Concentlation,LongAct,FrickAct,SlideAct,Focus,Synergy,Cordinate".indexOf(ThirdSkill[0])>=0){
        SkillActivate[0]=1;
        if(FirstSkill[0]== "Aleternate"){
            if(FirstSkill[1] < ThirdSkill[1]*1.5){
                FirstSkill[1] = ThirdSkill[1]*1.5;
            }
            if(FirstSkill[2] < ThirdSkill[2]*1.5){
                FirstSkill[2] = ThirdSkill[2]*1.5;
            }
            if(FirstSkill[3] < ThirdSkill[3]*1.5){
                FirstSkill[3] = ThirdSkill[3]*1.5;
            }
            if(FirstSkill[4] < ThirdSkill[4]*1.5){
                FirstSkill[4] = ThirdSkill[4]*1.5;
            }
        }
        if(SecondSkill[0]== "Aleternate"){
            if(SecondSkill[1] < ThirdSkill[1]*1.5){
                SecondSkill[1] = ThirdSkill[1]*1.5;
            }
            if(SecondSkill[2] < ThirdSkill[2]*1.5){
                SecondSkill[2] = ThirdSkill[2]*1.5;
            }
            if(SecondSkill[3] < ThirdSkill[3]*1.5){
                SecondSkill[3] = ThirdSkill[3]*1.5;
            }
            if(SecondSkill[4] < ThirdSkill[4]*1.5){
                SecondSkill[4] = ThirdSkill[4]*1.5;
            }
        }
        if(FourthSkill[0]== "Aleternate"){
            if(FourthSkill[1] < ThirdSkill[1]*1.5){
                FourthSkill[1] = ThirdSkill[1]*1.5;
            }
            if(FourthSkill[2] < ThirdSkill[2]*1.5){
                FourthSkill[2] = ThirdSkill[2]*1.5;
            }
            if(FourthSkill[3] < ThirdSkill[3]*1.5){
                FourthSkill[3] = ThirdSkill[3]*1.5;
            }
            if(FourthSkill[4] < ThirdSkill[4]*1.5){
                FourthSkill[4] = ThirdSkill[4]*1.5;
            }
        }
        if(FifthSkill[0]== "Aleternate"){
            if(FifthSkill[1] < ThirdSkill[1]*1.5){
                FifthSkill[1] = ThirdSkill[1]*1.5;
            }
            if(FifthSkill[2] < ThirdSkill[2]*1.5){
                FifthSkill[2] = ThirdSkill[2]*1.5;
            }
            if(FifthSkill[3] < ThirdSkill[3]*1.5){
                FifthSkill[3] = ThirdSkill[3]*1.5;
            }
            if(FifthSkill[4] < ThirdSkill[4]*1.5){
                FifthSkill[4] = ThirdSkill[4]*1.5;
            }
        }
    }
    if(SkillActivate[4]== 1 && "ScoreUp,OverLoad,Concentlation,LongAct,FrickAct,SlideAct,Focus,Synergy,Cordinate".indexOf(FourthSkill[0])>=0){
        SkillActivate[0]=1;
        if(FirstSkill[0]== "Aleternate"){
            if(FirstSkill[1] < FourthSkill[1]*1.5){
                FirstSkill[1] = FourthSkill[1]*1.5;
            }
            if(FirstSkill[2] < FourthSkill[2]*1.5){
                FirstSkill[2] = FourthSkill[2]*1.5;
            }
            if(FirstSkill[3] < FourthSkill[3]*1.5){
                FirstSkill[3] = FourthSkill[3]*1.5;
            }
            if(FirstSkill[4] < FourthSkill[4]*1.5){
                FirstSkill[4] = FourthSkill[4]*1.5;
            }
        }
        if(SecondSkill[0]== "Aleternate"){
            if(SecondSkill[1] < FourthSkill[1]*1.5){
                SecondSkill[1] = FourthSkill[1]*1.5;
            }
            if(SecondSkill[2] < FourthSkill[2]*1.5){
                SecondSkill[2] = FourthSkill[2]*1.5;
            }
            if(SecondSkill[3] < FourthSkill[3]*1.5){
                SecondSkill[3] = FourthSkill[3]*1.5;
            }
            if(SecondSkill[4] < FourthSkill[4]*1.5){
                SecondSkill[4] = FourthSkill[4]*1.5;
            }
        }
        if(ThirdSkill[0]== "Aleternate"){
            if(ThirdSkill[1] < FourthSkill[1]*1.5){
                ThirdSkill[1] = FourthSkill[1]*1.5;
            }
            if(ThirdSkill[2] < FourthSkill[2]*1.5){
                ThirdSkill[2] = FourthSkill[2]*1.5;
            }
            if(ThirdSkill[3] < FourthSkill[3]*1.5){
                ThirdSkill[3] = FourthSkill[3]*1.5;
            }
            if(ThirdSkill[4] < FourthSkill[4]*1.5){
                ThirdSkill[4] = FourthSkill[4]*1.5;
            }
        }
        if(FifthSkill[0]== "Aleternate"){
            if(FifthSkill[1] < FourthSkill[1]*1.5){
                FifthSkill[1] = FourthSkill[1]*1.5;
            }
            if(FifthSkill[2] < FourthSkill[2]*1.5){
                FifthSkill[2] = FourthSkill[2]*1.5;
            }
            if(FifthSkill[3] < FourthSkill[3]*1.5){
                FifthSkill[3] = FourthSkill[3]*1.5;
            }
            if(FifthSkill[4] < FourthSkill[4]*1.5){
                FifthSkill[4] = FourthSkill[4]*1.5;
            }
        }
    }
    if(SkillActivate[5]== 1 && "ScoreUp,OverLoad,Concentlation,LongAct,FrickAct,SlideAct,Focus,Synergy,Cordinate".indexOf(FifthSkill[0])>=0){
        SkillActivate[0]=1;
        if(FirstSkill[0]== "Aleternate"){
            if(FirstSkill[1] < FifthSkill[1]*1.5){
                FirstSkill[1] = FifthSkill[1]*1.5;
            }
            if(FirstSkill[2] < FifthSkill[2]*1.5){
                FirstSkill[2] = FifthSkill[2]*1.5;
            }
            if(FirstSkill[3] < FifthSkill[3]*1.5){
                FirstSkill[3] = FifthSkill[3]*1.5;
            }
            if(FirstSkill[4] < FifthSkill[4]*1.5){
                FirstSkill[4] = FifthSkill[4]*1.5;
            }
        }
        if(SecondSkill[0]== "Aleternate"){
            if(SecondSkill[1] < FifthSkill[1]*1.5){
                SecondSkill[1] = FifthSkill[1]*1.5;
            }
            if(SecondSkill[2] < FifthSkill[2]*1.5){
                SecondSkill[2] = FifthSkill[2]*1.5;
            }
            if(SecondSkill[3] < FifthSkill[3]*1.5){
                SecondSkill[3] = FifthSkill[3]*1.5;
            }
            if(SecondSkill[4] < FifthSkill[4]*1.5){
                SecondSkill[4] = FifthSkill[4]*1.5;
            }
        }
        if(ThirdSkill[0]== "Aleternate"){
            if(ThirdSkill[1] < FifthSkill[1]*1.5){
                ThirdSkill[1] = FifthSkill[1]*1.5;
            }
            if(ThirdSkill[2] < FifthSkill[2]*1.5){
                ThirdSkill[2] = FifthSkill[2]*1.5;
            }
            if(ThirdSkill[3] < FifthSkill[3]*1.5){
                ThirdSkill[3] = FifthSkill[3]*1.5;
            }
            if(ThirdSkill[4] < FifthSkill[4]*1.5){
                ThirdSkill[4] = FifthSkill[4]*1.5;
            }
        }
        if(FourthSkill[0]== "Aleternate"){
            if(FourthSkill[1] < FifthSkill[1]*1.5){
                FourthSkill[1] = FifthSkill[1]*1.5;
            }
            if(FourthSkill[2] < FifthSkill[2]*1.5){
                FourthSkill[2] = FifthSkill[2]*1.5;
            }
            if(FourthSkill[3] < FifthSkill[3]*1.5){
                FourthSkill[3] = FifthSkill[3]*1.5;
            }
            if(FourthSkill[4] < FifthSkill[4]*1.5){
                FourthSkill[4] = FifthSkill[4]*1.5;
            }
        }
    }
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

function SkillRateSetting(keyName,effectList){
    var rate;
    if(keyName != ''){
        for(var key in effectList){
            if(key == keyName){rate = effectList[key];break;}
        }
    }
    return rate;
}

function MSRateSetting(keyName,effectList){
    var rate;
    var beforeRate = 0;
    if(keyName != ''){
        for(var key in effectList){
            if(beforeRate == 0){beforeRate = effectList[key];}
            else if(key >= keyName){
                break;
            }else{beforeRate = effectList[key];}
        }
    }
    
    rate = beforeRate;
    return rate;
}