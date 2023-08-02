import React from "react";
import cl from './MyModal.module.css'
import MyButton from "../button/MyButton";

const MyModal = ({ children, visible, setVisible, myModalName}) => {

    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active)
    }

    return <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()} >
        {myModalName}
            <div className={cl.myModalClose}>
                
                <MyButton onClick={() => setVisible(false)}>
                    X
                </MyButton>
            </div>
            {children}
        </div>
    </div>
}

export default MyModal