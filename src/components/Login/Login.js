import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {emailValidation,passwordValidation}  from '../Validation';
function Login(){

  const navigate = useNavigate();

  const[getForm,setForm]=useState({
    email:'',
    password:''
  });

  const[getValidation,setValidation]=useState({
    email:'',
    password:''
  });

  const onChangeHandler=(event)=>{
    setForm({
      ...getForm,[event.target.name]:event.target.value
    })
  }


  const onSubmitHandler=(event)=>{
    event.preventDefault(); 
    setValidation({
      ...getValidation,email:!emailValidation(getForm.email)?"please provide email":'',
      password:!passwordValidation(getForm.password)?"Please provide the password":''
    });
    if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
      alert("success");
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if(email === getForm.email && password === getForm.password){
        navigate('/dashboard');
      }
      else{
        setValidation({
          email:'no match found',
          password:'no match found'
        });
      }
  
    }
}





    return (<div>
                  <div class="container">
              <div class="row">
                <div class="col-4">

                </div>
                <div class="col-4">
                  <form>        
                      <div class="form-group">
                        <label>Email address</label>
                        <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email"  class="form-control" placeholder="Enter email"/>
                        {getValidation.email && <div class="alert alert-danger" role="alert">
                        {getValidation.email}
</div> }
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onChangeHandler} value={getForm.password} name="password" class="form-control" id="password" placeholder="Password"/>
                       
                        {getValidation.password && <div class="alert alert-danger" role="alert">
                        {getValidation.password}
</div>}
                      </div>
                  
                      <button onClick={onSubmitHandler}  type="submit" class="btn btn-success">Submit</button>
                    </form>
              </div>
                <div class="col-4">
                    
              </div>
              </div>
     
          </div>
    </div>)
}

export default Login;