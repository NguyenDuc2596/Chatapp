const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage': 
        document.getElementById('app').innerHTML = componets.registerPage
       break;


       case 'login': 
        document.getElementById('app').innerHTML = componets.loginPage
       break;
    
    }
}

function lick1()  {
    document.getElementById('app').innerHTML =componets.loginPage

  
}