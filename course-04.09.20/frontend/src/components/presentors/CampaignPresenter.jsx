import React from "react"
import {Button, Form, Input, InputNumber, Radio} from "antd"

class CampaignCreator extends React.Component {

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
                label="Customer"
                name="customer"
                rules={[{ required: true, message: "Input customer name" }]}>
                <Input/>
            </Form.Item>
            <Form.Item
                label="Earning"
                name="earning"
                rules={[{ required: true, message: "Input earning for campaign" }]}>
                <InputNumber
                    formatter={ v => `$ ${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                    parser={ v => v.replace(/\$\s?|(,*)/g, '') }/>
            </Form.Item>
            <Form.Item
                label="Execution status"
                name="execution_status"
                rules={[{ required: true, message: "Execution status of campaign" }]}>
                <Radio.Group
                    options={CampaignPresenter.filteredColumns.executionStatus.map(o => o.text)}
                    optionType="button"
                />
            </Form.Item>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Input of campaign" }]}>
                <Input/>
            </Form.Item>
            <Form.Item
                label="Spending"
                name="spending"
                rules={[{ required: true, message: "Spending for campaign" }]}>
                <InputNumber
                    formatter={ v => `$ ${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                    parser={ v => v.replace(/\$\s?|(,*)/g, '') }/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    }
}

const CampaignPresenter = {
    url: "http://localhost:9090/campaign",
    idField: "campId",
    filteredColumns: {
        executionStatus: [
            { text: "completed", value: "completed" },
            { text: "in the progress", value: "in the progress" },
            { text: "failed", value: "failed" },
            { text: "canceled", value: "canceled" }
        ]
    },
    creator: <CampaignCreator/>
}

export default CampaignPresenter