import { Component, Fragment } from 'react';

// import MUIThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import { THEME_ID } from '@mui/material';

class FormUserDetails extends Component {
  constructor(props) {
    super();
  }

  continue = (event) => {
    event.preventDefault();

    this.props.next();
  };

  render() {
    const { values } = this.props;
    return (
      <Fragment>
        <AppBar>
          <h1>Hello World</h1>
          <TextField
            hintText='Enter your first name'
            floatingLabelText='FirstName'
          />
        </AppBar>
      </Fragment>
    );
  }
}

export default FormUserDetails;
