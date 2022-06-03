import './Dashboard.css';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
const Dashboard=()=>{

  const[getList,setList] =  useState([]);
  const[getIndex,setIndex]=useState(-1);
  const[getSearch,setSearch]=useState('');

  const[getExpense,setExpense]=useState({
    expenseName:'',
    amount:'',
    paidBy:'',
    date:''
  });

     useEffect(()=>{
            if(JSON.parse(sessionStorage.getItem('expenseDetails')) && JSON.parse(sessionStorage.getItem('expenseDetails')).length>0){
               setList(JSON.parse(sessionStorage.getItem('expenseDetails')))
            }
     },[])

     const onDeleteHandler=(index)=>{
       let expenseDetails = [...getList];
       expenseDetails.splice(index,1);
       setList(expenseDetails);
       sessionStorage.setItem('expenseDetails',JSON.stringify(expenseDetails));
     }

     const onEditHandler=(index)=>{
      setExpense({
        expenseName:getList[index].expenseName,
        amount:getList[index].amount,
        paidBy:getList[index].paidBy,
        date:getList[index].date
      })
      setIndex(index);
     }

     const onChangeHandler=(event)=>{
      setExpense({
        ...getExpense,[event.target.name]:event.target.value
      })
    }

    const onChangeSearchHandler=(event)=>{
      setSearch(event.target.value);
    }


    const onEditSubmitHandler=(event)=>{
      event.preventDefault();
      let expenseDetails =[...getList];
      expenseDetails[getIndex].expenseName = getExpense.expenseName;
      expenseDetails[getIndex].amount=getExpense.amount;
      expenseDetails[getIndex].paidBy = getExpense.paidBy;
      expenseDetails[getIndex].date = getExpense.date;
      setList(expenseDetails);
      sessionStorage.setItem('expenseDetails',JSON.stringify(expenseDetails));
    }

    const searchFilter=(event)=>{
      event.preventDefault();
      let details = getList.filter((obj)=>{
        return obj.expenseName === getSearch; 
      })
      setList(details);
    }

    const resetFilter=(event)=>{
        event.preventDefault();
        setSearch('');
        if(JSON.parse(sessionStorage.getItem('expenseDetails')) && JSON.parse(sessionStorage.getItem('expenseDetails')).length>0){
          setList(JSON.parse(sessionStorage.getItem('expenseDetails')))
       }
    }

    return (<div>
       <div className="container-fluid">
              <div className="row">
                <div className="col-3">
                    <form>        
                        <div className="form-group">
                          <label>Expense name</label>
                          <input type="text" value={getSearch} onChange={onChangeSearchHandler} className="form-control" id="expenseName" name="searchExpenseName" placeholder="Enter expenseName"/>
                        
                        </div>       
                        <button onClick={searchFilter} type="submit" className="btn btn-success">Search</button>
                        <button onClick={resetFilter}>Reset</button>
                      </form>
                </div>
                <div className="col-7"></div>
                <div className="col-2">
                <button type="submit" className="btn btn-success"><Link to="/addExpense">Add Expense</Link></button>
                </div>
                
              </div>

              <div className="row">
                  <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Expense Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Paid by</th>
                            <th scope="col">Date</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
             
                        {getList.map((obj,index)=>{
                           return(<tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{obj.expenseName}</td>
                            <td>{obj.amount}</td>
                            <td>{obj.paidBy}</td>
                            <td>{obj.date}</td>
                            <td><i onClick={()=>onEditHandler(index)} data-toggle="modal" data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i onClick={()=>onDeleteHandler(index)} className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>

                           )
                        })

                        }
                        
                        
                 
                 
                
                       
                        </tbody>
                      </table>
                  </div>
              </div>
     
          </div>

 
          <div className="modal fade" id="edit"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
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
                  
                      <button data-dismiss="modal" onClick={onEditSubmitHandler} type="submit" className="btn btn-success">ADD</button>
                    </form>
        </div>
       
      </div>
    </div>
  </div>

    </div>)
}

export default Dashboard;