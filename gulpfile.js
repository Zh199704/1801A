var gulp = require("gulp");
var babel = require("gulp-babel");
var es2015 = require("babel-preset-es2015");
var webpack = require("gulp-webpack"); 
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var minifyCSS = require("gulp-minify-css");
var sass = require("gulp-sass");

//复制
// gulp.task("task1",function(){
//     console.log( 123456 );
// });

// gulp.task("abc",function(){
//     var a = 1;
//     var b = 2;
//     var c = 3;
//     var d = a * b - c;
//     console.log( d ); 
// })



//拷贝
gulp.task("task1",function(){
    console.log("正在拷贝文件");
    //拷贝单个文件
    //gulp.src("src/js/1.js").pipe(gulp.dest("dist/js"));
    //拷贝后缀为js的文件
    //gulp.src("src/js/*.js").pipe(gulp.dest("dist/js"));
    //拷问属性的所有文件
    gulp.src("src/php/*.*").pipe(gulp.dest("dist/php"));
})


//es6转es5
gulp.task("js1",function(){
    // gulp.src("src/js/1.js")
    // .pipe(babel({presets:[es2015]}))
    // .pipe(gulp.dest("dist/js"));


    gulp.src(["src/mode/1.js","src/mode/2.js"])
        .pipe(babel({presets:[es2015]}))
        .pipe(gulp.dest("dist/model"))
        .pipe(webpack({
            output:{
                filename:"bulid.js"
            }
        }))
        .pipe(gulp.dest('dist/model'))
        .on("end",function(){
            del(["dist/model/1.js","dist/model/2.js"]);
        })
});



gulp.task("js",function(){
    gulp.src("src/js/*.js")
    .pipe(babel({presets:[es2015]}))
    .pipe(concat("all.js"))
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
})



// gulp.task("css",function(){
//     gulp.src("src/css/*.css")
    
//     .pipe(gulp.dest("dist/css"))
// }).pipe(minifyCSS())

gulp.task("scss",function(){
    gulp.src("src/css/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest("dist/css"))
})

gulp.task('default',function(){
	gulp.watch("src/css/*.scss",["scss"]);
})