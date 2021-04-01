//top buttom 
document.querySelector('body').onscroll =  (e)=>{
    var windows_height = window.scrollY;
    console.log(windows_height)
    console.log(e)
    if(windows_height < 100){
        document.querySelector('.top').style.opacity ="0";
    }else{
        document.querySelector('.top').style.opacity ="1";
    }


} ;

//Form Validation

document.querySelector('#submit').addEventListener("click", function(e){
    e.preventDefault()

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;



    function formValid(e){


        if(name.length == 0 || email.length == 0 || phone.length == 0){
            var message = className = 'message';


            if(name == 0){
                const newDiv = document.createElement("div");
                newDiv.className = message;
                const newDivText = document.createTextNode("name is Empty");
                newDiv.appendChild(newDivText);
                const form = document.querySelector('.container .contact');
                const h1 = document.querySelector('.container #form');

               form.insertBefore(newDiv, h1)
               setTimeout(()=>{
                document.querySelector('.message').remove();

             console.log(this.setTimeout())

            },3000);
            }
            if(email == 0){
                const newDiv = document.createElement("div");
                newDiv.className = message;
                const newDivText = document.createTextNode("email is empty");
                newDiv.appendChild(newDivText);
                const form = document.querySelector('.container .contact');
                const h1 = document.querySelector('.container #form');

               form.insertBefore(newDiv, h1)
               setTimeout(()=>{
                document.querySelector('.message').remove();

             console.log(this.setTimeout())

            },3000);
            }
            if(phone == 0){
                const newDiv = document.createElement("div");
                newDiv.className = message;
                const newDivText = document.createTextNode("phone is empty");
                newDiv.appendChild(newDivText);
                const form = document.querySelector('.container .contact');
                const h1 = document.querySelector('.container #form');

               form.insertBefore(newDiv, h1)
               setTimeout(()=>{
                document.querySelector('.message').remove();

             console.log(this.setTimeout())

            },3000);
            }

        }else{
            var message2 = className = 'message2';
            const newDiv = document.createElement("div");
            newDiv.className = message2;
            const newDivText = document.createTextNode("Die Daten wurde Erfolgreich hochgeladen");
            newDiv.appendChild(newDivText);
            const form = document.querySelector('.container .contact');
            const h1 = document.querySelector('.container #form');

           form.insertBefore(newDiv, h1)
           setTimeout(()=>{
            document.querySelector('.message2').remove();

         console.log(this.setTimeout())

        },3000);
     }

 }

 $('#form input[type="text"]').val('');
 $('#form input[type="text"]').val('');


   formValid()



});
