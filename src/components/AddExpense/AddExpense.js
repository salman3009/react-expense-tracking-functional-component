
import './AddExpense.css';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';

function AddExpense(){

  const[getExpense,setExpense]=useState({
    expenseName:'',
    amount:'',
    paidBy:'',
    date:''
  });

  const navigate = useNavigate();


  const onChangeHandler=(event)=>{
    setExpense({
      ...getExpense,[event.target.name]:event.target.value
    })
  }
  const onAddHandler=(event)=>{
    event.preventDefault();
    if(getExpense.expenseName && getExpense.paidBy && getExpense.amount && getExpense.date){
      let expenseDetails=[];
      if(sessionStorage.getItem('expenseDetails')){ 
        let details = JSON.parse(sessionStorage.getItem('expenseDetails'));
        console.log(typeof details);
        expenseDetails.push(...details);
        expenseDetails.push({...getExpense});
        sessionStorage.setItem("expenseDetails",JSON.stringify(expenseDetails));
      }
      else{
        expenseDetails.push({...getExpense});
        sessionStorage.setItem("expenseDetails",JSON.stringify(expenseDetails));
      }
      navigate('/dashboard');
    }
    else{
      alert("Please add some data");
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
                          <label>Expense Name</label>
                          <input type="text"  value={getExpense.expenseName} onChange={onChangeHandler} name="expenseName" className="form-control" id="firstName"  placeholder="Enter first name"/>
                        </div>
                        <div className="form-group">
                          <label>Amount</label>
                          <input  value={getExpense.amount} onChange={onChangeHandler} type="text" name="amount" className="form-control" id="lastName"  placeholder="Enter last name"/>
                        </div>
                        
                      <div className="form-group">
                        <label>Paid By</label>
                        <input value={getExpense.paidBy} onChange={onChangeHandler} type="text" name="paidBy" className="form-control" id="email" placeholder="Enter email"/>
                      
                      </div>
                      <div className="form-group">
                        <label>Date</label>
                        <input value={getExpense.date} onChange={onChangeHandler} type="date"  name="date" className="form-control" id="password" placeholder="Password"/>
                      </div>
                  
                      <button onClick={onAddHandler} type="submit" className="btn btn-success">ADD</button>
                    </form>
              </div>
                <div className="col-4">
                    
              </div>
              </div>
     
          </div>
    </div>)
}

export default AddExpense;