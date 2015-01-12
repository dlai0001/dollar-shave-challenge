export function initialize(container, application) {
    application.inject('controller', 'hackerNewsService', 'service:hacker-news');
    application.inject('route', 'hackerNewsService', 'service:hacker-news');
    application.inject('service:story-queue-processor', 'hackerNewsService', 'service:hacker-news');
}

export default {
    name: 'hacker-news-service',
    initialize: initialize
};
