import './Login.css';
import {Link} from 'react-router-dom';

function Login(){
    return (<div>
                  <div class="container">
              <div class="row">
                <div class="col-4">

                </div>
                <div class="col-4">
                  <form>        
                      <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                      
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"/>
                      </div>
                  
                      <button type="submit" class="btn btn-success"><Link to="/dashboard">Submit</Link></button>
                    </form>
              </div>
                <div class="col-4">
                    
              </div>
              </div>
     
          </div>
    </div>)
}

export default Login;