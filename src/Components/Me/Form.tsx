import React from "react";
import { Form, Icon, Input, Button ,  Select,InputNumber} from 'antd';

function hasErrors(fieldsError:any ) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
const FormArea: React.FC = (props: any) => {
  let handleSumbit = (e : any) => {
    e.preventDefault();
    props.form.validateFields((err:any, values:any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  const { Option } = Select;
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const usernameError = isFieldTouched('username') && getFieldError('username');
  return (
    <Form onSubmit = {handleSumbit}>
           <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item label="Select">
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: 'Please select your gender!'},
            ],
          })(
            <Select  placeholder="Please select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="Your weigth">
          {getFieldDecorator('weigth', { initialValue: 30 })(<InputNumber min={30} max={200} />)}
          <span className="ant-form-text"> kg</span>
        </Form.Item>
        <Form.Item label="Plan">
          {getFieldDecorator('plan', {
            rules: [
              { required: true, message: 'Please select your plan!'},
            ],
          })(
            <Select  placeholder="Please select your plan">
              <Option value="loss">Wanna weigth loss</Option>
              <Option value="gain">Wanna weigth gain</Option>
              <Option value="current">Wanna stay in current weigth</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

    </Form>
  );
};
const MyForm = Form.create({ name: 'user-info' })(FormArea);
export default MyForm;
