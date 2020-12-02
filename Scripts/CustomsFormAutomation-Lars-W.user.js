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


var name = "Lars Welroos";
var direction = "Åland-Finland";
var questionIds = ["Questions_0__Options_0__Answers_0__TextValue","Questions_0__Options_1__Answers_0__TextValue","Questions_0__Options_2__Answers_0__TextValue","Questions_0__Options_3__Answers_0__TextValue","Questions_0__Options_4__Answers_0__TextValue","Questions_0__Options_5__Answers_0__TextValue"];
var answers = ["Transmar Ab","0144866-7","018-27011","trafikledning@transmar.fi",name,direction];

var button;
var nextbutton = document.getElementsByClassName("participation-buttons")[0].childNodes[1].childNodes[1];


var nclick = function(){
    this.surveyParticipationViewModel.doNext();
}

var putDate = function(){
    var date = document.getElementById("Questions_1__Options_0__Answers_0__TextValue");
    var d = new Date();
    var day = ("0" + d.getDate()).slice(-2);
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    date.setAttribute("value",day+"."+month+"."+d.getFullYear());
}

var page1 = function() {
    for(var i = 0; i < questionIds.length; i++){
         var q = document.getElementById(questionIds[i]);
        q.innerHTML += answers[i];
    }
    putDate();
}
var page2 = function(){
    var box = document.getElementById("o_d0f34507-4242-e811-80d6-ee6c6c76c8f5").checked = "checked";
}
var page4 = function(){
    document.getElementById("o_b2f34507-4242-e811-80d6-ee6c6c76c8f5").click();
    var val = document.getElementById("Questions_0__Options_1__AttachedTextValue").value = "m/s Fjärdvägen 15:00";
    document.getElementById("Questions_1__Options_0__Answers_0__TextValue").innerHTML = answers[0];
    document.getElementById("Questions_1__Options_1__Answers_0__TextValue").innerHTML = answers[1];
    document.getElementById("o_bcf34507-4242-e811-80d6-ee6c6c76c8f5").click();
    document.getElementById("Questions_2__Options_1__AttachedTextValue").value = "ÅS-5077";
    document.getElementById("o_c7f34507-4242-e811-80d6-ee6c6c76c8f5").click();
    document.getElementById("Questions_3__Options_1__AttachedTextValue").value = "2018-11-19";
}

var inputFields = function() {
    'use strict';
    console.log("Fyller i fält");
    if(document.getElementById("q_86f34507-4242-e811-80d6-ee6c6c76c8f5")!=undefined){
        page1();
        //nextbutton.addEventListener("onclick", nclick());
    }else if(document.getElementById("q_79f34507-4242-e811-80d6-ee6c6c76c8f5")!=undefined){
        page2();
        //nextbutton.addEventListener("onclick", nclick());
    }else if(document.getElementById("q_66f34507-4242-e811-80d6-ee6c6c76c8f5")!=undefined){
        putDate();
        //nextbutton.addEventListener("onclick", nclick());
    }else if(document.getElementById("q_64f34507-4242-e811-80d6-ee6c6c76c8f5")!=undefined){
        page4();
        //nextbutton.addEventListener("onclick", nclick());
    }
}

document.addEventListener("onload", inputFields());
