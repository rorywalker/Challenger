

(function () {

$(document).ready(function(){
    $("#slideTop").click(function(){
        $("#slideBottom").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#slideTop1").click(function(){
        $("#slideBottom1").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#slideTop0").click(function(){
        $("#slideBottom0").slideToggle("slow");
    });
});

//// EXAMPLE ////

function inputValues1 () {

    e1.innerHTML = Math.floor(Math.random()*9+1);
    e2.innerHTML = Math.floor(Math.random()*9+1);
    e3.innerHTML = Math.floor(Math.random()*9+1);
    e4.innerHTML = Math.floor(Math.random()*9+1);

    f1.innerHTML = Math.floor(Math.random()*9+1);
    f2.innerHTML = Math.floor(Math.random()*9+1);
    f3.innerHTML = Math.floor(Math.random()*9+1);
    f4.innerHTML = Math.floor(Math.random()*9+1);

    g1.innerHTML = Math.floor(Math.random()*9+1);
    g2.innerHTML = Math.floor(Math.random()*9+1);
    g3.innerHTML = Math.floor(Math.random()*9+1);
    g4.innerHTML = Math.floor(Math.random()*9+1);

    h1.innerHTML = Math.floor(Math.random()*9+1);
    h2.innerHTML = Math.floor(Math.random()*9+1);
    h3.innerHTML = Math.floor(Math.random()*9+1);
    h4.innerHTML = Math.floor(Math.random()*9+1);


    row1Total1.innerHTML = parseInt(e1.innerText) + parseInt(e2.innerText) + parseInt(e3.innerText) + parseInt(e4.innerText);
    row2Total1.innerHTML = parseInt(f1.innerText) + parseInt(f2.innerText) + parseInt(f3.innerText) + parseInt(f4.innerText);
    row3Total1.innerHTML = parseInt(g1.innerText) + parseInt(g2.innerText) + parseInt(g3.innerText) + parseInt(g4.innerText);
    row4Total1.innerHTML = parseInt(h1.innerText) + parseInt(h2.innerText) + parseInt(h3.innerText) + parseInt(h4.innerText);

    colTotal11.innerHTML = parseInt(e1.innerText) + parseInt(f1.innerText) + parseInt(g1.innerText) + parseInt(h1.innerText);
    colTotal21.innerHTML = parseInt(e2.innerText) + parseInt(f2.innerText) + parseInt(g2.innerText) + parseInt(h2.innerText);
    colTotal31.innerHTML = parseInt(e3.innerText) + parseInt(f3.innerText) + parseInt(g3.innerText) + parseInt(h3.innerText);
    colTotal41.innerHTML = parseInt(e4.innerText) + parseInt(f4.innerText) + parseInt(g4.innerText) + parseInt(h4.innerText);

    bottomTopDiagTotal1.innerHTML = parseInt(e4.innerText) + parseInt(f3.innerText) + parseInt(g2.innerText) + parseInt(h1.innerText);
    topBottomDiagTotal1.innerHTML = parseInt(e1.innerText) + parseInt(f2.innerText) + parseInt(g3.innerText) + parseInt(h4.innerText);

}

inputValues1();

//// SOLUTION ////

function inputValues0 () {

    q1.innerHTML = Math.floor(Math.random()*9+1);
    q2.innerHTML = Math.floor(Math.random()*9+1);
    q3.innerHTML = Math.floor(Math.random()*9+1);
    q4.innerHTML = Math.floor(Math.random()*9+1);

    r1.innerHTML = Math.floor(Math.random()*9+1);
    r2.innerHTML = Math.floor(Math.random()*9+1);
    r3.innerHTML = Math.floor(Math.random()*9+1);
    r4.innerHTML = Math.floor(Math.random()*9+1);

    s1.innerHTML = Math.floor(Math.random()*9+1);
    s2.innerHTML = Math.floor(Math.random()*9+1);
    s3.innerHTML = Math.floor(Math.random()*9+1);
    s4.innerHTML = Math.floor(Math.random()*9+1);

    t1.innerHTML = Math.floor(Math.random()*9+1);
    t2.innerHTML = Math.floor(Math.random()*9+1);
    t3.innerHTML = Math.floor(Math.random()*9+1);
    t4.innerHTML = Math.floor(Math.random()*9+1);

    row1Total0.innerHTML = parseInt(q1.innerText) + parseInt(q2.innerText) + parseInt(q3.innerText) + parseInt(q4.innerText);
    row2Total0.innerHTML = parseInt(r1.innerText) + parseInt(r2.innerText) + parseInt(r3.innerText) + parseInt(r4.innerText);
    row3Total0.innerHTML = parseInt(s1.innerText) + parseInt(s2.innerText) + parseInt(s3.innerText) + parseInt(s4.innerText);
    row4Total0.innerHTML = parseInt(t1.innerText) + parseInt(t2.innerText) + parseInt(t3.innerText) + parseInt(t4.innerText);
    
    colTotal10.innerHTML = parseInt(q1.innerText) + parseInt(r1.innerText) + parseInt(s1.innerText) + parseInt(t1.innerText);
    colTotal20.innerHTML = parseInt(q2.innerText) + parseInt(r2.innerText) + parseInt(s2.innerText) + parseInt(t2.innerText);
    colTotal30.innerHTML = parseInt(q3.innerText) + parseInt(r3.innerText) + parseInt(s3.innerText) + parseInt(t3.innerText);
    colTotal40.innerHTML = parseInt(q4.innerText) + parseInt(r4.innerText) + parseInt(s4.innerText) + parseInt(t4.innerText);

    bottomTopDiagTotal0.innerHTML = parseInt(q4.innerText) + parseInt(r3.innerText) + parseInt(s2.innerText) + parseInt(t1.innerText);
    topBottomDiagTotal0.innerHTML = parseInt(q1.innerText) + parseInt(r2.innerText) + parseInt(s3.innerText) + parseInt(t4.innerText);

}

var choice = Math.floor(Math.random()*12+1);

inputValues0();
shuffle();

function blankSquares (id) {
    return `<input type="text" maxLength="1" minValue="1" maxValue="9" size="1" style="border:0px" class="formStyle" id="${id}">`
}
                                    
function shuffle () {

    switch (choice) {
        case 1:                                                     
            a1.innerHTML = parseInt(q1.innerText);
            a2.innerHTML = blankSquares('a2X');
            a3.innerHTML = blankSquares('a3X');
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = blankSquares('b1X');
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = parseInt(r4.innerText);
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = parseInt(s2.innerText);
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = blankSquares('c4X');
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = blankSquares('d2X');
            d3.innerHTML = parseInt(t3.innerText);
            d4.innerHTML = blankSquares('d4X');
            break;                                              
        case 2:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = parseInt(q2.innerText);
            a3.innerHTML = blankSquares('a3X');
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = blankSquares('b1X');
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = parseInt(r3.innerText);
            b4.innerHTML = blankSquares('b4X');
            c1.innerHTML = parseInt(s1.innerText);
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = blankSquares('c4X');
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = blankSquares('d2X');
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = parseInt(t4.innerText);
            break;
        case 3:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = blankSquares('a2X');
            a3.innerHTML = parseInt(q3.innerText);
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = blankSquares('b1X');
            b2.innerHTML = parseInt(r2.innerText);
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = blankSquares('b4X');
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = parseInt(s4.innerText);
            d1.innerHTML = parseInt(t1.innerText);
            d2.innerHTML = blankSquares('d2X');
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = blankSquares('d4X');
            break;
        case 4:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = blankSquares('a2X');
            a3.innerHTML = blankSquares('a3X');
            a4.innerHTML = parseInt(q4.innerText);
            b1.innerHTML = parseInt(r1.innerText);
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = blankSquares('b4X');
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = parseInt(s3.innerText);
            c4.innerHTML = blankSquares('c4X');
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = parseInt(t2.innerText);
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = blankSquares('d4X');
            break;
        case 5:
            a1.innerHTML = parseInt(q1.innerText);
            a2.innerHTML = blankSquares('a2X');
            a3.innerHTML = blankSquares('a3X');
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = blankSquares('b1X');
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = parseInt(r3.innerText);
            b4.innerHTML = blankSquares('b4X');
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = parseInt(s4.innerText);
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = parseInt(t2.innerText);
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = blankSquares('d4X');
            break;
        case 6:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = blankSquares('a2X');
            a3.innerHTML = parseInt(q3.innerText);	
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = parseInt(r1.innerText);
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = blankSquares('b4X');
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = parseInt(s2.innerText);
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = blankSquares('c4X');
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = blankSquares('d2X');
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = parseInt(t4.innerText);
            break;
        case 7:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = parseInt(q2.innerText);
            a3.innerHTML = blankSquares('a3X');
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = blankSquares('b1X');
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = parseInt(r4.innerText);
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = parseInt(s3.innerText);
            c4.innerHTML = blankSquares('c4X');
            d1.innerHTML = parseInt(t1.innerText);
            d2.innerHTML = blankSquares('d2X');
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = blankSquares('d4X');
            break;
        case 8:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = blankSquares('a2X');
            a3.innerHTML = blankSquares('a3X');
            a4.innerHTML = parseInt(q4.innerText);
            b1.innerHTML = parseInt(r1.innerText);
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = blankSquares('b4X');
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = parseInt(s3.innerText);
            c4.innerHTML = blankSquares('c4X');
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = parseInt(t2.innerText);
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = blankSquares('d4X');
            break;
        case 9:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = parseInt(q2.innerText);	
            a3.innerHTML = blankSquares('a3X');
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = parseInt(r1.innerText);
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = blankSquares('b4X');
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = parseInt(s4.innerText);
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = blankSquares('d2X');
            d3.innerHTML = parseInt(t3.innerText);
            d4.innerHTML = blankSquares('d4X');
            break;
        case 10:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = blankSquares('a2X');
            a3.innerHTML = parseInt(q3.innerText);
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = blankSquares('b1X');
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = parseInt(r4.innerText);
            c1.innerHTML = parseInt(s1.innerText);
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = blankSquares('c4X');
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = parseInt(t2.innerText);
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = blankSquares('d4X');
            break;
        case 11:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = parseInt(q2.innerText);	
            a3.innerHTML = blankSquares('a3X');
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = blankSquares('b1X');
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = parseInt(r4.innerText);
            c1.innerHTML = parseInt(s1.innerText);
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = blankSquares('c4X');
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = blankSquares('d2X');
            d3.innerHTML = parseInt(t3.innerText);
            d4.innerHTML = blankSquares('d4X');
            break;
        case 12:
            a1.innerHTML = blankSquares('a1X');
            a2.innerHTML = blankSquares('a2X');
            a3.innerHTML = parseInt(q3.innerText);
            a4.innerHTML = blankSquares('a4X');
            b1.innerHTML = parseInt(r1.innerText);
            b2.innerHTML = blankSquares('b2X');
            b3.innerHTML = blankSquares('b3X');
            b4.innerHTML = blankSquares('b4X');
            c1.innerHTML = blankSquares('c1X');
            c2.innerHTML = blankSquares('c2X');
            c3.innerHTML = blankSquares('c3X');
            c4.innerHTML = parseInt(s4.innerText);
            d1.innerHTML = blankSquares('d1X');
            d2.innerHTML = parseInt(t2.innerText);
            d3.innerHTML = blankSquares('d3X');
            d4.innerHTML = blankSquares('d4X');
            break;
        default: 
            break;
    }

        row1Total.innerHTML = parseInt(q1.innerText) + parseInt(q2.innerText) + parseInt(q3.innerText) + parseInt(q4.innerText);
        row2Total.innerHTML = parseInt(r1.innerText) + parseInt(r2.innerText) + parseInt(r3.innerText) + parseInt(r4.innerText);
        row3Total.innerHTML = parseInt(s1.innerText) + parseInt(s2.innerText) + parseInt(s3.innerText) + parseInt(s4.innerText);
        row4Total.innerHTML = parseInt(t1.innerText) + parseInt(t2.innerText) + parseInt(t3.innerText) + parseInt(t4.innerText);

        colTotal1.innerHTML = parseInt(q1.innerText) + parseInt(r1.innerText) + parseInt(s1.innerText) + parseInt(t1.innerText);
        colTotal2.innerHTML = parseInt(q2.innerText) + parseInt(r2.innerText) + parseInt(s2.innerText) + parseInt(t2.innerText);
        colTotal3.innerHTML = parseInt(q3.innerText) + parseInt(r3.innerText) + parseInt(s3.innerText) + parseInt(t3.innerText);
        colTotal4.innerHTML = parseInt(q4.innerText) + parseInt(r4.innerText) + parseInt(s4.innerText) + parseInt(t4.innerText);

        bottomTopDiagTotal.innerHTML = parseInt(q4.innerText) + parseInt(r3.innerText) + parseInt(s2.innerText) + parseInt(t1.innerText);
        topBottomDiagTotal.innerHTML = parseInt(q1.innerText) + parseInt(r2.innerText) + parseInt(s3.innerText) + parseInt(t4.innerText);

}

function slowDown () { 
    time = setTimeout(function (){ 
        $('#slideTop0').removeClass('hidden');
        $('#slideBottom0').removeClass('hidden');
        window.scrollTo(0, 97);
    }, 3000)   
}

 $('#btnSubmit').on('click', function (){


    $("#slideBottom").css("display").val("none");
    $("#slideBottom1").css(":display").val("none");
    
    // $("#id").(":display").val("none");

        let a1X	= 0;
        let a2X = 0;
        let a3X = 0;
        let a4X = 0;
        let b1X = 0;
        let b2X = 0;
        let b3X = 0;
        let b4X	= 0;
        let c1X = 0;
        let c2X	= 0;
        let c3X = 0;
        let c4X = 0;
        let d1X = 0;
        let d2X = 0;
        let d3X = 0;
        let d4X = 0;
                                                                
    if (choice === 1) {
        a1X	= parseInt(a1.innerText);
        a2X = parseInt(document.getElementById('a2X').value);         
        a3X = parseInt(document.getElementById('a3X').value);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X = parseInt(document.getElementById('b1X').value);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);             
        b4X	= parseInt(b4.innerText);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X	= parseInt(c2.innerText);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X = parseInt(document.getElementById('c4X').value);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(document.getElementById('d2X').value); 
        d3X = parseInt(d3.innerText);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 2) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X = parseInt(a2.innerText);
        a3X = parseInt(document.getElementById('a3X').value);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X = parseInt(document.getElementById('b1X').value);
        b2X = parseInt(document.getElementById('b2X').value);
    	b3X	= parseInt(b3.innerText);
        b4X = parseInt(document.getElementById('b4X').value);
        c1X	= parseInt(c1.innerText);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X = parseInt(document.getElementById('c4X').value);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(document.getElementById('d2X').value);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(d4.innerText);
    } else if (choice === 3) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X = parseInt(document.getElementById('a2X').value);
        a3X	= parseInt(a3.innerText);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X = parseInt(document.getElementById('b1X').value);
        b2X	= parseInt(b2.innerText);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X = parseInt(document.getElementById('b4X').value);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X	= parseInt(c4.innerText);
        d1X = parseInt(d1.innerText);
        d2X = parseInt(document.getElementById('d2X').value);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 4) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X = parseInt(document.getElementById('a2X').value);
        a3X = parseInt(document.getElementById('a3X').value);
        a4X	= parseInt(a4.innerText);
        b1X	= parseInt(b1.innerText);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X = parseInt(document.getElementById('b4X').value);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X	= parseInt(c3.innerText);
        c4X = parseInt(document.getElementById('c4X').value);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(d2.innerText);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 5) {
        a1X	= parseInt(a1.innerText);
        a2X = parseInt(document.getElementById('a2X').value);
        a3X = parseInt(document.getElementById('a3X').value);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X = parseInt(document.getElementById('b1X').value);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X	= parseInt(b3.innerText);
        b4X = parseInt(document.getElementById('b4X').value);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X	= parseInt(c4.innerText);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(d2.innerText);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 6) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X = parseInt(document.getElementById('a2X').value);
        a3X	= parseInt(a3.innerText);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X	= parseInt(b1.innerText);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X = parseInt(document.getElementById('b4X').value);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X	= parseInt(c2.innerText);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X = parseInt(document.getElementById('c4X').value);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(document.getElementById('d2X').value);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(d4.innerText);
    } else if (choice === 7) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X	= parseInt(a2.innerText);
        a3X = parseInt(document.getElementById('a3X').value);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X = parseInt(document.getElementById('b1X').value);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X	= parseInt(b4.innerText);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X	= parseInt(c3.innerText);
        c4X = parseInt(document.getElementById('c4X').value);
        d1X = parseInt(d1.innerText);
        d2X = parseInt(document.getElementById('d2X').value);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 8) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X = parseInt(document.getElementById('a2X').value);
        a3X = parseInt(document.getElementById('a3X').value);
        a4X	= parseInt(a4.innerText);
        b1X	= parseInt(b1.innerText);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X = parseInt(document.getElementById('b4X').value);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X	= parseInt(c3.innerText);
        c4X = parseInt(document.getElementById('c4X').value);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(d2.innerText);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 9) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X	= parseInt(a2.innerText);
        a3X = parseInt(document.getElementById('a3X').value);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X	= parseInt(b1.innerText);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X = parseInt(document.getElementById('b4X').value);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X	= parseInt(c4.innerText);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(document.getElementById('d2X').value);
        d3X = parseInt(d3.innerText);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 10) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X = parseInt(document.getElementById('a2X').value);
        a3X	= parseInt(a3.innerText);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X = parseInt(document.getElementById('b1X').value);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X	= parseInt(b4.innerText);
        c1X	= parseInt(c1.innerText);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X = parseInt(document.getElementById('c4X').value);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(d2.innerText);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 11) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X	= parseInt(a2.innerText);
        a3X = parseInt(document.getElementById('a3X').value);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X = parseInt(document.getElementById('b1X').value);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X	= parseInt(b4.innerText);
        c1X	= parseInt(c1.innerText);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X = parseInt(document.getElementById('c4X').value);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(document.getElementById('d2X').value);
        d3X = parseInt(d3.innerText);
        d4X = parseInt(document.getElementById('d4X').value);
    } else if (choice === 12) {
        a1X = parseInt(document.getElementById('a1X').value);
        a2X = parseInt(document.getElementById('a2X').value);
        a3X	= parseInt(a3.innerText);
        a4X = parseInt(document.getElementById('a4X').value);
        b1X	= parseInt(b1.innerText);
        b2X = parseInt(document.getElementById('b2X').value);
        b3X = parseInt(document.getElementById('b3X').value);
        b4X = parseInt(document.getElementById('b4X').value);
        c1X = parseInt(document.getElementById('c1X').value);
        c2X = parseInt(document.getElementById('c2X').value);
        c3X = parseInt(document.getElementById('c3X').value);
        c4X	= parseInt(c4.innerText);
        d1X = parseInt(document.getElementById('d1X').value);
        d2X = parseInt(d2.innerText);
        d3X = parseInt(document.getElementById('d3X').value);
        d4X = parseInt(document.getElementById('d4X').value);
    }
                                                       
        let row1TotalX = parseInt(row1Total.innerText);
        let row2TotalX = parseInt(row2Total.innerText);
        let row3TotalX = parseInt(row3Total.innerText);
        let row4TotalX = parseInt(row4Total.innerText);

        let colTotal1X = parseInt(colTotal1.innerText);
        let colTotal2X = parseInt(colTotal2.innerText);
        let colTotal3X = parseInt(colTotal3.innerText);
        let colTotal4X = parseInt(colTotal4.innerText);

        let bottomTopDiagTotalX = parseInt(bottomTopDiagTotal.innerText);
        let topBottomDiagTotalX = parseInt(topBottomDiagTotal.innerText);

