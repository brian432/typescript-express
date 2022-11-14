interface Todo {
    "name": string;
    "tel": number;
    "completed": boolean;
}

const arrayTodo: Array<Todo> = [
    {
        "name": "Brian",
        "tel": 123456,
        "completed": true
    },
]

type PreviewArray = Pick<Todo, "name" | "tel">

const returnAllArray = (): Array<Todo> => {
    return arrayTodo
}

const returnPreviewArray = (): PreviewArray[] => {
    return arrayTodo.map(({ name, tel }) => {
        return { name, tel }
    })
}

const returnPreviewArray2 = (): Pick<Todo, "name" | "tel">[] => {
    return arrayTodo
}
console.log(returnPreviewArray())