$(()=>{
    $("#loginForm").validate({ 
        errorClass: "is-invalid",
       submitHandler:(form,e)=>{
          e.preventDefault();
          alert($(form).serialize())
          return false;
        },
    rules:{nickname:{required:true}},
    messages:{nickname:{required:"Enter your Nikname"},
    password:{required:"Pasword vust be hear"}}
    });


    $("#registrationForm").validate({ 
        errorClass: "is-invalid",
        submitHandler:(form,e)=>{
            e.preventDefault();
            alert($(form).serialize())
            return false;
          },
 rules:{nickname:{required:true}},
 messages:{nickname:{required:"Your nickname must be required"},password:{required:"Pasword vust be hear"}}
 });
})

