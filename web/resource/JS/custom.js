/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function landingRedirect(){
   window.location.href = "/KTrack/landingPage.html";
}

function welcomePage(){
    window.location.href = "/KTrack/welcomePage.html"; 
}

function registration(){
    window.location.href = "/KTrack/registrationPage.html"; 
}

function portfolio(){
    window.location.href = "/KTrack/portfolio.html"; 
}

function back(backFlag){
    
   window.location.href = "/KTrack/"+backFlag+".html";  
}

function donutChart(){
     $("#chart").css("overflow","hidden");
      $("#chart").css("margin-top","25%");   
    var chart = c3.generate({
    bindto: '#chart',    
    data: {
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Iris Petal Width"
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ]
    });
}, 1500);

setTimeout(function () {
    chart.unload({
        ids: 'data1'
    });
    chart.unload({
        ids: 'data2'
    });
}, 2500);
}

function lineChart(){
     $("#chart").css("overflow","hidden");
      $("#chart").css("margin-top","25%");   
    var chart = c3.generate({
    bindto: '#chart',    
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data1', 230, 190, 300, 500, 300, 400]
        ]
    });
}, 1000);

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, 150, 200, 300, 200, 100]
        ]
    });
}, 1500);

setTimeout(function () {
    chart.unload({
        ids: 'data1'
    });
}, 2000);


}

function barChart(){
     $("#chart").css("overflow","hidden"); 
      $("#chart").css("margin-top","25%");   
    var chart = c3.generate({
    bindto: '#chart',    
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);
}

function areaChart(){
     $("#chart").css("overflow","hidden"); 
      $("#chart").css("margin-top","25%");   
    var chart = c3.generate({
     bindto: '#chart',        
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        }
    }
});
}

function tableChart(){
    var data = [
        {"AMC": "Axis MF","Asset Class":"Equity","Current Value":"31,282.22"},
        {"AMC": "Axis MF","Asset Class":"Liquid","Current Value":"21,036.95"},
        {"AMC": "Invesco MF","Asset Class":"Equity","Current Value":"5,303.84"},
        {"AMC": "Reliance MF","Asset Class":"Equity","Current Value":"9,182.14"},
        {"AMC": "Reliance MF","Asset Class":"Liquid","Current Value":"2,718.25"},
        {"AMC": "UTI MF","Asset Class":"Equity","Current Value":"8,619.53"},
        {"AMC": "UTI MF","Asset Class":"Liquid","Current Value":"15,198.69"}
      ];
    var keys = Object.keys(data[0]);
    var htmlvar = "";
    htmlvar +="<table class=' highlight striped bordered' >";
    htmlvar +="<thead>";
    htmlvar +="<tr class='karvySkyBlueBackGround foreground-White-Color'>";
    for(var i in keys){
        htmlvar +="<th>"+keys[i]+"</th>";
    }
    htmlvar +="</tr>";
    htmlvar +="</thead>";
    htmlvar +="<tbody>";
    for(var j in data){
    htmlvar +="<tr>";
        for(var k in keys){
    htmlvar +="<td>"+data[j][keys[k]]+"</td>";
            
        }
    htmlvar +="</tr>";
    }
    htmlvar +="</tbody>";
    htmlvar +="</table>";
 $("#chart").css("margin-top","20%");     
 $("#chart").css("overflow","auto");     
 $("#chart").css("max-height","315px");     
 $("#chart").html(htmlvar);  
 htmlvar = "";
 
}