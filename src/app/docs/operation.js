'use strict';

const angular = require('angular');
const dag_utils = require('./dag_utils')
require("./styles.css");

angular
.module('dbt')
.controller('OperationCtrl', ['$scope', '$state', 'project', 'code', '$anchorScroll',
            function($scope, $state, projectService, codeService, $anchorScroll) {

    $scope.model_uid = $state.params.unique_id;
    $scope.tab = $state.params.tab;
    $scope.project = projectService;
    $scope.codeService = codeService;

    $scope.versions = {}

    $scope.model = {};
    projectService.ready(function(project) {
        let mod = project.nodes[$scope.model_uid];
        $scope.model = mod;
        $scope.references = dag_utils.getReferences(project, mod);
        $scope.referencesLength = Object.keys($scope.references).length;
        $scope.parents = dag_utils.getParents(project, mod);
        $scope.parentsLength = Object.keys($scope.parents).length;
        $scope.language = mod.language;

        var default_compiled = '\n-- compiled code not found for this model\n';
        $scope.versions = {
            'Source': $scope.model.raw_code,
            'Compiled': $scope.model.compiled_code || default_compiled
        }

        // eslint-disable-next-line angular/timeout-service -- TODO
        setTimeout(function() {
            $anchorScroll();
        }, 0);
    })
}]);
