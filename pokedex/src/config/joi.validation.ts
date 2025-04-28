import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    NODE_ENV: Joi.required(),
    PORT: Joi.number().default(3005),
    MONGO_URI: Joi.string().required().default(6),
    DEFAULT_LIMIT: Joi.number().default(10),
    DEFAULT_OFFSET: Joi.number().default(0),
})