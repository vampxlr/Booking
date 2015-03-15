/*
JavaScript Event Calendar

Version: 2.0
Date: April 7, 2010

Copyright (c) 1998, 2010 Kevin Ilsen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(){var i={get:function(j){if(typeof j=="string"){return document.getElementById(j)}else{return j}}};
var a={add:function(){if(typeof window.addEventListener!="undefined"){return function(l,k,j)
{i.get(l).addEventListener(k,j,false)}}else{if(typeof window.attachEvent!="undefined")
{return function(l,k,j){if(l==window&&k=="load"){var n=window.onload;if(typeof n!="function")
{window.onload=j}else{window.onload=function(){if(n){n()}j()}}}else
{var m=function(){j.call(i.get(l),window.event)};i.get(l).attachEvent("on"+k,m)}}}}}()};
var h=function(k){var j=k.getYear();if(j<1000){j+=1900}return j};
var d=function(k,j){if(k==4||k==6||k==9||k==11){return 30}else{if((k==2)&&f(j)){return 29}else
{if(k==2){return 28}else{return 31}}}};var f=function(j){if(((j%4==0)&&j%100!=0)||j%400==0)
{return true}else{return false}};var c=function(j){if(j==1){return 12}else{return(j-1)}};
var g=function(j){if(j==12){return 1}else{return(j+1)}};
var e=function(j){if((j%100)==1){return((j-100)+11)}else{return(j-1)}};
var b=function(j){if((j%100)==12){return((j-11)+100)}else{return(j+1)}};
JEC=function(r,k){var n;a.add(window,"load",function(){n=i.get(r)});
k=k||{};var t=k.tableClass||"JEC";
var u=(k.specialDay===0?0:k.specialDay?k.specialDay:0);var x=k.linkNewWindow===false?false:true;
var w=k.months||["January","February","March","April","May","June","July","August","September","October","November","December"];var m=k.weekdays||["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var p=new Date();var j=k.firstMonth||h(p)*100+1;var l=k.lastMonth||j+11;var q=[];
var v=function(K,E,L,J,D,I,H){var G=document.createElement("td");
var F="";if(J==u){F+=" daySpecial"}if((K==D)&&(E==I)&&(L==H)){F+=" dayToday"}var C=document.createElement("div");C.setAttribute("class","date");C.className="date";
C.innerHTML=L;G.appendChild(C);var B=(((K*100)+E)*100)+L;if(q[B])
{F+=" dayHasEvent";G.appendChild(q[B])}G.setAttribute("class",F);
G.className=F;return G};var s=function(F){var B,G,H,P,O,K,X,V,U;
if(typeof F=="string"){F=parseInt(F)}O=F%100;P=(F-O)/100;B=p.getDate();
G=p.getMonth()+1;H=h(p);if(F<j){O=j%100;P=(j-O)/100;F=j}
if(F>l){O=l%100;P=(l-O)/100;F=l}V=new Date(w[O-1]+" 1,"+P);X=V.getDay();
U=d(O,P);var R=document.createElement("thead");var W=document.createElement("tr");
var C=document.createElement("th");C.setAttribute("colspan",7);C.setAttribute("colSpan",7);
C.innerHTML=w[O-1]+"&nbsp;"+P;W.appendChild(C);R.appendChild(W);var Y=document.createElement("tbody");
W=document.createElement("tr");for(var Q=0;Q<7;Q++){C=document.createElement("th");C.innerHTML=m[Q];
W.appendChild(C)}Y.appendChild(W);W=document.createElement("tr");var E=document.createElement("td");
K=1;for(var Q=1;Q<=7;Q++){if(Q>X){E=v(P,O,K,Q,H,G,B);K++}else{E=document.createElement("td");
E.setAttribute("class","dayBlank");

E.className="dayBlank"}W.appendChild(E)}Y.appendChild(W);
while(K<=U){W=document.createElement("tr");for(var Q=1;Q<=7;Q++){if(K<=U){E=v(P,O,K,Q,H,G,B);
K++}else{E=document.createElement("td");E.setAttribute("class","dayBlank");
E.className="dayBlank"}W.appendChild(E)}Y.appendChild(W)}var J=document.createElement("tfoot");
W=document.createElement("tr");C=document.createElement("th");C.setAttribute("colspan",2);
C.setAttribute("colSpan",2);if(F>j){var D=document.createElement("a");D.setAttribute("href","javascript:;");
a.add(D,"click",function(){A(e(F))});D.innerHTML="&larr;&nbsp;"+w[c(O)-1];
C.appendChild(D)}W.appendChild(C);C=document.createElement("th");C.setAttribute("colspan",3);
C.setAttribute("colSpan",3);var L=document.createElement("select");L.setAttribute("size",1);
a.add(L,"change",function(){A(this.options[this.selectedIndex].value)});
for(var T=j;T<=l;T=b(T)){var M=T%100;var N=(T-M)/100;var I=document.createElement("option");
I.setAttribute("value",T);if(T==F){I.setAttribute("selected","selected")}I.innerHTML=w[M-1]+" "+N;
L.appendChild(I)}C.appendChild(L);W.appendChild(C);C=document.createElement("th");
C.setAttribute("colspan",2);C.setAttribute("colSpan",2);if(F<l){var D=document.createElement("a");
D.setAttribute("href","javascript:;");a.add(D,"click",function(){A(b(F))});
D.innerHTML=w[g(O)-1]+"&nbsp;&rarr;";C.appendChild(D)}W.appendChild(C);J.appendChild(W);
var S=document.createElement("table");S.setAttribute("class",t);S.className=t;S.appendChild(R);
S.appendChild(Y);S.appendChild(J);return S};
var o=function(B){if(n.hasChildNodes()){while(n.childNodes.length>=1){n.removeChild(n.firstChild)}}
n.appendChild(B)};var y=function(I,E,C,D,B,L){var K;if(q[I]){K=q[I];
K.appendChild(document.createElement("br"))}else{K=document.createElement("div");
K.setAttribute("class","events");K.className="events"}if(D&&D!=""){var G=document.createElement("img");
G.setAttribute("src",D);if(B&&L){G.setAttribute("width",B);
G.setAttribute("height",L)}K.appendChild(G)}if(C&&C!=""){var H=document.createElement("a");
H.setAttribute("href",'javascript:return false;');if(x){H.setAttribute("target","_blank")}H.innerHTML=E;
K.appendChild(H)}else{var J=document.createElement("span");J.innerHTML=E;
K.appendChild(J)}q[I]=K;var F=Math.floor(I/100);if(F<j){j=F}if(F>l){l=F}};
var z=function(F){for(var G in F){var D=F[G];var I=D.eventDate;
var E=D.eventDescription;var B=D.eventLink;var C=D.image;var J=D.imageWidth;
var H=D.imageHeight;y(I,E,B,C,J,H)}};var A=function(D){if(!D){var B=p.getMonth()+1;
var F=B;var E=h(p);D=(E*100)+F}var C=s(D);if(n){o(C)}else{a.add(window,"load",function(){o(C)})}};
return{defineEvent:y,defineEvents:z,showCalendar:A}}})();
