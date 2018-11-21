import { getConnectionOptions, createConnection } from 'typeorm';
import { User } from '../entity/User';

export const createTypeormConn = async () => {
	const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
	return process.env.NODE_ENV === 'production'
		? createConnection({
				...connectionOptions,
				entities: [ User ],
				url: process.env.DATABASE_URL,
				name: 'default'
			} as any)
		: createConnection({ ...connectionOptions, name: 'default' });
};
