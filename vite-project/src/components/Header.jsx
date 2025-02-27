export function Header(props) {
    const { todos } = props
    const todosLength = todos.length

    const isTodosPlural = todosLength != 1

    const taskOrTasks = isTodosPlural ? 'tasks' : 'task'

    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}