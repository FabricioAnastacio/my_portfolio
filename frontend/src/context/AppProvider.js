import { useMemo, useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

function AppProvider({ children }) {
  const [ inputName, setName ] = useState('');
  
  const values = useMemo(() => ({
    inputName,
    setName
  }), [inputName]);

  return (
    <AppContext.Provider value={values}>
      { children }
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.shape([]).isRequired
};

export default AppProvider;
