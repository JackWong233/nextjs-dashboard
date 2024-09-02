import { FC, FunctionComponent, useState } from "react";

interface AboutProps {
  
}
 
const About: FC<AboutProps> = () => {

  const [count,setCount] = useState(0)

  return ( <div>
    <div className={count%2===0?'bg-gray-100':'bg-green-500'}>展示</div>
    <button onClick={()=>setCount(count + 1)}>点击</button>
  </div>);
}
 
export default About;