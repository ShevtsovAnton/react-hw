import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';

// import TextField from '@material-ui/core/TextField';

const MaterialUISelectField = (label, genres, children, value, name, onChange, onBlur) => {
  return (
    <FormControl className={classes.select} fullWidth>
      <InputLabel id="genres" className={classes.label}>
        {label}
      </InputLabel>
      <Select
        name={name}
        labelId="genres"
        id="genres__select"
        multiple
        value={genres}
        onChange={onChange}
        input={<Input id="select__multiple" />}
        renderValue={selected => (
          <div>
            {selected.map(value => (
              <Chip key={value} label={value} />
            ))}
          </div>
        )}
      >
        {children}
      </Select>
    </FormControl>
  );
};

const FormikSelect = ({ name, items, label }) => {
  return (
    <Field name={name} as={MaterialUISelectField} label={label}>
      {items.map(genre => (
        <MenuItem key={genre} value={genre}>
          {genre}
        </MenuItem>
      ))}
    </Field>
  );
};

// FormikSelect.defaultProps = {
//   value: ''
// };

// FormikSelect.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// };

export default FormikSelect;
