/**
 * WORKFLIX - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Settings that will be used on gulp tasks
 *
 */

/**
 * Paths for source files and generated assets
 */
 var paths = {
    src: {
        fonts: 'assets/fonts/**/*.{otf,eot,ttf,woff,woff2}',
        images: 'assets/images/**/*.{png,jpg,jpeg,gif,bmp}',
        scripts: 'assets/js/**/*.js',
        scriptsEach: 'assets/js/**/[^_]*.js',
        scriptsConcat: 'assets/js/**/_*.js',
        pluginsCSS: ['assets/plugins-css/**/*.css'],
        pluginsJS: ['assets/plugins-js/**/*.js'],
        pluginsIMG: 'assets/plugins-images/**/*.{png,jpg,jpeg,gif,bmp}',
        scss: 'assets/scss/**/*.scss',
        sprites: 'assets/sprites/**/*.png'
    },
    srcFolder: {
        fonts: 'assets/fonts',
        images: 'assets/images',
        scripts: 'assets/js',
        pluginsCSS: 'assets/plugins-css',
        pluginsJS: 'assets/plugins-js',
        pluginsIMG: 'web/assets/plugins-images',
        scss: 'assets/scss',
        sprites: 'assets/sprites'
    },
    dist: {
        fonts: 'app/assets/fonts',
        images: 'app/assets/images',
        scripts: 'app/assets/js',
        css: 'app/assets/css'
    },
    appView: [ '**/*' ]
};

/**
 * Overrides for the 'main' entry on 'bower.json' files of plugins commonly used (by me)
 */
 var bowerOverrides = {
    overrides: {
        'fancybox': {
            main: [
            'dist/jquery.fancybox.js',
            'dist/jquery.fancybox.css'
            ]
        },
        'tipsy': {
            main: [
            'src/stylesheets/tipsy.css',
            'src/javascripts/jquery.tipsy.js',
            'src/images/tipsy.gif'
            ]
        },
        'jquery-slimscroll': {
            main: [
            'jquery.slimscroll.js'
            ]
        },
        'jQuery.Marquee': {
            main: [
            'jquery.marquee.js'
            ]
        },
        'jquery-snowfall': {
            main: [
            'src/snowfall.jquery.js'
            ]
        },
        'truncate': {
            main: [
            'dist/truncate.js'
            ]
        },
        'materialize': {
            main: [
            'bin/materialize.css',
            'bin/materialize.js' ,
            'fonts/roboto/Roboto-Bold.eot',
            'fonts/roboto/Roboto-Bold.ttf',
            'fonts/roboto/Roboto-Bold.woff',
            'fonts/roboto/Roboto-Bold.woff2',
            'fonts/roboto/Roboto-Light.eot',
            'fonts/roboto/Roboto-Light.ttf',
            'fonts/roboto/Roboto-Light.woff',
            'fonts/roboto/Roboto-Light.woff2',
            'fonts/roboto/Roboto-Medium.eot',
            'fonts/roboto/Roboto-Medium.ttf',
            'fonts/roboto/Roboto-Medium.woff',
            'fonts/roboto/Roboto-Medium.woff2',
            'fonts/roboto/Roboto-Regular.eot',
            'fonts/roboto/Roboto-Regular.ttf',
            'fonts/roboto/Roboto-Regular.woff',
            'fonts/roboto/Roboto-Regular.woff2',
            'fonts/roboto/Roboto-Thin.eot',
            'fonts/roboto/Roboto-Thin.ttf',
            'fonts/roboto/Roboto-Thin.woff',
            'fonts/roboto/Roboto-Thin.woff2'
            ]
        },
        'font-awesome': {
            main: [
            'css/font-awesome.css',
            'fonts/*'
            ]
        },
        'nivo-slider': {
            main: [
            'nivo-slider.css',
            'jquery.nivo.slider.js'
            ]
        },
        'jquery-ui': {
            main: [
            'jquery-ui.js',
            'themes/base/jquery-ui.css'
            ]
        },
        'bootstrap': {
            main: [
            'dist/css/bootstrap.css',
            'dist/js/bootstrap.js'
            ]
        },
        'jvectormap': {
            main: [
            'jquery-jvectormap.css',
            'jquery-jvectormap.js'
            ]
        },
        'select2': {
            main: [
            'dist/css/select2.css',
            'dist/js/select2.js'
            ]
        },
        'inputmask': {
            main: [
            'dist/jquery.inputmask.bundle.js'
            ]
        },
    }
};

module.exports = {
    paths: paths,
    bowerOverrides: bowerOverrides
};
