import React, { createContext, useContext, useState }
from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({children})=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(true)


    const setMode =(e) =>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false);
    }

    // 강의하시는 행님도 여기서 버그나서 콘솔로그 찍으면서 문제파악 하심
    // ThemeSettings파일에서 setColor 호출시 넘겨주는 파라미터 타입을 착각(객체인줄 알았지만 스트링) 
    const setColor =(color) =>{
        setCurrentColor(color);
        localStorage.setItem('colorMode', color)
        setThemeSettings(false);
    }

    const handleClick =(clicked)=>{
        setIsClicked({...initialState, [clicked]:true})
    }


    return (
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,setScreenSize,
            currentColor,currentMode,
            setMode, setColor,
            themeSettings,setThemeSettings
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);