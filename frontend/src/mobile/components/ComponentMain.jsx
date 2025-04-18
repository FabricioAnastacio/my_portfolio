import React, { useContext, useEffect } from 'react';
import fotoF from '../../imgs/fabricio_fot.png';
import AppContext from '../../context/AppContext';
import FetchJson from '../../hooks/fetchJson';
import '../style/MainMobile.css';
import '../style/CarouselMobile.css';

function MainMobile() {
  const [loading, erro, refresh] = FetchJson();
  const { data } = useContext(AppContext);

  useEffect(() => {
    refresh();
  }, []);

  const refactorItems = (item) => {
    console.log(item);
    let response = '';
    const [isStack, firstItem] = item;
    response = firstItem;
    if (isStack === 'stacks') {
      item.forEach((e, index) => {
        if (index > 1) response += ` / ${e}`;
      });
      return response;
    }
    item.forEach((e, index) => {
      if (index > 1) response += ` - ${e}`;
    });
    return response;
  };

  if (loading) return (<h1 className="Content-loading">Loading...</h1>);
  if (erro) {
    return (
      <h1 className="Content-loading">
        Algo de errado não esta certo!
        <br />
        Recarregue a pagina!
      </h1>
    );
  }

  return (
    <section className="Content-First-Mobile">
      <img
        className="Picture-Mobile"
        src={ fotoF }
        alt="Foto de Fabricio"
      />
      <h1>{ data.myname }</h1>
      <h3>
        Desenvolvedor
        <br />
        { refactorItems(data.stacks) }
      </h3>
      <p>{ refactorItems(data.languages) }</p>
    </section>
  );
}

export default MainMobile;
