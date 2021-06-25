import React,{ useState } from 'react'

export const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Your Title or Description are missed');
        }else{
           addTodo(title,desc);
           setTitle("");
           setDesc("");
        }
    }

    return (
        <div className='container my-3'>
            <h3>Add To Do List</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Email address</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Password</label>
                    <input type="desc" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)}id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
