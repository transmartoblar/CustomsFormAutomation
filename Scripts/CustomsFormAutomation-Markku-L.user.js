// ==UserScript==
// @name         CustomsFormAutomation
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Automating the static fields of the form
// @author       toblar
// @match        https://link.webropolsurveys.com/Participation/Public/63d02a36-566e-42a5-b948-0ea27a779ca7?displayId=Fin1520863
// @match        https://link.webropolsurveys.com/Participation/Public/63d02a36-566e-42a5-b948-0ea27a779ca7?displayId=Fin1520863&surveyLocale=sv
// @match        https://link.webropolsurveys.com/Participation/Public/f2f8fee1-1430-4c3d-939a-0d6dd0b399dc?displayId=Fin2066775&surveyLocale=sv
// @match        https://link.webropolsurveys.com/Participation/Public/f2f8fee1-1430-4c3d-939a-0d6dd0b399dc?displayId=Fin2066775
// ==/UserScript==


var name = "Markku";
var surname = "Lehtinen";
var telnr = "0201260600";
var epostUser = "markku.lehtinen@transmar.fi";
var companyname = "Transmar Ab";
var foNr = "0144866-7";
var companyTelnr = "0201260600";
var companyEpost = "trafikledning.fi@transmar.fi";
var manifestNr = "2018-11-19";

var nclick = function(){
    location.href = "javascript:void(surveyParticipationViewModel.doNext());";
}

var getDate = function(){
    var d = new Date();
    var day = ("0" + d.getDate()).slice(-2);
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    return day+"."+month+"."+d.getFullYear();
}


var page2 = function(){
    document.getElementById("Questions_0__Options_0__Answers_0__TextValue").innerHTML = name;
    document.getElementById("Questions_0__Options_1__Answers_0__TextValue").innerHTML = surname;
    document.getElementById("Questions_0__Options_2__Answers_0__TextValue").innerHTML = telnr;
    document.getElementById("Questions_0__Options_3__Answers_0__TextValue").innerHTML = epostUser;

    document.getElementById("Questions_1__Options_0__Answers_0__TextValue").innerHTML = companyname;
    document.getElementById("Questions_1__Options_1__Answers_0__TextValue").innerHTML = foNr;
    document.getElementById("Questions_1__Options_2__Answers_0__TextValue").innerHTML = companyTelnr;
    document.getElementById("Questions_1__Options_3__Answers_0__TextValue").innerHTML = companyEpost;
    document.getElementById("Questions_1__Options_4__Answers_0__TextValue").innerHTML = manifestNr;

    document.getElementById("Questions_2__Options_0__Answers_0__TextValue").setAttribute("value",getDate());
}

var inputFields = function() {
    'use strict';
    console.log("Fyller i fält");
    if(document.getElementById("o_9d479a78-b795-4588-86c7-fa57de48f9ab")!=undefined){
        document.getElementById("o_9d479a78-b795-4588-86c7-fa57de48f9ab").click();
        document.querySelector("#q_8886a460-9bda-4b33-8e83-404254b00fbf > div > div:nth-child(1)").click();

        setTimeout(nclick(),500);

    }else if(document.getElementById("Questions_0__Options_0__Answers_0__TextValue")!=undefined){
        page2();
    }
}

document.addEventListener("onload", inputFields());
