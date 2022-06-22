import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// omit other imports
import { Link } from 'react-router-dom'
import { getGenres, selectAllGenres } from './genreSlice'

const PostExcerpt = ({ post }) => {
    return (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.name}</h3>
            
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    )
}

export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllGenres)

    const postStatus = useSelector((state) => state.genres.status)
    const error = useSelector((state) => state.genres.error)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(getGenres())
        }
    }, [postStatus, dispatch])

    let content

    if (postStatus === 'loading') {
        content = "Loading..." 
    } else if (postStatus === 'succeeded') {
        
        content = posts.map((post) => (
            <PostExcerpt key={post.id} post={post} />
        ))
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    )
}