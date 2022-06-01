
import './Register.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {emailValidation,passwordValidation}  from '../Validation';
function Register(){

    const[getForm,setForm]=useState({
      firstName:'',
      lastName:'',
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
          email:'',
          password:''
        });
        if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
          alert("success");
          sessionStorage.setItem("email",getForm.email);
          sessionStorage.setItem("password",getForm.password);
        }
        else{
             if(!emailValidation(getForm.email)){
               setValidation({
                 ...getValidation,email:"Please provide proper email"
               })
             }
             if(!passwordValidation(getForm.password)){
              setValidation({
                ...getValidation,password:"Please provide proper password"
              })
            }
        }

    }


    return (<div>
          <div className="container">
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                  <form>
                      <div className="form-group">
                          <label>First Name</label>
                          <input type="text"  onChange={onChangeHandler} value={getForm.firstName} className="form-control" id="firstName" name="firstName"  placeholder="Enter first name"/>
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" onChange={onChangeHandler} value={getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Enter last name"/>
                        </div>
                        
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email"  onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" placeholder="Enter email"/>
                        {getValidation.email}
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" placeholder="Password"/>
                        {getValidation.password}
                      </div>
                  
                      <button onClick={onSubmitHandler} type="submit" className="btn btn-success">Submit</button>
                    </form>
              </div>
                <div className="col-4">
                    
              </div>
              </div>
     
          </div>
    </div>)
}

export default Register;