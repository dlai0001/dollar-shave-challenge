export function initialize(container, application) {
    application.inject('route', 'storyQueueProcessorService', 'service:story-queue-processor');
    application.inject('controller', 'storyQueueProcessorService', 'service:story-queue-processor');
}

export default {
    name: 'story-queue-processor-service',
    initialize: initialize
};
