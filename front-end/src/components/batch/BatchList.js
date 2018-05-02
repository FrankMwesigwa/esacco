import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddBatch from './AddBatch';

class BatchList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8006/books')
      .then(res => {
        this.setState({ books: res.data });
      });
  }

  render() {
    return (
      <div>

    <section class="content-header">
      <h1>
        Manage Batch
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">BatchList</li>
      </ol>
    </section>

  <section class="content container-fluid">
  <div class="row">
    <div class="col-xs-12">
    <div class="box box-default">
            <div class="box-header with-border">
              <h3 class="box-title">User Bathes</h3>
            </div>
            <div class="box-body">
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-default">
                Add New Batch
              </button>
            </div>

            <div class="box-body">

            <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Batch Id</th>
                  <th>Branch</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Created Date</th>
                  <th>CreatedBy</th>
                </tr>
                </thead>
                <tbody>
                      {
                        this.state.books.map(book => (
                        <tr key={book.id}>
                          <td>{book.id}</td>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td>{book.year}</td>
                          <td>{book.isbn}</td>
                          <td>{book.price}</td>
                          <td><Link to={`/details/${book.id}`}>view Details</Link></td>
                        </tr>
                        ))
                      }                      
                    </tbody>             
              </table>
            
            </div>

          </div>

          </div>
           
      </div>

      <AddBatch />

  </section>
</div>
    )
  }
}


export default BatchList;