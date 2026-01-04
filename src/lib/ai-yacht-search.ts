/**
 * AI Yacht Search Engine
 * Scores and ranks yachts based on user criteria
 */

import type { DetailedYacht } from './data/mock-yachts';

export interface SearchCriteria {
  // Basic filters
  priceMin?: number;
  priceMax?: number;
  lengthMin?: number;
  lengthMax?: number;
  yearMin?: number;
  location?: string;

  // Must-Haves (heavily weighted)
  mustHaves: {
    soundHullAndDeck: boolean;
    reliableEngine: boolean;
    functionalSystems: boolean;
    adequateTankage: boolean;
    safeElectrical: boolean;
  };

  // High Priority (medium weight)
  highPriority: {
    watermaker: boolean;
    solarPower: boolean;
    goodSailInventory: boolean;
    navigationElectronics: boolean;
    refrigeration: boolean;
  };

  // Nice to Have (lower weight)
  niceToHave: {
    autopilot: boolean;
    dinghyDavits: boolean;
    inMastFurling: boolean;
    airConditioning: boolean;
    bowThruster: boolean;
  };

  // Specific requirements
  requirements: {
    blueWaterCapable?: boolean;
    cruisingReady?: boolean;
    shallowDraft?: boolean; // < 4.5 feet
    minCabins?: number;
    minHeads?: number;
  };
}

export interface ScoredYacht {
  yacht: DetailedYacht;
  totalScore: number;
  mustHaveScore: number;
  highPriorityScore: number;
  niceToHaveScore: number;
  matchDetails: string[];
  missingCritical: string[];
}

/**
 * Score a yacht against search criteria
 */
