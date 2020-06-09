function calcCover(){
    var TotalFlame = document.getElementById("MusicSec").value * document.getElementById("PerFrame").value;
    var VisualSec = document.getElementById("VisualSec").value
    var VocalSec = document.getElementById("VocalSec").value
    var CenterSec = document.getElementById("CenterSec").value
    var DanceSec = document.getElementById("DanceSec").value
    var LeaderSec = document.getElementById("LeaderSec").value
    var VisualCov = document.getElementById("VisualCov").value
    var VocalCov = document.getElementById("VocalCov").value
    var CenterCov = document.getElementById("CenterCov").value
    var DanceCov = document.getElementById("DanceCov").value
    var LeaderCov = document.getElementById("LeaderCov").value

    var InnerHTML = "<table><th style=\"width:50px;\">秒</th><th style=\"width:50px;\">Vi</th><th style=\"width:50px;\">Vo</th><th style=\"width:50px;\">Ce</th><th style=\"width:50px;\">Da</th><th style=\"width:50px;\">Le</th></table>";
    InnerHTML += "<div style=\"overflow-y:scroll;width:350px;height:500px;\"><table><tbody>";
    
    var TmpTag,TmpSec;
    var CoverCount = [0,0,0,0,0,0];

    for(count =0;count <= TotalFlame;count++){
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
    // document.getElementById("ResultTable").innerHTML = InnerHTML;

    InnerHTML = "<table><th>0人</th><th>1人</th><th>2人</th><th>3人</th><th>4人</th><th>5人</th><tbody><tr>";

    InnerHTML += "<td>" + (CoverCount[0]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[1]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[2]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[3]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[4]/(TotalFlame+1)*100).toFixed(2) +"%</td>";
    InnerHTML += "<td>" + (CoverCount[5]/(TotalFlame+1)*100).toFixed(2) +"%</td>";

    InnerHTML += "</tr></tbody></table>";

    document.getElementById("CoverTable").innerHTML = InnerHTML;
}
function calcSingle(TmpSec,TypeSec,CoverSec,Color){
    var TagString = "<td style=\"width:50px;\" @color@>&nbsp;</td>";
    var ColorChange = false;
    if(parseInt(TmpSec) < TypeSec){
        
    }
    else if(parseInt(TypeSec) * parseInt(TmpSec/TypeSec) <= parseFloat(TmpSec) && parseFloat(TmpSec) <= parseFloat(parseInt(TypeSec) * parseInt(TmpSec/TypeSec)) + parseFloat(CoverSec)){
        ColorChange = true;
    }

    if(ColorChange)
    {
        TagString = TagString.replace("@color@","bgcolor=\"" + Color+ "\"");
    }
    return TagString;
}