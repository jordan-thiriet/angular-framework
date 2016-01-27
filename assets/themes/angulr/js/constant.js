'use strict';

angular.module('app')
    .constant('JQ_CONFIG', {
        easyPieChart:   [   'assets/themes/angulr/libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
        sparkline:      [   'assets/themes/angulr/libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'],
        plot:           [   'assets/themes/angulr/libs/jquery/flot/jquery.flot.js',
            'assets/themes/angulr/libs/jquery/flot/jquery.flot.pie.js',
            'assets/themes/angulr/libs/jquery/flot/jquery.flot.resize.js',
            'assets/themes/angulr/libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
            'assets/themes/angulr/libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js',
            'assets/themes/angulr/libs/jquery/flot-spline/js/jquery.flot.spline.min.js'],
        moment:         [   'assets/themes/angulr/libs/jquery/moment/moment.js'],
        screenfull:     [   'assets/themes/angulr/libs/jquery/screenfull/dist/screenfull.min.js'],
        slimScroll:     [   'assets/themes/angulr/libs/jquery/slimscroll/jquery.slimscroll.min.js'],
        sortable:       [   'assets/themes/angulr/libs/jquery/html5sortable/jquery.sortable.js'],
        nestable:       [   'assets/themes/angulr/libs/jquery/nestable/jquery.nestable.js',
            'assets/themes/angulr/libs/jquery/nestable/jquery.nestable.css'],
        filestyle:      [   'assets/themes/angulr/libs/jquery/bootstrap-filestyle/src/bootstrap-filestyle.js'],
        slider:         [   'assets/themes/angulr/libs/jquery/bootstrap-slider/bootstrap-slider.js',
            'assets/themes/angulr/libs/jquery/bootstrap-slider/bootstrap-slider.css'],
        chosen:         [   'assets/themes/angulr/libs/jquery/chosen/chosen.jquery.min.js',
            'assets/themes/angulr/libs/jquery/chosen/bootstrap-chosen.css'],
        TouchSpin:      [   '../libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
            'assets/themes/angulr/libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
        wysiwyg:        [   'assets/themes/angulr/libs/jquery/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
            'assets/themes/angulr/libs/jquery/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
        dataTable:      [   'assets/themes/angulr/libs/jquery/datatables/media/js/jquery.dataTables.min.js',
            'assets/themes/angulr/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
            'assets/themes/angulr/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
        vectorMap:      [   'assets/themes/angulr/libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
            'assets/themes/angulr/libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
            'assets/themes/angulr/libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
            'assets/themes/angulr/libs/jquery/bower-jvectormap/jquery-jvectormap.css'],
        footable:       [   'assets/themes/angulr/libs/jquery/footable/v3/js/footable.min.js',
            'assets/themes/angulr/libs/jquery/footable/v3/css/footable.bootstrap.min.css'],
        fullcalendar:   [   'assets/themes/angulr/libs/jquery/moment/moment.js',
            'assets/themes/angulr/libs/jquery/fullcalendar/dist/fullcalendar.min.js',
            'assets/themes/angulr/libs/jquery/fullcalendar/dist/fullcalendar.css',
            'assets/themes/angulr/libs/jquery/fullcalendar/dist/fullcalendar.theme.css'],
        daterangepicker:[   'assets/themes/angulr/libs/jquery/moment/moment.js',
            'assets/themes/angulr/libs/jquery/bootstrap-daterangepicker/daterangepicker.js',
            'assets/themes/angulr/libs/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css'],
        tagsinput:      [   'assets/themes/angulr/libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
            'assets/themes/angulr/libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']

    }
)
;