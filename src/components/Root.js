import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header';
import i18nConfig from '../config/i18n';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    default: grey,
    background: {
      paper: '#fff',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    useNextVariants: true,
  },
});

const Root = ({ headerVisible }) => (
  <MuiThemeProvider theme={theme}>
    <I18nextProvider i18n={i18nConfig}>
      {headerVisible ? <Header /> : null}
      <App />
      <ToastContainer />
    </I18nextProvider>
  </MuiThemeProvider>
);

Root.propTypes = {
  headerVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ appInstance }) => ({
  headerVisible: appInstance ? appInstance.settings.headerVisible : true,
});

export default connect(mapStateToProps)(Root);
