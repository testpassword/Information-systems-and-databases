import React from "react"
import {Button, Form, Input, message} from "antd"
import AbstractCreator from "./AbstractCreator.jsx"
import EntitySimpleTable from "../EntitySimpleTable"
import MrePresenter from "./MrePresenter"
import EntitiesApi from "../../EntitiesApi";

class EquipmentCreator extends AbstractCreator {

    state = {
        mreBtn: "select mre",
        mreId: null
    }

    mreOk = () => {
        if (EntitiesApi.idBuffer !== null) {
            this.setState({ mreBtn: EntitiesApi.idBuffer })
            EntitiesApi.idBuffer = null
        } else message.error({ content: "You should choose mre from table" })
    }

    render() {
        return <Form onFinish={this.onTrigger}>
            <Form.Item
                label="Camouflage"
                name="camouflage">
                <Input/>
            </Form.Item>
            <Form.Item
                label="Communication"
                name="communication">
                <Input/>
            </Form.Item>
            <Form.Item
                label="Intelligence"
                name="intelligence">
                <Input/>
            </Form.Item>
            <Form.Item
                label="Medical"
                name="medical">
                <Input/>
            </Form.Item>
            <Form.Item
                label="Extras"
                name="extra">
                <Input placeholder="Use space as separator"/>
            </Form.Item>
            <Form.Item
                label="Mre ID"
                name="mreId">
                <Button
                    type="link"
                    onClick={ () => this.showConfirm(<EntitySimpleTable presenter={MrePresenter}/>, this.mreOk) }>
                    {this.state.mreBtn}
                </Button>
                <Input value={this.state.mreId} style={{display: "none"}}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    }
}

const EquipmentPresenter = {
    url: "equipment",
    idField: "equipId",
    creator: <EquipmentCreator/>
}

export default EquipmentPresenter