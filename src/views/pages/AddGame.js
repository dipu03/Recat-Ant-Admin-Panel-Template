import React, { useEffect } from 'react';
import {
	Button,
	Form,
	Input,
} from 'antd';
import { decode } from 'base-64';
import { useParams } from 'react-router';
const AddGame = () => {
	const { id } = useParams();
	const [form] = Form.useForm();
	useEffect(() => {
		if (id) {
			// console.log(id, "id")
			const decodedId = decode(id);
			// console.log(decodedId, "decodedId")
			form.setFieldsValue({ username: decodedId });
		}
	}, [id, form]);
	const handleSubmit = (values) => {
		if (id) {
			console.log("edit-user")
		}
		else {
			console.log("add-user")
		}
	};
	return (
		<Form
			layout='vertical'
			onFinish={handleSubmit}
		>
			<Form.Item
				label="Game Name"
				name="gamename"
				rules={[
					{
						required: true,
						message: 'Please input Game Name!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default AddGame;
