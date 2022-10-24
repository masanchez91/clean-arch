import { lazy } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import './App.css'
import { Logout } from './components/Logout';
import { AuthGuard, RolGuard } from './guards';
import { PrivateRoutes, PublicRoutes, Roles } from './models';
import { Dashboard } from './pages/Private';
import { RoutesWithNotFound } from './utilities';

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  	return (
		<>
			<BrowserRouter>
				<Logout />
				<RoutesWithNotFound>
					<Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
					<Route path={PublicRoutes.LOGIN} element={<Login />} />
					<Route element={<AuthGuard privateValidation={true} />}>
						<Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
					</Route>
					<Route element={<RolGuard rol={Roles.ADMIN} />}>
						<Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
					</Route>
				</RoutesWithNotFound>
			</BrowserRouter>
		</>
	);
}

export default App;