export interface IUser {
  id: string;
  googleId?: string;
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  role?: any;
  writtenPosts?: any;
  favoritePosts?: any;
}

export interface IAuthStore {
  user: IUser | null;
  authLoading: boolean;
  tokenLoading: boolean;
  setUser: (user: IUser | null) => void;
  logoutService: () => void;
  loginService: (email: string, password: string) => void;
  signUpService: (name: string, email: string, password: string) => void;
  loginWithToken: () => void;
  googleLogin: () => void;
}
export interface IPostStore {
  postsLoading: boolean;
  setPostLoading: (value: boolean) => void;
  addPost: (value: any, id: string) => void;
  updatePost: (value: any, id: string) => void;
  deletePost: (id: string) => void;
  userFavorate: (postId: string, userId: string) => void;
}
export interface IToken {
  name: string;
  exp: number;
  // whatever else is in the JWT.
}
export interface IPost {
  id: string;
  title: string;
  content?: string;
  averageRating?: number;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  category: string;
  author: string;
  authorId?: string;
  favoratedBy?: IUser;
  favoratedById?: string;
}