import { Typography, Button, Form, Input } from 'antd';
const AuthRegister = ({ title, subtitle, subtext }) => (
  <>
    {title ? (
      <Typography.Title level={2} style={{ fontWeight: '700', marginBottom: '8px' }}>
        {title}
      </Typography.Title>
    ) : null}
    {subtext}
    <Form
      name="registerForm"
      onFinish={(values) => {
      }}
      layout='vertical'
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input a valid email address!',
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
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    {subtitle}
  </>
);
export default AuthRegister;
