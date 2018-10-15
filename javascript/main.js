//GLOBAL JS

//tab style controller - controls active/inactive tab CSS and the 
//display of the tabs "contents"
function mainContentselector(origin){
    disableAll();
    activeTabController(origin);
    activateContent(origin);
}
function disableAll(){
    //Add new 
    var contentID = ["home", "ops", "calendar", "tools", "device"];    
    var i;
    for(i=0; i < contentID.length; i++){
        //tirning off all tabs
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
        console.log(_check);
        if(_check) {
            currentTurnDown.classlist.remove(removeOpenContainers);
            break;
        }
        else {
            
        }
    }
}

function hasClass(element, classCheck){
    console.log("in hasClass")
return (' ' + element.className + ' ').indexOf(' ' + classCheck + ' ') > -1;
}

function activeTabController(activated){
    //console.log("we have entered active");
    var origin = activated;
    //console.log("current Origin Variable " + origin);
    //var currentContentContainer = document.getElementById(origin + "Container");
    var currentTabActive = document.getElementById(origin + "Link");
    var currentTabStyleingActive = document.getElementById(origin + "LinkTop");
    currentTabActive.classList.remove("tabNonSelectedState");
    currentTabStyleingActive.classList.remove("tabDesignInactive");
    currentTabActive.classList.add("tabSelectedState");
    currentTabStyleingActive.classList.add("tabDesignActive");
}

function activateContent(activatedWindow){
    var origin = activatedWindow;
    var currentWindow = (origin + "Content")
    var activatedContainer = document.getElementById(currentWindow);
    activatedContainer.classList.remove(currentWindow);
    activatedContainer.classList.add(currentWindow + "Active");
}

