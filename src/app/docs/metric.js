'use strict';

const angular = require('angular');
const dag_utils = require('./dag_utils')
require("./styles.css");

angular
.module('dbt')
.controller('MetricCtrl', ['$scope', '$state', 'project', 'code',
            function($scope, $state, projectService, codeService) {

    $scope.model_uid = $state.params.unique_id;
    $scope.project = projectService;

    $scope.codeService = codeService;
    $scope.extra_table_fields = [];
    $scope.versions = {};

    $scope.metric = {};
    projectService.ready(function(project) {
        let metric = project.nodes[$scope.model_uid];
        $scope.metric = metric;
        $scope.parents = dag_utils.getParents(project, metric);
        $scope.parentsLength = $scope.parents.length;

        $scope.versions = {
            'Definition': codeService.generateMetricSQL($scope.metric)
        }

        const metric_type =  $scope.metric.type === 'expression'
            ? 'Expression metric'
            : 'Aggregate metric';

        $scope.extra_table_fields = [
            {
                name: "Metric Type",
                value: metric_type,
            },
            {
                name: "Metric name",
                value: $scope.metric.name
            }
        ]

    })
}]);
