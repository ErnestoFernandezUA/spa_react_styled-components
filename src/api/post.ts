import { client } from '../utils/axiosClient';
import { Post } from '../type/Post';

export const getAllPosts = () => client.get<Post[]>(`posts`);
export const getPostById = (id: number) => client.get<Post>(`/${id}`);

