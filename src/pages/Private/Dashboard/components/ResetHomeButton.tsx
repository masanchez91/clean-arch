import { resetUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

export default function ResetHomeButton() {
	const dispatch  = useDispatch();

	const dispatchAction = () => {
		setTimeout(() => {
			dispatch(resetUser());
		}, 2000);
	};

	return <button onClick={dispatchAction}>Dispatched reset action</button>
};