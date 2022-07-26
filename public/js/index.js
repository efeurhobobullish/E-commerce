// Header Scroll 
// let nav = document.querySelector(".navbar");
// window.onscroll = function() {
//     if(document.documentElement.scrollTop > 50){
//         nav.classList.add("header-scrolled"); 
//     }else{
//         nav.classList.remove("header-scrolled");
//     }
// }

// nav hide  
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.toggle("show");
//     })
// })

    $("#add-cat").validate({
        
        errorClass: "error fail-alert",
        // validClass: "valid success-alert"
          
      rules: {
        title : {
          required: true,
          minlength: 5
        },
        image: {
          required: true
          
        }
      },
      messages : {
        title: {
          required: "This field is requied",
          minlength: "Title should be at least 5 characters"
        },
        image :{
            required : "Image is required"
        }
      },
      
    });
   

  //   $("#edit-cat").validate({
        
  //     errorClass: "error fail-alert",
        
  //   rules: {
  //     title : {
  //       required: true,
  //       minlength: 5
  //     },
  //     image: {
  //       required: true
        
  //     }
  //   },
  //   messages : {
  //     title: {
  //       required: "This field is requied",
  //       minlength: "Title should be at least 5 characters"
  //     },
  //     image :{
  //         required : "Image is required"
  //     }
  //   },
    
  // });
 


            $("#user-signup-form").validate({
              errorClass: "error fail-alert",

              rules: {
                name : {
                  required: true,
                  minlength: 4
                },
                email: {
                  required: true,
                  email: true
                },
                contact: {
                  required: true,
                  number : true
                },
                password: {
                  required: true,
                  minlength : 6
                },
                cpassword: {
                  required: true,
                  minlength : 6
                }
              },
              messages : {
                name: {
                  required : "Please enter your name.",
                  minlength: "Name should be at least 4 characters."
                },
                contact : {
                  required: "Please enter your Mobile no.",
                },
                email: {
                  required: "Please enter your email.",
                  email: "The email should be in the format: abc@domain.tld"
                },
                password: {
                  required: "Please enter your Password.",
                  minlength: "Password should be at least 6 characters."
                },
                cpassword : {
                  required : "Re-enter your Password."
                }
              }
            });


            $("#user-login-form").validate({
              errorClass: "error fail-alert",

              rules: {
                email: {
                  required: true,
                  email: true
                },
                password: {
                  required: true,
                }
                },
              messages : {
                
                email: {
                  required: "Please enter your email.",
                },
                password: {
                  required: "Please enter your Password.",
                }
              
              }
            });

            $("#admin-login-form").validate({
              errorClass: "error fail-alert",

              rules: {
                email: {
                  required: true,
                  email: true
                },
                password: {
                  required: true,
                }
                },
              messages : {
                
                email: {
                  required: "Please enter your email.",
                },
                password: {
                  required: "Please enter your Password.",
                }
              
              }
            });
// $(document).ready(function() {
//     $("#basic-form").validate({
//       rules: {
//         name : {
//           required: true,
//           minlength: 3
//         },
//         age: {
//           required: true,
//           number: true,
//           min: 18
//         },
//         email: {
//           required: true,
//           email: true
//         },
//         weight: {
//           required: {
//             depends: function(elem) {
//               return $("#age").val() > 50
//             }
//           },
//           number: true,
//           min: 0
//         }
//       },
//       messages : {
//         name: {
//           minlength: "Name should be at least 3 characters"
//         },
//         age: {
//           required: "Please enter your age",
//           number: "Please enter your age as a numerical value",
//           min: "You must be at least 18 years old"
//         },
//         email: {
//           email: "The email should be in the format: abc@domain.tld"
//         },
//         weight: {
//           required: "People with age over 50 have to enter their weight",
//           number: "Please enter your weight as a numerical value"
//         }
//       }
//     });
//   });

$('a.confirmDeletion').on('click',function(){
    if(!confirm('Confirm deletion'))
    return false
});

let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
console.log('home');