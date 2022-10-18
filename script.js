
let para = document.createElement("p")
para.setAttribute("id","description")
para.innerHTML="AFTER SUBMISSION SEE THE TABLE WHICH IS BELOW THE FORM"
para.style.textAlign="center"
para.style.fontFamily="Verdana, Geneva, Tahoma, sans-serif"



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
container.style.height="auto"
container.style.width="700px"
container.style.marginBottom='10px'
container.style.borderRadius="10px"
container.style.paddingLeft="90px"
container.style.paddingBottom ="20px"
container.style.boxShadow= "4px 4px 30px black";

 let row = document.createElement("div")
 row.setAttribute("class",'row')



let form = forms("form","id","form")
form.setAttribute("action" ,'#')
form.setAttribute("return",false)
form.style.marginBottom="55px"
let labelf = labels("label","for","first-name","Firstname")

let br1 = breaks("br")
let inputf = inputs("input","type","text","id","first-name")
inputf.setAttribute("placeholder","firstname")
inputf.setAttribute("required","")
let br2 = breaks("br")
let labell = labels("label","for","last-name","Lastname")
let br3 = breaks("br")
let inputl = inputs("input","type","text","id","last-name")
inputl.setAttribute("placeholder",'lastname')
inputl.setAttribute("required","")
let br4 =breaks("br")

let labela = labels("label","for","address","Address")
let br5 =breaks("br")
let inputa = inputs("textarea","name","text","id","address")
inputa.setAttribute("cols",33)
inputa.setAttribute("placeholder","address")
inputa.setAttribute("required","")
let br6 =breaks("br")

let labelp = labels("label","for","pincode","Pincode")
let br7 =breaks("br")
let inputp = inputs("input","type","text","id","pincode")
inputp.setAttribute("placeholder","pincode")
inputp.setAttribute("required","")
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
inputstate.setAttribute("placeholder","state")
inputstate.setAttribute("required","")
let br17 =breaks("br")
let labelcountry = labels("label","for","country","Country")
let br18 =breaks("br")
let inputcountry = inputs("input","type","text","id","country")
inputcountry.setAttribute("required","")
inputcountry.setAttribute("placeholder","country")
let br19 = breaks("br")




let submit = document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("id",'submit')
submit.setAttribute("class","btn btn-primary")
submit.setAttribute("onsubmit",display)


let formG1 = forms('div',"class","form-group");
formG1.append(labelf,br1,inputf,br2);
let formG2 = forms('div',"class","form-group");
formG2.append(labell,br3,inputl,br4)
let formG3 = forms('div',"class","form-group");
formG3.append(gender,labelm,inputm,br9,labelfe,inputfe,br10)
let formG4 = forms('div',"class","form-group");
formG4.append(labelstate,br16,inputstate,br17)
let formG5 = forms('div',"class","form-group");
formG5.append(labelcountry,br18,inputcountry,br19)

let formG6 = forms('div',"class","form-group");
formG6.append(labela,br5,inputa,br6)
let formG7 = forms('div',"class","form-group");
formG7.append(labelp,br7,inputp,br8)
let formG8 = forms('div',"class","form-group");
formG8.append(choiceoffood,labelind,inputind,br11,
    labelchin,inputchin,br12,labelarab,inputarab,br13,labelthai,inputthai,br14,labeldes,inputdes,br15);
let formG9 = forms('div',"class","form-group");
formG9.append(submit)
form.append(formG1,formG2,formG3,formG4,formG5,formG6,formG7,formG8,formG9)


let col1 = document.createElement("div")
col1.setAttribute("class","col-md-6")
col1.append(form)
container.append(col1) 
form.append(row)
document.body.append(para,container)
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

submit.addEventListener("click",display)

function display(){

    let row2 = document.createElement("tr")

    let tbody = document.createElement("tbody")
    let first_name = document.getElementById("first-name").value
    let tdataF = document.createElement("td")
    tdataF.innerHTML =first_name
    let last_name = document.getElementById("last-name").value
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
}else if (Gender[1].checked == true){
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
tbody.append(row2)
    table.append(tbody)

       
document.getElementById("form").reset();

   

}






