import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PublicRoutes } from '@/models';
import { resetUser, UserKey } from '@/redux/slices/user.slice';
import { clearLocalStorage } from '@/utilities';
 
function Logout() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
     
	const logOut = () => {
		dispatch(resetUser());
		clearLocalStorage(UserKey);
		navigate(PublicRoutes.LOGIN, {replace: true});
	};
    
	return <button onClick={logOut}>Log Out</button>;
}

export default Logout;