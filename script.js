




//CODE FOR FORM STARTS


function division(tagname,attrname,attrvalue,content){
let ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML =content;
ele.style.fontWeight="500"
return ele
}

let breaks = function(btname){
    let ele = document.createElement(btname)
return ele;
}
function labels  (tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content
    ele.style.marginTop="15px"
    ele.style.fontWeight="600"
    return ele
    
}
function inputs(tagname,typename,typevalue,idname,idvalue,Name,namevalue){
    let ele = document.createElement(tagname);
    ele.setAttribute(typename,typevalue);
    ele.setAttribute(idname,idvalue)
    ele.setAttribute(Name,namevalue);
    return ele
}
function forms(tagname,attrname,attrvalue){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue)
    return ele
}



let container= document.createElement('div')
container.setAttribute("class","container")
 let row = document.createElement("div")
 row.setAttribute("class",'row')
let col1 = document.createElement("div")
col1.setAttribute("class","col-md-6")
let col2 = document.createElement("div")
col2.setAttribute("class","col-md-6")


let form = forms("form","id","myform")
let labelf = labels("label","for","firstname","Firstname")
let br1 = breaks("br")
let inputf = inputs("input","type","text","id","firstname")
let br2 = breaks("br")
let labell = labels("label","for","lastname","Lastname")
let br3 = breaks("br")
let inputl = inputs("input","type","text","id","lastname")
let br4 =breaks("br")

let labela = labels("label","for","address","Address")
let br5 =breaks("br")
let inputa = inputs("input","type","text","id","address")
let br6 =breaks("br")

let labelp = labels("label","for","pincode","Pincode")
let br7 =breaks("br")
let inputp = inputs("input","type","text","id","pincode")
let br8 =breaks("br")

let gender= division("div","class","gender","Gender")
let labelm = labels("label","for","male","Male")
// let inputm = inputs("input","type","radio","id","male")
let inputm = document.createElement("input")
inputm.setAttribute("type","radio")
inputm.setAttribute("name","gen")
inputm.setAttribute("id","male")
let br9 =breaks("br")
let labelfe = labels("label","for","female","Female")
// let inputfe = inputs("input","type","radio","id","female")
let inputfe = document.createElement("input")
inputfe.setAttribute("type","radio")
inputfe.setAttribute("name","gen")
inputfe.setAttribute("id","female")
let br10 =breaks("br")

let choiceoffood = division("div","class","chf","Choice of food")
let labelind = labels("label","for","ind","Indian")
let inputind = inputs("input","type","checkbox","id","ind",'name','checkbox')
let br11 =breaks("br")
let labelchin = labels("label","for","chin","Chinese")
let inputchin = inputs("input","type","checkbox","id","chin",'name','checkbox')
let br12 =breaks("br")
let labelarab = labels("label","for","arab","Arabian")
let inputarab = inputs("input","type","checkbox","id","arab",'name','checkbox')
let br13 =breaks("br")
let labelthai = labels("label","for","thai","thai")
let inputthai = inputs("input","type","checkbox","id","thai",'name','checkbox')
let br14 =breaks("br")
let labeldes = labels("label","for","food","desert")
let inputdes = inputs("input","type","checkbox","id","desert",'name','checkbox')
let br15 =breaks("br")

let labelstate = labels("label","for","state","State")
let br16 =breaks("br")
let inputstate = inputs("input","type","text","id","state")
let br17 =breaks("br")
let labelcountry = labels("label","for","country","Country")
let br18 =breaks("br")
let inputcountry = inputs("input","type","text","id","country")
let br19 = breaks("br")


let button = document.createElement("input")
button.setAttribute("type","button");
button.setAttribute("value","Submit");
button.style.marginTop="20px"




col1.append(labelf,br1,inputf,br2,labela,br5,inputa,br6,
    gender,labelm,inputm,br9,labelfe,inputfe,br10,
    
    labelstate,br16,inputstate,br17,labelcountry,br18,inputcountry,br19,button)
col2.append(labell,br3,inputl,br4,labelp,br7,inputp,br8,choiceoffood,labelind,inputind,br11,
    labelchin,inputchin,br12,labelarab,inputarab,br13,labelthai,inputthai,br14,labeldes,inputdes,br15,)

container.append(form)
row.append(col1,col2) 
form.append(row)
document.body.append(container)

//CODE FOR FORM ENDS

//CODE FOR TABLE STARTS


let table = document.createElement("table")
table.setAttribute("class","table")

let thead = document.createElement('thead')
thead.setAttribute("class",'table-dark table-stripped table-bordered')

let row1 = document.createElement("tr")

function tdata (tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content
    return ele
}
let headF = tdata("td","scope",'col',"Firstname");
let headL = tdata("td","scope",'col',"Lastname");
let headGen = tdata("td","scope",'col',"Gender");
let headA = tdata("td","scope",'col',"Address");
let headP = tdata("td","scope",'col',"Pincode");
let headST =tdata("td","scope",'col',"State");
let headCO = tdata("td","scope",'col',"country");
let headCOF =tdata("td","scope",'col',"Choice of Food")


row1.append(headF,headL,headGen,headA,headP,headST,headCO,headCOF)
thead.append(row1);
table.append(thead);
document.body.append(table)

// CODE FOR TABLE ENDS
button.addEventListener('click',display)


function display(){

    let row2 = document.createElement("tr")

    
    let first_name = document.getElementById("firstname").value
    let tdataF = document.createElement("td")
    tdataF.innerHTML =first_name
    let last_name = document.getElementById("lastname").value
    let tdataL = document.createElement("td")
    tdataL.innerHTML =last_name

    let add_ress =document.getElementById("address").value
    let tdataA = document.createElement("td")
    tdataA.innerHTML =add_ress

    let pin_code =document.getElementById("pincode").value
    let tdataP = document.createElement("td")
    tdataP.innerHTML =pin_code

    let sta_te =document.getElementById("state").value
    let tdataS = document.createElement("td")
    tdataS.innerHTML = sta_te

    let count_ry =document.getElementById("country").value
    let tdataC = document.createElement("td")
    tdataC.innerHTML =count_ry


    
    
    let Gender = document.getElementsByName("gen");
    let tdataM = document.createElement("td")
if (Gender[0].checked == true){
    tdataM.innerHTML ="Male"
}else{
    tdataM.innerHTML ="Female"
}


let Checkbox = document.getElementsByName("checkbox")

let okay = false;
    let count=0;
    let arr=[]
    for (let i=0;i<Checkbox.length;i++){
        if (Checkbox[i].checked){
            count++
        }
    }
    if (count>1){
    okay=true;
    
if (Checkbox[0].checked){
    arr.push("Indian")
}
if (Checkbox[1].checked){
    arr.push("Chinese")
}
if (Checkbox[2].checked){
    arr.push("Arabian")
}
if (Checkbox[3].checked){
    arr.push("Thai")
}
if (Checkbox[4].checked){
    arr.push("Desert")
}

    }
    if(!okay){
        alert("Please check at least two checkbox");
        return false
    }

let tdc =document.createElement("td")
tdc.innerHTML=arr



row2.append(tdataF,tdataL,tdataM,tdataA,tdataP,tdataS,tdataC,tdc)
    table.append(row2)

       
document.getElementById("myform").reset();

   

}






