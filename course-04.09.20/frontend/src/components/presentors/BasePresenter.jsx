import React from "react"
import {Input, Form, Button, Radio} from "antd"

class BaseCreator extends React.Component {

    onFinish = values => {
        //TODO: вернуть EntityTable
        console.log('Success:', values)
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    render() {
        return <Form
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}>
                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: "Input base location" }]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[{ required: true, message: "Choose base status" }]}>
                    <Radio.Group
                        options={BasePresenter.filteredColumns.status.map(o => o.text)}
                        optionType="button"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
        </Form>
    }
}

const BasePresenter = {
    url: "http://localhost:9090/base",
    idField: "baseId",
    filteredColumns: {
        status: [
            { text: "working", value: "working" },
            { text: "closed", value: "closed" },
            { text: "destroyed", value: "destroyed" },
            { text: "abandoned", value: "abandoned" },
            { text: "captured", value: "captured" },
            { text: "for_sale", value: "for_sale" }
        ]
    },
    creator: <BaseCreator/>
}

export default BasePresenter