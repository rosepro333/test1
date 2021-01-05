function reverse(str){ 

     let reversed = "";      
      for (var i = str.length - 1; i >= 0; i--){         
        reversed += str[i];
        
      }     
    
     return reversed;
   }
//var string =window.prompt('Enter a string: ');
 // let result= reverse(string)
 let result= reverse("hello")
  console.log("reversed string is  :  "+result)

