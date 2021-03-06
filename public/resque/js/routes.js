var ROUTES = [
  // ROUTE                 PAGE PARTIAL
  [ '/',                   '/resque/pages/overview.html' ],
  [ '/overview',           '/resque/pages/overview.html' ],
  [ '/failed',             '/resque/pages/failed.html'   ],
  [ '/failed/:page',       '/resque/pages/failed.html'   ],
  [ '/workers',            '/resque/pages/workers.html'  ],
  [ '/delayed',            '/resque/pages/delayed.html'  ],
  [ '/delayed/:page',      '/resque/pages/delayed.html'  ],
  [ '/queue/:queue',       '/resque/pages/queue.html'    ],
  [ '/queue/:queue/:page', '/resque/pages/queue.html'    ],
  [ '/locks',              '/resque/pages/locks.html'    ],
];
