/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    return {
        'deploy': {
            tasks: ['watch:less', 'watch:js', 'http-server:dev'],
            options: {
                'logConcurrentOutput': true,
                'limit': 3
            }
        }
    };
};
