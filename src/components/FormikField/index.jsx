import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';

const FormikField = ({ name, label, disabled, type }) => {
  const classes = useStyles();
  return (
    <div>
      <Field
        className={classes.field}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        type={type}
        disabled={disabled}
        fullWidth
        InputLabelProps={{
          style: { color: '#f65261' },
          shrink: true
        }}
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

FormikField.defaultProps = {
  disabled: false
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default FormikField;
