export const validationUserdata =(values)=>{
    let errors={};
    if(values.name.trim==""){
        errors.name="name is required"
     }else if(values.name.length<3){
          errors.name="name must be at lesst 3 characters"
     }else if(values.name.length>10){
         errors.name="name must be at most 10 characters"
     }
 

    if(values.email.trim==""){
        errors.email="email is required"
    }else if(values.emaillength<10){
        errors.email="email must be at lesst 10 characters"}

    if(values.password.trim==""){
       errors.password="password is required"
    }else if(values.password.length<3){
         errors.password="password must be at lesst 3 characters"
    }else if(values.password.length>10){
        errors.password="password must be at most 10 characters"
    }

    
        
       


    
    return errors;

}