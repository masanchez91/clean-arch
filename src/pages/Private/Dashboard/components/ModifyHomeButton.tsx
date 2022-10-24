import { modifyUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

export default function ModifyHomeButton() {
	const dispatch  = useDispatch();

	const dispatchAction = () => {
		setTimeout(() => {
			dispatch(modifyUser({ name: 'The Holy Code' }));
		}, 2000);
	};

	return <button onClick={dispatchAction}>Dispatched modify action</button>
};