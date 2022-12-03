export default {
  components: {
    schemas: {
      AuthLogin: {
        type: 'object',
        properties: {
          auth: {
            type: 'object',
            properties: {
              type: { type: 'string' },
              token: { type: 'string' },
            },
          },
          user: {
            type: 'object',
            $ref: '#/components/schemas/User',
          },
        },
      },
      User: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
          role: { type: 'array' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
      Tasks: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          description: { type: 'string' },
          priority: { type: 'string' },
          status: { type: 'string' },
          members: { type: 'array' },
          tags: { type: 'array' },
          startedAt: { type: 'string' },
          finishedAt: { type: 'string' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
    },
  },
};
