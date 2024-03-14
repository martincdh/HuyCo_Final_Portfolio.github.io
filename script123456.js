var checkboxes = document.querySelectorAll('div[class=line]'),
    checkboxArray = Array.from( checkboxes );

function confirmCheck() {
  if (this.checked) {
    document.div.classList.remove("line");
    document.div.classList.add("line2");    
    localStorage.setItem("theme", "line2");
  }
  else 
    {
        document.div.classList.add("line");
        document.div.classList.remove("line2");    
        localStorage.setItem("theme", "line1");
    }
}

var div = document.getElementById('hide-and-show');
var display = 0;

function hideshow(){
    if (display ==1){
        div.style.display = 'block';
        display = 0;
    }
    else{
        div.style.display = 'none';
        display = 1;
    }
}
