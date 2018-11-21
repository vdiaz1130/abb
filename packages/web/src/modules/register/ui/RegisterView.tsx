import * as React from 'react';
import { Form as AntForm, Icon, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { validUserSchema } from '@abb/common/';
import { InputField } from '../../shared/inputField';

interface FormValues {
	email: string;
	password: string;
}

interface Props {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

const FormItem = AntForm.Item;

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
	render() {
		return (
			<Form style={{ display: 'flex' }}>
				<div style={{ width: 400, margin: 'auto' }}>
					<Field
						name='email'
						prefix={
							<Icon
								type='user'
								style={{ color: 'rgba(0,0,0,.25)' }}
							/>
						}
						component={InputField}
						placeholder='Email'
					/>

					<Field
						name='password'
						prefix={
							<Icon
								type='lock'
								style={{ color: 'rgba(0,0,0,.25)' }}
							/>
						}
						type='password'
						component={InputField}
						placeholder='Password'
					/>

					<FormItem style={{ textAlign: 'center' }}>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'>
							Register
						</Button>
					</FormItem>
					<FormItem style={{ textAlign: 'center' }}>
						<a className='login-form-forgot' href=''>
							Forgot password
						</a>{' '}
						or <a href=''>Login now!</a>
					</FormItem>
				</div>
			</Form>
		);
	}
}

export const RegisterView = withFormik<Props, FormValues>({
	validationSchema: validUserSchema,
	mapPropsToValues: () => ({ email: '', password: '' }),
	handleSubmit: async (values, { props, setErrors }) => {
		const errors = await props.submit(values);

		if (errors) {
			setErrors(errors);
		}
	}
})(C);
