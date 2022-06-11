import { useState } from "react";
import { useMount } from "ahooks";
import "./index.less";
// import axios from "axios";
import axios from "../utils/request";
const Welcome = () => {
  const [row, setRows] = useState<any>([]);

  useMount(() => {

    axios.post('/api/listNote').then(res=>{
      console.log(res)

      setRows(res)
    })

  },);
  return <div>

        {/*{JSON.stringify(row)}*/}


        <div className={'waike'}>
            {
                row.map((i:any,index:any)=>{


                    return <div key={index}>
                        <img className={'tupian'} src={i.url} alt=""/>
                        <div>
                          <img style={{borderRadius:'50%',width:'20px'}} src="https://sns-avatar-qc.xhscdn.com/avatar/5f6045dfdb055200011e7ed4.jpg?imageView2/2/w/80/format/jpg" alt=""/>
                            <p>{i.title}</p>
                          <p>{i.reference}</p>
                        </div>
                    </div>
                })
            }
        </div>


    </div>;
};

export default Welcome;