export function scoreYacht(yacht: DetailedYacht, criteria: SearchCriteria): ScoredYacht {
  let totalScore = 0;
  let mustHaveScore = 0;
  let highPriorityScore = 0;
  let niceToHaveScore = 0;
  const matchDetails: string[] = [];
  const missingCritical: string[] = [];

  // Basic filters (pass/fail)
  if (criteria.priceMin && yacht.price < criteria.priceMin) {
    return createFailedScore(yacht, 'Below minimum price');
  }
  if (criteria.priceMax && yacht.price > criteria.priceMax) {
    return createFailedScore(yacht, 'Above maximum price');
  }
  if (criteria.lengthMin && yacht.length < criteria.lengthMin) {
    return createFailedScore(yacht, 'Too small');
  }
  if (criteria.lengthMax && yacht.length > criteria.lengthMax) {
    return createFailedScore(yacht, 'Too large');
  }
  if (criteria.yearMin && yacht.year < criteria.yearMin) {
    return createFailedScore(yacht, 'Too old');
  }

  // MUST-HAVES (100 points each, critical)
  if (criteria.mustHaves.soundHullAndDeck) {
    if (yacht.hull.condition === 'Excellent' || yacht.hull.condition === 'Good') {
      if (yacht.hull.deckCondition === 'Excellent' || yacht.hull.deckCondition === 'Good') {
        mustHaveScore += 100;
        matchDetails.push('✓ Sound hull and deck');
      } else {
        missingCritical.push('Deck condition needs improvement');
      }
    } else {
      missingCritical.push('Hull condition needs improvement');
    }
  }

  if (criteria.mustHaves.reliableEngine) {
    if (yacht.engines.type === 'Diesel' && yacht.engines.hours < 3000) {
      mustHaveScore += 100;
      matchDetails.push(`✓ Reliable diesel engine (${yacht.engines.hours} hours)`);
    } else {
      missingCritical.push('Engine hours too high or not diesel');
    }
  }

  if (criteria.mustHaves.functionalSystems) {
    let systemsScore = 0;
    if (yacht.systems.watermaker) systemsScore += 25;
    if (yacht.systems.pressureWaterSystem) systemsScore += 25;
    if (yacht.systems.solarPanels || yacht.systems.generator) systemsScore += 25;
    if (yacht.safety.bilgePumps >= 2) systemsScore += 25;

    if (systemsScore >= 75) {
      mustHaveScore += 100;
      matchDetails.push('✓ Functional water and power systems');
    } else {
      missingCritical.push('Some critical systems missing');
    }
  }

  if (criteria.mustHaves.adequateTankage) {
    if (yacht.systems.waterTankCapacity >= 100 && yacht.engines.fuelCapacity >= 100) {
      mustHaveScore += 100;
      matchDetails.push(`✓ Adequate tankage (${yacht.systems.waterTankCapacity}gal water, ${yacht.engines.fuelCapacity}gal fuel)`);
    } else {
      missingCritical.push('Tankage below recommended levels');
    }
  }

  if (criteria.mustHaves.safeElectrical) {
    if (yacht.systems.batteryCapacity >= 200 && yacht.systems.inverterCapacity >= 1000) {
      mustHaveScore += 100;
      matchDetails.push(`✓ Safe electrical system (${yacht.systems.batteryType} ${yacht.systems.batteryCapacity}Ah)`);
    } else {
      missingCritical.push('Electrical system undersized');
    }
  }

  // HIGH PRIORITY (50 points each)
  if (criteria.highPriority.watermaker) {
    if (yacht.systems.watermaker) {
      highPriorityScore += 50;
      matchDetails.push(`✓ Watermaker installed (${yacht.systems.watermakerCapacity}gph)`);
    }
  }

  if (criteria.highPriority.solarPower) {
    if (yacht.systems.solarPanels && yacht.systems.solarCapacity && yacht.systems.solarCapacity >= 400) {
      highPriorityScore += 50;
      matchDetails.push(`✓ Solar power system (${yacht.systems.solarCapacity}W)`);
    }
  }

  if (criteria.highPriority.goodSailInventory) {
    if (yacht.systems.sailInventory.length >= 4 && yacht.systems.riggingAge <= 5) {
      highPriorityScore += 50;
      matchDetails.push(`✓ Good sail inventory (${yacht.systems.sailInventory.length} sails, ${yacht.systems.riggingAge}yr rigging)`);
    }
  }

  if (criteria.highPriority.navigationElectronics) {
    let navScore = 0;
    if (yacht.navigation.gpsChartplotter) navScore += 12.5;
    if (yacht.navigation.radar) navScore += 12.5;
    if (yacht.navigation.ais) navScore += 12.5;
    if (yacht.navigation.depthSounder) navScore += 12.5;

    if (navScore >= 37.5) {
      highPriorityScore += 50;
      matchDetails.push('✓ Comprehensive navigation electronics');
    }
  }

  if (criteria.highPriority.refrigeration) {
    if (yacht.comfort.refrigeration && yacht.comfort.freezer) {
      highPriorityScore += 50;
      matchDetails.push('✓ Refrigeration and freezer');
    }
  }

  // NICE TO HAVE (25 points each)
  if (criteria.niceToHave.autopilot) {
    if (yacht.systems.autopilot) {
      niceToHaveScore += 25;
      matchDetails.push(`✓ Autopilot (${yacht.systems.autopilotType})`);
    }
  }

  if (criteria.niceToHave.dinghyDavits) {
    if (yacht.dinghy.davits) {
      niceToHaveScore += 25;
      matchDetails.push(`✓ Dinghy with davits (${yacht.dinghy.length}' ${yacht.dinghy.type})`);
    }
  }

  if (criteria.niceToHave.inMastFurling) {
    if (yacht.systems.furlingSystem) {
      niceToHaveScore += 25;
      matchDetails.push('✓ In-mast/in-boom furling');
    }
  }

  if (criteria.niceToHave.airConditioning) {
    if (yacht.comfort.airConditioning) {
      niceToHaveScore += 25;
      matchDetails.push('✓ Air conditioning');
    }
  }

  if (criteria.niceToHave.bowThruster) {
    if (yacht.additional.bowThruster) {
      niceToHaveScore += 25;
      matchDetails.push('✓ Bow thruster');
    }
  }

  // SPECIFIC REQUIREMENTS
  if (criteria.requirements.blueWaterCapable !== undefined) {
    if (yacht.cruising.blueWaterCapable === criteria.requirements.blueWaterCapable) {
      totalScore += 30;
      if (yacht.cruising.blueWaterCapable) {
        matchDetails.push('✓ Blue water capable');
      }
    }
  }

  if (criteria.requirements.cruisingReady !== undefined) {
    if (yacht.cruising.cruisingReady === criteria.requirements.cruisingReady) {
      totalScore += 30;
      if (yacht.cruising.cruisingReady) {
        matchDetails.push('✓ Cruising ready');
      }
    } else {
      missingCritical.push('Not cruising ready');
    }
  }

  if (criteria.requirements.shallowDraft !== undefined && criteria.requirements.shallowDraft) {
    if (yacht.hull.draft <= 4.5) {
      totalScore += 30;
      matchDetails.push(`✓ Shallow draft (${yacht.hull.draft}')`);
    }
  }

  if (criteria.requirements.minCabins) {
    if (yacht.comfort.cabins >= criteria.requirements.minCabins) {
      totalScore += 20;
      matchDetails.push(`✓ ${yacht.comfort.cabins} cabins`);
    } else {
      missingCritical.push(`Only ${yacht.comfort.cabins} cabins (need ${criteria.requirements.minCabins})`);
    }
  }

  if (criteria.requirements.minHeads) {
    if (yacht.comfort.heads >= criteria.requirements.minHeads) {
      totalScore += 20;
      matchDetails.push(`✓ ${yacht.comfort.heads} heads`);
    }
  }

  // Calculate total score
  totalScore += mustHaveScore + highPriorityScore + niceToHaveScore;

  // Bonus points for exceptional features
  if (yacht.systems.batteryType === 'Lithium') {
    totalScore += 20;
    matchDetails.push('⭐ Lithium battery upgrade');
  }

  if (yacht.engines.hours < 500) {
    totalScore += 15;
    matchDetails.push('⭐ Very low engine hours');
  }

  if (yacht.legal.surveyAge < 1) {
    totalScore += 10;
    matchDetails.push('⭐ Recent survey');
  }

  return {
    yacht,
    totalScore,
    mustHaveScore,
    highPriorityScore,
    niceToHaveScore,
    matchDetails,
    missingCritical
  };
}

function createFailedScore(yacht: DetailedYacht, reason: string): ScoredYacht {
  return {
    yacht,
    totalScore: 0,
    mustHaveScore: 0,
    highPriorityScore: 0,
    niceToHaveScore: 0,
    matchDetails: [],
    missingCritical: [reason]
  };
}

/**
 * Search and rank yachts based on criteria
 */
export function searchYachts(yachts: DetailedYacht[], criteria: SearchCriteria): ScoredYacht[] {
  // Score all yachts
  const scored = yachts.map(yacht => scoreYacht(yacht, criteria));

  // Sort by total score (highest first)
  scored.sort((a, b) => b.totalScore - a.totalScore);

  // Filter out yachts that failed basic criteria or missing critical must-haves
  return scored.filter(scored => scored.totalScore > 0 && scored.missingCritical.length === 0);
}

/**
 * Get top N results
 */
export function getTopResults(yachts: DetailedYacht[], criteria: SearchCriteria, limit = 5): ScoredYacht[] {
  const results = searchYachts(yachts, criteria);
  return results.slice(0, limit);
}
