function ListProjects({ modeThame, platform, dataList }) {
  return (
    dataList.map((item, i) => (
      <li key={ i } className={ `Project-${modeThame}-${platform}` }>
        <div className={ `Project-description-${platform}` }>
          <div
            className={ `Project-Bunner-${platform}` }
            style={ { backgroundImage: `url(${item.img})` } }
          >
            <a
              href={ item.link }
              target="_blank"
              rel="noreferrer"
            >
              Saiba mais
              <p>Github</p>
            </a>
          </div>
          <h3>{ item.description }</h3>
          <ul className={ `Project-technologies-${platform}` }>
            {
              item.technologies.map((tec, index) => (
                <li key={ index }>
                  { tec }
                </li>
              ))
            }
          </ul>
        </div>
        <h3 className={ `Project-Tags-${platform}` }>{ item.tags }</h3>
      </li>
    ))
  );
}

export default ListProjects;
