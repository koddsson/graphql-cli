#!/usr/bin/env node

import { installCommands } from './index';

installCommands()
  .demandCommand()
  .help()
  .completion('completion')
  .recommendCommands()
  .usage('Usage: $0 [command]')
  .example('$0 init', 'interactively init .graphqlconfig file')
  .example('$0 get-schema dev', 'download schema from "dev" endpoint and save to local file')
  .example('$0 ping dev', 'send simple GraphQL query to "dev" endpoint')
  .example('$0 diff dev prod', 'show schema diff between "dev" and "prod" endpoints')
  .example('$0 diff dev', 'show schema diff between "dev" and local saved schema')
  .epilogue('for more information, check out https://github.com/graphcool/graphcool-cli')
  .argv