import React, {useState, useEffect} from 'react'
import { Button } from 'antd'

const useCountDown = (num) => {
    const [seconds, setSecond] = useState(num)
    
    useEffect(() => {
        setTimeout(() => {
            if (seconds > 0) {
                setSecond(c => c - 1);
            }
        }, 1000);
    }, [seconds]);

    return [seconds, setSecond]
}

const Part = (props) => {
    let [on,setOn] = useState(false)
    let [seconds, setSecond] = useCountDown(0)

    const lightSwitch = () => setOn(on => !on);

    return (
        <div>
            <div>好久好久：{props.store.main}</div>
            { on ? 'hahah' : 'hehehe' }
            <div>
                <Button type="primary" onClick={lightSwitch}> click me </Button>
            </div> 
            {seconds > 0 ? `${seconds}s后可点击` : '点击开始倒计时'}
            <Button onClick={() => setSecond(59)}>倒计时开始</Button>
            <Button onClick={() => props.actions()}>操作</Button>
            <Button onClick={() => props.store.haha()}>操作store</Button>
        </div>
    )
}

export default Part