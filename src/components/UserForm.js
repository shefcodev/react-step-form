import { Component } from 'react';

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: '',
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            next={this.nextStep}
            onInputChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          // <FormPersonalDetails
          //   prev={this.prevStep}
          //   next={this.nextStep}
          //   onInputChange={this.handleChange}
          //   values={values}
          // />
          <h1>FormPersonalDetails</h1>
        );
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Success</h1>;
      default:
    }
  }
}

export default UserForm;
