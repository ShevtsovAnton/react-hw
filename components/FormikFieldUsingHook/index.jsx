/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';
import useStyles from './styles';

const FormikFieldUsingHook = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const classes = useStyles();
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      id={field.name}
      name={field.name}
      className={classes.field}
      error={!!errorText}
      value={field.value}
      onChange={field.onChange}
      helperText={errorText}
      InputLabelProps={{
        style: { color: '#f65261' },
        shrink: true
      }}
      {...props}
    />
  );
};

FormikFieldUsingHook.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormikFieldUsingHook;
