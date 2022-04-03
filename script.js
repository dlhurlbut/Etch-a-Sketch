function makeDivs(){
    var container=document.getElementById('container');
    for (i=0; i<16; i++) {
        var newRow=document.createElement('div'); 
        newRow.classname="row";    
        container.appendChild(newRow);
        for (i=0; i<16; i++) {    
            var newDiv=document.createElement('div');
            newRow.appendChild(newDiv);
        }
    }    
}
