
import './AddExpense.css';
import {Link} from 'react-router-dom';

function AddExpense(){
    return (<div>
          <div className="container">
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                  <form>
                      <div className="form-group">
                          <label>Expense Name</label>
                          <input type="text" className="form-control" id="firstName"  placeholder="Enter first name"/>
                        </div>
                        <div className="form-group">
                          <label>Amount</label>
                          <input type="text" className="form-control" id="lastName"  placeholder="Enter last name"/>
                        </div>
                        
                      <div className="form-group">
                        <label>Paid By</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                      
                      </div>
                      <div className="form-group">
                        <label>Date</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                      </div>
                  
                      <button type="submit" className="btn btn-success"><Link to="/dashboard">ADD</Link></button>
                    </form>
              </div>
                <div className="col-4">
                    
              </div>
              </div>
     
          </div>
    </div>)
}

export default AddExpense;