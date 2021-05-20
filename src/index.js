const root = document.querySelector('#root');

const element = React.createElement('h1', {id: "main_title"}, "Hello Front-end World!");


ReactDOM.render(
    element,
    document.getElementById('root')
)

