import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser, resetUser, UserKey } from '@/redux/slices/user.slice';
import { fetchMorty, rickAndMortyUrl } from "./services";
import { PrivateRoutes, PublicRoutes, Roles } from '@/models';
import { clearLocalStorage } from '@/utilities';

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
        dispatch(resetUser());
        clearLocalStorage(UserKey);
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true});
	}, []);

	const login = async () => {
		try {
			const result = await fetchMorty(rickAndMortyUrl);
			dispatch(createUser({ ...result, rol: Roles.USER }));
			navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
		} catch (error) {
			
		}
	};

	return (
		<div>
			<h2>ESTE ES EL LOGIN</h2>
			<button onClick={login}>LOGIN</button>
		</div>
	);
}

export default Login;