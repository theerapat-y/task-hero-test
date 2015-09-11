var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');
var notify = require('gulp-notify');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');

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
        .pipe(notify('JSCS formated code!'))
        .on('error', gutil.log);
});

//Code Quality
gulp.task('code-quality', function () {
    runSequence('jscs','lint',function(){
        gutil.log("code-quality (JSCS and Lint) Completed.");
    });
});

//Mocha test
gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({
            reporter: 'spec',
            ui: 'bdd',
            globals: {
                should: require('should')
            }
        }))
        .on('error', gutil.log);
});

gulp.task('watch-test',['mocha'], function() {
    gulp.watch(['src/**', 'test/**'], ['mocha']);
});

gulp.task('watch-dev',['code-quality'], function () {
    nodemon({
        script: './bin/www',
        ignore: ['node_modules/**/*','public/*', '*.test.js'],
        ext: 'html js jade json scss',
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