import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';

const FormikField = ({ name, label, value, required, onChange }) => {
  const classes = useStyles();
  return (
    <div>
      <Field
        className={classes.field}
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        value={value}
        fullWidth
        InputLabelProps={{
          style: { color: '#f65261' }
        }}
        helperText={<ErrorMessage name={name} />}
        onChange={onChange}
      />
    </div>
  );
};

FormikField.defaultProps = {
  value: '',
  required: false
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default FormikField;
