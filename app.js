let q = document.getElementsByClassName("question");

for (let i = 0; i<q.length; i++){
    console.log(q[i]);
    q[i].addEventListener("click", function(){
                
        let c = q[i].children[0];
	console.log(q[i]);
        q[i].classList.toggle("active");

        if(c.style.display === "block"){
            c.style.display="none";
            
        }else{
            c.style.display="block";
            
            // q[i].style.color = "#f47c57" ;
            // q[i].style.fontWeight="normal";
            // c.style.fontWeight="normal";
        }

    })
}