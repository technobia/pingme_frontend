/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    grunt.registerTask('deploy', [
        'concurrent:deploy'
    ]);
};
