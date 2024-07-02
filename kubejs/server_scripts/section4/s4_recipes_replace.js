ServerEvents.recipes(e => {
    //remove

    //logistics
    e.remove({id:'pneumaticcraft:pressure_tube'})
    e.remove({id:'pneumaticcraft:thermal_lagging'})
    e.remove({id:'pneumaticcraft:heat_pipe'})
    e.remove({id:'pneumaticcraft:assembly/advanced_pressure_tube'})

    //machinery
    e.remove({id:'pneumaticcraft:pressure_chamber_wall'})
    e.remove({id:'pneumaticcraft:pressure_chamber_glass'})
    e.remove({id:'pneumaticcraft:pressure_chamber_x1'})
    e.remove({id:'pneumaticcraft:pressure_chamber_x4'})
    e.remove({id:'pneumaticcraft:thermopneumatic_processing_plant'})
    e.remove({id:'pneumaticcraft:refinery'})
    e.remove({id:'pneumaticcraft:refinery_output'})
    e.remove({id:'pneumaticcraft:vacuum_pump'})
    e.remove({id:'pneumaticcraft:vacuum_module'})
    e.remove({id:'pneumaticcraft:vortex_tube'})
    e.remove({id:'pneumaticcraft:etching_tank'})
    e.remove({id:'pneumaticcraft:uv_light_box'})
    e.remove({id:'pneumaticcraft:fluid_mixer'})
    e.remove({id:'pneumaticcraft:assembly_platform'})
    e.remove({id:'pneumaticcraft:assembly_drill'})
    e.remove({id:'pneumaticcraft:assembly_io_unit_import'})
    e.remove({id:'pneumaticcraft:assembly_io_unit_export'})
    e.remove({id:'pneumaticcraft:assembly_drill'})
    e.remove({id:'pneumaticcraft:assembly_laser'})
    e.remove({id:'pneumaticcraft:assembly_controller'})
    e.remove({id:'pneumaticcraft:heat_frame'})

    e.remove({id:'pneumaticcraft:universal_sensor'})
    e.remove({id:'pneumaticcraft:spawner_agitator'})
    e.remove({id:'pneumaticcraft:spawner_extractor'})
    e.remove({id:'pneumaticcraft:pressurized_spawner'})
    e.remove({id:'pneumaticcraft:spawner_core_shell'})
    
    e.remove({id:'createdieselgenerators:crafting/pumpjack_bearing'})
    e.remove({id:'createdieselgenerators:crafting/pumpjack_head'})
    e.remove({id:'createdieselgenerators:mechanical_crafting/pumpjack_crank'})

    //logistics
    e.remove({id:'pneumaticcraft:logistics_frame_passive_provider'})
    e.remove({id:'pneumaticcraft:logistics_frame_active_provider'})
    e.remove({id:'pneumaticcraft:logistics_frame_requester'})
    e.remove({id:'pneumaticcraft:logistics_frame_storage'})
    e.remove({id:'pneumaticcraft:logistics_frame_default_storage'})
    e.remove({id:'pneumaticcraft:classify_filter'})

    //computer
    e.remove({id: 'computercraft:computer_advanced'})
    e.remove({id: 'computercraft:computer_advanced_upgrade'})
    e.remove({id: 'computercraft:monitor_advanced'})

    //equipment
    e.remove({id:'pneumaticcraft:memory_stick'})
    e.remove({id:'pneumaticcraft:air_canister'})
    e.remove({id:'pneumaticcraft:pneumatic_wrench'})
    e.remove({id:'pneumaticcraft:camo_applicator'})
    e.remove({id:'pneumaticcraft:logistics_configurator'})
    e.remove({id:'pneumaticcraft:reinforced_air_canister'})
    e.remove({id:'pneumaticcraft:module_expansion_card'})

    //components
    e.remove({id:'pneumaticcraft:reinforced_stone'})
    e.remove({id:'pneumaticcraft:pressure_chamber/turbine_blade'})
    e.remove({id:'pneumaticcraft:turbine_rotor'})
    e.remove({id:'pneumaticcraft:pressure_gauge'})
    e.remove({id:'pneumaticcraft:printed_circuit_board'})
    e.remove({id:'pneumaticcraft:logistics_core'})
    e.remove({id:'pneumaticcraft:pneumatic_cylinder'})
    e.remove({id:'pneumaticcraft:assembly/unassembled_pcb'})
    e.remove({id:'pneumaticcraft:thermo_plant/upgrade_matrix'})
    /*e.remove({id:'pneumaticcraft:assembly/advanced_pressure_tube'})
    e.remove({id:'pneumaticcraft:assembly/pressure_chamber_valve'})*/

    //resources
    e.remove({id:'createdieselgenerators:basin_fermenting/fermentable'})
    e.remove({id:'createdieselgenerators:basin_fermenting/fermented_spider_eye'})

    e.remove({id:'pneumaticcraft:thermo_plant/vegetable_oil_from_crops'})
    e.remove({id:'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds'})

    e.remove({id:'pneumaticcraft:thermo_plant/ethanol_from_apple'})
    e.remove({id:'pneumaticcraft:thermo_plant/ethanol_from_melon'})
    e.remove({id:'pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato'})
    e.remove({id:'pneumaticcraft:thermo_plant/ethanol_from_potato'})
    e.remove({id:'pneumaticcraft:thermo_plant/ethanol_from_sugar'})
    e.remove({id:'pneumaticcraft:thermo_plant/ethanol_from_sweet_berries'})

    e.remove({id:'createaddition:compacting/seed_oil'})

    e.remove({id:'pneumaticcraft:pressure_chamber/empty_pcb'})
    e.remove({id:'pneumaticcraft:pressure_chamber/etching_acid'})

    e.remove({id:'pneumaticcraft:refinery/oil_2'})
    e.remove({id:'pneumaticcraft:refinery/oil_3'})
    e.remove({id:'pneumaticcraft:refinery/oil_4'})

    e.remove({id:'pneumaticcraft:thermo_plant/plastic_from_lpg'})
    e.remove({id:'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})

    //random
    e.remove({id:'pneumaticcraft:pressure_chamber/wheat_flour'})
    e.remove({id:'pneumaticcraft:explosion_crafting/wheat_flour'})
    e.remove({id:'pneumaticcraft:sourdough'})
    e.remove({id:'minecraft:ender_eye'})

    //recipes

    //logstics
    e.shaped('4x pneumaticcraft:thermal_lagging', [ 
    'GIT', 
    'IG '
    ], {
      G: 'kubejs:tempered_glass',
      I: '#ico:insulator',
      T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:thermal_lagging')

    e.shaped('8x pneumaticcraft:pressure_tube', [ 
    ' T ', 
    'IGI',
    ' L '
    ], {
      G: 'kubejs:tempered_glass',
      I: 'pneumaticcraft:ingot_iron_compressed',
      L: 'kubejs:sealant',
      T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:pressure_tube')

    e.shaped('8x pneumaticcraft:pressure_tube', [ 
      ' I ', 
      'LGT',
      ' I '
      ], {
        G: 'kubejs:tempered_glass',
        I: 'pneumaticcraft:ingot_iron_compressed',
        L: 'kubejs:sealant',
        T: '#ico:tool/hammer'
      }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:pressure_tube_vertical')

    let inter = 'kubejs:incomplete_heat_pipe'
    e.recipes.create.sequenced_assembly([
      Item.of('4x pneumaticcraft:heat_pipe').withChance(16.0)
    ], 'pneumaticcraft:compressed_iron_block', [
      e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:thermal_lagging']),
      e.recipes.createPressing(inter, inter),
      e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:thermal_lagging']),
    ]).transitionalItem(inter).loops(1)

    e.recipes.createDeploying("kubejs:unfinished_advanced_pressure_tube", ['pneumaticcraft:reinforced_pressure_tube', 'kubejs:aluminum_sheet'])

    e.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "kubejs:unfinished_advanced_pressure_tube"
      },
      "program": "laser",
      "result": {
        "item": "pneumaticcraft:advanced_pressure_tube"
      }
    })

    //machinery
    e.shaped('16x pneumaticcraft:pressure_chamber_wall', [ 
      'SSS', 
      'SIS',
      'SSS'
      ], {
        I: 'compressedcreativity:compressed_iron_casing',
        S: 'pneumaticcraft:reinforced_bricks'
    }).id('ico:pressure_chamber_wall')

    e.shapeless('pneumaticcraft:pressure_chamber_glass', ['kubejs:tempered_glass', 'pneumaticcraft:pressure_chamber_wall'])
    e.shapeless('4x pneumaticcraft:pressure_chamber_glass', ['kubejs:tempered_glass', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall'])

    e.shaped('pneumaticcraft:thermopneumatic_processing_plant', [ 
      'LST', 
      'GIG',
      'PSP'
      ], {
        I: 'compressedcreativity:compressed_iron_casing',
        S: 'pneumaticcraft:reinforced_bricks',
        G: 'kubejs:tempered_glass',
        P: 'kubejs:high_pressure_plate',
        L: 'kubejs:sealant',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:thermopneumatic_processing_plant')

    e.shaped('createdieselgenerators:pumpjack_bearing', [ 
      'ANA', 
      'NBN',
      'ANA'
      ], {
        B: 'kubejs:lubricated_bearing',
        N: 'kubejs:nickel_ingot',
        A: 'create:andesite_alloy'
    }).id('ico:pumpjack_bearing')

    e.shaped('createdieselgenerators:pumpjack_head', [ 
      'A A', 
      'NKN',
      'A A'
      ], {
        N: 'kubejs:high_pressure_plate',
        A: 'create:andesite_alloy',
        K: 'kubejs:carbon_steel_rod'
    }).id('ico:pumpjack_head')

    e.recipes.create.mechanical_crafting('createdieselgenerators:pumpjack_crank', [
      'BSB',
      ' I ',
      'ASA',
      'NIN',
      'ANA'
    ], {
      A: 'create:andesite_alloy',
      I: 'pneumaticcraft:pressure_tube',
      S: 'kubejs:wrought_iron_sheet',
      N: 'kubejs:nickel_ingot',
      B: 'kubejs:lubricated_bearing'
    })

    e.shaped('pneumaticcraft:refinery', [ 
      'LBT', 
      'SGS',
      'SIS'
      ], {
        G: 'kubejs:tempered_glass',
        I: 'compressedcreativity:compressed_iron_casing',
        B: 'kubejs:lubricated_bearing',
        S: 'pneumaticcraft:reinforced_bricks',
        L: 'kubejs:sealant',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:refinery')

    e.recipes.create.mechanical_crafting('pneumaticcraft:refinery_output', [
      ' L ',
      'SES',
      'SGS',
      'SGS',
      'PIP'
    ], {
      G: 'kubejs:tempered_glass',
      I: 'compressedcreativity:compressed_iron_casing',
      E: 'kubejs:logic_circuit',
      S: 'pneumaticcraft:reinforced_bricks',
      L: 'kubejs:sealant',
      P: 'kubejs:high_pressure_plate'
    })

    e.shaped('pneumaticcraft:vacuum_pump', [ 
      '  T', 
      'GRG',
      'SNS'
      ], {
        N: 'kubejs:high_pressure_plate',
        R: 'pneumaticcraft:turbine_rotor',
        G: 'pneumaticcraft:pressure_gauge',
        S: 'pneumaticcraft:reinforced_bricks',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:vacuum_pump')

    e.shaped('pneumaticcraft:vacuum_module', [ 
      'RG'
      ], {
        R: 'pneumaticcraft:vacuum_pump',
        G: 'pneumaticcraft:pressure_tube'
    }).id('ico:vacuum_module')

    e.shaped('pneumaticcraft:universal_sensor', [ 
      ' DT', 
      'PCP',
      'PRP'
      ], {
        D: 'minecraft:daylight_detector',
        P: 'pneumaticcraft:plastic',
        R: 'kubejs:redstone_cable',
        C: 'pneumaticcraft:printed_circuit_board',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:universal_sensor')

    e.shaped('pneumaticcraft:spawner_agitator', [ 
      'CPC', 
      'PDP',
      'CPC'
      ], {
        D: 'minecraft:ender_eye',
        P: 'pneumaticcraft:plastic',
        C: 'kubejs:high_pressure_plate',
    }).id('ico:spawner_agitator')

    e.shaped('pneumaticcraft:spawner_agitator', [ 
      'PCP', 
      'CDC',
      'PCP'
      ], {
        D: 'minecraft:ender_eye',
        P: 'pneumaticcraft:plastic',
        C: 'kubejs:high_pressure_plate',
    }).id('ico:spawner_agitator_2')

    e.shaped('pneumaticcraft:spawner_extractor', [ 
      ' GT', 
      'PVP',
      'CSC'
      ], {
        G: 'kubejs:tempered_glass',
        P: 'pneumaticcraft:plastic',
        V: 'pneumaticcraft:vacuum_pump',
        C: 'kubejs:high_pressure_plate',
        S: 'pneumaticcraft:spawner_agitator',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:spawner_extractor')

    e.shaped('2x pneumaticcraft:spawner_core_shell', [ 
      ' P ', 
      'PCP',
      ' P '
      ], {
        P: 'pneumaticcraft:plastic',
        C: 'pneumaticcraft:printed_circuit_board',
    }).id('ico:spawner_core_shell')

    e.shaped('pneumaticcraft:vortex_tube', [ 
      'CVC', 
      ' IT',
      'CVC'
      ], {
        I: 'create:copper_sheet',
        V: 'pneumaticcraft:pressure_tube',
        C: 'kubejs:high_pressure_plate',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:vortex_tube')

    e.shaped('pneumaticcraft:charging_station', [ 
      'V T', 
      'III',
      'SSS'
      ], {
        I: 'create:copper_sheet',
        V: 'pneumaticcraft:pressure_tube',
        S: 'pneumaticcraft:reinforced_bricks',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:charging_station')

    e.recipes.create.mechanical_crafting('pneumaticcraft:etching_tank', [
          ' RRR ',
          'PGGGP',
          'COIOC'
    ], {
          G: 'kubejs:tempered_glass',
          I: 'compressedcreativity:compressed_iron_casing',
          O: 'create:sturdy_sheet',
          P: 'pneumaticcraft:plastic',
          C: 'kubejs:high_pressure_plate',
          R: 'kubejs:rubber',
    })

    e.recipes.create.mechanical_crafting('pneumaticcraft:uv_light_box', [
          'PPR ',
          'OGGG',
          'BIPP'
    ], {
          G: 'minecraft:tinted_glass',
          I: 'compressedcreativity:compressed_iron_casing',
          O: 'create:sturdy_sheet',
          P: 'pneumaticcraft:plastic',
          R: 'kubejs:laser_emitter',
          B: 'pneumaticcraft:pcb_blueprint',
    })

    e.shaped('pneumaticcraft:fluid_mixer', [ 
      ' GT', 
      'PRP',
      'GIG'
      ], {
        G: 'kubejs:tempered_glass',
        I: 'compressedcreativity:compressed_iron_casing',
        R: 'pneumaticcraft:turbine_rotor',
        P: 'pneumaticcraft:plastic',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:fluid_mixer')

    e.shaped('pneumaticcraft:assembly_platform', [ 
      ' RT', 
      'PSP',
      'ICI'
      ], {
        I: 'kubejs:high_pressure_plate',
        S: 'pneumaticcraft:pneumatic_cylinder',
        C: 'pneumaticcraft:printed_circuit_board',
        B: 'pneumaticcraft:reinforced_stone_brick',
        P: 'pneumaticcraft:plastic',
        R: 'kubejs:rubber',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:assembly_platform')

    e.shaped('pneumaticcraft:assembly_drill', [ 
      'SDT', 
      'S  ',
      'ICI'
      ], {
        I: 'kubejs:high_pressure_plate',
        S: 'pneumaticcraft:pneumatic_cylinder',
        D: 'minecraft:diamond',
        C: 'pneumaticcraft:assembly_platform',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:assembly_drill')

    e.shaped('pneumaticcraft:assembly_laser', [ 
      'SDT', 
      'S  ',
      'ICI'
      ], {
        I: 'kubejs:high_pressure_plate',
        S: 'pneumaticcraft:pneumatic_cylinder',
        D: 'kubejs:laser_emitter',
        C: 'pneumaticcraft:assembly_platform',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:assembly_laser')

    e.shaped('pneumaticcraft:assembly_io_unit_import', [ 
      'SDT', 
      'S  ',
      'ICI'
      ], {
        I: 'kubejs:high_pressure_plate',
        S: 'pneumaticcraft:pneumatic_cylinder',
        D: 'minecraft:hopper',
        C: 'pneumaticcraft:assembly_platform',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:assembly_io_unit_import')

    e.shaped('pneumaticcraft:assembly_io_unit_export', [ 
      'DST', 
      'S  ',
      'ICI'
      ], {
        I: 'kubejs:high_pressure_plate',
        S: 'pneumaticcraft:pneumatic_cylinder',
        D: 'minecraft:hopper',
        C: 'pneumaticcraft:assembly_platform',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:assembly_io_unit_export')

    e.shaped('pneumaticcraft:assembly_controller', [ 
      ' OT', 
      'UPI',
      'ICI'
      ], {
        I: 'kubejs:high_pressure_plate',
        O: 'kubejs:oled_display',
        U: 'pneumaticcraft:pressure_tube',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'pneumaticcraft:assembly_platform',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:assembly_controller')

    e.shaped('pneumaticcraft:heat_frame', [ 
      ' PT', 
      'IFI',
      'IPI'
      ], {
        I: 'kubejs:high_pressure_plate',
        P: 'pneumaticcraft:plastic',
        F: 'minecraft:furance',
        T: '#ico:tool/screwdriver'  
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:heat_frame')

    //logistics
    e.shaped('6x pneumaticcraft:logistics_frame_passive_provider', [ 
      'AT', 
      'F ',
      'C '
      ], {
        F: 'kubejs:compressed_framing',
        A: 'minecraft:dispenser',
        C: 'pneumaticcraft:logistics_core',
        T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:logistics_passive_provider_frame')

    e.shaped('6x pneumaticcraft:logistics_frame_requester', [ 
      'AT', 
      'F ',
      'C '
      ], {
        F: 'kubejs:compressed_framing',
        A: 'minecraft:hopper',
        C: 'pneumaticcraft:logistics_core',
        T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:logistics_frame_requester')

    e.shaped('pneumaticcraft:logistics_frame_active_provider', [ 
      'FT',
      ], {
        F: 'pneumaticcraft:logistics_frame_passive_provider',
        T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:logistics_frame_active_provider')
    
    e.shaped('pneumaticcraft:logistics_frame_passive_provider', [ 
      'FT',
      ], {
        F: 'pneumaticcraft:logistics_frame_active_provider',
        T: '#ico:tool/file'
    }).damageIngredient(Item.of('#ico:tool/file')).id('ico:logistics_frame_passive_provider_2')

    e.shaped('pneumaticcraft:logistics_frame_storage', [ 
      'FT',
      ], {
        F: 'pneumaticcraft:logistics_frame_requester',
        T: '#ico:tool/file'
    }).damageIngredient(Item.of('#ico:tool/file')).id('ico:logistics_frame_storage')

    e.shaped('pneumaticcraft:logistics_frame_default_storage', [ 
      'FT',
      ], {
        F: 'pneumaticcraft:logistics_frame_storage',
        T: '#ico:tool/file'
    }).damageIngredient(Item.of('#ico:tool/file')).id('ico:logistics_frame_default_storage')

    e.shaped('pneumaticcraft:logistics_frame_requester', [ 
      'FT',
      ], {
        F: 'pneumaticcraft:logistics_frame_storage',
        T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:logistics_frame_requester_2')

    e.shaped('pneumaticcraft:logistics_frame_storage', [ 
      'FT',
      ], {
        F: 'pneumaticcraft:logistics_frame_default_storage',
        T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:logistics_frame_storage_2')

    e.shaped('2x pneumaticcraft:logistics_module', [ 
      ' CT', 
      'PFP'
      ], {
        F: 'kubejs:compressed_framing',
        P: 'pneumaticcraft:pressure_tube',
        C: 'pneumaticcraft:logistics_core',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:logistics_module')

    e.shapeless('4x pneumaticcraft:classify_filter', ['pneumaticcraft:logistics_core', 'pneumaticcraft:plastic']).id('ico:classify_filter')

    //components
    e.shaped('8x pneumaticcraft:reinforced_stone', [ 
      'SAS', 
      'AIA',
      'SAS'
      ], {
        A: 'create:andesite_alloy',
        I: 'pneumaticcraft:ingot_iron_compressed',
        S: '#forge:stone'
      }).id('ico:reinforced_stone')
  
    e.shaped('8x pneumaticcraft:reinforced_stone', [ 
    'ASA', 
    'SIS',
    'ASA'
    ], {
      A: 'create:andesite_alloy',
      I: 'pneumaticcraft:ingot_iron_compressed',
      S: '#forge:stone'
    }).id('ico:reinforced_stone_2')

    e.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
        "item": "pneumaticcraft:plastic"
        },
        {
        "type": "pneumaticcraft:stacked_item",
        "item": "minecraft:redstone",
        "count": 2
        }
      ],
      "pressure": 2,
      "results": [
        {
        "item": "pneumaticcraft:turbine_blade"
        }
      ]
    })

    inter = 'kubejs:incomplete_logistics_core'
	  e.recipes.create.sequenced_assembly([
		  Item.of('3x pneumaticcraft:logistics_core').withChance(90.0)
	  ], 'create:precision_mechanism', [
      e.recipes.createDeploying(inter, [inter, 'kubejs:redstone_cable']),
		  e.recipes.createDeploying(inter, [inter, 'kubejs:lubricated_bearing']),
      e.recipes.createDeploying(inter, [inter, 'kubejs:redstone_cable'])
  	]).transitionalItem(inter).loops(2)

    inter = 'kubejs:incomplete_turbine_rotor'
	  e.recipes.create.sequenced_assembly([
		  Item.of('pneumaticcraft:turbine_rotor').withChance(90.0),
      Item.of('pneumaticcraft:turbine_blade').withChance(2.0),
      Item.of('pneumaticcraft:plastic').withChance(2.0),
      Item.of('create:propeller').withChance(1.0),
      Item.of('create:whisk').withChance(1.0),
      Item.of('kubejs:wrought_iron_ingot').withChance(2.0),
      Item.of('kubejs:lubricated_bearing').withChance(2.0)
	  ], 'kubejs:lubricated_bearing', [
		  e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:turbine_blade']),
		  e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:turbine_blade']),
      e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:turbine_blade'])
  	]).transitionalItem(inter).loops(1)

    e.recipes.createDeploying('pneumaticcraft:pressure_gauge', ['create:brass_sheet', 'pneumaticcraft:ingot_iron_compressed'])

    inter = 'kubejs:incomplete_pcb'
    e.recipes.create.sequenced_assembly([
      Item.of('pneumaticcraft:printed_circuit_board').withChance(16.0)
    ], 'pneumaticcraft:unassembled_pcb', [
      e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:capacitor']),
      e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:transistor']),
      e.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
    ]).transitionalItem(inter).loops(3)

    inter = 'kubejs:incomplete_pneumatic_cylinder'
	  e.recipes.create.sequenced_assembly([
		  Item.of('pneumaticcraft:pneumatic_cylinder').withChance(90.0),
      Item.of('pneumaticcraft:plastic').withChance(5.0),
      Item.of('pneumaticcraft:cannon_barrel').withChance(1.0),
      Item.of('pneumaticcraft:high_pressure_plate').withChance(2.0),
      Item.of('pneumaticcraft:carbon_steel_rod').withChance(2.0),
	  ], 'pneumaticcraft:cannon_barrel', [
		  e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:plastic']),
      e.recipes.createPressing(inter,inter),
      e.recipes.createFilling(inter, [inter, Fluid.of('pneumaticcraft:lubricant', 500)]),
      e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:ingot_iron_compressed'])
  	]).transitionalItem(inter).loops(1)

    e.custom({
      "type": "pneumaticcraft:thermo_plant",
      "air_use_multiplier": 1,
      "exothermic": true,
      "fluid_input": {
        "type": "pneumaticcraft:fluid",
        "amount": 300,
        "tag": "forge:kerosene"
      },
      "item_input": {
          "type": "pneumaticcraft:stacked_item",
          "count": 4,
          "item": 'compressedcreativity:brass_gilded_lapis_lazuli'
      },
      "item_output": {
        "item": 'pneumaticcraft:upgrade_matrix'
      },
      "pressure": 3.0,
      "speed": 0.75,
      "temperature": {
          "min_temp": 273,
          "max_temp": 323
        }
    })

    e.custom({
      "type": "pneumaticcraft:thermo_plant",
      "air_use_multiplier": 1.2,
      "exothermic": false,
      "fluid_input": {
        "type": "pneumaticcraft:fluid",
        "amount": 200,
        "fluid": "kubejs:ethylene"
      },
      "item_input": {
          "item": "kubejs:plasticizer"
      },
      "fluid_output": {
        "type": "pneumaticcraft:fluid",
        "amount": 500,
        "fluid": "kubejs:dirty_plastic"
      },
      "pressure": 4.0,
      "speed": 0.75,
      "temperature": {
          "min_temp": 473
        }
    })

    e.custom({
      "type": "estrogen:centrifuging",
      "ingredients": [
        {
          "amount": 1,
          "fluid": "kubejs:dirty_plastic"
        }
      ],
      "results": [
        {
          "amount": 1,
          "fluid": "pneumaticcraft:plastic"
        }
      ]
    })

    //equipment

    inter = 'kubejs:incomplete_memory_stick'
	  e.recipes.create.sequenced_assembly([
		  Item.of('pneumaticcraft:memory_stick').withChance(90.0),
      Item.of('pneumaticcraft:failed_pcb').withChance(2.0),
      Item.of('pneumaticcraft:plastic').withChance(2.0),
      Item.of('minecraft:gold_ingot').withChance(2.0),
      Item.of('kubejs:unpolished_diamond').withChance(2.0),
      Item.of('create:crushed_raw_gold').withChance(2.0)
	  ], 'kubejs:logic_circuit', [
		  e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:plastic']),
		  e.recipes.createDeploying(inter, [inter, 'minecraft:gold_ingot']),
      e.recipes.createDeploying(inter, [inter, 'minecraft:diamond'])
  	]).transitionalItem(inter).loops(3)

    e.shaped('pneumaticcraft:air_canister', [ 
      ' AT', 
      'P P',
      'P P'
      ], {
        P: 'kubejs:high_pressure_plate',
        A: 'pneumaticcraft:pressure_tube',
        T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:air_canister')

    e.shaped('pneumaticcraft:reinforced_air_canister', [ 
      ' AT', 
      'PCP',
      'P P'
      ], {
        P: 'kubejs:high_pressure_plate',
        A: 'pneumaticcraft:advanced_pressure_tube',
        C: 'pneumaticcraft:air_canister',
        T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:reinforced_air_canister')

    e.shaped('pneumaticcraft:pneumatic_wrench', [ 
      'AIB', 
      'I T'
      ], {
        A: 'pneumaticcraft:air_canister',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'pneumaticcraft:pressure_tube',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:pneumatic_wrench')

    e.shaped('pneumaticcraft:camo_applicator', [ 
      'AIB', 
      'I T'
      ], {
        A: 'pneumaticcraft:air_canister',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'minecraft:lapis_lazuli',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:camo_applicator')

    e.shaped('pneumaticcraft:logistics_configurator', [ 
      'AIB', 
      'I T'
      ], {
        A: 'pneumaticcraft:air_canister',
        I: 'pneumaticcraft:ingot_iron_compressed',
        B: 'pneumaticcraft:logistics_core',
        T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:logistics_configurator')

    //resources

    e.custom({
      "type": "createdieselgenerators:basin_fermenting",
      "ingredients": [
        {
          "tag": "forge:fermentable"
        },
        {
          "fluid": "pneumaticcraft:yeast_culture",
          "amount": 100
        }
      ],
      "processingTime": 400,
      "results": [
        {
          "fluid": "createdieselgenerators:ethanol",
          "amount": 200
        }
      ]
    })

    e.custom({
      "type": "createdieselgenerators:basin_fermenting",
      "ingredients": [
        {
          "item": "minecraft:spider_eye"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "fluid": "pneumaticcraft:yeast_culture",
          "amount": 50
        }
      ],
      "processingTime": 200,
      "results": [
        {
          "fluid": "createdieselgenerators:ethanol",
          "amount": 100
        },
        {
          "item": 'minecraft:fermented_spider_eye'
        }
      ]
    })

    e.custom({
    "type": "pneumaticcraft:thermo_plant",
    "air_use_multiplier": 1,
    "exothermic": false,
    "item_input": {
        "tag": "forge:seeds"
    },
    "fluid_output": {
      "amount": 50,
      "fluid": 'createaddition:seed_oil'
    },
    "pressure": 2.0,
    "speed": 0.75,
    "temperature": {
        "min_temp": 333,
        "max_temp": 373
      }
    })

    e.custom({
      "type": "pneumaticcraft:thermo_plant",
      "air_use_multiplier": 1,
      "exothermic": false,
      "item_input": {
          "tag": "forge:crops"
      },
      "fluid_output": {
        "amount": 50,
        "fluid": 'createdieselgenerators:plant_oil'
      },
      "pressure": 2.0,
      "speed": 0.75,
      "temperature": {
          "min_temp": 333,
          "max_temp": 373
        }
      })

    e.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
			{
        "type": "pneumaticcraft:stacked_item",
        "count": 2,
			  "item": "pneumaticcraft:plastic"
			},
      {
			"item": "create:copper_sheet"
			},
			{
        "type": "pneumaticcraft:stacked_item",
        "item": "kubejs:redstone_cable",
        "count": 2
			},
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 6,
        "item": "createaddition:electrum_wire"
      },
      {
        "item": "minecraft:quartz"
      },
		],
		"pressure": 2,
		"results": [
			{
			"item": "pneumaticcraft:empty_pcb",
			}
		]
	})

  e.custom({
    "type": "pneumaticcraft:fluid_mixer",
    "fluid_output": {
      "amount": 50,
      "fluid": "pneumaticcraft:etching_acid"
    },
    "input1": {
      "type": "pneumaticcraft:fluid",
      "amount": 25,
      "fluid": "pneumaticcraft:plastic"
    },
    "input2": {
      "type": "pneumaticcraft:fluid",
      "amount": 25,
      "fluid": "kubejs:sulfur"
    },
    "pressure": 2.0,
    "time": 200
  })

  e.custom({
    "type": "pneumaticcraft:refinery",
    "input": {
      "type": "pneumaticcraft:fluid",
      "amount": 10,
      "tag": "forge:crude_oil"
    },
    "results": [
      {
        "amount": 4,
        "fluid": "pneumaticcraft:diesel"
      },
      {
        "amount": 2,
        "fluid": "pneumaticcraft:lpg"
      }
    ],
    "temperature": {
      "min_temp": 423,
      "max_temp": 673
    }
  })

  e.custom({
    "type": "pneumaticcraft:refinery",
    "input": {
      "type": "pneumaticcraft:fluid",
      "amount": 10,
      "tag": "forge:crude_oil"
    },
    "results": [
      {
        "amount": 2,
        "fluid": "pneumaticcraft:diesel"
      },
      {
        "amount": 3,
        "fluid": "pneumaticcraft:kerosene"
      },
      {
        "amount": 2,
        "fluid": "pneumaticcraft:lpg"
      }
    ],
    "temperature": {
      "min_temp": 423,
      "max_temp": 673
    }
  })

  e.custom({
    "type": "pneumaticcraft:refinery",
    "input": {
      "type": "pneumaticcraft:fluid",
      "amount": 10,
      "tag": "forge:crude_oil"
    },
    "results": [
      {
        "amount": 2,
        "fluid": "pneumaticcraft:diesel"
      },
      {
        "amount": 3,
        "fluid": "pneumaticcraft:kerosene"
      },
      {
        "amount": 3,
        "fluid": "pneumaticcraft:gasoline"
      },
      {
        "amount": 2,
        "fluid": "pneumaticcraft:lpg"
      }
    ],
    "temperature": {
      "min_temp": 423,
      "max_temp": 673
    }
  })

  e.custom({
    "type": "pneumaticcraft:refinery",
    "input": {
      "type": "pneumaticcraft:fluid",
      "amount": 10,
      "fluid": "pneumaticcraft:lpg"
    },
    "results": [
      {
        "amount": 7,
        "fluid": "kubejs:ethylene"
      },
      {
        "amount": 2,
        "fluid": "createdieselgenerators:crude_oil"
      },
      {
        "amount": 1,
        "fluid": "kubejs:slag_runoff"
      }
    ],
    "temperature": {
      "min_temp": 473,
      "max_temp": 673
    }
  })

  //computer

  e.custom({
    "type": "computercraft:computer_upgrade",
    "category": "redstone",
    "key": {
      "G": {"item": "create:golden_sheet"},
      "C": {"item": "computercraft:computer_normal"},
      "P": {"item": "pneumaticcraft:printed_circuit_board"},
      "I": {"item": 'compressedcreativity:compressed_iron_casing'},
      "T": {"tag": 'ico:tool/screwdriver'},
    },
    "pattern": [
      "PTP",
      "GCG",
      "GIG"],
    "result": {"item": "computercraft:computer_advanced"},
    "show_notification": true
  })

  e.shaped('2x computercraft:monitor_advanced', [
		'RST',
		'SDS'
	], {
		R: 'pneumaticcraft:capacitor',
		D: 'kubejs:oled_display',
		S: 'create:golden_sheet',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:monitor_advanced')

  //random

  e.recipes.create.mixing('pneumaticcraft:sourdough', ['create:wheat_flour', Fluid.of('pneumaticcraft:yeast_culture', 150)])

})