import React from 'react';
import { Typography, Button, Checkbox, Space, Form, Input, message } from 'antd'; // Import message for displaying error messages
import { Link, useNavigate } from 'react-router-dom';
import { LoginApi } from '../../../helpers/loginApi';
const AuthLogin = ({ title, subtitle, subtext }) => {
    const navigate=useNavigate()
    const onFinish = async (values) => {
        try {
            const response = await LoginApi(values);
            if (response.code===200) {
                const token = response.data?.user?.tokens?.access?.token
                localStorage.removeItem("Acces_Token")
                localStorage.setItem("Acces_Token", token)
                message.success('Login successful');
                navigate("/")
            } else {
                message.error(response.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login failed:', error);
            message.error('An error occurred. Please try again later.');
        }
    };
    return (
        <>
            {title && (
                <Typography.Title level={2} style={{ fontWeight: '700', marginBottom: '8px' }}>
                    {title}
                </Typography.Title>
            )}
            {subtext}
            <Form
                name="loginForm"
                onFinish={onFinish} 
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    label="Username"
                    name="email_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                        <Checkbox defaultChecked>Remember this Device</Checkbox>
                        <Typography.Text>
                            <Link to="/" style={{ color: '#1890ff' }}>Forgot Password?</Link>
                        </Typography.Text>
                    </Space>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
            {subtitle}
        </>
    );
};
export default AuthLogin;
