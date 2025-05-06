export const EvnConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    db: process.env.MONGO_URI || 'mongodb://localhost:27017/nest-pokemon',
    defaultLimit: +process.env.DEFAULT_LIMIT || 10,
    defaultOffset: +process.env.DEFAULT_OFFSET || 0,
    defaultPage: +process.env.DEFAULT_PAGE || 1,
    defaultPageSize: +process.env.DEFAULT_PAGE_SIZE || 10,
})