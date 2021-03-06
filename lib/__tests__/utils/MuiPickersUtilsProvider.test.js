import React from 'react';
import { shallow } from 'enzyme'; // required to use just shallow here because utils prop override
import DateFnsUtils from '../../src/utils/date-fns-utils';
import MuiPickersUtilsProvider from '../../src/utils/MuiPickersUtilsProvider';

describe('MuiPickersUtilsProvider', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MuiPickersUtilsProvider utils={DateFnsUtils} />);
  });

  it('Should render context provider', () => {
    expect(component).toBeTruthy();
  });
});
