import { readable } from 'svelte/store';
import { io } from 'socket.io-client';
import { isEmpty } from '../utils';

const API_KEY = import.meta.env.VITE_PUBLIC_APIKEY;
const API_URL = 'https://linode.shieldprotocol.io:3000';

function parse_data(remote_data) {
	if (remote_data.error) return;

	if (isEmpty(local_data)) {
		local_data = remote_data;
	} else {
		for (const supabase_id of Object.keys(local_data)) {
			local_data[supabase_id] = { ...local_data[supabase_id], ...remote_data[supabase_id] };
		}
	}
}

let local_data = {};
export const tokens = readable(local_data, (set) => {
	const socket = io(API_URL, {
		auth: {
			token: API_KEY
		}
	});

	socket.on('cmcdata', (remote_data) => {
		parse_data(remote_data);
		set(local_data);
	});

	socket.on('coingeckodata', (remote_data) => {
		parse_data(remote_data);
		set(local_data);
	});

	socket.on('connect_error', (err) => {
		console.error('TOKENS_STORE_ERROR: ', err.message); // not authorized
	});

	return () => {
		socket.disconnect();
	};
});
