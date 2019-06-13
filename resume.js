var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for (var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.wibkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
//window.open("index.html");
open.onupgradeneeded=function (e) {
  request=e.target.result;
  request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
  }
open.onerror=function (error) {
  console.log("error is occured");
  }
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function (data) {
    console.log(data);
    personalinfo(data.target.result);
    career(data.target.result);
      }
}

var left=document.querySelector(".left");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="images/usericon.svg";
  image.alt=pi.name;
  left.append(image);
  var hh=document.createElement("h2");
  hh.textContent=pi.name;
  left.append(hh);
var vv=document.createElement("h2");
vv.textContent=pi.phno;
left.append(vv);
var vi=document.createElement("h2");
vi.textContent=pi.email;
left.append(vi);
var vl=document.createElement("h2");
vl.textContent=pi.address;
left.append(vl);
}
var right=document.querySelector(".right");
function career(c){
  var ca=document.createElement("h1");
  ca.textContent="Career_objective";
  right.append(ca);
  var co=document.createElement("h3");
  co.textContent=c.career;
  right.append(co);
  var hr=document.createElement("hr");
  right.append(hr);

  // var gg=document.createElement("h1");
  // gg.textContent="graduvation details";
  // right.append(gg);
  // var hr=document.createElement("hr");
  // right.append(hr);
  // var co=document.createElement("h2");
  // co.textContent=c.career;
  // right.append(co);
  var head11=document.createElement("h1");
  head11.textContent="education details";
  right.append(head11);
  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>percentage</th></tr>";
  var tr2=" ";
  for(var i in c.education)
  {
    console.log(c.education);
      tr2=tr2+"<tr><td>"+c.education[i].institute+"</td><td>"+c.education[i].branch+"</td><td>"+
      c.education[i].year+"</td><td>"+c.education[i].per+"</td></tr>";
  }
table.innerHTML=tr1+tr2;
right.append(table);
var hr=document.createElement("hr");
right.append(hr);
var head=document.createElement("h1");
head.textContent="skills";
right.append(head);
var sl=document.createElement("h3");
sl.textContent=c.skills;
right.append(sl);






}
