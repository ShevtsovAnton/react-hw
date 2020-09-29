import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './styles';

// import TextField from '@material-ui/core/TextField';

const MaterialUISelectField = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
  onBlur,
  required
}) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.select} fullWidth>
      {/* <FormControl fullWidth> */}
      {/* <InputLabel required={required} id="genres" className={classes.label}> */}
      <InputLabel required={required} id="genres">
        {label}
      </InputLabel>
      <Select
        name={name}
        labelId="genres"
        id="genres__select"
        multiple
        onChange={onChange}
        onBlur={onBlur}
        input={<Input id="select__multiple" />}
        value={value}
        renderValue={selected => (
          <div>
            {selected.map(val => (
              <Chip key={val} label={val} />
            ))}
          </div>
        )}
      >
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

MaterialUISelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  errorString: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

MaterialUISelectField.defaultProps = {
  errorString: '',
  required: false,
  value: []
};

const FormikSelect = ({ name, value, label, required, genres, onChange }) => {
  return (
    <div>
      <Field
        name={name}
        as={MaterialUISelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
        required={required}
        value={value}
        onChange={onChange}
      >
        {genres.map(genre => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

FormikSelect.defaultProps = {
  required: true,
  value: []
};

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default FormikSelect;
