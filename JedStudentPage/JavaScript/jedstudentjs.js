//const datasheet = "DATA.xlsx";
//var reader = new FileReader();

//var XLSX = require("xlsx");

/*
function localStore() {
    var student = localStorage.getItem("student")
    var reader = new FileReader();
    //const userID = id;

}*/


function skillsListGet() {
    //Need to find a way to get list of skills from excel
    
    //open excelsheet
    //const excel = "read XLS the excelsheet";
    
    //get skills based on userID


    //put skills into table (trivial)
    /*
     * for(all skills){
     *  content += <tr><td><td><td></tr>
     * }
     * 
     * */
}

function mngOpen() {

    sneaks = document.getElementsByClassName("hider");

    var content = "<button id=\"i"  ;
    var contwont = "\"> Hide </button>";

    for (let i = 0; i < sneaks.length; i++) {
        sneaks[i].innerHTML = content + i + contwont;
    };

    for (let i = 0; i < sneaks.length; i++) {
        $("#i" + i).click(function(){
            hidepls(i);
        });
    };

    document.getElementById("manager").setAttribute("onclick","mngClose()");

}

function mngClose(){
    document.getElementById("manager").setAttribute("onclick","mngOpen()");
    sneaks = document.getElementsByClassName("hider");
    for (let i = 0; i < sneaks.length; i++) {
        sneaks[i].innerHTML = "";
    };
}


function hidepls(h) {
    $(".c" + h).hide();
}


function delist() {
}

function unitOpen() {
    //opens submit a unit 'form'
    var content = "<h4>Unit Code</h4>   <input id=\"unitCode\" placeholder=\"Enter Unit Code here\" /> <input id = \"unitSubmit\" type=\"submit\"  />";

    document.getElementById("dummyDiv").innerHTML = content;

    $("#unitSubmit").click(function(){
        //$("#unitCode").val();
        $('#jobQuals').text("Congratulations! Unit" + $('#unitCode').val() + "You are now qualified for # new jobs");
        //function, then also add unit skills to file
    });
}

//onclick=\"unitComplete()\"


//the big one
//function unitComplete() {
    //Save new skills

    // read box contents
    // var unitCode = document.getElementById("unitCode").innerHTML;

    // find contents in unit spreadsheet object

    // add skills in object to student spreadsheet

    // jobsOld = jobCheck(user);

    // newSkill = skillTable.get(unitID);
    // studentSkillTable.push(newSkill);
    
    // jobs = jobCheck(user);
    // jobsNew = jobs - jobsOld;

    // Show new jobs
    // document.getElementById("jobQuals").innerHTML = "<div>Congratulations! Unit " + unitCode + "You are now qualified for> + 
    // jobsNew.size() +
    // <new jobs</div>  +  
    // for(all; jobs){<div>Job Doer at place</div>";}
    

//}



    
