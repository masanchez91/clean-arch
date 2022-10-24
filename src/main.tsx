import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Suspense fallback={<>Cargando</>}>
		<Provider store={store}>
			<App />
		</Provider>
	</Suspense>
);