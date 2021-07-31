
// tslint:disable-next-line: no-submodule-imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '@recogito/annotorious/dist/annotorious.min.css';


import ReactDOM from 'react-dom';
import App from './components/App';
import { Helmet } from 'react-helmet';


ReactDOM.render(
    <>
        <Helmet>
            <meta charSet="utf-8" />
        </Helmet>
        <App />
    </>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
