import React from "react";
import classes from "./form.module.css";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button, message } from "antd";
import { useState } from "react";
// import { STATES } from "mongoose";
const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not validate email!",
        number: "${label} is not a validate number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};
const key = "updatable";
const NFTForm = () => {

    const [NFTValue, setNFTValue] = useState({
        name: "",
        description: "",
    });
    const [id, setid] = useState(null);
    const [imgUrl, setimgUrl] = useState('');

    const [cardImage, setcardImage] = useState();
    const handleValueChange = (e) => {
        setNFTValue({ ...NFTValue, [e.target.name]: e.target.value });
    };
    const dispatchData = (data) => {
        console.log(data, 'data')
        fetch("/postData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: formDAta,
            body: JSON.stringify(data),
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res);
            });
    }
    const handleValueChange1 = (e) => {
        setid(e);
    };
    const handleSubmit = (e) => {
        console.log(id,'dd')
        console.log(imgUrl,'imgUrl')
        e.preventDefault();
        message.loading({ content: "creating...", key });
        let name = NFTValue.name;
        let description = NFTValue.description;
        setTimeout(() => {
            return NFTValue.name === "" ||
                NFTValue.description === "" ||
                id === null || imgUrl === ''
                ? message.error({  content: imgUrl.length !== 0 ? "fill required field" : 'uploading img save again...' , key, duration: 2 })
                : message.success({ content: "saved", key, duration: 2 })
                &&
                // };
                dispatchData({
                    name,
                    description,
                    imgUrl,
                    id
                });
        }, 1000);
    };
    const NAME_OF_UPLOAD_PRESET = "dya03eiu";
    const handleImageChange = async (e) => {
        console.log(e.target.files[0]);
        setcardImage(e.target.files[0]);

        const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("upload_preset", NAME_OF_UPLOAD_PRESET);
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/ecomerenceapp/image/upload`,
            {
                method: "POST",
                body: data
            }
        );
        const img = await res.json();
        console.log(img);
        let ImageLink = img.url
        setimgUrl(ImageLink);
    };


    console.log(NFTValue);
    return (
        <div>
            {/* {RedirectCom()}{" "} */}
            <div className={classes.formNavDiv}>
                <h1 className={classes.heading}>NFT Form</h1>
                <div> <i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: '20px', color: '#fff' }}></i></div>
            </div>
            <div className={classes.formWholeDiv}>
                <Form
                    {...layout}
                    name="nest-messages"
                    // onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={["user", "name"]}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            name="name"
                            value={NFTValue.name}
                            onChange={handleValueChange}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        name={["id", "id"]}
                        label="id"
                        rules={[
                            {
                                type: "number",
                                min: 0,
                                required: true,
                                // max: 99,
                            },
                        ]}
                    >
                        <InputNumber value={id} required onChange={handleValueChange1} />
                    </Form.Item>
                    <Form.Item name={["user", "description"]} label="Description">
                        <Input.TextArea
                            value={NFTValue.description}
                            name="description"
                            onChange={handleValueChange}
                            required
                            rows="10" cols="10"
                        />
                    </Form.Item>
                    <Form.Item label="Upload Picture">
                        <input type="file" onChange={handleImageChange} required />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                        <Button type="primary" htmlType="save" onClick={handleSubmit}>
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default NFTForm;
