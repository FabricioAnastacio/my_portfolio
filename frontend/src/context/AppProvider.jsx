import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [inputName, setNAME] = useState('Fabrício Rodrigues');
  const [modeTame, setTame] = useState(1);

  const values = useMemo(() => ({
    inputName,
    setNAME,
    modeTame,
    setTame,
  }), [inputName, modeTame]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
