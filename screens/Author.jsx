import Page from '../components/Page'
import Link from '../components/Link';

import { openLink } from '../actions/data';

const links = [
	{
		id: 0,
		label: 'Developed by',
		value: 'Oscar Alderete',
		type: 'text',
		style: 'bold',
	},
	{
		id: 1,
		label: 'Website',
		value: 'https://oscaralderete.com',
		type: 'link',
		style: 'link',
	},
	{
		id: 2,
		label: 'GitHub',
		value: 'https://github.com/oscaralderete',
		type: 'link',
		style: 'link',
	},
	{
		id: 3,
		label: 'Email',
		value: 'react-native@oscaralderete.com',
		type: 'email',
		style: 'link',
	}
];

export default function Author() {

	const Content = links.map(i => <Link key={i.id} i={i} openLink={openLink} />)

	return (
		<Page>
			{Content}
		</Page>
	);
}
