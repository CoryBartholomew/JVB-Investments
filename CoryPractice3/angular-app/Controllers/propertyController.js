var Labor = {};

Labor.init = function () {
    $('.propertyInfoHolder .tPickerStart td button, .tPickerEnd td button').addClass('btn-xs');
    $('.propertyInfoHolder .tPickerStart tr:first').hide();
    $('.propertyInfoHolder .tPickerStart tr:last').hide();
    $('.propertyInfoHolder .tPickerEnd tr:first').hide();
    $('.propertyInfoHolder .tPickerEnd tr:last').hide();
    $('.propertyInfoHolder .tPickerEnd input').val('');

    $('.laborEndHolder .tPickerStart td button, .tPickerEnd td button').addClass('btn-xs');
    $('.laborEndHolder .tPickerStart tr:first').hide();
    $('.laborEndHolder .tPickerStart tr:last').hide();
    $('.laborEndHolder .tPickerEnd tr:first').hide();
    $('.laborEndHolder .tPickerEnd tr:last').hide();
    $('.laborEndHolder .tPickerEnd input').val('');
};

Labor.getCompositeDate = function (d, t) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
};

Labor.getDuration = function (s, e) {
    var diff = e - s;

    var days = parseInt(diff / (24 * 3600 * 1000));
    diff = diff - (days * 24 * 3600 * 1000);

    var hours = parseInt(diff / (3600 * 1000));
    diff = diff - (hours * 3600 * 1000);

    var minutes = parseInt(diff / 60 / 1000);

    if (days > 0) {
        return days + 'd ' + hours + 'h ' + minutes + 'm';
    }

    if (hours > 0) {
        return hours + 'h ' + minutes + 'm';
    }

    return minutes + 'm';
};

// The jQuery document ready function.
$(document).ready(function () {
    Labor.init();
});

angular.module('cbApp')
    .controller('propertyCtrl', ['$scope', '$filter', function ($scope, $filter) {
        //$scope.addWorkder = {};
        $scope.opened = true;
        $scope.dates = {};
        $scope.myInterval = -1;
        $scope.workDetailItem = {
            name: '',
            quantity: 0,
            pricePerUnit: ''
        };
        $scope.workDetail = {
            description: '',
            contracted: '0',
            workItems: [],
            workersOnWorkDetail: [],
        };
        $scope.techs = [
            {
                firstName: 'Anikan',
                lastName: 'SkyWalker'
            },
            {
                firstName: 'Lord',
                lastName: 'Grievos'
            },
            {
                firstName: 'Frodo',
                lastName: 'Baggins'
            }
        ];

        $scope.items = [
            {
                name: 'tile'
            },
            {
                name: 'lights'
            },
            {
                name: 'paint'
            }
        ];

        $scope.activities = [
            {
                description: 'tile',
            },
            {
                description: 'grout',
            },
            {
                description: 'drywall',
            },
            {
                description: 'frame',
            },
            {
                description: 'electrical',
            }
        ];
        $scope.slides = [
            {
                image: '../../images/not_our_condo.png'
            },
            {
                image: '../../images/house2.png'
            }
        ];

        $scope.getWorkers = function (filter) {
            var returnWorkers = [];
            returnWorkers = $filter('filter')(workers, filter);
            return returnWorkers;

        };

        $scope.getItems = function (filter) {
            var returnItems = [];
            returnItems = $filter('filter')($scope.items, filter);
            return returnItems;

        };

        $scope.doTechSelected = function (tech) {
            $scope.workDetail.tech.push(tech);
        };

        $scope.addWorkDetail = function () {
            
        }

        $scope.selectItem = function (itemName) {
            $scope.workDetailItem.name = itemName;
        };

        $scope.addItem = function() {
            $scope.workDetail.workItems.push($scope.workDetailItem);
            $scope.workDetailItem = {};
            //$scope.workDetailItem.material = '';
            //$scope.workDetailItem.quantity = '';
            //$scope.workDetailItem.pricePerUnit = '';
        }

        function reset() {
            $scope.workersOnWorkDetail = [];
            $scope.workDetailItem = {};
        }

    }]);

angular.module('cbApp')
    .controller('startDateTimeController', ['$scope', function ($scope) {
    //////////////////////////////////////////////
    // Date Settings
        $scope.clear = function () {
            $scope.dates.workDetailRecordStartDate = null;
            $scope.dates.workDetailStartTime = null;
        };
        $scope.clear();
    $scope.today = function () {
        var d = new Date();
        $scope.dates.workDetailRecordStartDate = d;
        $scope.dates.workDetailStartTime = d;
    };
    $scope.today();


    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 0,
        showWeeks: false
    };

    $scope.formats = ['EEE, dd-MMM-yyyy', 'dd-MMM-yyyy  --  EEE', 'dd.MM.yyyy', 'shortDate', ];
    $scope.format = $scope.formats[1];
    //////////////////////////////
    var d = new Date();
    $scope.dates.workDetailStartTime = d;
    $scope.dates.isStartTimeMeridian = true;

    $scope.now = function () {
        var d = new Date();
        $scope.dates.workDetailRecordStartDate = d;
        $scope.dates.workDetailStartTime = d;
    };
    }]);

angular.module('cbApp')
    .controller('endDateTimeController', ['$scope', function ($scope) {
        //////////////////////////////////////////////
        // Date Settings
        $scope.clear = function () {
            $scope.dates.workDetailRecordEndDate = null;
            $scope.dates.workDetailEndTime = null;
        };
        $scope.clear();
        $scope.today = function () {
            var d = new Date();
            $scope.dates.workDetailRecordEndDate = d;
            $scope.dates.workDetailEndTime = d;
        };
        $scope.today();


        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 0,
            showWeeks: false
        };

        $scope.formats = ['EEE, dd-MMM-yyyy', 'dd-MMM-yyyy  --  EEE', 'dd.MM.yyyy', 'shortDate', ];
        $scope.format = $scope.formats[1];
        //////////////////////////////
        var d = new Date();
        $scope.dates.workDetailEndTime = d;
        $scope.dates.isStartTimeMeridian = true;

        $scope.now = function () {
            var d = new Date();
            $scope.dates.workDetailRecordEndDate = d;
            $scope.dates.workDetailEndTime = d;
        };
    }]);