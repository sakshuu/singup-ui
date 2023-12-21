import React from 'react'

const SignIn = () => {
  return <>

<div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div>
                <label for="email" class="form-label">First Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <div class="mt-2">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <button type="button" class="btn btn-primary w-100 mt-3">
                Login
              </button>
              <p class="text-center mt-3">
                Dont Have Account? <a href="#">Create Account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default SignIn