const gulp = require("gulp");

gulp.task("default", () => {
  gulp.start("copiar", "fim");
});

gulp.task("copiar", ["antes1", "antes2"], () => {
  gulp
    .src(["pastaA/arquivo.txt", "pastaA.arquivo2.txt"])
    .pipe(transformacao1())
    .pipe(transformacao2())
    .pipe(gulp.dest("pastaB"));
});

gulp.task("antes1", () => {});

gulp.task("antes2", () => {});

gulp.task("fim", () => {});
