function createEmailTemplate(){
    var userName=getData("textboxOne");     
    var recordId=getData("textboxTwo");     
    var from=getData("textboxThree");       
    var to=getData("textboxFour");          
    var cc=getData("textboxFive");         
    var comments=getData("textboxSix");     
    var changedStatus=document.getElementById("textboxSeven").checked;     console.log("changedStatus",changedStatus)
    document.getElementById("formContainer").style.display="none";
    document.getElementById("formContainerTwo").style.display="block";
    document.getElementById("lableOne").innerHTML=`This is an automatically generated notification to inform your above the following</label>`;
    document.getElementById("lableTwo").innerHTML=`<label id="greetings">Greeting</label>`;
    document.getElementById("lableThree").innerHTML=`<label><label>user</label><label id="output"> ${userName} </label><label> Changed status of </label> <label id="output"> ${recordId} </label><label>  to  </label><label id="output"> ${changedStatus}</label><label>With below Comments</label></label>`
    document.getElementById("lableFour").innerHTML=`<label>From:<label id="output">${from}</label></label>`;
    document.getElementById("lableFive").innerHTML=`<label>To:<label id="output">${to}</label></label>`;
    document.getElementById("lableSix").innerHTML=`<label>CC:<label id="output">${cc}</label></label>`;
    document.getElementById("lableSeven").innerHTML=`<label>Comments:<label id="output">${comments}</label></label>`;
    
}

function getData(information){
    return document.getElementById(information).value;
}