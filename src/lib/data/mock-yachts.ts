/**
 * Mock Yacht Database for AI Search Demo
 * Comprehensive yacht data with detailed specifications
 */

export interface DetailedYacht {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  price: number;
  length: number; // feet
  location: string;
  images: string[];
  description: string;

  // Hull & Structure
  hull: {
    material: 'Fiberglass' | 'Aluminum' | 'Steel' | 'Wood' | 'Carbon Fiber';
    condition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
    deckCondition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
    throughHulls: number;
    keelType: 'Full' | 'Fin' | 'Wing' | 'Centerboard';
    draft: number; // feet
  };

  // Engines & Propulsion
  engines: {
    type: 'Diesel' | 'Gas' | 'Electric' | 'Hybrid';
    hours: number;
    propeller: 'Fixed' | 'Folding';
    fuelCapacity: number; // gallons
    range: number; // nautical miles
  };

  // Essential Systems
  systems: {
    // Power & Energy
    solarPanels: boolean;
    solarCapacity?: number; // watts
    windGenerator: boolean;
    batteryCapacity: number; // Ah
    batteryType: 'AGM' | 'Lithium' | 'Gel' | 'Lead Acid';
    inverterCapacity: number; // watts
    generator: boolean;
    generatorHours?: number;

    // Water Systems
    watermaker: boolean;
    watermakerCapacity?: number; // gallons/hour
    waterTankCapacity: number; // gallons
    waterFiltration: boolean;
    hotWaterHeater: boolean;
    pressureWaterSystem: boolean;

    // Sailing Equipment
    furlingSystem: boolean;
    sailInventory: string[];
    riggingAge: number; // years
    autopilot: boolean;
    autopilotType?: 'Below-deck' | 'Wind vane';
  };

  // Navigation & Electronics
  navigation: {
    gpsChartplotter: boolean;
    gpsScreenSize?: number; // inches
    radar: boolean;
    radarType?: 'Open array' | 'Dome';
    depthSounder: boolean;
    windInstruments: boolean;
    vhfRadio: boolean;
    vhfDSC: boolean;
    ssbRadio: boolean;
    satellitePhone: boolean;
    ais: boolean;
    aisType?: 'Transceiver' | 'Receiver';
    epirb: boolean;
  };

  // Computer/Connectivity
  connectivity: {
    wifiBooster: boolean;
    usbOutlets: number;
    computerNavigation: boolean;
  };

  // Dinghy & Tender
  dinghy: {
    included: boolean;
    type?: 'Hard bottom inflatable' | 'Rigid' | 'Soft inflatable';
    length?: number; // feet
    outboardMotor?: boolean;
    outboardHP?: number;
    davits: boolean;
    storage?: 'Davits' | 'On deck' | 'Towed';
  };

  // Safety Equipment
  safety: {
    lifeRaft: boolean;
    lifeRaftCapacity?: number;
    lifeJackets: number;
    fireExtinguishers: number;
    bilgePumps: number;
    emergencySteering: boolean;
    epirb: boolean;
  };

  // Comfort & Liveability
  comfort: {
    cabins: number;
    berths: number;
    heads: number;
    airConditioning: boolean;
    heating: boolean;
    refrigeration: boolean;
    freezer: boolean;
    headroom: number; // feet
    galleySize: 'Small' | 'Medium' | 'Large';
    ventilation: 'Excellent' | 'Good' | 'Fair';
    insulation: boolean;
    washingMachine: boolean;
    entertainment: boolean;
  };

  // Additional Equipment
  additional: {
    bowThruster: boolean;
    swimPlatform: boolean;
    bimini: boolean;
    canvasCondition?: 'Excellent' | 'Good' | 'Fair' | 'Poor';
    bbqGrill: boolean;
    desalinationBackup: boolean;
  };

  // Legal & Administrative
  legal: {
    title: 'Clear' | 'Pending' | 'Lien';
    registration: 'Current' | 'Expired';
    surveyAge: number; // years
    insurance: boolean;
  };

  // Location & Cruising
  cruising: {
    blueWaterCapable: boolean;
    cruisingReady: boolean;
    haulOutAccessible: boolean;
  };

  // Must-Haves Score (calculated)
  mustHaveScore?: number;
  niceToHaveScore?: number;
  overallScore?: number;
}

