const image = React.createElement('img', { src: 'img/react.png' });
const title = React.createElement('h1', null, 'React');
const subtitle = React.createElement('p', null, 'Библиотека для создания пользовательских интерфейсов.');
const container = React.createElement('div', { className: 'container' }, image, title, subtitle)

ReactDOM.render(container, document.getElementById('root'));


