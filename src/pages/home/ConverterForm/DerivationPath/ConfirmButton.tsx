import { Form, Button } from 'antd';
import React from 'react';

const ConfirmButton: React.FC = () => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit">
        生成地址
      </Button>
    </Form.Item>
  );
};

export default ConfirmButton;
