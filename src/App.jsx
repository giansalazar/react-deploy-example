import TaskLists from './components/TaskLists'
import TaskForm from './components/TaskForm'

function App() {


  return (
    <div className='bg-zinc-900 h-screen' p-10>
      <div className='container mx-auto'>
        <TaskForm />
        <TaskLists />
        <h1>Hola a todos</h1>
      </div>
    </div>
  )
}

export default App
