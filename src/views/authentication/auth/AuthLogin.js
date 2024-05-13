import { Typography, Button, Checkbox, Space, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const AuthLogin = ({ title, subtitle, subtext }) => (
    <>
        {title ? (
            <Typography.Title level={2} style={{ fontWeight: '700', marginBottom: '8px' }}>
                {title}
            </Typography.Title>
        ) : null}

        {subtext}

        <Form
            name="loginForm"
            onFinish={(values) => {
            }}
            layout='vertical'
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item
                label="Username"
                name="username"
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

export default AuthLogin;
