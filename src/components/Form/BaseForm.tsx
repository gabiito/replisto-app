import { Button, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import Title from "antd/es/typography/Title";
import { FormItemProps } from "antd/lib/form";
import React from "react";

interface BaseFormProps {
  name: string;
  title?: string;
  className: string;
  actionLabel: string;
  loading?: boolean;
  items: FormItemProps[];
  onFinish: <T>(values: T) => void;
}

const BaseForm: React.FC<BaseFormProps> = ({
  name,
  title,
  className,
  actionLabel,
  loading,
  items,
  onFinish,
}: BaseFormProps) => {
  return (
    <div className="w-full">
      {title && (
        <Title level={2} className="text-center">
          {title}
        </Title>
      )}
      <Form name={name} className={className} onFinish={onFinish}>
        {items.map((item, index) => (
          <FormItem key={index} {...item} />
        ))}

        <Form.Item>
          <Button 
            htmlType="submit" 
            className="login-form-button w-full"
            size="large"
            type="primary"
            loading={loading}
          >
            {actionLabel}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BaseForm;