export const mockYachts: DetailedYacht[] = [
  {
    id: 'yacht-1',
    name: 'Ocean Wanderer',
    make: 'Lagoon',
    model: '450',
    year: 2018,
    price: 595000,
    length: 45,
    location: 'St. Thomas, USVI',
    images: [
      'https://images.boats.com/resize/1/38/17/8933817_20220414110006738_1_XLARGE.jpg',
      'https://images.boats.com/resize/1/38/17/8933817_20220414110006738_1_XLARGE.jpg'
    ],
    description: 'Exceptional blue-water catamaran with recent refit. Fully equipped for offshore cruising with watermaker, solar, and comprehensive navigation suite. Perfect for liveaboard and extended cruising.',

    hull: {
      material: 'Fiberglass',
      condition: 'Excellent',
      deckCondition: 'Excellent',
      throughHulls: 12,
      keelType: 'Fin',
      draft: 4.5
    },

    engines: {
      type: 'Diesel',
      hours: 850,
      propeller: 'Folding',
      fuelCapacity: 160,
      range: 1200
    },

    systems: {
      solarPanels: true,
      solarCapacity: 800,
      windGenerator: true,
      batteryCapacity: 600,
      batteryType: 'Lithium',
      inverterCapacity: 3000,
      generator: true,
      generatorHours: 450,
      watermaker: true,
      watermakerCapacity: 25,
      waterTankCapacity: 185,
      waterFiltration: true,
      hotWaterHeater: true,
      pressureWaterSystem: true,
      furlingSystem: true,
      sailInventory: ['Main', 'Genoa', 'Jib', 'Storm sails', 'Spinnaker'],
      riggingAge: 2,
      autopilot: true,
      autopilotType: 'Below-deck'
    },

    navigation: {
      gpsChartplotter: true,
      gpsScreenSize: 12,
      radar: true,
      radarType: 'Open array',
      depthSounder: true,
      windInstruments: true,
      vhfRadio: true,
      vhfDSC: true,
      ssbRadio: true,
      satellitePhone: true,
      ais: true,
      aisType: 'Transceiver',
      epirb: true
    },

    connectivity: {
      wifiBooster: true,
      usbOutlets: 12,
      computerNavigation: true
    },

    dinghy: {
      included: true,
      type: 'Hard bottom inflatable',
      length: 11,
      outboardMotor: true,
      outboardHP: 15,
      davits: true,
      storage: 'Davits'
    },

    safety: {
      lifeRaft: true,
      lifeRaftCapacity: 8,
      lifeJackets: 10,
      fireExtinguishers: 5,
      bilgePumps: 3,
      emergencySteering: true,
      epirb: true
    },

    comfort: {
      cabins: 4,
      berths: 8,
      heads: 4,
      airConditioning: true,
      heating: true,
      refrigeration: true,
      freezer: true,
      headroom: 6.5,
      galleySize: 'Large',
      ventilation: 'Excellent',
      insulation: true,
      washingMachine: true,
      entertainment: true
    },

    additional: {
      bowThruster: true,
      swimPlatform: true,
      bimini: true,
      canvasCondition: 'Excellent',
      bbqGrill: true,
      desalinationBackup: false
    },

    legal: {
      title: 'Clear',
      registration: 'Current',
      surveyAge: 0.5,
      insurance: true
    },

    cruising: {
      blueWaterCapable: true,
      cruisingReady: true,
      haulOutAccessible: true
    }
  },

  {
    id: 'yacht-2',
    name: 'Caribbean Dream',
    make: 'Bali',
    model: '4.8',
    year: 2020,
    price: 925000,
    length: 48,
    location: 'Tortola, BVI',
    images: [
      'https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg',
      'https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg'
    ],
    description: 'Like-new Bali 4.8 with innovative open-space design. Loaded with electronics, full solar/lithium system, and ready for immediate cruising. Exceptional liveaboard comfort with modern systems.',

    hull: {
      material: 'Fiberglass',
      condition: 'Excellent',
      deckCondition: 'Excellent',
      throughHulls: 14,
      keelType: 'Fin',
      draft: 4.2
    },

    engines: {
      type: 'Diesel',
      hours: 320,
      propeller: 'Folding',
      fuelCapacity: 185,
      range: 1400
    },

    systems: {
      solarPanels: true,
      solarCapacity: 1200,
      windGenerator: false,
      batteryCapacity: 800,
      batteryType: 'Lithium',
      inverterCapacity: 5000,
      generator: true,
      generatorHours: 150,
      watermaker: true,
      watermakerCapacity: 30,
      waterTankCapacity: 240,
      waterFiltration: true,
      hotWaterHeater: true,
      pressureWaterSystem: true,
      furlingSystem: true,
      sailInventory: ['Main', 'Genoa', 'Jib', 'Storm sails'],
      riggingAge: 1,
      autopilot: true,
      autopilotType: 'Below-deck'
    },

    navigation: {
      gpsChartplotter: true,
      gpsScreenSize: 16,
      radar: true,
      radarType: 'Dome',
      depthSounder: true,
      windInstruments: true,
      vhfRadio: true,
      vhfDSC: true,
      ssbRadio: false,
      satellitePhone: true,
      ais: true,
      aisType: 'Transceiver',
      epirb: true
    },

    connectivity: {
      wifiBooster: true,
      usbOutlets: 16,
      computerNavigation: true
    },

    dinghy: {
      included: true,
      type: 'Hard bottom inflatable',
      length: 12,
      outboardMotor: true,
      outboardHP: 20,
      davits: true,
      storage: 'Davits'
    },

    safety: {
      lifeRaft: true,
      lifeRaftCapacity: 10,
      lifeJackets: 12,
      fireExtinguishers: 6,
      bilgePumps: 4,
      emergencySteering: true,
      epirb: true
    },

    comfort: {
      cabins: 4,
      berths: 10,
      heads: 4,
      airConditioning: true,
      heating: true,
      refrigeration: true,
      freezer: true,
      headroom: 6.7,
      galleySize: 'Large',
      ventilation: 'Excellent',
      insulation: true,
      washingMachine: true,
      entertainment: true
    },

    additional: {
      bowThruster: true,
      swimPlatform: true,
      bimini: true,
      canvasCondition: 'Excellent',
      bbqGrill: true,
      desalinationBackup: true
    },

    legal: {
      title: 'Clear',
      registration: 'Current',
      surveyAge: 0.2,
      insurance: true
    },

    cruising: {
      blueWaterCapable: true,
      cruisingReady: true,
      haulOutAccessible: true
    }
  },

  {
    id: 'yacht-3',
    name: 'Trade Winds',
    make: 'Leopard',
    model: '46',
    year: 2016,
    price: 485000,
    length: 46,
    location: 'St. Martin',
    images: [
      'https://images.boats.com/resize/1/95/44/8869544_20220228092423903_1_XLARGE.jpg',
      'https://images.boats.com/resize/1/95/44/8869544_20220228092423903_1_XLARGE.jpg'
    ],
    description: 'Well-maintained Leopard 46 with solid equipment list. Watermaker, solar, good electronics. Great value for money, ready for Caribbean cruising. Owner has kept meticulous maintenance records.',

    hull: {
      material: 'Fiberglass',
      condition: 'Good',
      deckCondition: 'Good',
      throughHulls: 10,
      keelType: 'Fin',
      draft: 4.0
    },

    engines: {
      type: 'Diesel',
      hours: 1450,
      propeller: 'Fixed',
      fuelCapacity: 145,
      range: 1000
    },

    systems: {
      solarPanels: true,
      solarCapacity: 600,
      windGenerator: false,
      batteryCapacity: 440,
      batteryType: 'AGM',
      inverterCapacity: 2000,
      generator: true,
      generatorHours: 800,
      watermaker: true,
      watermakerCapacity: 20,
      waterTankCapacity: 170,
      waterFiltration: true,
      hotWaterHeater: true,
      pressureWaterSystem: true,
      furlingSystem: true,
      sailInventory: ['Main', 'Genoa', 'Jib'],
      riggingAge: 4,
      autopilot: true,
      autopilotType: 'Below-deck'
    },

    navigation: {
      gpsChartplotter: true,
      gpsScreenSize: 10,
      radar: true,
      radarType: 'Dome',
      depthSounder: true,
      windInstruments: true,
      vhfRadio: true,
      vhfDSC: true,
      ssbRadio: false,
      satellitePhone: false,
      ais: true,
      aisType: 'Receiver',
      epirb: true
    },

    connectivity: {
      wifiBooster: true,
      usbOutlets: 8,
      computerNavigation: true
    },

    dinghy: {
      included: true,
      type: 'Hard bottom inflatable',
      length: 10,
      outboardMotor: true,
      outboardHP: 15,
      davits: true,
      storage: 'Davits'
    },

    safety: {
      lifeRaft: true,
      lifeRaftCapacity: 8,
      lifeJackets: 8,
      fireExtinguishers: 4,
      bilgePumps: 3,
      emergencySteering: true,
      epirb: true
    },

    comfort: {
      cabins: 4,
      berths: 8,
      heads: 4,
      airConditioning: true,
      heating: false,
      refrigeration: true,
      freezer: true,
      headroom: 6.4,
      galleySize: 'Medium',
      ventilation: 'Good',
      insulation: false,
      washingMachine: false,
      entertainment: true
    },

    additional: {
      bowThruster: false,
      swimPlatform: true,
      bimini: true,
      canvasCondition: 'Good',
      bbqGrill: true,
      desalinationBackup: false
    },

    legal: {
      title: 'Clear',
      registration: 'Current',
      surveyAge: 1,
      insurance: true
    },

    cruising: {
      blueWaterCapable: true,
      cruisingReady: true,
      haulOutAccessible: true
    }
  },

  {
    id: 'yacht-4',
    name: 'Island Time',
    make: 'Fountaine Pajot',
    model: 'Saona 47',
    year: 2019,
    price: 725000,
    length: 47,
    location: 'Grenada',
    images: [
      'https://images.boats.com/resize/1/56/92/8895692_20220329082952933_1_XLARGE.jpg',
      'https://images.boats.com/resize/1/56/92/8895692_20220329082952933_1_XLARGE.jpg'
    ],
    description: 'Stunning Fountaine Pajot Saona 47 with flybridge. Excellent systems, recent lithium upgrade, comprehensive electronics. Perfect blend of performance and luxury. Charter-equipped and ready.',

    hull: {
      material: 'Fiberglass',
      condition: 'Excellent',
      deckCondition: 'Excellent',
      throughHulls: 13,
      keelType: 'Fin',
      draft: 4.3
    },

    engines: {
      type: 'Diesel',
      hours: 680,
      propeller: 'Folding',
      fuelCapacity: 200,
      range: 1300
    },

    systems: {
      solarPanels: true,
      solarCapacity: 1000,
      windGenerator: true,
      batteryCapacity: 700,
      batteryType: 'Lithium',
      inverterCapacity: 4000,
      generator: true,
      generatorHours: 350,
      watermaker: true,
      watermakerCapacity: 28,
      waterTankCapacity: 220,
      waterFiltration: true,
      hotWaterHeater: true,
      pressureWaterSystem: true,
      furlingSystem: true,
      sailInventory: ['Main', 'Genoa', 'Jib', 'Storm sails', 'Spinnaker'],
      riggingAge: 1.5,
      autopilot: true,
      autopilotType: 'Below-deck'
    },

    navigation: {
      gpsChartplotter: true,
      gpsScreenSize: 14,
      radar: true,
      radarType: 'Open array',
      depthSounder: true,
      windInstruments: true,
      vhfRadio: true,
      vhfDSC: true,
      ssbRadio: true,
      satellitePhone: true,
      ais: true,
      aisType: 'Transceiver',
      epirb: true
    },

    connectivity: {
      wifiBooster: true,
      usbOutlets: 14,
      computerNavigation: true
    },

    dinghy: {
      included: true,
      type: 'Hard bottom inflatable',
      length: 12,
      outboardMotor: true,
      outboardHP: 20,
      davits: true,
      storage: 'Davits'
    },

    safety: {
      lifeRaft: true,
      lifeRaftCapacity: 10,
      lifeJackets: 10,
      fireExtinguishers: 5,
      bilgePumps: 4,
      emergencySteering: true,
      epirb: true
    },

    comfort: {
      cabins: 5,
      berths: 10,
      heads: 5,
      airConditioning: true,
      heating: true,
      refrigeration: true,
      freezer: true,
      headroom: 6.6,
      galleySize: 'Large',
      ventilation: 'Excellent',
      insulation: true,
      washingMachine: true,
      entertainment: true
    },

    additional: {
      bowThruster: true,
      swimPlatform: true,
      bimini: true,
      canvasCondition: 'Excellent',
      bbqGrill: true,
      desalinationBackup: true
    },

    legal: {
      title: 'Clear',
      registration: 'Current',
      surveyAge: 0.3,
      insurance: true
    },

    cruising: {
      blueWaterCapable: true,
      cruisingReady: true,
      haulOutAccessible: true
    }
  },

  {
    id: 'yacht-5',
    name: 'Sea Breeze',
    make: 'Catana',
    model: '53',
    year: 2015,
    price: 850000,
    length: 53,
    location: 'St. Lucia',
    images: [
      'https://images.boats.com/resize/1/42/68/8954268_20220510094735823_1_XLARGE.jpg',
      'https://images.boats.com/resize/1/42/68/8954268_20220510094735823_1_XLARGE.jpg'
    ],
    description: 'Performance cruising catamaran built for ocean passages. Carbon mast, full battened main, excellent sail plan. Complete electronics suite, watermaker, solar/wind power. True blue-water vessel.',

    hull: {
      material: 'Carbon Fiber',
      condition: 'Excellent',
      deckCondition: 'Good',
      throughHulls: 11,
      keelType: 'Fin',
      draft: 5.2
    },

    engines: {
      type: 'Diesel',
      hours: 1100,
      propeller: 'Folding',
      fuelCapacity: 175,
      range: 1500
    },

    systems: {
      solarPanels: true,
      solarCapacity: 900,
      windGenerator: true,
      batteryCapacity: 650,
      batteryType: 'Lithium',
      inverterCapacity: 3500,
      generator: true,
      generatorHours: 550,
      watermaker: true,
      watermakerCapacity: 35,
      waterTankCapacity: 200,
      waterFiltration: true,
      hotWaterHeater: true,
      pressureWaterSystem: true,
      furlingSystem: true,
      sailInventory: ['Main', 'Genoa', 'Jib', 'Storm sails', 'Spinnaker', 'Gennaker'],
      riggingAge: 3,
      autopilot: true,
      autopilotType: 'Wind vane'
    },

    navigation: {
      gpsChartplotter: true,
      gpsScreenSize: 15,
      radar: true,
      radarType: 'Open array',
      depthSounder: true,
      windInstruments: true,
      vhfRadio: true,
      vhfDSC: true,
      ssbRadio: true,
      satellitePhone: true,
      ais: true,
      aisType: 'Transceiver',
      epirb: true
    },

    connectivity: {
      wifiBooster: true,
      usbOutlets: 10,
      computerNavigation: true
    },

    dinghy: {
      included: true,
      type: 'Rigid',
      length: 11,
      outboardMotor: true,
      outboardHP: 25,
      davits: true,
      storage: 'Davits'
    },

    safety: {
      lifeRaft: true,
      lifeRaftCapacity: 10,
      lifeJackets: 12,
      fireExtinguishers: 6,
      bilgePumps: 5,
      emergencySteering: true,
      epirb: true
    },

    comfort: {
      cabins: 4,
      berths: 8,
      heads: 4,
      airConditioning: true,
      heating: false,
      refrigeration: true,
      freezer: true,
      headroom: 6.5,
      galleySize: 'Large',
      ventilation: 'Excellent',
      insulation: true,
      washingMachine: false,
      entertainment: true
    },

    additional: {
      bowThruster: false,
      swimPlatform: true,
      bimini: true,
      canvasCondition: 'Good',
      bbqGrill: true,
      desalinationBackup: true
    },

    legal: {
      title: 'Clear',
      registration: 'Current',
      surveyAge: 0.8,
      insurance: true
    },

    cruising: {
      blueWaterCapable: true,
      cruisingReady: true,
      haulOutAccessible: true
    }
  },

  {
    id: 'yacht-6',
    name: 'Horizon Seeker',
    make: 'Privilege',
    model: '51',
    year: 2014,
    price: 550000,
    length: 51,
    location: 'Antigua',
    images: [
      'https://images.boats.com/resize/1/27/83/8922783_20220405093214768_1_XLARGE.jpg',
      'https://images.boats.com/resize/1/27/83/8922783_20220405093214768_1_XLARGE.jpg'
    ],
    description: 'Classic Privilege 51 with solid build quality. Recent watermaker and electronics upgrade. Good sail inventory, functional systems. Ideal for experienced cruisers looking for value.',

    hull: {
      material: 'Fiberglass',
      condition: 'Good',
      deckCondition: 'Fair',
      throughHulls: 12,
      keelType: 'Full',
      draft: 4.8
    },

    engines: {
      type: 'Diesel',
      hours: 2200,
      propeller: 'Fixed',
      fuelCapacity: 190,
      range: 1100
    },

    systems: {
      solarPanels: true,
      solarCapacity: 500,
      windGenerator: true,
      batteryCapacity: 500,
      batteryType: 'AGM',
      inverterCapacity: 2500,
      generator: true,
      generatorHours: 1200,
      watermaker: true,
      watermakerCapacity: 22,
      waterTankCapacity: 210,
      waterFiltration: true,
      hotWaterHeater: true,
      pressureWaterSystem: true,
      furlingSystem: true,
      sailInventory: ['Main', 'Genoa', 'Storm sails'],
      riggingAge: 5,
      autopilot: true,
      autopilotType: 'Wind vane'
    },

    navigation: {
      gpsChartplotter: true,
      gpsScreenSize: 9,
      radar: true,
      radarType: 'Dome',
      depthSounder: true,
      windInstruments: true,
      vhfRadio: true,
      vhfDSC: true,
      ssbRadio: true,
      satellitePhone: false,
      ais: true,
      aisType: 'Receiver',
      epirb: true
    },

    connectivity: {
      wifiBooster: false,
      usbOutlets: 6,
      computerNavigation: true
    },

    dinghy: {
      included: true,
      type: 'Soft inflatable',
      length: 9,
      outboardMotor: true,
      outboardHP: 10,
      davits: false,
      storage: 'On deck'
    },

    safety: {
      lifeRaft: true,
      lifeRaftCapacity: 8,
      lifeJackets: 8,
      fireExtinguishers: 4,
      bilgePumps: 3,
      emergencySteering: true,
      epirb: true
    },

    comfort: {
      cabins: 4,
      berths: 8,
      heads: 3,
      airConditioning: false,
      heating: false,
      refrigeration: true,
      freezer: true,
      headroom: 6.3,
      galleySize: 'Medium',
      ventilation: 'Good',
      insulation: false,
      washingMachine: false,
      entertainment: false
    },

    additional: {
      bowThruster: false,
      swimPlatform: false,
      bimini: true,
      canvasCondition: 'Fair',
      bbqGrill: false,
      desalinationBackup: false
    },

    legal: {
      title: 'Clear',
      registration: 'Current',
      surveyAge: 1.5,
      insurance: true
    },

    cruising: {
      blueWaterCapable: true,
      cruisingReady: false,
      haulOutAccessible: true
    }
  },

  {
    id: 'yacht-7',
    name: 'Azure Spirit',
    make: 'Outremer',
    model: '51',
    year: 2017,
    price: 1250000,
    length: 51,
    location: 'Martinique',
    images: [
      'https://images.boats.com/resize/1/71/52/8967152_20220521103426944_1_XLARGE.jpg',
      'https://images.boats.com/resize/1/71/52/8967152_20220521103426944_1_XLARGE.jpg'
    ],
    description: 'Premium performance catamaran with exceptional build quality. Loaded with high-end systems: full lithium power, watermaker, comprehensive navigation, and safety equipment. Turn-key ocean cruiser.',

    hull: {
      material: 'Carbon Fiber',
      condition: 'Excellent',
      deckCondition: 'Excellent',
      throughHulls: 10,
      keelType: 'Fin',
      draft: 5.5
    },

    engines: {
      type: 'Diesel',
      hours: 420,
      propeller: 'Folding',
      fuelCapacity: 150,
      range: 1600
    },

    systems: {
      solarPanels: true,
      solarCapacity: 1500,
      windGenerator: true,
      batteryCapacity: 900,
      batteryType: 'Lithium',
      inverterCapacity: 6000,
      generator: true,
      generatorHours: 200,
      watermaker: true,
      watermakerCapacity: 40,
      waterTankCapacity: 250,
      waterFiltration: true,
      hotWaterHeater: true,
      pressureWaterSystem: true,
      furlingSystem: true,
      sailInventory: ['Main', 'Genoa', 'Jib', 'Storm sails', 'Spinnaker', 'Code Zero'],
      riggingAge: 1,
      autopilot: true,
      autopilotType: 'Below-deck'
    },

    navigation: {
      gpsChartplotter: true,
      gpsScreenSize: 16,
      radar: true,
      radarType: 'Open array',
      depthSounder: true,
      windInstruments: true,
      vhfRadio: true,
      vhfDSC: true,
      ssbRadio: true,
      satellitePhone: true,
      ais: true,
      aisType: 'Transceiver',
      epirb: true
    },

    connectivity: {
      wifiBooster: true,
      usbOutlets: 18,
      computerNavigation: true
    },

    dinghy: {
      included: true,
      type: 'Rigid',
      length: 13,
      outboardMotor: true,
      outboardHP: 30,
      davits: true,
      storage: 'Davits'
    },

    safety: {
      lifeRaft: true,
      lifeRaftCapacity: 12,
      lifeJackets: 14,
      fireExtinguishers: 8,
      bilgePumps: 5,
      emergencySteering: true,
      epirb: true
    },

    comfort: {
      cabins: 3,
      berths: 6,
      heads: 3,
      airConditioning: true,
      heating: true,
      refrigeration: true,
      freezer: true,
      headroom: 6.8,
      galleySize: 'Large',
      ventilation: 'Excellent',
      insulation: true,
      washingMachine: true,
      entertainment: true
    },

    additional: {
      bowThruster: true,
      swimPlatform: true,
      bimini: true,
      canvasCondition: 'Excellent',
      bbqGrill: true,
      desalinationBackup: true
    },

    legal: {
      title: 'Clear',
      registration: 'Current',
      surveyAge: 0.1,
      insurance: true
    },

    cruising: {
      blueWaterCapable: true,
      cruisingReady: true,
      haulOutAccessible: true
    }
  },

  {
    id: 'yacht-8',
    name: 'Coral Reef Runner',
    make: 'Seawind',
    model: '1260',
    year: 2019,
    price: 675000,
    length: 41,
    location: 'Puerto Rico',
    images: [
      'https://images.boats.com/resize/1/84/91/8938491_20220421091547629_1_XLARGE.jpg',
      'https://images.boats.com/resize/1/84/91/8938491_20220421091547629_1_XLARGE.jpg'
    ],
    description: 'Modern shallow-draft catamaran perfect for ICW and Caribbean coastal cruising. Excellent systems, good electronics, watermaker. Ideal for gunkhol and exploring shallow anchorages.',

    hull: {
      material: 'Fiberglass',
      condition: 'Excellent',
      deckCondition: 'Excellent',
      throughHulls: 9,
      keelType: 'Centerboard',
      draft: 3.2
    },

    engines: {
      type: 'Diesel',
      hours: 580,
      propeller: 'Folding',
      fuelCapacity: 120,
      range: 900
    },

    systems: {
      solarPanels: true,
      solarCapacity: 700,
      windGenerator: false,
      batteryCapacity: 550,
      batteryType: 'Lithium',
      inverterCapacity: 3000,
      generator: false,
      generatorHours: 0,
      watermaker: true,
      watermakerCapacity: 18,
      waterTankCapacity: 140,
      waterFiltration: true,
      hotWaterHeater: true,
      pressureWaterSystem: true,
      furlingSystem: true,
      sailInventory: ['Main', 'Genoa', 'Jib'],
      riggingAge: 1,
      autopilot: true,
      autopilotType: 'Below-deck'
    },

    navigation: {
      gpsChartplotter: true,
      gpsScreenSize: 12,
      radar: false,
      radarType: undefined,
      depthSounder: true,
      windInstruments: true,
      vhfRadio: true,
      vhfDSC: true,
      ssbRadio: false,
      satellitePhone: false,
      ais: true,
      aisType: 'Transceiver',
      epirb: true
    },

    connectivity: {
      wifiBooster: true,
      usbOutlets: 10,
      computerNavigation: true
    },

    dinghy: {
      included: true,
      type: 'Hard bottom inflatable',
      length: 10,
      outboardMotor: true,
      outboardHP: 15,
      davits: true,
      storage: 'Davits'
    },

    safety: {
      lifeRaft: false,
      lifeRaftCapacity: 0,
      lifeJackets: 8,
      fireExtinguishers: 4,
      bilgePumps: 3,
      emergencySteering: true,
      epirb: true
    },

    comfort: {
      cabins: 3,
      berths: 6,
      heads: 2,
      airConditioning: true,
      heating: false,
      refrigeration: true,
      freezer: true,
      headroom: 6.4,
      galleySize: 'Medium',
      ventilation: 'Excellent',
      insulation: true,
      washingMachine: false,
      entertainment: true
    },

    additional: {
      bowThruster: true,
      swimPlatform: true,
      bimini: true,
      canvasCondition: 'Excellent',
      bbqGrill: true,
      desalinationBackup: false
    },

    legal: {
      title: 'Clear',
      registration: 'Current',
      surveyAge: 0.4,
      insurance: true
    },

    cruising: {
      blueWaterCapable: false,
      cruisingReady: true,
      haulOutAccessible: true
    }
  }
];
