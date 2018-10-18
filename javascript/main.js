//GLOBAL JS
var ele_list = document.querySelectorAll(".tab");
for (var x = 0; x < ele_list.length; x++) {
ele_list[x].addEventListener("click", function (e) {
mainContentselector(this.getAttribute("data-origin"));
e.preventDefault();
});
}
var openMain = function(){
    document.getElementById("homeLink").click();
}
openMain();
//tab style controller - controls active/inactive tab CSS and the 
//display of the tabs "contents"
function mainContentselector(origin){
    disableAll();
    activeTabController(origin);
    activateContent(origin);
}
function disableAll(){
    //Add any new tabs here vvvvv
    var contentID = ["home", "ops", "calendar", "tools", "device"];    
    var i;
    for(i=0; i < contentID.length; i++){
        //turning off all tabs
        var currentContainer = contentID[i];
        var currentContainerContent = (currentContainer + "Content");
        var currentContainerLink = (currentContainer + "Link");
        var currentContainerstyle = (currentContainer + "LinkTop");
        var currentTurnDown = document.getElementById(currentContainerContent);
        var currentTurnDownTab = document.getElementById(currentContainerLink);
        var currentTurnDownStyling = document.getElementById(currentContainerstyle);
        currentTurnDownTab.classList.remove("tabSelectedState");
        currentTurnDownStyling.classList.remove("tabDesignActive");
        currentTurnDownTab.classList.add("tabNonSelectedState");
        currentTurnDownStyling.classList.add("tabDesignInactive");
        //finished turning all off
        //turn off active containers
        var removeOpenContainers =  (contentID[i] + "Active");
        var _check = hasClass(currentTurnDown, removeOpenContainers);
        if(_check) {
            currentTurnDown.classList.remove(removeOpenContainers);
            break;
        }
        else {
                 
        }
    }
}

function hasClass(element, classCheck){
    return (' ' + element.className + ' ').indexOf(' ' + classCheck + ' ') > -1;
}

function activeTabController(activated){
    var origin = activated;
    var currentTabActive = document.getElementById(origin + "Link");
    var currentTabStyleingActive = document.getElementById(origin + "LinkTop");
    currentTabActive.classList.remove("tabNonSelectedState");
    currentTabStyleingActive.classList.remove("tabDesignInactive");
    currentTabActive.classList.add("tabSelectedState");
    currentTabStyleingActive.classList.add("tabDesignActive");
}

function activateContent(activatedWindow){
    var origin = activatedWindow;
    var currentWindow = (origin + "Content");
    var currentStyle = (origin);
    var newStyle = (origin + "Active");
    var _checkOld = hasClass(currentWindow, currentStyle);
    var _checkNew = hasClass(currentWindow, newStyle);
    var activatedContainer = document.getElementById(currentWindow);
    if (_checkOld){
        activatedContainer.classList.remove(currentStyle);
    }
    else if(_checkNew === false){
    	activatedContainer.classList.add(newStyle);
    }
}

// Home

// Advanced Search
//Open Advanced Search
var element = document.getElementById("advancedSearch");
element.addEventListener("click", function (e) {
openAdvanced(this.getAttribute("data-origin"));
e.preventDefault();
});

function openAdvanced(origin){
    buttonOrigin = document.getElementById(origin);
    containerPush = document.getElementById(origin + "Container");
    classToCheck = (origin + "ContainerOpen");
    var _boolCheck = hasClass(containerPush, classToCheck);
    if(_boolCheck === false){
        containerPush.classList.add("advancedSearchContainerOpen");
        document.getElementById("advancedSearch").innerHTML = "X";
    }
    if(_boolCheck){
        containerPush.classList.remove("advancedSearchContainerOpen");
        document.getElementById("advancedSearch").innerHTML = "Advanced Search";
    }
}

//add options to advanced search
var ele_list = document.querySelectorAll(".searchOption");
for (var x = 0; x < ele_list.length; x++) {
ele_list[x].addEventListener("click", function (e) {
addSearchOption(this.getAttribute("data-origin"));
e.preventDefault();
});
}

function addSearchOption(origin){
    var currentClick = document.getElementById(origin);
    var _optionCheck = hasClass(currentClick, "searchOptionActive")
    if(_optionCheck){
        currentClick.classList.remove("searchOptionActive");
        currentClick.classList.add("searchOption");
    }
    else{
        currentClick.classList.add("searchOptionActive");
        currentClick.classList.remove("searchOption");
    }
    
}


//add options to advanced search
var ele_list = document.querySelectorAll(".lobSearchOption");
for (var x = 0; x < ele_list.length; x++) {
ele_list[x].addEventListener("click", function (e) {
addLOBOption(this.getAttribute("data-origin"));
e.preventDefault();
});
}

function addLOBOption(origin){
    var currentClick = document.getElementById(origin);
    var _optionCheck = hasClass(currentClick, "searchOptionActive")
    if(_optionCheck){
        currentClick.classList.remove("searchOptionActive");
        currentClick.classList.add("searchOption");
    }
    else{
        currentClick.classList.add("searchOptionActive");
        currentClick.classList.remove("searchOption");
    }
    
}

var preSelected = function(){
    document.getElementById("advancedOptionOne").click();
    document.getElementById("advancedOptionTwo").click();
    // document.getElementById("advancedOptionThree").click();
    document.getElementById("advancedOptionHub").click();
    document.getElementById("advancedOptionCi").click();
    document.getElementById("advancedOptionVideo").click();
    document.getElementById("advancedOptionTransport").click();
}

preSelected();

alert("MOCK UP - Please open in firefox or chrome")
