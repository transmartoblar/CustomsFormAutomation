// ==UserScript==
// @name         CustomsFormAutomation
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Automating the static fields of the form
// @author       toblar
// @match        https://link.webropolsurveys.com/Participation/Public/63d02a36-566e-42a5-b948-0ea27a779ca7?displayId=Fin1520863
// @match        https://link.webropolsurveys.com/Participation/Public/63d02a36-566e-42a5-b948-0ea27a779ca7?displayId=Fin1520863&surveyLocale=sv
// ==/UserScript==


var name = "David Boman";
var direction = "Finland-Åland";
var questionIds = ["Questions_0__Options_0__Answers_0__TextValue","Questions_0__Options_1__Answers_0__TextValue","Questions_0__Options_2__Answers_0__TextValue","Questions_0__Options_3__Answers_0__TextValue","Questions_0__Options_4__Answers_0__TextValue","Questions_0__Options_5__Answers_0__TextValue"];
var answers = ["Transmar Ab","0144866-7","018-27011","trafikledning@transmar.fi",name,direction];

var button;
var nextbutton = document.getElementsByClassName("participation-buttons")[0].childNodes[1].childNodes[1];

var getTomorrow = function(){
    var date = new Date();
    date.setTime(date.getTime()+ (24 * 60 * 60 * 1000));
    return date;
}

var nclick = function(){
    this.surveyParticipationViewModel.doNext();
}

var putDate = function(d){
    var date = document.getElementById("Questions_1__Options_0__Answers_0__TextValue");
    var day = ("0" + d.getDate()).slice(-2);
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    date.setAttribute("value",day+"."+month+"."+d.getFullYear());
}

var page1 = function() {
    for(var i = 0; i < questionIds.length; i++){
         var q = document.getElementById(questionIds[i]);
        q.innerHTML += answers[i];
    }
    putDate(new Date());
}

var page2 = function(){
    var box = document.getElementById("o_cff34507-4242-e811-80d6-ee6c6c76c8f5").click();
}

var page3 = function(){
    putDate(getTomorrow());
    p3Fields();
}

var p3Fields = function(){
    document.getElementById("o_b8f34507-4242-e811-80d6-ee6c6c76c8f5").click();
    var val = document.getElementById("Questions_2__Options_1__AttachedTextValue").value = "m/s Fjärdvägen 05:30";
    document.getElementById("o_d4f34507-4242-e811-80d6-ee6c6c76c8f5").click();
    document.getElementById("Questions_3__Options_1__AttachedTextValue").value = "ÅS-5077";
    document.getElementById("Questions_4__Options_0__Answers_0__TextValue").innerHTML = answers[0];
    document.getElementById("Questions_4__Options_1__Answers_0__TextValue").innerHTML = answers[1];
    document.getElementById("o_d9f34507-4242-e811-80d6-ee6c6c76c8f5").click();
    document.getElementById("Questions_5__Options_1__AttachedTextValue").value = "2018-11-19";
}

var inputFields = function() {
    'use strict';
    console.log("Fyller i fält");
    if(document.getElementById("q_86f34507-4242-e811-80d6-ee6c6c76c8f5")!=undefined){
        page1();
        //nextbutton.addEventListener("onclick", nclick());
    }else if(document.getElementById("o_cff34507-4242-e811-80d6-ee6c6c76c8f5")!=undefined){
        page2();
        //nextbutton.addEventListener("onclick", nclick());
    }else if(document.getElementById("Questions_1__Options_0__Answers_0__TextValue")!=undefined){
        page3();
        //nextbutton.addEventListener("onclick", nclick());
    }
}

document.addEventListener("onload", inputFields());
