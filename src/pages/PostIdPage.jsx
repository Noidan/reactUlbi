import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from './../hooks/useFetching';
import PostService from './../API/PostService';
import Loader from './../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, CommentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)

    }, [])
    return <div>
        <h1>Post {params.id}</h1>
        {isLoading
            ? <Loader />
            : <div key={post.id}>
                <div>{post.id}. {post.title}</div>
                <div>{post.body}</div>
            </div>
        }
        <h1>Comments</h1>
        {isCommentsLoading
            ? <Loader />
            : <div>
                {comments.map(comment =>
                    <div key={comment.id} style={{marginTop: 15}}>
                        <h3>{comment.id}. {comment.name}</h3>
                        <div>E-mail: {comment.email}</div>
                        <div>Comment: {comment.body}</div>
                    </div>
                )}

            </div>
        }

    </div>
}

export default PostIdPage