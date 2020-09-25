import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';

const FormikField = ({ name, label, value }) => {
  return (
    <div>
      <Field
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        value={value}
        fullWidth
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

FormikField.defaultProps = {
  value: ''
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default FormikField;
