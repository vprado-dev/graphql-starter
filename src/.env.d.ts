declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'test' | 'production' | 'staging';
    PORT: string;
    MONGODB_PROTOCOL: 'mongodb' | 'mongodb+srv';
    MONGODB_SERVER: string;
    MONGODB_PORT: string;
    MONGODB_USER: string;
    MONGODB_PASSWORD: string;
    MONGODB_DATABASE: string;
  }
}
