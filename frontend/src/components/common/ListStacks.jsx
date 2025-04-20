import PropTypes from 'prop-types';

function ListStacks({ frontend, backend, cs }) {
  return (
    <ul>
      <li>
        <hr />
        <h2>Front-end</h2>
        <p>{ frontend }</p>
      </li>
      <li>
        <hr />
        <h2>Back-end</h2>
        <p>{ backend }</p>
      </li>
      <li>
        <hr />
        <h2>Ciência da Computação</h2>
        <p>{ cs }</p>
      </li>
    </ul>
  );
}

ListStacks.propTypes = {
  frontend: PropTypes.string.isRequired,
  backend: PropTypes.string.isRequired,
  cs: PropTypes.string.isRequired,
};

export default ListStacks;
