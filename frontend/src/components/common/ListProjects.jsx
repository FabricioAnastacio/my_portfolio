function ListProjects({ platform, dataList }) {
  return (
    dataList.map((item, i) => (
      <li key={ i } className={ `Project-card-${platform}` }>
        <div className="Header-card">
          <h3>{ item.name }</h3>
          <a
            href={ item.link }
            target="_blank"
            rel="noreferrer"
            className="Link-GitHub"
          >
            <p>Github →</p>
          </a>
          {
            item.demo.length !== 0 && (
              <a
                target="_blank"
                rel="noreferrer"
                className="Link-GitHub"
                href={ item.demo }
              >
                Demo →
              </a>
            )
          }
        </div>
        <div className={ `Project-description-${platform}` }>
          <div
            className={ `Project-Bunner-${platform}` }
            style={ { backgroundImage: `url(${item.img})` } }
          />
          <div className="Descriptio-tags">
            <p>{ item.description }</p>
            <ul className={ `Project-technologies-${platform}` }>
              {
                item.technologies.map((tec, index) => (
                  <li key={ index } className="New-Icon-format">
                    <p>{ tec }</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </li>
    ))
  );
}

export default ListProjects;