///// CHECK ANSWER /////

///// ROWS /////  

    rowOne (a1X, a2X, a3X, a4X);

    function rowOne () {
        if (a1X + a2X + a3X + a4X === row1TotalX) {
            rowTwo(b1X, b2X, b3X, b4X);    
        } else {
            showBanner1 ();
        }
    }
    
    function rowTwo () {
        if (b1X + b2X + b3X + b4X === row2TotalX) {
            rowThree(c1X, c2X, c3X, c4X);
        } else {
            showBanner1 ();
        }
    }

    function rowThree () {
        if (c1X + c2X + c3X + c4X === row3TotalX) {
            rowFour(d1X, d2X, d3X, d4X);
        } else {
            showBanner1 ();
        }
    }

    function rowFour () {
        if (d1X + d2X + d3X + d4X === row4TotalX) {
            colOne (a1X, b1X, c1X, d1X);
        } else {
            showBanner1 ();
        }
    }

///// COLS /////

    function colOne () {
        if (a1X  + b1X + c1X + d1X === colTotal1X) {
            colTwo (a2X, b2X, c2X, d2X);        
        } else {
            showBanner1 ();
        }
    }

    function colTwo () {
        if (a2X + b2X + c2X + d2X === colTotal2X) {
            colThree (a3X, b3X, c3X, d3X);
        } else {
            showBanner1 ();
        }
    }

    function colThree () {
        if (a3X + b3X + c3X + d3X === colTotal3X) {
            colFour (a4X, b4X, c4X, d4X);
        } else {
            showBanner1 ();
        }
    }

    function colFour () {
        if (a4X+ b4X + c4X + d4X === colTotal4X) {
            bottomTopDiag (a4X, b3X, c2X, d1X);
        } else {
            showBanner1 ();
        }
    }

///// DIAGS /////

    function bottomTopDiag () {
        if (a4X + b3X + c2X + d1X === bottomTopDiagTotalX) {
            topBottomDiag (a1X, b2X, c3X, d4X);
        } else {
            showBanner1 ();
        }
    }

    function topBottomDiag () {
        if (a1X + b2X + c3X + d4X === topBottomDiagTotalX) {
            showBanner ();                                                   
        } else {
            showBanner1 ();
        }
    }

});

var banner = document.getElementById('banner');

function showBanner () {
    slowDown(); 
    $('#btnSubmit').addClass('hidden');
    $('#banner1').addClass('hidden');               
    $('#slideTop').css('display', 'none');
    $('#slideBottom').css('display', 'none');
    $('#slideTop1').css('display', 'none');
    $('#slideBottom1').css('display', 'none');
    $('#banner').removeClass('hidden');
    $('#banner').html('<strong>Congratulations, you solved the puzzle!</strong>');
}

var banner1 = document.getElementById('banner1');

function showBanner1 () {
    $('#banner1').removeClass('hidden');
    $('#banner1').html('<strong>Please try again.</strong>');
}

})();
