import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName:'',
             email:'',
             mobileNo:'',
             message:''
        }
    }

    inputChange = (event) => {
        
        this.setState({[event.target.name]:event.target.value})
    }

    inputSubmit = (e) => {
         e.preventDefault();
       alert(JSON.stringify(this.state));
        // console.log(this.state.message);
    }
    
    render() {
        
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4"></div>

                <form onSubmit={this.inputSubmit}>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Full Name</label>
                        <input type="text" class="form-control" placeholder="full name" name="fullName" value={this.state.fullname} onChange={this.inputChange}/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Email</label>
                        <input type="text" class="form-control" placeholder="email" name="email" value={this.state.email} onChange={this.inputChange}/>
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Mobile No</label>
                        <input type="text" class="form-control" placeholder="mobile no." name="mobileNo" value={this.state.mobileNo} onChange={this.inputChange}/>
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Message</label>
                        <textarea type="message" class="form-control" placeholder="message" name="message" value={this.state.message} onChange={this.inputChange}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
                 </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;