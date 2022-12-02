import { useState } from 'react'
import styled from 'styled-components';
import trash from '../assets/images/trash.svg'
import { CgRadioCheck } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void
    onIsComplited: () => void
    onIsNotComplited: () => void
}

export default function Task({ content, onDeleteTask, onIsComplited, onIsNotComplited }: TaskProps) {

    const [checked, setChecked] = useState(true)


    function handleDeleteTask() {
        onDeleteTask(content)
        
    }
    function handleChangeImg() {
        setChecked(!checked)
    }

    return (
        <Container>
            <i onClick={handleChangeImg}>
                {checked ? (<CgRadioCheck onClick={onIsComplited} style={{ color: color.blue, width: '1.5rem', height: '1.5rem' }} />)
                    : (<FaCheckCircle onClick={onIsNotComplited} style={{ color: color.purple, width: '1.5rem', height: '1.5rem' }} />)}
            </i>
            <p>{content}</p>
            <img src={trash} onClick={handleDeleteTask} />
        </Container>
    )
}

const color = {
    purple: '#5E60CE',
    blue: '#4EA8DE',
    darkGray: '#222222',
}

const Container = styled.div`
margin-top: 1rem;
width: 100%;
background-color: ${color.darkGray};
border-radius: 8px;

display: flex;
justify-content: space-between;
padding: 0.7rem;
p{  
    flex: 1;
    margin:  2px 0.4rem;
    text-align: start;
    color: #d2d2d2;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    word-break: break-all;
}
img{
    height: 1.5rem;
    cursor: pointer;    
}
`
