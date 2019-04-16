import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Canvas from '../../common/Canvas';

// eslint-disable-next-line no-unused-vars
export const StudentView = ({ t }) => <Canvas />;

StudentView.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(StudentView);
