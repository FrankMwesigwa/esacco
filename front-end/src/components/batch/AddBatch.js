import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import map from 'lodash/map';

class AddBatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description:'',
      firstName:'',
      lastName:'',
      password:'',
      username:'',
      roleId:''
    };

    this.onChange = this.onChange.bind(this);
    this.onAddBtn = this.onAddBtn.bind(this);
    
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onAddBtn = () => {
    const { description } = this.state;
		axios.post('http://localhost:8006/batch/create', { description } )
			.then(function (response) {
				this.props.parent.closeAddModal();
				this.props.parent.refreshTable();
				console.log(response);
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	}

    render() {
        return (

    <div>

        <div class="modal fade" id="modal-default">
          <div class="modal-dialog" >
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Add New User</h4>
              </div>
              <div class="modal-body">
              <div class="box box-warning">
                
                <div class="box-body">
                <form role="form">
                <div class="form-group">
                  <label>Description</label>
                  <input type="text" class="form-control" name="description" value ={this.state.description} onChange={this.onChange} placeholder="Enter Email"/>
                </div>

                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control" name="firstName" value ={this.state.firstName} onChange={this.onChange} placeholder="Enter Firstname"/>
                </div>

                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control" name="lastName" value ={this.state.lastName} onChange={this.onChange} placeholder="Enter Lastname"/>
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input type="text" class="form-control" name="password" value ={this.state.password} onChange={this.onChange} placeholder="Enter Password"/>
                </div>

                <div class="form-group">
                  <label>User Name</label>
                  <input type="text" class="form-control" name="username" value ={this.state.username} onChange={this.onChange} placeholder="Enter Username"/>
                </div>

                </form>
                </div>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={this.onAddBtn}>Save Batch</button>
              </div>
            </div>
            
          </div>
          
        </div>
    
    </div>
        );
    }
}

export default AddBatch;