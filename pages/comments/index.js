import {useState} from 'react';

export default function Comments(){

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async () =>{
        const response = await fetch('api/comments');
        const data = await response.json();
        setComments(data);
    }

    const postComent = async () =>{
        //to do a post request you must pass a second argument to the 
        //fetch function, there you describe the method the body of the
        //request
        
        const response = await fetch('api/comments',{method:"POST",
                                                    body:JSON.stringify({comment:comment}),
                                                    headers:{'Content-Type':'application/json'}
                                                });
        const data = await response.json();
        console.log(data);
        
    }

    const deleteComment = async (commentId)=>{
      
        const response = await fetch(`/api/comments/${commentId}`,{
            method:"DELETE"});
        const data = await response.json();
        console.log(data);
        fetchComments();
            
    }

    return(
        <>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
            <button onClick={postComent}>Submit </button>
            <h1>Comments</h1>
            <button onClick={fetchComments}>Load Comments</button>
            <hr/>
            {
                comments.map(comment =>{

                    return(
                        <div key={comment.id}>
                            <p>{comment.text}</p>
                            <button onClick={()=>deleteComment(comment.id)}>Delete comment</button>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}