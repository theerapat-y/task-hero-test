var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');
var notify = require('gulp-notify');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

// jshint
gulp.task('lint', function() {
    return gulp.src("./src/**/*.js")
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});
// jscs
gulp.task('jscs', function(){
    return gulp.src('./src/**/*.js')
        .pipe(jscs({
            configPath: '.jscsrc',
            fix: true
        }))
        .pipe(gulp.dest('./src'))
        .pipe(notify('JSCS formated code!'));
});

//Code Quality
gulp.task('code-quality', function () {
    runSequence('jscs','lint',function(){
        console.log("code-quality (JSCS and Lint) Completed.");
    });
});

gulp.task('start-dev',['code-quality'] function () {
    nodemon({
        script: './bin/www',
        ignore: ['./public/*'],
        ext: 'html js jade json',
        env: {
            'NODE_ENV': 'development',
            'DEBUG': 'task-hero:*'
        }
    }).on('restart', function () {
        runSequence('jscs','lint',function(){
            console.log("JSCS and Lint Completed.")
        });
        gulp.src('./bin/www')
            .pipe(notify('Reloading server, please wait...'));
    });
});

gulp.task('default',['code-quality']);