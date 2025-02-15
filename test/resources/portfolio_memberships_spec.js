/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Portfolios = require('../../lib/resources/portfolio_memberships');

describe('Portfolio Memberships', function() {
  describe('#getPortfolioMembershipsForPortfolio', function() {
    it('should hit the portfolios/{portfolio-gid}/portfolio_memberships' +
        ' endpoint',
        function() {
          var dispatcher = {};
          var portfolios = new Portfolios(dispatcher);
          portfolios.dispatchGetCollection = sinon.stub();

          var id = 134679;
          portfolios.getPortfolioMembershipsForPortfolio(id);

          assert(portfolios.dispatchGetCollection.calledWith(
              '/portfolios/' + id + '/portfolio_memberships'));
        });
  });

  describe('#getPortfolioMemberships', function() {
    it('should hit the /portfolio_memberships endpoint',
        function() {
          var dispatcher = {};
          var portfolios = new Portfolios(dispatcher);
          portfolios.dispatchGetCollection = sinon.stub();

          portfolios.getPortfolioMemberships();

          assert(portfolios.dispatchGetCollection.calledWith(
              '/portfolio_memberships'));
        });
  });

  describe('#getPortfolioMembership', function() {
    it('should hit the /portfolio_memberships/{id} endpoint',
        function() {
          var dispatcher = {};
          var portfolios = new Portfolios(dispatcher);
          portfolios.dispatchGet = sinon.stub();

          var id = 134679;
          portfolios.getPortfolioMembership(id);

          assert(portfolios.dispatchGet.calledWith(
              '/portfolio_memberships/' + id));
        });
  });
});
