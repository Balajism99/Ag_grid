import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PopUp from './components/preview';
import TablePreView from './components/tablePreview';
import './styles/App.css';
import './styles/responsive.css';

function App() {
  return (
<BrowserRouter>
<Switch>
<Route exact path="/" component={TablePreView} />
<Route exact path="/preview" component={PopUp} />
</Switch>
</BrowserRouter>

  );
}

export default App;

//   https://blog.ag-grid.com/conditional-formatting-for-cells-in-ag-grid/
//   https://medium.com/@storrisi/how-to-show-a-pdf-stream-on-a-react-client-without-any-library-36220fee60cb
//   https://medium.com/@alexmoran_19787/display-pdf-from-blob-file-11996146dbc0