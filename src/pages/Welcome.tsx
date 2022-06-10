import {useState} from "react";
import {useMount} from 'ahooks'
import './index.less'

const Welcome = ()=>{

    const [row,setRows] = useState<any>([])



    useMount(()=>{
        const arr = []
        for (let i = 0; i < 20; i++) {
            arr.push({
                height:Math.random()*50 + 100 + 'px',
                bgc:`rgb(${Math.random()*250},${Math.random()*250},${Math.random()*250})`
            })
        }
        setRows(arr)
    })
    return <div>

        {/*{JSON.stringify(row)}*/}


        <div className={'waike'}>
            {
                row.map((i:any,index:any)=>{


                    return <div style={{backgroundColor:i.bgc}} key={index}>
                        <img className={'tupian'} src="http://public-api.rico.org.cn/a8acdb1d-7317-4d0b-80b2-5ce722e76d2c.jpeg" alt=""/>
                        <div>
                            <p>asfasfas</p>
                            <p>asfasfassafsaf</p>
                        </div>
                    </div>
                })
            }
        </div>


    </div>
}

export default Welcome
