let convIdCount = 7;
let messageconvIdCount = 0;

export default {
    // Conversations
    async getConversations() {
        return [
            {
                id: 0,
                name: 'general',
                description: 'Default general channel',
                isChannel: true,
            },
            {
                id: 1,
                name: 'music',
                description: 'A channel to talk about music',
                isChannel: true,
            },
            {
                id: 2,
                name: 'product',
                description: 'All chat relating to product design',
                isChannel: true,
            },
            {
                id: 3,
                name: 'Andrew, Bob',
                description: '',
                isChannel: false,
            },
            {
                id: 4,
                name: 'Andrew, Bob, Janet',
                description: '',
                isChannel: false,
            },
            {
                id: 5,
                name: 'Bob',
                description: '',
                isChannel: false,
            },
            {
                id: 6,
                name: 'Janet',
                description: '',
                isChannel: false,
            },
        ];
    },
    async postConversation(data: any) {
        data.id = convIdCount++;
        return data;
    },
    async deleteConversation(conversationId: string) {

    },
    async patchConversation(data: any) {
        return data;
    },
    // Messages
    async getMessagesInConversation(conversationId: string) {
        return [];
    },
    async postMessageToConversation(conversationId: string, data: any) {
        data.id = messageconvIdCount++;
    },
    async deleteMessage(messageId: string) {

    },
    async patchMessage(data: any) {
        return data;
    }
};
