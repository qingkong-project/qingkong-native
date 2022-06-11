import React, { FC, RefObject, useState } from "react";
import {
  Form,
  Input,
  Button,
  Dialog,
  TextArea,
  Toast,
  ImageUploader,
  Space,
} from "antd-mobile";
import { ImageUploadItem } from "antd-mobile/es/components/image-uploader";
import axios from "../../utils/request";
import util from "../../utils/util";


const Publish = () => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    },);
  };

  // 定义图片的列表
  const [fileList, setFileList] = useState<ImageUploadItem[]>([]);
  const [realFileList, setRealFileList] = useState<any[]>([]);

  async function mockUpload(file: File) {
    setRealFileList([(await util.yasuo(file))]);
    return {
      url: URL.createObjectURL(file),
    };
  }

  return (
    <>
            <Form
                onFinish={(val) => {
                    axios.post('/api/createANote', val).then((res:any) => {

                        const label = res.generatedMaps[0].id

                        const fd = new FormData()
                        // @ts-ignore
                        fd.append('file', realFileList[0], realFileList[0].name)
                        fd.append('label', String(label))
                        fd.append('bucket', 'aaa')
                        axios.post('http://public-api.rico.org.cn/file/upload', fd).then(r => {
                            console.log(r)
                        })
                    })
                }}
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        提交
                    </Button>
                }
            >
                <Form.Header>水平布局表单</Form.Header>
                <Form.Item
                    name='title'
                    label='主题'
                    rules={[{required: true, message: '姓名不能为空'}]}
                >
                    <Input onChange={console.log} placeholder='请输入姓名'/>
                </Form.Item>

                <Form.Item
                    name='reference'
                    label='出自'
                    rules={[{required: true, message: '姓名不能为空'}]}
                >
                    <Input onChange={console.log} placeholder='请输入姓名'/>
                </Form.Item>

                <Form.Item
                    name='author'
                    label='作者'
                    rules={[{required: true, message: '姓名不能为空'}]}
                >
                    <Input onChange={console.log} placeholder='请输入姓名'/>
                </Form.Item>

                <Form.Item
                    name='occupation'
                    label='职业'
                    rules={[{required: true, message: '姓名不能为空'}]}
                >
                    <Input onChange={console.log} placeholder='请输入姓名'/>
                </Form.Item>


                <Form.Item name='content' label='内容' help='内容'>
                    <TextArea
                        placeholder='请输入地址'
                        maxLength={100}
                        rows={2}
                        showCount
                    />
                </Form.Item>

                <Space direction='vertical'>
                    <ImageUploader
                        value={fileList}
                        onChange={setFileList}
                        upload={mockUpload}
                        multiple
                        maxCount={1}
                        showUpload={fileList.length < 1}
                        onCountExceed={exceed => {
                            Toast.show(`最多选择 ${1} 张图片，你多选了 ${exceed} 张`)
                        }}
                    />
                </Space>
            </Form>
        </>
  );
};

export default Publish;
