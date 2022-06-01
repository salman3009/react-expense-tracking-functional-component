import './Dashboard.css';
import {Link} from 'react-router-dom';
const Dashboard=()=>{
    return (<div>
       <div className="container-fluid">
              <div className="row">
                <div className="col-3">
                    <form>        
                        <div className="form-group">
                          <label>Expense name</label>
                          <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                        
                        </div>       
                        <button type="submit" className="btn btn-success">Search</button>
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
                          <tr>
                            <th scope="row">1</th>
                            <td>Travel</td>
                            <td>2000</td>
                            <td>salman</td>
                            <td>29/02/2022</td>
                            <td><i  data-toggle="modal" data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Travel</td>
                            <td>2000</td>
                            <td>salman</td>
                            <td>29/02/2022</td>
                            <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Travel</td>
                            <td>2000</td>
                            <td>salman</td>
                            <td>29/02/2022</td>
                            <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Travel</td>
                            <td>2000</td>
                            <td>salman</td>
                            <td>29/02/2022</td>
                            <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Travel</td>
                            <td>2000</td>
                            <td>salman</td>
                            <td>29/02/2022</td>
                            <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Travel</td>
                            <td>2000</td>
                            <td>salman</td>
                            <td>29/02/2022</td>
                            <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>
                       
                        </tbody>
                      </table>
                  </div>
              </div>
     
          </div>

 
          <div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

    </div>)
}

export default Dashboard;