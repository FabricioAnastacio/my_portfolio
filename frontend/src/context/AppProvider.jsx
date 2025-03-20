import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [inputName, setNAME] = useState('Fabrício Rodrigues');
  const [modeThame, setThame] = useState(1);
  const [data, setData] = useState({});

  const values = useMemo(() => ({
    inputName,
    setNAME,
    modeThame,
    setThame,
    data,
    setData,
  }), [inputName, modeThame, data]);

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
