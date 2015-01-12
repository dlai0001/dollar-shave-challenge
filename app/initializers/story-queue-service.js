export function initialize(container, application) {
  application.inject('route', 'storyQueueService', 'service:story-queue');
}

export default {
  name: 'story-queue-service',
  initialize: initialize
};
