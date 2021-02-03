import React, { Component } from "react"
import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"
import './sign-in.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ email: "", password: "" })
  }

  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            label='email'
            required
            handleChange={this.handleChange}
          ></FormInput>


          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          ></FormInput>

          <div className='buttons'>
          <CustomButton fill='Sign in' type='submit'></CustomButton>
          <CustomButton fill='Sign in with google' isGoogleSignIn onClick={signInWithGoogle}></CustomButton>


          </div>

        </form>
      </div>
    )
  }
}
