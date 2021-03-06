// app/api/case/router.js

const server = require('../../../src/server');
const controller = require('./controller');

server.post(
  '/case/points',
  server.wrapAsync(
    async (req, res) => await controller.fetchCasePoints(req, res),
    true,
  ),
);

server.post(
  '/cases/points',
  server.wrapAsync(
    async (req, res) => await controller.fetchCasesPoints(req, res),
    true,
  ),
);

server.post(
  '/case/points/ingest',
  server.wrapAsync(
    async (req, res) => await controller.ingestUploadedPoints(req, res),
    true,
  ),
);

server.post(
  '/case/points/delete',
  server.wrapAsync(
    async (req, res) => await controller.deleteCasePoints(req, res),
    true,
  ),
);

server.post(
  '/case/point',
  server.wrapAsync(
    async (req, res) => await controller.createCasePoint(req, res),
    true,
  ),
);

server.put(
  '/case/point',
  server.wrapAsync(
    async (req, res) => await controller.updateCasePoint(req, res),
    true,
  ),
);

server.put(
  '/case/points',
  server.wrapAsync(
    async (req, res) => await controller.updateCasePoints(req, res),
    true,
  ),
);

server.post(
  '/case/point/delete',
  server.wrapAsync(
    async (req, res) => await controller.deleteCasePoint(req, res),
    true,
  ),
);

server.post(
  '/case/consent-to-publishing',
  server.wrapAsync(
    async (req, res) => await controller.consentToPublish(req, res),
    true,
  ),
);

server.post(
  '/case/stage',
  server.wrapAsync(
    async (req, res) => await controller.setCaseToStaging(req, res),
    true,
  ),
);

server.post(
  '/cases/publish',
  server.wrapAsync(
    async (req, res) => await controller.publishCases(req, res),
    true,
  ),
);

server.post(
  '/case/delete',
  server.wrapAsync(
    async (req, res) => await controller.deleteCase(req, res),
    true,
  ),
);

server.put(
  '/case',
  server.wrapAsync(
    async (req, res) => await controller.updateOrganizationCase(req, res),
    true,
  ),
);
