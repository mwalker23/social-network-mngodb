const { Schema, model } = require("mongoose");
const reactionSchema = require('./reaction.js');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        }, 
        createdAt: {
            type: Date, 
            default: Date.now,
            get: (date) => date.toLocaleDateString (),
        },
        username: {
            type: String,
            required: true, 
        }, 
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
    );
    thoughtSchema.virtual('reactionCount').get(function () {
        return this.reactions.length;
    });
    
    const Thoughts = model('Thought', thoughtSchema);
    module.exports= Thoughts;