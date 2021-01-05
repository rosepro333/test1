class Logo{

    static getData=()=>{

    
        var personDetails={
        userone:{name:"ajay",username:"userone",password:"test"},
        usertwo:{name:"sajay",username:"usertwo",password:"test1"},
        userthree:{name:"vijay",username:"userthree",password:"test2"}

                         }

                  return personDetails
               }

            static authenticateUser=(uname,pwd)=>{
               let dataset=Logo.getData()

               if(uname in dataset){
                    if(dataset[uname].password==pwd){
                   
                       return 1;//valid user name and password

                    }
                    else{
                        
                         return 0;//inavlid password
                    }
                
               }
               else{
                   return -1;//no user exsist

               }
     


            }
            


            static login=()=>{

         

                let uname=document.querySelector("#username").value
                let pwd=document.querySelector("#password").value
                
         
                let us=Logo.authenticateUser(uname,pwd)
                if (us==1){
          
         
              
                   window.location.href="logo.html"
                
                }
                else if(us==0){
                  let plab=document.querySelector("#pinvalid")
                  plab.textContent="password doesnt match the username"
                  plab.style.color="red"
                  //alert("password is incorrect")
                  
         
                }
                else if(us==-1){
                  let ulab=document.querySelector("#uinvalid")
                  ulab.textContent="username is incorrect"
                  ulab.style.color="red"
                   //alert("no user exsist with provided username")
         
                }
         
               }

        static createAccount=()=>{

            window.location.href="createaccount.html"


        }




        }
        
        