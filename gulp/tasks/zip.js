import del from "del";
import zipPulgin from "gulp-zip";

export const zip = () => {
   del(`./${app.path.rootFilder}.zip`)
   return app.gulp.src(`./${app.path.buildFolder}/**/*.*`, {})
   .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
         title: "ZIP",
         message: "Error: <%= error.message %>"
      })
   ))
   .pipe(zipPulgin(`${app.path.rootFolder}.zip`))
   .pipe(app.gulp.dest('./'));
}