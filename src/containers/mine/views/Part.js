import React, {useState, useEffect} from 'react'
import { Button } from 'antd'

// const useCountDown = (num) => {
//     let [seconds, setSecond] = useState(num)

//     // 类似于父组件的componentDidMount
//     useEffect(() => {
//         setTimeout(() => {
//             if (seconds > 0) {
//                 setSecond(c => c - 1);
//             }
//         }, 1000);
//     })

//     return [seconds, setSecond]
// }

const Part = (props) => {
    let [on, setOn] = useState(false)
    let [seconds, setSecond] = useState(0)
    // let [seconds, setSecond] = useCountDown(0)

    /**
     * useEffect的第二个参数可用于定义其依赖的所有变量。 
     * 如果其中一个变量发生变化， 则useEffect会再次运行。 
     * 如果包含变量的数组为空， 则在更新组件时useEffect不会再执行， 因为它不会监听任何变量的变更。
     */
    useEffect(() => {
        setTimeout(() => {
            if (seconds > 0) {
                setSecond(se => se - 1)
            }
        }, 1000)
    }, [])

    const lightSwitch = () => setOn(on => !on)

    return (
        <>
            <div>好久好久：{props.store.main}</div>
            { on ? 'hahah' : 'hehehe' }
            <div>
                <Button type="primary" onClick={lightSwitch}> click me </Button>
            </div> 
            {seconds > 0 ? `${seconds}s后可点击` : '点击开始倒计时'}
            <Button onClick={() => setSecond(59)}>倒计时开始</Button>
            <Button onClick={() => props.store.haha()}>操作store</Button>
        </>
    )
}

export default Part