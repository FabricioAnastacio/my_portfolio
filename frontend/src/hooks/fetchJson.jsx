import { useContext, useState } from 'react';
import imags from '../assets/imgs/importImgs';
import exempleImage from '../assets/imgs/exemple_img.png';
import AppContext from '../contexts/AppContext';

export default function FetchJson() {
  const { setData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const refresh = async () => {
    try {
      setLoading(true);
      const API = await fetch('data/portfolio.json');
      const resultAPI = await API.json();
      resultAPI.listProjects.forEach((item, i) => {
        resultAPI.listProjects[i] = {
          ...item,
          img: imags[i] ?? exempleImage,
        };
      });
      setData(resultAPI);
    } catch (e) {
      setErro(e);
    } finally {
      setLoading(false);
    }
  };

  return [
    loading,
    erro,
    refresh,
  ];
}
