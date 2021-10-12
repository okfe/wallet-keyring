import { Form, Input } from 'antd';

const { TextArea } = Input;

const MnemonicTextarea: React.FC = () => {
  return (
    <Form.Item
      label="助记词"
      name="mnemonic"
      rules={[{ required: true, message: '请输入助记词' }]}
    >
      <TextArea autoSize />
    </Form.Item>
  );
};

export default MnemonicTextarea;
