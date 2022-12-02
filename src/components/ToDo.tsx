import { useState, FormEvent, ChangeEvent } from 'react'
import styled from 'styled-components'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import clipBoard from '../assets/images/ClipBoard.svg'
import Task from './Task';

export default function ToDo() {
	const [createdTasks, setCreatedTasks] = useState(0);
	const [complitedTasks, setComplitedTasks] = useState(0);

	const [task, setTask] = useState<string[]>([]);
	const [newTaskText, setNewTaskText] = useState('')

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault()

		setTask([...task, newTaskText])
		setNewTaskText('');

		setCreatedTasks(createdTasks + 1)
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault()

		setNewTaskText(event.target.value)
	}

	function deleteTask(taskToDelete: string) {
		const tasksWithoutDeletedOne = task.filter(task => {

			return task != taskToDelete
		})

		setTask(tasksWithoutDeletedOne)
		setCreatedTasks(createdTasks - 1)
		setComplitedTasks(complitedTasks - 1)
	}

	function isComplited() {
		setComplitedTasks(complitedTasks + 1)
	}
	function isNotComplited() {
		setComplitedTasks(complitedTasks - 1)
	}
	return (
		<Container>
			<CreateList onSubmit={handleCreateNewTask}>
				<Input
					required
					placeholder='Add a new task here'
					name='taskValue'
					onChange={handleNewTaskChange}
					value={newTaskText}
				/>
				<footer>
					<Button type='submit'>
						<span>Enter</span>
						<AiOutlinePlusCircle />
					</Button>
				</footer>
			</CreateList>
			<WrapperFlex>
				<CratedTasks>
					Created Tasks
					<span>{createdTasks}</span>
				</CratedTasks>
				<ComplitedTasks>
					Complited Tasks
					<span>{complitedTasks} de {createdTasks}</span>
				</ComplitedTasks>
			</WrapperFlex>
			{!createdTasks ?
				(<BGMensage>
					<img src={clipBoard} />
					<strong>Você ainda não criou nenhuma tarefa</strong>
					<p>Crie tarefas e organize seus itens a fazer</p>
				</BGMensage>)
				: (<BGMensage style={{display:'none'}}/>)
			}
			{task.map(task => {
				return (
					<Task
						key={task}
						content={task}
						onDeleteTask={deleteTask}
						onIsComplited={isComplited}
						onIsNotComplited={isNotComplited}
					/>
				)
			})}
		</Container>
	)
}

const color = {
	purple: '#5E60CE',
	blue: '#4EA8DE',
	darkGray: '#222222',
}
const Container = styled.div`
position: absolute;
left: 50%;
transform: translate(-50%);
width: 36rem;
margin-top: -1.3rem;
`
const CreateList = styled.form`
background-color: transparent;
display: flex;
margin-bottom: 1.5rem ;
transition: esae 1s;

&:focus-within footer{
  flex: 1;
  visibility: visible;
  max-width: none;
  min-width: 0rem;
  transition: 0.5s
}
footer{
  display: flex;
  visibility: hidden;
  max-width: 0;
}
`
const Input = styled.input`

flex: 4;
padding: 0.5rem;
border-radius: 8px;
background-color: #222222;
border: none;
box-shadow: #4ea7de74 0px 2px 10px;

cursor: text;
color: white;

&:hover{
    background-color: #2a2a2a;
    transition: all 0.1s;
}
&:focus{
    outline: none;
    border: 1px solid #074378;
    
}
`
const Button = styled.button`
flex: 1;
margin-left: 0.35rem;

display: flex;
justify-content: center;
align-items: center;
padding: 0.7rem;
box-shadow: rgba(68, 140, 235, 0.35) 0px 5px 15px;

cursor: pointer;
border: 1px solid black;
font-size: 0.9rem;
border-radius: 8px;
background-color: ${color.blue};
color: #ffffff;
font-weight: 900;
font-family: 'Courier New', Courier, monospace;

&:hover{
    background-color: ${color.purple};
    border: 1px solid #074378;
    transition: all 0.2s;
}

&:focus{
    border: 1px solid #0660ae;
}

span{
    font-weight: 700;
    margin-right: 5px;
}
`
const WrapperFlex = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid ${color.darkGray};
padding: 1rem;
span{
    margin: 0 5px;
    background-color: ${color.darkGray};
    border-radius: 8px;
    padding: 0px 5
    px;
}
`
const CratedTasks = styled.div`
color: ${color.blue};
`
const ComplitedTasks = styled.div`
color: ${color.purple};
`
const BGMensage = styled.div`
margin: 2rem;
display: flex;
color: gray;
align-items: center;
flex-direction: column;

img{
	margin-bottom: 1rem;
}
`