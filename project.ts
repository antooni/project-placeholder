import {
  // CONTRACTS,
  // DATA_AVAILABILITY,
  // EXITS,
  // FORCE_TRANSACTIONS,
  // NEW_CRYPTOGRAPHY,
  // OPERATOR,
  RISK_VIEW,
} from './common'
import { Project } from './types/Project'

export const placeholder: Project = {
  name: '',
  slug: '',
  bridges: [],
  details: {
    description: '',
    purpose: '',
    links: {
      websites: [],
      apps: [],
      documentation: [],
      explorers: [],
      repositories: [],
      socialMedia: [],
    },
    riskView: {
      stateValidation: RISK_VIEW.STATE_FP_1R,
      dataAvailability: RISK_VIEW.DATA_ON_CHAIN,
      upgradeability: RISK_VIEW.UPGRADABLE_NO,
      sequencerFailure: RISK_VIEW.SEQUENCER_NO_MECHANISM,
      validatorFailure: RISK_VIEW.VALIDATOR_NO_MECHANISM,
    },
    technology: {
      category: {
        name: 'Optimistic Chain',
      },
      stateCorrectness: {
        name: '',
        description: '',
        risks: [],
        references: [],
      },
      dataAvailability: {
        name: '',
        description: '',
        risks: [],
        references: [],
      },
      operator: {
        name: '',
        description: '',
        risks: [],
        references: [],
      },
      forceTransactions: {
        name: '',
        description: '',
        risks: [],
        references: [],
      },
      exitMechanisms: [
        {
          name: '',
          description: '',
          risks: [],
          references: [],
        },
      ],
      contracts: {
        addresses: [],
        risks: [],
      },
    },
    news: [],
  },
}
