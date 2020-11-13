import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './styles';

const MaterialUISelectField = ({ errorString, label, children, value, name, onChange, onBlur }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.select} fullWidth>
      <InputLabel id="genres" shrink>
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  errorString: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

MaterialUISelectField.defaultProps = {
  errorString: '',
  value: []
};

const FormikSelect = ({ name, label, genres }) => {
  return (
    <div>
      <Field name={name} as={MaterialUISelectField} label={label}>
        {genres.map(genre => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FormikSelect;
