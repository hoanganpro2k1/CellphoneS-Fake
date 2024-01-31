export const fetchUsers = async () => {
	const res = await fetch('http://localhost:3001/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImVtYWlsIjoiaG9hbmdhbjFAZ21haWwuY29tIiwiaWF0IjoxNzA1OTkyODMwLCJleHAiOjE3MDU5OTY0MzB9.txbIwu6KkbNvAl0-nu4FRJqJAGRZb03c7aIK2AqFl5U`,
		},
		next: { tags: ['show-users'] },
	});
	return await res.json();
};
