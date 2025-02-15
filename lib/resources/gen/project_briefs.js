/**
 * This file is auto-generated by our openapi spec.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing (like unused requires).
 * TODO: maybe we can just disable those specifically and keep this code
 * pretty lint-free too!
 */
/* jshint ignore:start */
var Resource = require('../resource');
var util = require('util');
var _ = require('lodash');

function ProjectBriefs(dispatcher) {
    Resource.call(this, dispatcher);
}
util.inherits(ProjectBriefs, Resource);


/**
 * Create a project brief
 * @param {String} projectGid: (required) Globally unique identifier for the project.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
ProjectBriefs.prototype.createProjectBrief = function(
    projectGid,
    data,
    dispatchOptions
) {
    var path = "/projects/{project_gid}/project_briefs".replace("{project_gid}", projectGid);

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Delete a project brief
 * @param {String} projectBriefGid: (required) Globally unique identifier for the project brief.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
ProjectBriefs.prototype.deleteProjectBrief = function(
    projectBriefGid,
    data,
    dispatchOptions
) {
    var path = "/project_briefs/{project_brief_gid}".replace("{project_brief_gid}", projectBriefGid);

    return this.dispatchDelete(path, data, dispatchOptions)
};


/**
 * Get a project brief
 * @param {String} projectBriefGid: (required) Globally unique identifier for the project brief.
 * @param {Object} params: Parameters for the request
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
ProjectBriefs.prototype.getProjectBrief = function(
    projectBriefGid,
    params,
    dispatchOptions
) {
    var path = "/project_briefs/{project_brief_gid}".replace("{project_brief_gid}", projectBriefGid);

    return this.dispatchGet(path, params, dispatchOptions)
};


/**
 * Update a project brief
 * @param {String} projectBriefGid: (required) Globally unique identifier for the project brief.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
ProjectBriefs.prototype.updateProjectBrief = function(
    projectBriefGid,
    data,
    dispatchOptions
) {
    var path = "/project_briefs/{project_brief_gid}".replace("{project_brief_gid}", projectBriefGid);

    return this.dispatchPut(path, data, dispatchOptions)
};

module.exports = ProjectBriefs;
/* jshint ignore:end */
