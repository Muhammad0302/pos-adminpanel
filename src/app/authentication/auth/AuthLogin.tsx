import React, { useState } from 'react';
import {
	Box,
	Typography,
	FormGroup,
	FormControlLabel,
	Button,
	Stack,
	Checkbox,
} from '@mui/material';
import Link from 'next/link';

import CustomTextField from '../../components/forms/theme-elements/CustomTextField';

interface loginType {
	title?: string;
	subtitle?: JSX.Element | JSX.Element[];
	subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const handleLogin = () => {
		// Store email and password in local storage
		localStorage.setItem('credentials', JSON.stringify(credentials));
		window.location.href = '/';
		console.log('The credentail have been seted');
	};

	return (
		<>
			{title ? (
				<Typography fontWeight="700" variant="h2" mb={1}>
					{title}
				</Typography>
			) : null}

			{subtext}

			<Stack>
				<Box>
					<Typography
						variant="subtitle1"
						fontWeight={600}
						component="label"
						htmlFor="email"
						mb="5px"
					>
						Email
					</Typography>
					<CustomTextField
						variant="outlined"
						fullWidth
						value={credentials.email}
						onChange={(e: any) =>
							setCredentials((prevCredentials) => ({
								...prevCredentials,
								email: e.target.value,
							}))
						}
					/>
				</Box>
				<Box mt="25px">
					<Typography
						variant="subtitle1"
						fontWeight={600}
						component="label"
						htmlFor="password"
						mb="5px"
					>
						Password
					</Typography>
					<CustomTextField
						type="password"
						variant="outlined"
						fullWidth
						value={credentials.password}
						onChange={(e: any) =>
							setCredentials((prevCredentials) => ({
								...prevCredentials,
								password: e.target.value,
							}))
						}
					/>
				</Box>
				<Stack
					justifyContent="space-between"
					direction="row"
					alignItems="center"
					my={2}
				>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Remember this Device"
						/>
					</FormGroup>
				</Stack>
			</Stack>
			<Box>
				<Button
					color="primary"
					variant="contained"
					size="large"
					fullWidth
					component={Link}
					href="/"
					onClick={handleLogin}
					type="button"
				>
					Sign In
				</Button>
			</Box>
			{subtitle}
		</>
	);
};

export default AuthLogin;
