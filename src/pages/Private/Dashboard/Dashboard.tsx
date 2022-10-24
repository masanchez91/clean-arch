import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Layout } from '@/styled-components';
import { CreateHomeButton, ModifyHomeButton, ResetHomeButton } from './components';
import { HomeTitle } from './styled-components';

export default function Dashboard() {
	const user = useSelector((state: AppStore) => state.user);
	return (
		<Layout>
			{JSON.stringify(user)}
			<HomeTitle>DASHBOARD</HomeTitle>
			<CreateHomeButton />
			<ResetHomeButton />
			<ModifyHomeButton />
		</Layout>
	);
}